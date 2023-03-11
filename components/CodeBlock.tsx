import Prism from 'prismjs';

import * as React from 'react';

import copy from "copy-to-clipboard";

export function CodeBlock({children, 'data-language': language}) {
  const ref = React.useRef(null);
    const [copied, setCopied] = React.useState(false);

    React.useEffect(() => {
      if (ref.current) Prism.highlightElement(ref.current, false);
    }, [children]);

    React.useEffect(() => {
      if (copied) {
        copy(ref.current.innerText);
        const to = setTimeout(setCopied, 1000, false);
        return () => clearTimeout(to);
      }
    }, [copied]);

  return (
    <div className="fence-item">
      <div className="fence-toolbar relative">
        <span>title</span>
        <p className="ml-2 text-gray-300 text-caption-1">
        </p>
        <button
          //  class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
           data-te-toggle="tooltip"
           data-te-placement="top"
           data-te-ripple-init
           data-te-ripple-color="light"
           title="Tooltip on top"
          className="copy-btn relative ml-auto flex"
          onClick={() => setCopied(true)}
        >
          <i className="ri-clipboard-fill text-blue-200 ri-lg pointer-events-none"></i>
          {/* <div className="hide">
            برای کپی کلیک کنید!
          </div> */}
          {/* <div className="hidden hide absolute">کپی شد.</div> */}
        </button>
      
      </div>
      <div className={"fence-body bg-request-body"} aria-live="polite">
        <pre ref={ref} className={`language-${language} `}>
          {children}
        </pre>
      </div>
      <style jsx>
        {`
          /* Override Prism styles */
          .fence-body :global(pre[class*="language-"]) {
            overflow: unset;
            background: none;
          }
        `}
      </style>
    </div>
  );
}
