import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Team from './components/sections/Team';
import ThemeToggle from './components/ui/ThemeToggle';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check user preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.theme = newTheme;
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <ScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;