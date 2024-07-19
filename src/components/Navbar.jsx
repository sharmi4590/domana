// Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav className="bg-[#C7CCFF] p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-black text-xl font-bold">
        LOGO
      </div>

      {/* Navigation Links */}
      <div className="space-x-4 text-black">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#working" className="hover:underline">Working</a>
      </div>

      {/* Toggle Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded ${isLogin ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded ${isLogin ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
