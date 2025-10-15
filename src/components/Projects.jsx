// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    // ... your project data ...
    {
    title: 'Smart AI Interview Preparation App',
    description: 'A MERN stack application using the Gemini API to generate personalized technical Q&A for interview prep, featuring JWT authentication and role-based content.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Expense Tracker Application',
    description: 'A full-stack MERN app with a budgeting system and data visualization. Implemented secure JWT authentication, a full CRUD API, and server-side filtering.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'Chart.js'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'AI-Powered Code Reviewer',
    description: 'An AI-integrated platform to review and improve user-submitted code snippets. Uses OpenAI/Gemini APIs on the backend to detect errors and suggest best practices.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    liveLink: '#',
    githubLink: '#',
  },
];

// We create a separate component for the card to keep the code clean
const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* The content of the card */}
      <div className="p-6 flex-grow flex flex-col z-10">
        <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
        <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span key={i} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-slate-800/50 p-4 flex justify-end items-center gap-4 border-t border-slate-700 z-10">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
          <FaGithub size={24} />
        </a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
          <FaExternalLinkAlt size={22} />
        </a>
      </div>

      {/* NEW: The slide-in reveal overlay */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 right-0 bg-cyan-500 z-20"
        initial={{ x: 0 }} // Start in place
        whileInView={{ x: '100%' }} // Slide out to the right
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
      />
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            My Projects
          </motion.h2>
          <motion.p className="text-slate-400 mt-2 text-lg" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            Here are a few projects I've worked on recently.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;  