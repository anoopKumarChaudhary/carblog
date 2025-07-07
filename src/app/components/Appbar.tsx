"use client";

import React from "react";
import Link from "next/link";
import { Home, Youtube, Info, Phone } from "lucide-react";

const Appbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[3vw] h-20 w-full z-50 fixed top-0 bg-white dark:bg-black">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-[45px] md:h-[50px]" />
          <p className="ml-2 text-sm md:text-base font-bold dark:text-white">
            Sheer Driving Pleasure
          </p>
        </div>

        <ul className="hidden md:flex items-center list-none gap-4">
          {[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blog" },
            { name: "About", path: "/about" },
            { name: "Contact US", path: "/contact" },
          ].map((label, idx) => (
            <li
              key={idx}
              className="px-5 py-2 rounded-full hover:bg-[#313131] transition-all text-sm text-black dark:text-white"
            >
              <Link href={`${label.path}`}>{label.name}</Link>
            </li>
          ))}
          <li>
            <button className="bg-gray-400 text-black text-sm font-semibold px-6 py-2 rounded-full">
              Subscribe
            </button>
          </li>
        </ul>
      </div>

      <ul className="md:hidden flex fixed bottom-0 left-0 right-0 h-[60px] bg-black text-white z-50 justify-around items-center list-none">
        <li className="bg-white p-3 rounded-full hover:bg-[#313131] transition-all">
          <Link href="/">
            <Home className="text-black w-5 h-5" />
          </Link>
        </li>
        <li className="bg-white p-3 rounded-full hover:bg-[#313131] transition-all">
          <Link href="/blog">
            <Youtube className="text-black w-5 h-5" />
          </Link>
        </li>
        <li className="bg-white p-3 rounded-full hover:bg-[#313131] transition-all">
          <Link href="/about">
            <Info className="text-black w-5 h-5" />
          </Link>
        </li>
        <li className="bg-white p-3 rounded-full hover:bg-[#313131] transition-all">
          <Link href="/contact">
            <Phone className="text-black w-5 h-5" />
          </Link>
        </li>
        <li className="hidden">
          <button className="bg-gray-400 text-black px-6 py-2 rounded">
            Subscribe
          </button>
        </li>
      </ul>
    </>
  );
};

export default Appbar;
