"use client";

import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="w-16 h-8 flex items-center dark:bg-gray-500 bg-teal-500 text-white cursor-pointer rounded-full p-1"
      onClick={() => {
        setTimeout(() => {
          setDarkMode(!darkMode);
        }, 200);
      }}      
    >
      <DarkModeIcon className="text-white w-4" />
      <div
        className="absolute bg-white dark:bg-black_282A36 w-6 h-6 rounded-full shadow-md transition-transform duration-700 ease-in-out"
        style={darkMode ? { transform: "translateX(0px)" } : { transform: "translateX(32px)" }}
      ></div>
      <LightModeIcon className="ml-auto text-yellow-400 w-4" />
    </div>
  );
};

export default ThemeToggle;
