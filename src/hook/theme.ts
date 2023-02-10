import { useState } from "react";

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    return theme;
  }

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    //Initial theme
    return "dark";
  }
  return "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return { theme, toggleTheme };
};