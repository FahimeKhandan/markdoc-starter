import * as React from "react";
import { v4 as uuid } from "uuid";

const id = "a" + uuid().replaceAll("-", "");

export function ParameterPlus({ title, children }) {
  return (
    <div className="accordion-item my-4">
      <div className="accordion-header mb-0" id={"childAttHeading" + id}>
        <button
          className="relative flex border border-gray-100 text-caption-1-bold rounded-xl rounded-b-none items-center w-full py-1 px-5 text-gray-500 hover:text-gray-800 text-left bg-white transition focus:outline-none"
          type="button"
          data-te-collapse-init
          data-te-target={"#collapseChildAtt" + id}
          aria-controls={"collapseChildAtt" + id}
          aria-expanded="false"
        >
          <i className="ri-close-line ml-2 ri-lg transition"></i>
          {title}
        </button>
      </div>
      <div
        id={"collapseChildAtt" + id}
        className="accordion-collapse collapse collapseChildAtt"
        aria-labelledby={"childAttHeading" + id}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
