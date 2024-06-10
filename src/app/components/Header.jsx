"use client";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-scroll";

const NavLi = ({ name }) => {
  return (
    <Link
      to={name}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-52}
      duration={300}
      className="hover:brightness-150 transition-all cursor-pointera border-b-2 border-light-accent dark:border-dark-accent border-transparent dark:border-transparent cursor-pointer hover:border-light-accent-3 dark:hover:border-dark-accent-3"
    >
      {name}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky z-10 opacity-95 top-0 p-3 text-xl flex items-center justify-between dark:bg-dark-bkg bg-light-text text-light-bkg dark:text-dark-accent max-md:flex-col">
      <div className="font-bold font-pacifico max-md:pb-1">name/logo.pl</div>
      <nav className="main-nav flex justify-center items-center font-semibold gap-x-4 gap-y-1 flex-wrap max-md:text-base">
        <NavLi name="Główna" />
        <NavLi name="Galeria" />
        <NavLi name="Cennik" />
        <NavLi name="Jak zamawiać" />
        <NavLi name="Kontakt" />
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
