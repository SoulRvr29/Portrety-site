"use client";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-scroll";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

const NavLi = ({ name, setMenuOpen }) => {
  return (
    <Link
      onClick={() => setMenuOpen(false)}
      to={name}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-60}
      duration={300}
      className=" transition-all hover:text-light-accent-2 cursor-pointera border-b-2 border-light-accent dark:border-dark-accent border-transparent dark:border-transparent cursor-pointer hover:border-light-accent-3 dark:hover:border-dark-accent-3 max-md:border-light-accent max-md:dark:border-dark-accent max-md:w-full text-center max-md:p-4 last:border-none max-md:hover:border-light-accent max-md:dark:hover:border-dark-accent max-md:hover:bg-light-accent-3 max-md:dark:hover:bg-dark-accent max-md:dark:bg-dark-bkg"
    >
      {name}
    </Link>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky z-10 opacity-95 top-0 p-3 text-xl  dark:bg-dark-bkg bg-light-text text-light-bkg dark:text-light-bkg ">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="font-bold font-pacifico max-md:pb-1">portrety.pl</div>

        <div className="flex items-center gap-4 max-sm:gap-2">
          <nav
            className={
              "main-nav flex justify-center items-center font-semibold gap-x-4 gap-y-1 flex-wrap max-md:hiddenn max-md:flex-col max-md:fixed max-md:top-0 max-md:left-0 max-md:w-screen max-md:bg-light-text max-md:gap-0 " +
              (menuOpen ? " nav-show" : " nav-hide")
            }
          >
            <NavLi setMenuOpen={setMenuOpen} name="Główna" />
            <NavLi setMenuOpen={setMenuOpen} name="Galeria" />
            <NavLi setMenuOpen={setMenuOpen} name="Cennik" />
            <NavLi setMenuOpen={setMenuOpen} name="Jak zamawiać" />
            <NavLi setMenuOpen={setMenuOpen} name="Kontakt" />
          </nav>
          <DarkModeToggle />
          {menuOpen ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="z-20 hidden max-md:grid h-10 w-10 place-content-center hover:brightness-150"
            >
              <IoIosClose size={60} />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="z-20 hidden max-md:grid h-10 w-10 place-content-center hover:brightness-150"
            >
              <IoIosMenu size={40} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
