"use client";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
        ? true
        : false
      : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (darkMode) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      title={!darkMode ? "ciemny motyw" : "jasny motyw"}
      className="hover:brightness-150"
    >
      {darkMode ? (
        <MdDarkMode className="size-5 max-sm:size-6" />
      ) : (
        <MdLightMode className="size-5 max-sm:size-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
