import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faInstagram,
  faJsSquare,
  faMicrosoft,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import shop from "./shop.png"
export default function About() {
  return (
    <>
      <div>
        <div className="parents ">
          <div className="spin">
            <div className="side1">
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
            <div className="side2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="side3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="side4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="side5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="side6">
              <FontAwesomeIcon icon={faPython} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-white p-10 my-10 ml-10 h-screen">
          <h1 className="text-white">
            <span className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              ABOUT ME
            </span>
          </h1>
          <br />
          <hr></hr>
          <br />
          <p className="mb-2 font-bold text-gray-400 md:text-2xl">
            Hello there, my name is Ayaan Rao, I have been working on and off
            with a couple of projects.
          </p>
          <p className="mb-2 font-bold text-gray-400 md:text-2xl">
            I am fifteen years old, I have been working on and off with a couple
            of projects
          </p>
          <p className="mb-2 font-bold text-gray-400 md:text-2xl">
            Be sure to explore this portfolio more to learn more about me!
          </p>
        </div>
      </div>
      <div className="text-white p-10 my-10 ml-10 h-screen">
        <h1 className="text-white">
          <span className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            MY PROJECTS WITH 15TEDS
          </span>
        </h1>
        <br />
        <hr></hr>
        <br />
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="border text-center bg-gray-900 hover:my-1 scale-95">
            <h1 className="font-bold p-7">E-Commerce Store </h1>
            <img src={shop} alt="Logo" className="scale-75" />
            <h1>An app that functions similar to that of an actual e-commerce shop, you can buy anything with all of your money!</h1>
        </div>
          <div className="border text-center bg-gray-900 hover:my-1">
            <h1 className="font-bold p-7">Filtering App</h1>
            <h1>An app that functions similar to that of </h1>
          </div>
          <div className="border text-center bg-gray-900 hover:my-1">
            <h1 className="font-bold p-7">Filtering App</h1>
            <h1>An app that functions similar to that of </h1>
          </div>
          <div className="border text-center bg-gray-900 hover:my-1">
            <h1 className="font-bold p-7">Filtering App</h1>
            <h1>An app that functions similar to that of </h1>
          </div>
        </div>
      </div>
      <div className="text-white p-10 my-10 ml-10 h-screen">
        <h1 className="text-white">
          <span className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            CONTACT INFO
          </span>
        </h1>
        
        <br />
        <hr></hr>
        <br />
        <p className="mb-2 font-bold text-gray-400 md:text-2xl">
            So, what do you think? You can contact me at ayaanraoaaa@gmail.com
          </p>
          <p className="mb-2 font-bold text-gray-400 md:text-2xl">
            My inbox is always available, so you can contact me at any time
          </p>
        </div>
    </>
  );
}
