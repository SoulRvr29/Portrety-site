import React from "react";
import { Element } from "react-scroll";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Gallery = () => {
  return (
    <Element name="Kontakt">
      <h2>Kontakt</h2>
      <div className="flex max-md:flex-col max-w-sm mx-auto justify-center text-3xl gap-8 p-8">
        <div className="flex items-center gap-2 border-2 rounded-xl py-2 px-3 border-light-text dark:border-dark-accent hover:bg-light-accent hover:text-light-accent-2 hover:border-light-accent-2 dark:hover:bg-dark-text dark:hover:text-dark-accent dark:hover:border-dark-accent transition-colors cursor-pointer ">
          <FaPhone size={50} />
          <p className="m-0 text-nowrap">574 511 037</p>
        </div>
        <div className="flex items-center gap-2 border-2 rounded-xl py-2 px-3 border-light-text dark:border-dark-accent hover:bg-light-accent hover:text-light-accent-2 hover:border-light-accent-2 dark:hover:bg-dark-text dark:hover:text-dark-accent dark:hover:border-dark-accent transition-colors cursor-pointer">
          <IoIosMail size={60} />
          jchudecka@op.pl
        </div>
      </div>
    </Element>
  );
};

export default Gallery;
