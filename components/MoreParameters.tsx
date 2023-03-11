import * as React from "react";
import { v4 as uuid } from "uuid";

export function MoreParameters({ title, children, details, importantInfo }) {
  const id = "a" + uuid().replaceAll("-", "");
  const idTag = "#" + id;

  return (
    <div className="accordion-attr pl-6" id="accordion-attr">
      <div className="accordion-item bg-white">
        <p
          className="accordion-header mb-0 border-t border-gray-200"
          id={"heading" + id}
        >
          <button
            className="relative ltr flex items-center w-full py-4 px-5 text-gray-700
         text-left bg-white border-0 rounded-none transition text-body-1-bold focus:outline-none"
            type="button"
            aria-expanded="false"
            data-te-collapse-init
            data-te-target={idTag}
            aria-controls={id}
          >
            <i
              className="ri-arrow-right-s-line"
            ></i>
            {title}

            <span
              v-if="importantInfo"
              className="text-orange-400 uppercase text-caption-2 mx-1 mt-1"
            >
              {importantInfo}
            </span>
            <span
              v-if="details"
              className="text-gray-400 text-caption-2 ml-1 mt-1"
            >
              {details}
            </span>
          </button>
        </p>
        <div
          id={id}
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby={"heading" + id}
        >
          <div className="accordion-body py-4 px-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
