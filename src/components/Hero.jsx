// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 px-4">
      <div className="container mx-auto text-center">
        {/* Use smaller text on mobile (text-4xl) and larger on medium screens up (md:text-6xl) */}
        <h2 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-cyan-400">Udit Pratap Singh</span>
        </h2>
        {/* Use smaller text on mobile (text-lg) and larger on medium screens up (md:text-2xl) */}
        <p className="text-lg md:text-2xl mt-4 text-gray-300">
          A Full-Stack Developer specializing in the MERN Stack.
        </p>
        {/* Stack buttons vertically on mobile, and horizontally on small screens up */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://drive.google.com/file/d/1k-xgybGF0t0pQUibpDwJP3_ZS3AWOtXO/view?usp=drive_link" // Make sure to keep your Google Drive link
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
        </div>
      </div>
    </section>
  );
};

export default Hero;