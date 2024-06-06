"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuItem {
  name: string;
  href?: string;
  dropdown?: boolean;
  items?: MenuItem[];
}

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Categories",
      dropdown: true,
      items: [
        { name: "Marketing & Sales", href: "#" },
        { name: "Design & Creative", href: "#" },
        { name: "Social & Community", href: "#" },
        { name: "Engineering & Development", href: "#" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full px-8 text-gray-700 bg-gray-50 border">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            logo
          </a>
          <nav className="ml-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul className="flex flex-col rounded-lg bg-gray-50 md:flex-row md:mt-0 text-base font-medium md:space-x-6 md:rtl:space-x-reverse">
                  {menuItems.map((item, index) => (
                    <li key={index} className={item.dropdown ? "relative" : ""}>
                      {item.dropdown ? (
                        <>
                          <button
                            id="dropdownNavbarLink"
                            onClick={toggleDropdown}
                            className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100"
                          >
                            {item.name}
                            <svg
                              className="w-3.5 h-3.5 ml-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>
                          {isDropdownOpen && (
                            <div
                              id="dropdownNavbar"
                              className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                            >
                              <ul className="py-2 text-base font-medium text-gray-700">
                                {item.items?.map((dropdownItem, index) => (
                                  <li key={index}>
                                    <a
                                      href={dropdownItem.href}
                                      className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                      {dropdownItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={item.href!} legacyBehavior>
                          <a className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">
                            {item.name}
                          </a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <div className="relative flex items-center max-w-md mx-auto overflow-hidden text-center rounded-full border">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
              data-primary="indigo-800"
            />
          </div>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="/signin"
            className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            data-rounded="rounded-md"
            data-primary="indigo-600"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
