import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:px-36 text-left w-full mt-10 ">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div>
          <img className="h-[75px] w-[75px]" src={assets.logo} alt="logo" />
          <p className=" mt-6 text-center md:text-left text-sm text-white/80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            numquam cupiditate quia earum quibusdam alias ullam similique
            provident soluta nihil pariatur, voluptate illo, totam labore
            delectus tempora laborum tempore minima.F
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div></div>
      </div>
      <p className="text-white/60 py-4 text-center text-xs md:text-sm ">Copyright 2025 @ QTWORLD.All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
