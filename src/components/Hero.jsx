import React from 'react';
import { FaGithub, FaGoogle, FaYoutube, FaLinkedin, FaFigma, FaDiscord } from 'react-icons/fa';
import sampleImage from '../images/Hero.png'; // Replace with your image path
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row flex-1 items-center justify-between p-4 bg-white">
        {/* Left Side - Text and Button */}
        <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-black">Domain</span>
            <span className="text-[#6C74CB]">Analyzer</span>
          </h1>
          <p className="mb-6 text-lg md:text-2xl"> DomainAnalyzer provides insightful data and analysis on various domains to help you make informed decisions.</p>
          <button className="flex items-center justify-center lg:justify-start px-6 py-3 bg-[#6C74CB] text-white font-semibold rounded text-lg md:text-2xl">
            Know More<GoArrowUpRight className="ml-2" />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 p-4">
          <img src={sampleImage} alt="Sample" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Static Logos and Names */}
      <div className="bg-gray-200 py-4">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 px-4">
          <div className="text-lg md:text-xl font-semibold mb-4 lg:mb-0">Mostly used Domain Names:</div>
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <FaGithub className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">GitHub</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaGoogle className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">Google</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaYoutube className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">YouTube</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">LinkedIn</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFigma className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">Figma</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDiscord className="text-2xl md:text-3xl" />
              <span className="text-lg md:text-xl font-semibold">Discord</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
