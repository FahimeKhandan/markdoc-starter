import Markdoc from '@markdoc/markdoc';
import React from 'react';
import fs from 'fs';
import glob from 'glob-promise';
import path from 'path';
import {nodes} from '@markdoc/markdoc';
import codeBlock from "../components/CodeBlock"

import Prism from 'prismjs';


export const getStaticPaths = async () => {
  // Our Markdown files are stored in the posts/ directory
  const POSTS_DIR = path.join(process.cwd(), 'posts');

  // Find all Markdown files in the posts/ directory
  // With The glob-promise library, we can use a one liner to find our Markdown files
  const postPaths = await glob(path.join(POSTS_DIR, '**/*.md'));

  // For each filename, the slug is the filename without the .md extension
  const paths = postPaths.map((postPath) => {
    const slug = path.basename(postPath, path.extname(postPath));
    return { params: { slug } };
  });

  // Return the possible paths
  return { paths, fallback: false };
};


const fence = {
  render: 'Fence',
  // attributes: nodes.fence.attributes,
  
  attributes: {
    language: {
      type: String
    }
  }
};

const config = {
  nodes: {
    paragraph: {
      render: 'Paragraph',
    },
    fence
  },
};

export const getStaticProps = async (context) => {
  // Our Markdown files are stored in the posts/ directory
  const POSTS_DIR = path.join(process.cwd(), 'posts');

  // Generate the local Markdown path from the URL slug
  const {
    params: { slug },
  } = context;
  const fullPath = path.join(POSTS_DIR, slug + '.md');

  // Read the Markdown file contents
  const source = fs.readFileSync(fullPath, 'utf-8');

  // Use Markdoc to create a tree of tokens based on the Markdown file
  const ast = Markdoc.parse(source);

  // Create a renderable tree
  const content = JSON.stringify(Markdoc.transform(ast, config));

  // Return the content as a prop to the React component for now
  // We will render the content in the next section
  return {
    props: {
      content,
    },
  };
};

// Return our custom Paragraph component that adds custom Tailwind classes
const components = {
  Paragraph: ({ children }) => {
    return <p className="leading-relaxed mb-8 text-lg">{children}</p>;
  },
  Fence: ({ children , language}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) Prism.highlightElement(ref.current, false);
    }, [children]);
  
    return (
      <div className="code" aria-live="polite">
        <pre
          ref={ref}
          className={`language-${language}`}
        >
          {children}
        </pre>
        <style jsx>
          {`
            .code {
              position: relative;
            }
  
            /* Override Prism styles */
            .code :global(pre[class*='language-']) {
              text-shadow: none;
              border-radius: 4px;
            }
          `}
        </style>
      </div>
    );
  }
};

// Create a React component using Markdoc's React renderer and our list of custom components.
const BlogPostPage = (props) => {
  const { content } = props;
  const parsedContent = JSON.parse(content);

  return (
    <div>
      {Markdoc.renderers.react(parsedContent, React, {
        components,
      })}
    </div>
  );
};

export default BlogPostPage;
