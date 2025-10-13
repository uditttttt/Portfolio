// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;