// src/components/Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your Name/Logo */}
        <h1 className="text-2xl font-bold">
          <a href="#home">Udit Pratap Singh</a>
        </h1>
        
        {/* Desktop Navigation Links (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#skills" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;