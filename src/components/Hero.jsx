// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // CORRECTED LINE: Changed -0.05 to 0.05 to be a valid value
        ease: [0.6, 0.01, 0.05, 0.95] 
      } 
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut'
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 px-4">
      <motion.div 
        className="container mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-cyan-400">Udit Pratap Singh</span>
        </motion.h2>

        <motion.p 
          className="text-lg md:text-2xl mt-4 text-gray-300"
          variants={itemVariants}
        >
          A Full-Stack Developer specializing in the MERN Stack.
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={buttonVariants}
        >
          <a 
            href="https://drive.google.com/file/d/1z2BYZ_-DoxADdLtHQqzLL7tf7G6lRyVX/view?usp=drive_link" // Keep your link here
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition duration-300 w-full sm:w-auto"
          >
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Contact Info
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;  