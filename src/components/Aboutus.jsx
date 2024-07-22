import React from 'react';
import sampleImage from '../images/About.png'; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center p-8 bg-white">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 p-4">
        <img src={sampleImage} alt="About Us" className="w-full h-auto object-cover" />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-4 relative inline-block after:content-[''] after:block after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#6C74CB]">
          About Us
        </h1>
        <p className="text-lg md:text-2xl">
          Domain names serve to identify Internet resources, such as computers, networks, and services, with a text-based label that is easier to memorize than the numerical addresses used in the Internet protocols. A domain name may represent entire collections of such resources or individual instances. Individual Internet host computers use domain names as host identifiers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
