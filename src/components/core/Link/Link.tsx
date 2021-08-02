import { FC } from "react";
import NextLink from "next/link";

export interface LinkProps {
  href: string;
  text: string;
}

const Link: FC<LinkProps> = ({ href, text }) => {
  return (
    <NextLink href={href}>
      <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
        {text}
      </a>
    </NextLink>
  );
};

export default Link;
