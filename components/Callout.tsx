import * as React from "react";

export function Callout({ title, children, type }) {
  const TYPE_MAP = {
    note: {
      icon: "ri-information-line",
      iconColor: "text-gray-500",
    },
    warning: {
      icon: "ri-alert-line",
      iconColor: "text-orange-400",
    },
    check: {
      icon: "ri-checkbox-line",
      iconColor: "text-gray-500",
    },
    error: {
      icon: "ri-close-circle-line",
      iconColor: "text-orange-400",
    },
  };

  return (
    <div className="callout text-gray-800 bg-gray-50 p-3 my-3 border border-response-toolbar rounded-md">
      <div className="flex content">
        <div className="flex">
          <i
            className={
              TYPE_MAP[type].icon + " ml-2 " + TYPE_MAP[type].iconColor
            }
          ></i>
          <div className="flex flex-col">
            <strong v-if="title">{title}</strong>
            {children}
          </div>
        </div>
      </div>
      <style jsx>
        {`
         
        `}
      </style>
    </div>
  );
}
