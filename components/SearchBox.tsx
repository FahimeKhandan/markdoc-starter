export function SearchBox() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <a className="relative flex flex-wrap items-center w-full mb-2 border border-solid border-gray-200 rounded-lg bg-gray-50 duration-150 ease-in-out">
          <span
            className="input-group-text flex items-center pr-3 py-1 text-base font-normal text-gray-600 text-center whitespace-nowrap rounded"
            id="basic-addon2"
          >
            <i className="ri-search-line ri-sm text-gray-400"></i>
          </span>
          <span className="text-gray-400 text-caption-1 mr-2">جستجو</span>
          <span className="ltr ml-2 mr-auto border border-gray-100 px-1 rounded-md text-caption-1 text-gray-400">
            ctrl + /
          </span>
        </a>
      </div>
    </div>
  );
}
