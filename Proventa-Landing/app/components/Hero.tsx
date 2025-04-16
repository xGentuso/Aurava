'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-100 text-primary-700 ring-1 ring-inset ring-primary-700/10">
              <svg className="mr-2 h-1.5 w-1.5 fill-primary-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
              </svg>
              In Development
            </span>
            <span className="text-sm text-gray-600">
              Limited spots available
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Stay Ahead of Your Health.{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Predict. Prevent. Prosper.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Proventa is a radically personalized health platform that integrates your wearable, wellness, and environmental data to predict vulnerabilities before they appear.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#waitlist"
              className="rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 w-full sm:w-auto"
            >
              Get Early Access
              <span className="ml-2 inline-block">→</span>
            </motion.a>
            <p className="text-sm text-gray-600">
              Pre-launch in Q3 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 