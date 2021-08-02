import { useState } from "react";
import Link from "next/link";
export default function MainNav() {
  const testing = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "St. John", link: "/st-john" },
    { name: "St. Thomas", link: "/st-thomas" },
    { name: "St. Croix", link: "/st-croix" },
    { name: "Food", link: "/food" },
    { name: "Reviews", link: "/reviews" },
  ];
  const numOfLinksToShow = 9;

  return (
    <div className="flex sticky top-0 bg-white z-50 flex-col flex-wrap items-center justify-center py-5 border-t border-b border-gray-200 md:flex-row">
      <nav className="flex flex-wrap items-center text-base justify-evenly lg:w-4/5 m-auto ">
        {testing.map((item, idx) =>
          idx < numOfLinksToShow ? (
            <Link key={idx} href={item.link}>
              <a className="mx-2 font-semibold leading-6 text-gray-500 hover:text-gray-600">{item.name}</a>
            </Link>
          ) : null
        )}
      </nav>
    </div>
  );
}
