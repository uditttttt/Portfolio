// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; // 1. Import the Skills component

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Skills /> {/* 2. Add the Skills component here */}
    </div>
  )
}

export default App;