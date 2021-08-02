import { FC, ReactElement } from "react";
import TempLogoFile from "../../core/MainLogoTemp";
import NavButtons from "../NavButtions";
import NavLinks from "../NavLinks";

// interface HeaderProps {
//   links: string[];
// }

const testLinks = [
  { text: "Home", href: "/" },
  { text: "Schedule", href: "/schedule" },
  { text: "Athletes", href: "/athletes" },
  { text: "Rules", href: "/news" },
  { text: "Contact us", href: "/contact-us" },
];

const Header: FC = (): ReactElement => {
  return (
    <header className="w-full z-50 fixed top-0 shadow-md px-8 text-gray-700 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <a
          href="#_"
          className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
        >
          <span className="text-xl font-black leading-none text-gray-900 select-none logo">
            <span className="text-sky-600 ml-4">{/* <TempLogoFile icon="main-logo" /> */}</span>
            USVI Sports Comission
          </span>
        </a>
        <div className="relative flex flex-col md:flex-row">
          <NavLinks links={testLinks} />
          <NavButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
