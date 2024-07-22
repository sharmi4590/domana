import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#C7CCFF] p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-black text-3xl font-bold">
        LOGO
      </div>

      {/* Hamburger Icon */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links and Buttons */}
      <div className={`lg:flex lg:items-center lg:space-x-5 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="space-x-10 text-xl font-semibold text-black py-1 lg:py-0 lg:flex lg:space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#working" className="hover:underline">Working</a>
        </div>

        {/* Simple Buttons */}
        <div className="flex space-x-4 lg:space-x-4">
          <button className="px-4 py-2 text-xl font-semibold rounded bg-[#6C74CB] text-white">
            Sign Up
          </button>
          <button className="px-4 py-2 text-xl font-semibold rounded bg-white text-black">
            Login
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#6C74CB] transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <div className="p-8 flex flex-col items-center justify-center h-full space-y-6">
          <button onClick={toggleMenu} className="self-end text-white text-2xl">
            <FaTimes />
          </button>
          <a href="#home" className="text-white text-2xl font-semibold hover:underline" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-white text-2xl font-semibold hover:underline" onClick={toggleMenu}>About</a>
          <a href="#working" className="text-white text-2xl font-semibold hover:underline" onClick={toggleMenu}>Working</a>
          <button className="px-4 py-2 text-xl font-semibold rounded bg-white text-[#6C74CB]" onClick={toggleMenu}>
            Sign Up
          </button>
          <button className="px-4 py-2 text-xl font-semibold rounded bg-white text-[#6C74CB]" onClick={toggleMenu}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
