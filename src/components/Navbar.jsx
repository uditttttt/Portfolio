// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled 
      ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700 shadow-lg' 
      : 'bg-transparent'
    }
  `;

  const navContainerClasses = `
    container mx-auto flex justify-between items-center transition-all duration-300
    ${isScrolled ? 'p-4' : 'p-5'}
  `;

  // Animation for the logo/name
  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  // Animation for the link container to stagger its children
  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // Start after the name animates in
      }
    }
  };

  // Animation for individual nav links
  const navLinkItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <nav className={navbarClasses}>
      <div className={navContainerClasses}>
        <motion.h1 
          className="text-3xl font-bold"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#home">Udit Pratap Singh</a>
        </motion.h1>
        
        <motion.ul 
          className="hidden md:flex space-x-8"
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={navLinkItemVariants}><a href="#home" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Home</a></motion.li>
          <motion.li variants={navLinkItemVariants}><a href="#skills" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Skills</a></motion.li>
          <motion.li variants={navLinkItemVariants}><a href="#projects" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Projects</a></motion.li>
          <motion.li variants={navLinkItemVariants}><a href="#contact" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Contact</a></motion.li>
        </motion.ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pb-4 bg-slate-900/90 backdrop-blur-xl">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#skills" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;