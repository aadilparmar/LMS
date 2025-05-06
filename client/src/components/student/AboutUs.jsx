import React from "react";
import FounderProfileCard from "./FounderProfileCard";

const AboutUs = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-cyan-300/70">
      <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-8">
        <h4 className="text-3xl font-bold text-black-500">About Us</h4>
        <p className="mt-4 text-gray-700 text-base">
          QT-WORLD is dedicated to revive the geek in you and to provide a great
          battle ground for programmers who dream of making it big in the world
          of programming. QT-WORLD, a Directi initiative is a website that helps
          in improving coding skills in many programming languages
        </p>

        <h4 className="text-3xl font-bold text-black-500 pt-3">Our Vision </h4>
        <p className="mt-2 text-gray-700 text-base">
          At QT-WORLD we aim to create a global community that believes in
          friendly competition and consistent learning. QT-WORLD works on the
          principle of providing everyone with easy to share strategies, and
          useful tips in the form of tutorials, resources, etc
        </p>
      
        <p className="mt-3 text-gray-700 text-base">
          QT-WORLD also has an expert team of freelancers that bake up new
          problems and moderates forums. We provide programmers with the
          opportunity to benchmark their talent against peers. QT-WORLD is where
          coders compete with each other to develop their individual skills on
          software solutions.
        </p>
        <h4 className="text-3xl font-bold text-black-500 pt-3 ">Our Founder</h4>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <FounderProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
