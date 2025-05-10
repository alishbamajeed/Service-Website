import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { team } from '../../data/team';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="team" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
          >
            Meet Our <span className="text-primary-500">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 dark:text-gray-300"
          >
            Our talented team delivers exceptional results.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border-2 hover:border-primary-500 dark:border-gray-700"
              whileHover={{ 
                scale: 1.02,
                borderColor: "#3B82F6",
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative">
                <motion.img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-image.jpg';
                  }}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="-mt-12 relative z-10 px-4">
                <motion.div 
                  className="bg-primary-500 rounded-lg shadow-sm p-3 text-center border border-primary-400"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-primary-200">{member.role}</p>

                  <div className="flex justify-center space-x-3 mt-2">
                    {member.socialLinks.linkedin && (
                      <motion.a 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        href={member.socialLinks.linkedin} 
                        className="text-white hover:text-gray-200"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    )}
                    {member.socialLinks.twitter && (
                      <motion.a 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        href={member.socialLinks.twitter} 
                        className="text-white hover:text-gray-200"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.a>
                    )}
                    {member.socialLinks.github && (
                      <motion.a 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        href={member.socialLinks.github} 
                        className="text-white hover:text-gray-200"
                        aria-label={`${member.name}'s Github`}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Team;