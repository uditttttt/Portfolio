// src/App.jsx

import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar /> {/* Use the Navbar component here */}
      
      {/* The rest of your page content will go here later */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  )
}

export default App;