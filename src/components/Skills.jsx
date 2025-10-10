// src/components/Skills.jsx

import React from 'react';
// Import motion from framer-motion
import { motion } from 'framer-motion'; 

import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { VscSymbolStructure, VscVscode } from 'react-icons/vsc';

const skillsData = [
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

  // Animation variants for skill categories
  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for individual skill items
  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"> {/* Increased bottom margin for better spacing */}
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }} // Start slightly above and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
            transition={{ duration: 0.8 }} // Smooth transition
          >
            Technical Proficiency
          </motion.h2>
          <motion.p 
            className="text-slate-400 mt-2 text-lg" // Slightly larger text
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay slightly after title
          >
            A snapshot of the languages, frameworks, and tools I work with.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div 
              key={category} 
              className="mb-10" // Adjusted bottom margin for categories
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
              transition={{ delay: index * 0.1 }} // Stagger categories slightly
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-5">{category}</h3> {/* Larger category title */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.07 }} // Stagger individual skills
              >
                {skillsData.filter(skill => skill.category === category).map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-base font-medium
                               hover:bg-cyan-400 hover:text-slate-900 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                    variants={skillItemVariants} // Apply item animation variants
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;