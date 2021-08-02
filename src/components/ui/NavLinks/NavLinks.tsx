import { FC, ReactElement } from "react";
import Link, { LinkProps } from "../../core/Link";

interface INavLinksProps {
  links: LinkProps[];
}

const NavLinks: FC<INavLinksProps> = ({ links }) => {
  return (
    <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
      {links.map((link, idx) => (
        <Link key={idx} href={link.href} text={link.text} />
      ))}
    </nav>
  );
};

export default NavLinks;
