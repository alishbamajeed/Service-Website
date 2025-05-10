import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', to: 'hero' },
    { title: 'Services', to: 'services' },
    { title: 'About', to: 'about' },
    { title: 'Portfolio', to: 'portfolio' },
    { title: 'Team', to: 'team' },
    { title: 'Testimonials', to: 'testimonials' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg dark:bg-gray-900 dark:shadow-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src="/logo.png" alt="Logo" className="w-40 h-12 object-contain" />
              </ScrollLink>
            </motion.div>
          </div>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

                className={`font-medium text-base px-3 py-1.5 transition-all duration-300 cursor-pointer border-b-2 border-transparent hover:border-primary-500 ${
                  theme === 'dark' ? 'text-gray-300 hover:text-primary-400' : 'text-gray-700'
                }`}
              >
                {link.title}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-xl"
        >

          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

                className="block py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;