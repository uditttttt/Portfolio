// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 py-6 text-center text-slate-400">
        <p>&copy; {currentYear} Udit Pratap Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;