import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { portfolio } from '../../data/portfolio';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filterOptions = ['All', ...Array.from(new Set(portfolio.flatMap(item => item.tags)))];

  const filteredPortfolio = activeFilter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.tags.includes(activeFilter));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our <span className="text-primary-500">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((filter: string) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredPortfolio.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transform border-2 border-transparent hover:border-primary-500"
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                transition: { 
                  duration: 0.3,
                  rotate: {
                    repeat: Infinity,
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href={project.link || '#'} 
                    className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                    aria-label={`View ${project.title} project`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  whileHover={{ color: '#6366f1', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: '#6366f1',
                        color: 'white'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;