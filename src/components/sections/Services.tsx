import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Smartphone, Palette, Cloud, TrendingUp, Lightbulb, 
  ChevronRight, Check
} from 'lucide-react';
import { ServiceType } from '../../types';
import { services } from '../../data/services';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceType | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'palette':
        return <Palette className="w-6 h-6" />;
      case 'cloud':
        return <Cloud className="w-6 h-6" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      } 
    },
  };

  const handleServiceClick = (service: ServiceType) => {
    setActiveService(activeService?.id === service.id ? null : service);
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our <motion.span 
                  className="text-primary-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  Services
                </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            We provide comprehensive solutions to help businesses thrive in the digital landscape. 
            From design to development, we've got you covered.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={item}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                activeService?.id === service.id ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-500"
                  >
                    {getIconComponent(service.icon)}
                  </motion.div>
                  <motion.h3 
                    whileHover={{ x: 5, color: "#6366f1" }}
                    className="ml-4 text-xl font-bold text-gray-900 dark:text-white"
                  >
                    {service.title}
                  </motion.h3>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {service.description}
                </motion.p>
                <motion.button 
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  {activeService?.id === service.id ? 'View Less' : 'Learn More'} 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>

              {activeService?.id === service.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.h4 
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                    >
                      Key Features:
                    </motion.h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          >
                            <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;