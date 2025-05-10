import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="p-4 hover:border-2 hover:border-primary-500 rounded-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-primary-500 animate-pulse" />
              <span className="ml-2 text-xl font-bold">
                Armed Coding <span className="text-primary-500">Pro</span>
              </span>
            </div>
            <p className="mb-4 text-gray-400">
              Delivering innovative digital solutions to transform your business. Our expert team helps you navigate the digital landscape with confidence.
            </p>
            
          </div>

          {/* Services */}
          <div className="p-4 hover:border-2 hover:border-primary-500 rounded-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Mobile App Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">ChatBot AI Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Python Development</a>
              </li>
              <li>

              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="p-4 hover:border-2 hover:border-primary-500 rounded-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block cursor-pointer"
                >
                  Our Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block cursor-pointer"
                >
                  Our Team
                </ScrollLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 inline-block">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="p-4 hover:border-2 hover:border-primary-500 rounded-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-1 group-hover:animate-bounce" />
                <span className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300">
                  Pakistan,Karachi<br />
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-primary-500 mr-2 group-hover:animate-bounce" />
                <a href="tel:+14155550123" className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300">
                  +92 370 1192675
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-primary-500 mr-2 group-hover:animate-bounce" />
                <a href="mailto:info@techsolutionspro.com" className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300">
                  armedcoding@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 hover:text-primary-500 transition-colors duration-300">
          <p>&copy; {currentYear} ArmedCoding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;