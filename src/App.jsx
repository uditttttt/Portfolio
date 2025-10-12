// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects'; // 1. Import the Projects component

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects /> {/* 2. Add the Projects component here */}
    </div>
  )
}

export default App;