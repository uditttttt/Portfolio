// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your Name/Logo */}
        <h1 className="text-2xl font-bold">
          <a href="#home">Udit Pratap Singh</a>
        </h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;