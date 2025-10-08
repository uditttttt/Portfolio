// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Import the Hero component

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero /> {/* Use the Hero component here */}
      
      {/* We will add other components like Skills, Projects, etc. later */}
    </div>
  )
}

export default App;