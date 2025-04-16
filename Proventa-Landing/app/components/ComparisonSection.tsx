'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-100 text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-6"
          >
            The Future of Healthcare
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Today's Healthcare Is Reactive —<br />
            <span className="text-primary-600">Proventa Is Proactive</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Most healthcare systems react after problems occur. Proventa uses your daily data to forecast risks before symptoms arise, empowering you to live healthier, longer, and stronger.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-16 relative"
        >
          {/* Connecting line between cards */}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-full h-0.5 bg-gradient-to-r from-red-200 via-gray-200 to-primary-200"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">VS</span>
            </div>
          </div>

          {/* Reactive Healthcare */}
          <motion.div 
            variants={itemVariants}
            className="group p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full p-3 bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Reactive Healthcare</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Treats symptoms after they appear',
                  'Relies on periodic check-ups',
                  'One-size-fits-all approach',
                  'Limited data utilization'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <svg className="w-5 h-5 text-red-500 mt-1 group-hover/item:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Proactive Prevention */}
          <motion.div 
            variants={itemVariants}
            className="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full p-3 bg-primary-100 group-hover:bg-primary-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Proactive Prevention</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Predicts risks before symptoms',
                  'Uninterrupted vitals tracking',
                  'Personalized approach',
                  'AI-powered insights'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <svg className="w-5 h-5 text-primary-500 mt-1 group-hover/item:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              stat: "24/7",
              label: "Continuous Monitoring"
            },
            {
              icon: <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>,
              stat: "Protected",
              label: "Bank-Level Security"
            },
            {
              icon: <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              stat: "Instant",
              label: "Live Health Analytics"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-xl mb-4">
                {item.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
          >
            Join the Healthcare Revolution
            <svg 
              className="ml-2 -mr-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 