import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Clock />, value: '1+', label: 'Years of Experience' },
    { icon: <Users />, value: '1+', label: 'Clients Worldwide' },
    { icon: <Award />, value: '1+', label: 'Industry Awards' },
    { icon: <Star />, value: '50+', label: 'Completed Projects' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:border-4 hover:border-primary-500 animate-pulse">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary-500/10 hover:bg-primary-500/20 transition-colors duration-300"></div>
            </div>
            
            <motion.div 
              className="absolute -right-10 -bottom-10 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 z-10 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-primary-500 hover:scale-110"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full text-primary-500 mb-2 transform hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-center text-gray-900 dark:text-white font-bold text-xl">1+ Years</p>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">Industry Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hover:border-l-4 hover:border-primary-500 pl-4 transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 hover:text-primary-500 transition-colors duration-300">
              About <span className="text-primary-500">TechSolutions Pro</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Founded in 2024, TechSolutions Pro has been at the forefront of digital innovation, helping businesses of all sizes transform their ideas into powerful digital solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Our team of talented developers, designers, and strategists work collaboratively to deliver exceptional results that exceed expectations. We believe in building long-term relationships with our clients, becoming trusted partners in their digital journey.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center transform hover:scale-105 transition-all duration-300 hover:border-2 hover:border-primary-500 p-3 rounded-lg"
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full text-primary-500 mb-3 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-300 animate-bounce">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group transition-all duration-300 hover:border-b-2 hover:border-primary-500">
                Learn more about our journey
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;