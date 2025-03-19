"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-lg h-[3.5rem]" : "bg-transparent h-[4rem]"
      }`}
    >
      <div className="container flex justify-between items-center w-full h-full px-4 md:px-8">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Pixology.svg"
            alt="Pixology Logo"
            width={130}
            height={40}
            className="transition-all duration-300"
          />
        </Link>

        <ul
          className={`absolute md:relative top-[3.4rem] right-0 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex items-center md:space-x-2 py-5 md:py-0 ${
            isOpen
              ? "flex flex-col space-y-5 animate-slideDown"
              : "hidden animate-slideUp md:visible"
          }`}
        >
          {["Home", "Services", "Features", "Portfolio", "Blog"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-black font-medium hover:bg-gray-100 md:hover:bg-primaryColor/20 hover:text-primaryColor transition duration-300 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button className="font-medium px-5 py-2 bg-primaryColor text-white rounded-md hover:bg-primaryColor/90 transition duration-300">
            Let&apos;s Talk
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-black"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
