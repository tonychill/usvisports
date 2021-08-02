import { FC } from "react";

const NavButtons: FC = () => {
  return (
    <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
      <a href="#_" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
        Sign in
      </a>
      <a
        href="#_"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-400 border border-transparent rounded-md shadow-sm hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
      >
        Sign up
      </a>
    </div>
  );
};

export default NavButtons;
