// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion'; 

import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { VscSymbolStructure, VscVscode } from 'react-icons/vsc';

const skillsData = [
  // ... your skills data ...
  { name: 'Java', icon: <FaJava size={24} />, category: 'Languages' },
  { name: 'C++', icon: <SiCplusplus size={24} />, category: 'Languages' },
  { name: 'Python', icon: <FaPython size={24} />, category: 'Languages' },
  { name: 'HTML', icon: <FaHtml5 size={24} />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt size={24} />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJsSquare size={24} />, category: 'Frontend' },
  { name: 'React.js', icon: <FaReact size={24} />, category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs size={24} />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress size={24} />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb size={24} />, category: 'Databases' },
  { name: 'MySQL (SQL)', icon: <SiMysql size={24} />, category: 'Databases' },
  { name: 'Git', icon: <FaGitAlt size={24} />, category: 'Tools' },
  { name: 'GitHub', icon: <FaGithub size={24} />, category: 'Tools' },
  { name: 'Postman', icon: <SiPostman size={24} />, category: 'Tools' },
  { name: 'VS Code', icon: <VscVscode size={24} />, category: 'Tools' },
  { name: 'DSA & OOP', icon: <VscSymbolStructure size={24} />, category: 'Core Concepts' },
];

const Skills = () => {
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* FIXED: Re-added the correct className for styling */}
          <motion.h2 
            className="text-4xl font-bold mb-4" 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            Technical Proficiency
          </motion.h2>
          {/* FIXED: Re-added the correct className for styling */}
          <motion.p 
            className="text-slate-400 mt-2 text-lg" 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A snapshot of the languages, frameworks, and tools I work with.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <div className="relative inline-block mb-5 overflow-hidden">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {category}
                </h3>
                <motion.div
                  className="absolute top-0 left-0 bottom-0 right-0 bg-cyan-500"
                  initial={{ x: 0 }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {skillsData.filter(skill => skill.category === category).map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-base font-medium
                               hover:bg-cyan-400 hover:text-slate-900 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                    variants={skillItemVariants}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;  