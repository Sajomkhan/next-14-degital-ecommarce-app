"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Explore", link: "/explore" },
  { title: "About", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Contact", link: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 shadow-sm px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" width={175} height={40} alt="logo" />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className={`text-gray-500 transition hover:underline ${
                      pathname == item.link ? "underline" : ""
                    }`}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryDeep"
                href="/"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primaryDeep sm:block"
                href="/"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* --------------------toggle---------------------- */}
            <label
              htmlFor="AcceptConditions"
              className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary"></span>

              <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
