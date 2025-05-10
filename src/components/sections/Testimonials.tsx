import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our <span className="text-primary-500">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="absolute top-10 left-0 opacity-10 dark:opacity-5">
            <Quote size={120} className="text-primary-500" />
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.02, border: '2px solid #6366f1' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-xl relative z-10 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
              >
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />

              </motion.div>
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">
                  "{testimonials[currentIndex].quote}"
                </p>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>

                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between items-center mt-8">

            <motion.button 
              onClick={prevTestimonial}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary-500 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />

            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (

                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index 
                      ? 'bg-primary-500' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  } transition-colors duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}

                ></motion.button>
              ))}
            </div>
            

            <motion.button 
              onClick={nextTestimonial}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary-500 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />

            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;