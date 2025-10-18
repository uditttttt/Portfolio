// src/components/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-slate-400 mt-2 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm currently open to new opportunities. If you have a question or just want to say hi, feel free to reach out. My inbox is always open!
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a 
            href="mailto:uditpratap76@gmail.com"
            className="inline-block bg-cyan-500 text-white font-bold text-lg py-4 px-8 rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FaGithub size={30} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;