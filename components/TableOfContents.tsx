import React from "react";
import Link from "next/link";

import { SearchBox } from "../components";

export function TableOfContents({ childToParent, toc }) {
  const items = toc;
  // .filter(
  //   (item) => item.id && (item.level === 2 || item.level === 3)
  // );

  if (items.length <= 0) {
    return null;
  }

  return (
    <aside
      className="w-[220px] min-w-[220px] shadow-sm shadow-gray-400 fixed h-screen hidden lg:flex"
      aria-label="Sidebar"
    >
      <div className="h-screen w-full flex flex-col">
        <div className="p-3">
          {/* logo  */}
          <a href="/" className="flex items-center pr-2 mb-5">
            <img
              src="https://cdn.vandar.io/public/logos/typo.svg"
              className="h-5 ml-3 sm:h-6"
              alt="Vandar Logo"
            />
            <span className="self-center text-title-5-bold text-[#69b6e3] font-semibold whitespace-nowrap">
              API
            </span>
          </a>
          <SearchBox SearchToParent={() => childToParent()} />
        </div>

        <div className="sidebar-menu">
          <ul className="space-y-2 menu-list">
            {items.map((item, index) => {
              const href = item.id ? `#${item.id}` : null;
              const active =
                typeof window !== "undefined" && window.location.hash === href;
              return (
                <li
                  key={item.title + index}
                  className={[
                    active ? "active" : undefined,
                    item.level === 3 ? "pr-6" : undefined,
                    item.level === 2 ? "pr-3" : undefined,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.level !== 1 ? (
                    <Link
                      className="flex items-center text-base font-bold mt-1 text-gray-500 rounded-lg hover:text-gray-800"
                      href={href}
                    >
                      <span className="font-medium text-body-2 py-0.5">
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex">
                      <span className="font-medium w-full text-body-2 py-0.5">
                        {item.title}
                      </span>
                      <i className="mr-auto ri-lg ri-arrow-down-s-line text-gray-700"></i>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .menu-list {
            .active {
              @apply bg-primary-50 text-primary-500 rounded-lg w-full;
            }
          }
        `}
      </style>
    </aside>
  );
}
