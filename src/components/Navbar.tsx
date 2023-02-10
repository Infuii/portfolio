import React from "react";
import { useTheme } from "../hook/theme";

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between w-screen h-12 items-center">
        <div className="flex text-2xl">Ayaan Rao</div>
        <div className="flex space-x-8 dark:text-white mr-6">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Misc</a>
          <button onClick={() => toggleTheme()}>Theme</button>
        </div>
      </div>
    </>
  );
}
