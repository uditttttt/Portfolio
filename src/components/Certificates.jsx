// src/components/Certificates.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa'; // Icon for certificates

// Data from your resume
const certificatesData = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuedBy: 'Udemy',
    link: '#' // IMPORTANT: Replace '#' with your certificate link
  },
  {
    title: 'SQL (Intermediate)',
    issuedBy: 'HackerRank',
    link: '#' // IMPORTANT: Replace '#' with your certificate link
  }
];

const Certificates = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p 
            className="text-slate-400 mt-2 text-lg" 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My credentials and professional qualifications.
          </motion.p>
        </div>
        
        {/* We use max-w-2xl here for a 2-column layout that looks good */}
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col 
                         hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <FaCertificate className="text-cyan-400 mb-4" size={30} />
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-400 mb-4">{cert.issuedBy}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Show Credential &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;