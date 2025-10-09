// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react'; // Import useEffect

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // useEffect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // window.scrollY > 0 means user has scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect runs only once on mount

  // Conditionally change navbar classes based on isScrolled state
  const navbarClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled 
      ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-700' 
      : 'bg-transparent border-b border-transparent'
    }
  `;

  const navContainerClasses = `
    container mx-auto flex justify-between items-center transition-all duration-300
    ${isScrolled ? 'p-4' : 'p-5'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className={navContainerClasses}>
        <h1 className="text-3xl font-bold">
          <a href="#home">Udit Pratap Singh</a>
        </h1>
        
        <ul className="hidden md:flex space-x-8">
          {/* Links remain the same */}
          <li><a href="#home" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Home</a></li>
          <li><a href="#skills" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pb-4 bg-slate-900/90 backdrop-blur-xl">
          <ul className="flex flex-col items-center space-y-4">
            {/* Mobile links remain the same */}
            <li><a href="#home" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#skills" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


/*
What is this code? 🤔
The code you're asking about is the cleanup function for the useEffect hook.

JavaScript

// This is the cleanup function
return () => {
  window.removeEventListener('scroll', handleScroll);
};
Think of useEffect as a way to tell React: "Hey, after you render this component, I need you to do this side effect." A side effect is anything that affects things outside of your component, like making an API call or, in this case, adding an event listener to the window.

The cleanup function is the second part of that instruction: "...and when this component is about to disappear (unmount), I need you to clean up after yourself."

## Why is it Necessary? 🧹
The main reason is to prevent memory leaks and bugs.

Here's the lifecycle of your Navbar component:

Component Mounts: Your Navbar is added to the page.

useEffect Runs: Because you have an empty dependency array [], the useEffect hook runs once. It executes window.addEventListener('scroll', handleScroll). Now, your browser is actively listening for every scroll event on the entire window.

Component Unmounts: Imagine the user navigates to a completely different page on your site where the Navbar is no longer rendered. React removes the Navbar from the page.

This is where the cleanup function becomes critical.

Just before React completely removes the component, it runs the cleanup function. This function executes window.removeEventListener('scroll', handleScroll), telling the browser: "You can stop listening for scroll events for this Navbar now. It's gone."

## What Happens If You Don't Use It? 🐛
If you remove the cleanup function, here's the problem:

The Navbar component mounts, and the scroll listener is attached.

The user navigates away, and the Navbar component unmounts.

But the event listener is still attached to the window! It's still listening for scrolls and will try to run the handleScroll function from the old, destroyed Navbar component.

This leads to two major issues:

Memory Leak: The browser keeps the old component's code (including the handleScroll function and its reference to setIsScrolled) in memory because the event listener is still active. If this happens many times (e.g., in a single-page app where users navigate back and forth), your app's memory usage will grow and eventually slow down or crash the browser.

Bugs: You might get errors in your console like "Can't perform a React state update on an unmounted component." This happens because the old event listener tries to call setIsScrolled on a component that no longer exists on the screen.

In summary: Always provide a cleanup function for any useEffect that sets up a subscription or an event listener. It ensures your component is well-behaved and doesn't leave a mess behind when it's no longer needed.

*/