import React from "react";
import { useTheme } from "../hook/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faGitSquare,
  faHtml5,
  faInstagram,
  faJsSquare,
  faLinkedin,
  faReact,
  faSnapchat,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between w-screen h-12 items-center">
        <div className="flex text-2xl space-x-8 dark:text-white mr-6">Ayaan Rao</div>

        <div className="flex space-x-8 dark:text-white mr-6">

          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Misc</a>
          <button onClick={() => toggleTheme()}>Theme</button>
          
        </div>
      <div className="flex space-x-8 mr-6">
        <FontAwesomeIcon className="text-white"icon={faInstagram} />
        <FontAwesomeIcon className="text-white"icon={faSnapchat} />
        <FontAwesomeIcon className="text-white"icon={faYoutube} />
        <FontAwesomeIcon className="text-white"icon={faLinkedin} />
        <FontAwesomeIcon className="text-white"icon={faGitSquare} />
      </div>
      
      </div>
      
    </>
  );
}
