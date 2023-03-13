import * as React from "react";

export function SearchModal({ closeSearchModal, searchResult }) {
  const expandCollapibles = (id) => {
    document.querySelector(id).classList.add("show");
    const element = document.querySelector(`[data-bs-target = "${id}"]`);
    element.classList.remove("collapsed");
    element.setAttribute("aria-expanded", true);

    // goToAnchor(id);
  };

  return (
    <div
      className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-[#4444444d]"
      // onkeydown={() => closeSearchModal()}
    >
      <div
        className="z-20 w-screen h-screen bg-transparent absolute"
        // @click="emit('closeSearchModal')"
      ></div>
      <div className="modal-dialog relative sm:w-[300px] md:w-[500px] pointer-events-none modal-lg">
        <div className="modal-content z-30 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[white] bg-clip-padding rounded-md outline-none">
          <div className="modal-header flex flex-shrink-0 items-center justify-between px-4 py-2">
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="input-group relative flex flex-wrap items-stretch w-full rounded-lg">
                  <span
                    className="input-group-text flex items-center pr-3 py-2 text-base font-normal text-gray-600 text-center whitespace-nowrap rounded"
                    id="basic-addon2"
                  >
                    <i className="ri-search-line text-gray-400"></i>
                  </span>
                  <input
                    v-model="searchQuery"
                    // @keydown="atPress($event)"
                    ref="searchQueryRef"
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-4/6 px-3 py-1 text-base text-body-2 font-normal text-gray-700 bg-transparent bg-clip-padding ease-in-out m-0 focus:outline-0 focus:shadow-none"
                    placeholder="جستجو"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body max-h-[400px] overflow-y-auto relative px-4 py-2 text-gray-500">
            <ul v-if="searchResult?.length > 0">
              {searchResult.map((element, index) => {
                return (
                  <li
                    key={element + index}
                    className="cursor-pointer rounded-lg"
                    data-bs-target={element.id}
                    onClick={() => expandCollapibles(element.id)}
                    // @mouseenter="emit('changeSelectedOnHover', element.id)"
                  >
                    <a
                      type="button"
                      className="flex transition duration-1500 ease-in-out rounded-lg"
                      // :className="{ 'result--focus': element.focus }"
                    >
                      <button className="w-full p-2 flex items-center pointer-events-auto">
                        <div className="w-[90%] pointer-events-none text-right">
                          <div>
                            <span className="text-gray-500 text-caption-1-bold">
                              {element.title}
                            </span>
                            <span className="text-gray-300"> __ </span>
                            <span className="text-gray-300 text-caption-1">
                              {element.subTitle}
                            </span>
                          </div>
                          <p
                            className="text-caption-1 truncate max-w-full text-gray-100"
                            // :className="element.focus ? 'block' : 'hidden'"
                          >
                            {element.description}
                          </p>
                        </div>

                        <svg
                          className="rotate-180 mr-auto fill-gray-300"
                          // style="width: 12px; height: 12px"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 5a5 5 0 0 1 0 10 1 1 0 0 1 0-2 3 3 0 0 0 0-6l-6.586-.007L6.45 9.528a1 1 0 0 1-1.414 1.414L.793 6.7a.997.997 0 0 1 0-1.414l4.243-4.243A1 1 0 0 1 6.45 2.457L3.914 4.993z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex p-2 bg-gray-50 rounded-b-md">
            <div className="text-gray-300 text-caption-1 flex items-center">
              نویگیت
              <i className="ri-arrow-down-line"></i>
              <i className="ri-arrow-up-line"></i>
            </div>
            <div className="text-gray-300 text-caption-1 flex items-center mr-4">
              برو
              <svg
                className="rotate-180 fill-gray-300 mr-1"
                // style="width: 12px; height: 12px"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 5a5 5 0 0 1 0 10 1 1 0 0 1 0-2 3 3 0 0 0 0-6l-6.586-.007L6.45 9.528a1 1 0 0 1-1.414 1.414L.793 6.7a.997.997 0 0 1 0-1.414l4.243-4.243A1 1 0 0 1 6.45 2.457L3.914 4.993z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
