import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:px-36 text-left w-full mt-10 ">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div>
          <img className="w-[200px]" src={assets.logo_1_white} alt="logo" />
          <p className=" mt-6 text-center md:text-left text-sm text-white/80">
            QT-WORLD is dedicated to revive the geek in you and to provide a
            great battle ground for programmers who dream of making it big in
            the world of programming. QT-WORLD, a Directi initiative is a
            website that helps in improving coding skills in many programming
            languages.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us : <span className=" text-white">admin@qt-world.com</span> | <span className=" text-white">info@qt-world.com</span>  </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <p className="text-white/60 py-4 text-center text-xs md:text-sm ">
        Copyright 2025 @ QTWORLD.All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
