import React from "react";
import logo from "../assets/icons/Logo.png";
import linkedin from "../assets/icons/github.png";
import github from "../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 bottom-0 left-0 w-full text-white">
      <div className="flex justify-center text-center">
        <div className="flex flex-row items-center justify-between md:flex-row">
          {/* Image */}
          <img src={logo} alt="" className="flex w-[8%] "/>
          {/* Container for Menus & Social*/}
          <div className="flex items-end md:items-center flex-1  mb-10 space-y-6 md:mb-0 md:space-y-0 text-grayishBlue">
            {/* Menus */}
            <div className="flex justify-center text-center mx-auto ">
              <p className="hover:text-blue-900">
                © Copyright Bruno Beltramone 2023
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-5 w-32 py-1">
              <a
                href="https://www.linkedin.com/in/beltramone-bruno/"
                target="_blank"
              >
                <img src={github} alt="" className="duration-200 ficon" />
              </a>
              <a href="https://github.com/BrunoBeltramone" target="_blank">
                <img src={linkedin} alt="" className="duration-200 ficon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
