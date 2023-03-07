export function Navbar() {
  return (
      <ul className="hidden lg:flex justify-end py-5 pl-[4%]">
        <li className="mr-6">
          <a className="text-body-2 font-medium hover:text-gray-800" href="#">
            مستندات وندار
          </a>
        </li>
        <li className="mr-6">
          <a className="text-body-2 font-medium hover:text-gray-800" href="#">
            پشتیبانی
          </a>
        </li>
        <li className="mr-6">
          <a className="text-body-2 font-medium hover:text-gray-800" href="#">
            ورود
          </a>
        </li>
      </ul>
  );
}
