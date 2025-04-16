'use client';

import { motion } from 'framer-motion';
import { aboutCards, features } from '../constants';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Why Proventa Is Different */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              More Than Tracking — Predicting Your Health's Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Leveraging advanced AI and continuous monitoring to transform reactive healthcare into proactive wellness
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Features Grid */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary-100 p-3">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Building the future of healthcare with innovation, security, and scientific rigor
            </motion.p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="rounded-full bg-primary-100 p-4 mb-6">
                  <card.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8"
            >
              Our Mission
            </motion.h2>
            <div className="relative">
              <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative text-lg text-gray-600 italic"
              >
                "We believe the future of healthcare is proactive. Proventa is being built to empower you with the tools to predict, prevent, and prosper — all while keeping your privacy sacred. We're starting small, focused on building something you can trust and love."
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <p className="text-base font-semibold text-gray-900">Ryan Mota</p>
                <p className="text-sm text-gray-600">Founder, Proventa</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 