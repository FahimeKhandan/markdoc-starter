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

const sortingArr = ["authentication", "cash-in"];

export const getStaticProps = async () => {
  // Find all Markdown files in the /docs directory
  const DOCS_DIR = path.join(process.cwd(), "docs");
  const docPaths = await glob(path.join(DOCS_DIR, "**/*main.md"));

  const afterSorting = docPaths.sort(function (a, b) {
    const branchA = path.dirname(a).slice(process.cwd().length + 6);
    const branchB = path.dirname(b).slice(process.cwd().length + 6);

    const branchASub = branchA.substring(
      0,
      branchA.includes("/") ? branchA.indexOf("/") : branchA.length
    );
    const branchBSub = branchB.substring(
      0,
      branchB.includes("/") ? branchB.indexOf("/") : branchB.length
    );

    let result =
      sortingArr.indexOf(branchASub) - sortingArr.indexOf(branchBSub);

    if (result === 0) result = -1;
    return result;
  });

  const docs = afterSorting?.map((docPath) => {
    const slug = path.basename(docPath, path.extname(docPath));
    const source = fs.readFileSync(docPath, "utf-8");

    const requestPath = path.dirname(docPath) + "/request.md";
    const responsePath = path.dirname(docPath) + "/response.md";
    const endpointPath = path.dirname(docPath) + "/endpoint.md";

    const sourceRequest = fs.existsSync(requestPath)
      ? fs.readFileSync(requestPath, "utf-8")
      : null;

    const sourceResponse = fs.existsSync(responsePath)
      ? fs.readFileSync(responsePath, "utf-8")
      : null;

    const sourceEndpoint = fs.existsSync(endpointPath)
      ? fs.readFileSync(endpointPath, "utf-8")
      : null;

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

    const astrequest = sourceRequest ? Markdoc.parse(sourceRequest) : null;
    const astResponse = sourceResponse ? Markdoc.parse(sourceResponse) : null;
    const astEndpoint = sourceEndpoint ? Markdoc.parse(sourceEndpoint) : null;

    // Create a renderable tree
    const content = JSON.stringify(Markdoc.transform(ast, config));

    const contentRequest = astrequest
      ? JSON.stringify(Markdoc.transform(astrequest, config))
      : null;

    const contentResponse = astResponse
      ? JSON.stringify(Markdoc.transform(astResponse, config))
      : null;

    const contentEndpoint = astEndpoint
      ? JSON.stringify(Markdoc.transform(astEndpoint, config))
      : null;

      // const id = id ?? 'dddd'

    return {
      title,
      id,
      level,
      description,
      slug,
      content,
      contentRequest,
      contentResponse,
      contentEndpoint,
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
        const parsedContentEndpoint = JSON.parse(doc.contentEndpoint);

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
                 {Markdoc.renderers.react(parsedContentEndpoint , React, {
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
