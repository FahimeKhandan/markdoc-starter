import Link from "next/link";
import { format } from "date-fns";
import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import path from "path";
import Markdoc from "@markdoc/markdoc";
import React from "react";
const yaml = require("js-yaml");

import Prism from "prismjs";

// const parseMarkdocFrontmatter = (ast) => {
//   return ast.attributes.frontmatter
//     ? yaml.load(ast.attributes.frontmatter)
//     : {};
// };

const sortingArr = ["b", "a", "c"];

export const getStaticProps = async () => {
  // Find all Markdown files in the /docs directory
  const DOCS_DIR = path.join(process.cwd(), "docs");
  const docPaths = await glob(path.join(DOCS_DIR, "**/*main.md"));

  const afterSorting = docPaths.sort(function (a, b) {
    const brA = path.dirname(a).slice(process.cwd().length + 6);
    const brB = path.dirname(b).slice(process.cwd().length + 6);

    const brASub = brA.substring(
      0,
      brA.includes("/") ? brA.indexOf("/") : brA.length
    );
    const brBSub = brB.substring(
      0,
      brB.includes("/") ? brB.indexOf("/") : brB.length
    );

    let result = sortingArr.indexOf(brASub) - sortingArr.indexOf(brBSub);

    if (result === 0) result = -1;
    return result;
  });

  const docs = afterSorting?.map((docPath) => {
    const slug = path.basename(docPath, path.extname(docPath));
    const source = fs.readFileSync(docPath, "utf-8");

    const sourceRequest = fs.readFileSync(
      path.dirname(docPath) + "/request.md",
      "utf-8"
    );
    const sourceResponse = fs.readFileSync(
      path.dirname(docPath) + "/response.md",
      "utf-8"
    );

    // Use gray-matter to fetch the data between the `---` at the top of our Markdown files.
    const matterResult = matter(source);

    const { title, description, id, level } = matterResult.data;

    // Generate the local Markdown path from the URL slug
    // const {
    //   params: { slug },
    // } = context;
    const fullPath = path.join(DOCS_DIR, slug + ".md");

    // Read the Markdown file contents
    // const source = fs.readFileSync(fullPath, 'utf-8');

    // Use Markdoc to create a tree of tokens based on the Markdown file
    const ast = Markdoc.parse(source);
    const astrequest = Markdoc.parse(sourceRequest);
    const astResponse = Markdoc.parse(sourceResponse);

    // Create a renderable tree
    const content = JSON.stringify(Markdoc.transform(ast, config));
    const contentRequest = JSON.stringify(
      Markdoc.transform(astrequest, config)
    );
    const contentResponse = JSON.stringify(
      Markdoc.transform(astResponse, config)
    );

    return {
      title,
      id,
      level,
      description,
      slug,
      content,
      contentRequest,
      contentResponse,
    };
  });

  // Sort the docs by date
  // const sortedDocs = docs.sort((a, b) => b.date - a.date);
  // We need to format the dates into strings because Next.js expects the props to be serializable as JSON.
  const parsedDateDocs = docs.map((doc) => {
    return {
      ...doc,
      // date: format(doc.date, "MM/dd/yyyy"),
    };
  });
  return { props: { docs: parsedDateDocs } };
};

const fence = {
  render: "Fence",
  // attributes: nodes.fence.attributes,

  attributes: {
    language: {
      type: String,
    },
  },
};

const config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    fence,
  },
};

// Return our custom Paragraph component that adds custom Tailwind classes
const components = {
  Paragraph: ({ children }) => {
    return <p className="leading-relaxed mb-8 text-lg">{children}</p>;
  },
  Fence: ({ children, language }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) Prism.highlightElement(ref.current, false);
    }, [children]);

    return (
      <div className="code" aria-live="polite">
        <pre ref={ref} className={`language-${language}`}>
          {children}
        </pre>
        <style jsx>
          {`
            .code {
              position: relative;
              direction: ltr;
            }

            /* Override Prism styles */
            .code :global(pre[class*="language-"]) {
              text-shadow: none;
              border-radius: 4px;
            }
            :not(pre) > code[class*="language-"],
            pre[class*="language-"] {
              background: #f5f5f5;
            }
          `}
        </style>
      </div>
    );
  },
};

const Blog = (props) => {
  const { docs } = props;
  return (
    <div>
      {docs.map((doc, i) => {
        const parsedContent = JSON.parse(doc.content);
        const parsedContentRequest = JSON.parse(doc.contentRequest);
        const parsedContentResponse = JSON.parse(doc.contentResponse);

        return (
          <section key={i}>
            {/* <Link href={'/' + doc.slug}> */}
            <div className="sections">
              <div>
                <h1 id={doc.id}>{doc.title}</h1>

                {Markdoc.renderers.react(parsedContent, React, {
                  components,
                })}
              </div>
              <div>
                {Markdoc.renderers.react(parsedContentRequest, React, {
                  components,
                })}
                {Markdoc.renderers.react(parsedContentResponse, React, {
                  components,
                })}
              </div>
            </div>
          </section>
        );
      })}
      <style jsx>
        {`
          .sections {
            display: flex;
        `}
      </style>
    </div>
  );
};

export default Blog;
