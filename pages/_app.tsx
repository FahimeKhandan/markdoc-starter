import React from "react";
import Head from "next/head";
import Link from "next/link";

import { TableOfContents, Navbar } from "../components";

// import "prismjs";
// // Import other Prism themes here
// import "prismjs/components/prism-bash.min";
// import "prismjs/themes/prism.css";

import "../public/globals.scss";

// import * as te from 'tw-elements';
import { useEffect } from "react";

import "remixicon/fonts/remixicon.css";

import type { AppProps } from "next/app";
import type { MarkdocNextJsPageProps } from "@markdoc/next.js";

const TITLE = "Markdoc";
const DESCRIPTION = "A powerful, flexible, Markdown-based authoring framework";

function collectHeadings(node, sections = []) {
  if (node && node.content) {
    const contentNode = JSON.parse(node.content);

    if (node.title) {
      const title = node.title;
      const level = node.level;
      const id = node.id;

      if (typeof title === "string") {
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

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

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
      <div className="flex">
        {/* <SideNav /> */}
        <TableOfContents toc={sideMenu} />
        <main className="w-screen lg:pr-[220px]">
          <Navbar />
          <p className="mb-4 space-y-1 md:space-x-1 md:space-y-0">
            <a
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-collapse-init
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="button"
              data-te-collapse-init
              data-te-ripple-init
              data-te-ripple-color="light"
              data-te-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Button with data-te-target
            </button>
          </p>
          <div
            className="!visible hidden"
            id="collapseExample"
            data-te-collapse-item
          >
            <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>

          <Component {...pageProps} />
        </main>
      </div>

      <style jsx>{``}</style>
    </>
  );
}
