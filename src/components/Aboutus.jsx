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
          A tool for generating PDF reports on domain data, including backlinks, social media presence, domain categories, and website screenshots. 
          Key Features:
- Analyzes backlinks, providing metrics and costs.
- Extracts social media stats with links and follower counts.
- Provides domain categorization, traffic, revenue, & keyword insights.
- Integrates Open Graph data for social media enhancement.
- Captures and includes live website screenshots in reports.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
