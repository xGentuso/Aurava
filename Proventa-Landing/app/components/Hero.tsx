'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-100 text-primary-700 ring-1 ring-inset ring-primary-700/10">
              Pre-launch • Beta Q3 2026 • Join the waitlist →
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Stay Ahead of Your Health.{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Predict. Prevent. Prosper.
            </span>
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto min-w-[300px] px-4 py-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get Early Access
              <span className="ml-2 inline-block">→</span>
            </motion.button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Not medical advice. See our <a href="/privacy" className="text-primary-600 hover:text-primary-500">Privacy</a> & <a href="/terms" className="text-primary-600 hover:text-primary-500">Terms</a>.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Proventa is a radically personalized health platform that integrates your wearable, wellness, and environmental data to predict vulnerabilities before they appear.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 