"use client";
import { Link } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollHandler = () => {
    let y = window.scrollY;
    y > 200
      ? (document.querySelector(".btn-up").style.display = "grid")
      : (document.querySelector(".btn-up").style.display = "none");
  };
  if (typeof window !== "undefined")
    window.addEventListener("scroll", scrollHandler);
  return (
    <button className="btn-up max-w-6xl fixed bottom-0 w-full hidden z-20">
      <Link
        className="absolute right-5 bottom-5 mr-2 hover:text-accent hover:scale-125 transition-all uppercase "
        to="Główna"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-52}
        duration={300}
      >
        <FaArrowAltCircleUp
          size={32}
          className="fill-light-accent-2 outline-1 dark:fill-light-accent-2 drop-shadow-[0_0_6px_var(--light-text)] dark:drop-shadow-[0_0_6px_var(--dark-bkg)]"
        />
      </Link>
    </button>
  );
};

export default BackToTop;
