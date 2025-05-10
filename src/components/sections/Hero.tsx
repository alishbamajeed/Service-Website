import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-20 lg:pt-0 h-screen flex items-center overflow-hidden bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 hover:border-2 hover:border-primary-500 transition-all duration-300"
    >
      {/* Background decoration with smoother animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-all duration-700"></div>
        <div className="absolute right-1/4 top-1/3 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-all duration-700 delay-300"></div>
        <div className="absolute -left-10 bottom-1/4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-all duration-700 delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              Transforming Ideas into <span className="text-primary-500 hover:text-primary-600 transition-colors duration-300">Digital Reality</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              We deliver comprehensive full-stack solutions tailored to your business needs. 
              From design to deployment, our expert team brings your vision to life with cutting-edge technology.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 animate-bounce" />
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </ScrollLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <motion.div 
              className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1" 
                alt="Digital Transformation" 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="bg-primary-500 text-white text-xs uppercase font-bold rounded-full px-3 py-1 mb-3 inline-block hover:bg-primary-600 transition-colors duration-300">Featured</span>
                <h3 className="text-white text-xl font-bold">Innovative Solutions for the Digital Age</h3>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute -right-10 -bottom-10 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-5 z-10 w-64"
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">Our Impact</h4>
              <div className="mt-3 space-y-2">
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-600 dark:text-gray-400">Completed Projects</span>
                  <span className="font-bold text-primary-500">250+</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-600 dark:text-gray-400">Client Satisfaction</span>
                  <span className="font-bold text-primary-500">99%</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-600 dark:text-gray-400">Expert Team Members</span>
                  <span className="font-bold text-primary-500">50+</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;