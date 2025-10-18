// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // 1. Import Contact
import Footer from "./components/Footer"; // 2. Import Footer

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact /> {/* 3. Add Contact here */}
      <Footer /> {/* 4. Add Footer here */}
    </div>
  );
}

export default App;
