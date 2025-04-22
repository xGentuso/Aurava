'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLegal } from '../context/LegalContext';

export default function Hero() {
  const [email, setEmail] = useState('');
  const { openDialog } = useLegal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Pre-launch Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-100 text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-8"
          >
            Pre-launch • Beta Q3 2026 • Join the waitlist →
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Your Personal Health
              <span className="text-primary-600"> Intelligence Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Proventa analyzes your health data from wearables and environmental sources to provide personalized insights and recommendations for optimal health outcomes.
            </p>

            {/* CTA Section */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Join Waitlist
                  <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                By joining, you agree to our{' '}
                <button
                  onClick={() => openDialog('terms')}
                  className="text-primary-600 hover:text-primary-500"
                >
                  Terms of Service
                </button>{' '}
                and{' '}
                <button
                  onClick={() => openDialog('privacy')}
                  className="text-primary-600 hover:text-primary-500"
                >
                  Privacy Policy
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 