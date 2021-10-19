import { useState, useEffect } from "react";
import "../styles/output.css";
import logo from "../images/phone-logo.png";
import ham from "../images/ham.png";
import { navAnimation } from "../animations";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    navAnimation();
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between pt-3 mb-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <img src={logo} alt="logo" className="pl-3" />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={ham} alt="ham" className="navLis" />
            </button>
          </div>
          <div
            className={
              "sm:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col cursor-pointer w-48 bg-opacity-50 sm:ml-auto sm:flex-row sm:w-auto sm:bg-white ">
              <li className="navLis text-xl text-gray-600 hover:text-newColor cursor-pointer px-3 py-2 flex items-center ml-7">
                Home
              </li>
              <li className="navLis text-xl cursor-pointer text-gray-600 hover:text-newColor px-3 py-2 flex items-center ml-7 lg:ml-24">
                Product
              </li>
              <li className="navLis text-xl cursor-pointer text-gray-600 hover:text-newColor px-3 py-2 flex items-center  ml-7 lg:ml-24">
                FAQ
              </li>
              <li className="navLis text-xl cursor-pointer text-gray-600 hover:text-newColor px-3 py-2 flex items-center  ml-7 lg:ml-24">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
