import React from "react";
import Head from "next/head";
import Link from "next/link";

import { SideNav, TableOfContents, TopNav } from "../components";

import "prismjs";
// Import other Prism themes here
import "prismjs/components/prism-bash.min";
import "prismjs/themes/prism.css";

import "../public/globals.css";

import type { AppProps } from "next/app";
import type { MarkdocNextJsPageProps } from "@markdoc/next.js";

const TITLE = "Markdoc";
const DESCRIPTION = "A powerful, flexible, Markdown-based authoring framework";

function collectHeadings(node, sections = []) {
  if (node && node.content) {
    const contentNode = JSON.parse(node.content);

    console.log("node:", contentNode);

    if (node.title) {
      const title = node.title;
      const level = node.level;
      const id = node.id;

      if (typeof title === "string") {
        console.log("att:", contentNode.attributes, title);

        sections.push({
          ...contentNode.attributes,
          title,
          level,
          id,
        });
      }
    }

    // if (["h1", "h2", "h3"].includes(contentNode.name)) {
    //   const title = contentNode.children[0];

    //   if (typeof title === "string") {
    //     console.log("att:", contentNode.attributes);

    //     sections.push({
    //       ...contentNode.attributes,
    //       title,
    //     });
    //   }
    // }

    if (contentNode?.children) {
      for (const child of contentNode.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps;

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  let sideMenu = [];

  pageProps?.docs.forEach((element) => {
    const markdoc = element;

    let title = TITLE;
    let description = DESCRIPTION;
    let level = 1;
    let id = null;
    if (markdoc) {
      title = markdoc.title ?? null;
      description = markdoc.description ?? null;
      id = markdoc.idvalue ?? null;
      level = markdoc.level ?? null;
    }
    console.log(id);
    

    const toc = markdoc?.content ? collectHeadings(markdoc) : [];
    sideMenu.push(toc[0]);

  });

  return (
    <>
      <Head>
        <title>Vandar API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content="vandar api" />
        <meta name="description" content="description" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TopNav>
        <Link href="/docs">Docs</Link>
      </TopNav> */}
      <div className="page">
        {/* <SideNav /> */}
        <TableOfContents toc={sideMenu} />
        <main className="flex column">
          <Component {...pageProps} />
        </main>
      </div>
      <style jsx>
        {`
          .page {
          }
          main {
            padding-right: 300px;

            overflow: auto;
            height: calc(100vh - var(--top-nav-height));
            flex-grow: 1;
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
}
