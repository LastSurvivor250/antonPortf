"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useScrollEffect } from "@/hooks/useScroll";

const navLinks = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "Projects", route: "#projects" },
  { id: 3, name: "Testimonials", route: "#testimonials" },
  { id: 4, name: "Skills", route: "#skills" },
  { id: 5, name: "Contact", route: "#contact" },
];

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { isScrolling, transitionDuration } = useScrollEffect(200, 900);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav
      className={`w-full top-0 z-[99999] py-5 ${
        isScrolling
          ? `fixed bg-black shadow-lg transition duration-${transitionDuration}`
          : "relative"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
        <Link href={"#home"}>
          <h1 className="text-3xl text-[#87cbb9] font-bold">Portfolio</h1>
        </Link>

        <ul
          className={`flex gap-10 max-md:hidden ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="hover:underline hover:text-purple-500 transition duration-500"
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        <div
          className={`md:hidden text-3xl cursor-pointer ${
            isScrolling ? "text-purple-500" : "text-white"
          }`}
          onClick={handleOpenMobileMenu}
        >
          {openMobileMenu ? <MdClose /> : <FiMenu />}
        </div>

        {openMobileMenu && (
          <ul className="md:hidden bg-purple-500 absolute top-14 right-5 px-4 py-6 text-center rounded-md flex flex-col gap-3 shadow-md">
            {navLinks.map((link) => (
              <Link href={link.route} key={link.id}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
