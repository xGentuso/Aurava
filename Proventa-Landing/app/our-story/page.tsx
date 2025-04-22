'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16 sm:py-24">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-gray-50 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Story</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Building a secure, privacy-first platform for health data aggregation and understanding
            </p>
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-6">
              The Beginning
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Proventa began with a simple observation: healthcare today is primarily reactive, not proactive. We want to help shift that paradigm.
            </p>
            <div className="mt-8 prose prose-lg text-gray-500">
              <p>
                Founded in 2025 by Ryan Mota, Proventa was born from a vision to transform how we approach health data. We observed that valuable health information was becoming increasingly fragmented across various devices and platforms.
              </p>
              <p>
                Our founding team recognized an opportunity to create a unified platform that could securely aggregate data from wearables and self-reported inputs, giving users a more comprehensive view of their personal health metrics.
              </p>
              <p>
                We're building Proventa with a focus on data security, privacy-centered design, and user trust. Based in St. Catharines, Ontario, we're working to develop a platform that respects user privacy and data protection principles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Mission & Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The principles that guide our development
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <div className="prose prose-lg text-gray-500">
                <p>
                  We're building Proventa to help users better understand their personal health data by securely aggregating it in one place. Our mission is to give individuals better visibility into their own health metrics while prioritizing privacy and data security.
                </p>
                <p>
                  We're creating a platform that:
                </p>
                <ul>
                  <li>Provides secure data aggregation from wearable devices and manual inputs</li>
                  <li>Visualizes your health data in intuitive, meaningful ways</li>
                  <li>Gives you ownership and control over your personal health information</li>
                  <li>Aims to incorporate privacy best practices</li>
                  <li>Helps establish the foundation for more personalized health insights in the future</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <div className="prose prose-lg text-gray-500">
                <ul>
                  <li>
                    <strong>Privacy by Design</strong>: We're working to implement Privacy by Design principles in our development, with the goal of ensuring user data protection is built into our platform from the ground up.
                  </li>
                  <li>
                    <strong>Security First</strong>: We're developing strong security measures, including data encryption and access controls, to protect your health information.
                  </li>
                  <li>
                    <strong>Transparency</strong>: We believe in clear, honest communication about how your data is used and protected.
                  </li>
                  <li>
                    <strong>User Trust</strong>: We're committed to earning your trust through transparent practices and giving users control over their data.
                  </li>
                  <li>
                    <strong>Responsible Innovation</strong>: We approach health data with care, focusing on secure aggregation and visualization rather than making medical claims.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Building with user privacy and security in mind
            </p>
          </motion.div>

          <div className="rounded-lg bg-gray-50 overflow-hidden shadow-sm divide-y divide-gray-200">
            <motion.div 
              className="px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Framework</h3>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Based in Ontario, Canada, we're designing Proventa with a focus on privacy and security principles:
                </p>
                <ul>
                  <li>Developing with awareness of relevant privacy legislation such as PIPEDA and PHIPA</li>
                  <li>Creating comprehensive consent mechanisms that give users clear choices</li>
                  <li>Planning for user control over data collection and usage</li>
                  <li>Implementing data minimization practices</li>
                  <li>Building with privacy and security as foundational considerations</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Focus</h3>
              <div className="prose prose-lg text-gray-500">
                <p>
                  We're taking a measured approach to development, focusing first on establishing a secure foundation:
                </p>
                <ul>
                  <li>Building a secure data ingestion pipeline for selected wearable data and manual inputs</li>
                  <li>Creating intuitive data visualizations to help users understand their health metrics</li>
                  <li>Implementing security measures for data protection</li>
                  <li>Developing clear, transparent consent mechanisms</li>
                  <li>Focusing on basic data aggregation and visualization rather than predictive analysis or health recommendations</li>
                </ul>
                <p>
                  Our initial platform is focused on helping users securely view and understand their own health data, without making predictive health claims or providing medical advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Looking Ahead
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Our vision for the future of Proventa
            </p>
            <div className="mt-8 prose prose-lg text-gray-500">
              <p>
                While our current focus is on building a secure foundation, our long-term vision includes:
              </p>
              <ul>
                <li>Expanding data integration capabilities to include more diverse health data sources</li>
                <li>Developing more sophisticated ways for users to understand relationships between their health metrics</li>
                <li>Building advanced privacy-preserving analytics capabilities</li>
                <li>Creating a platform that empowers individuals to take a more active role in their wellness</li>
                <li>Contributing to a shift from reactive to preventative healthcare approaches</li>
              </ul>
              <p>
                As we grow, we remain committed to our core values of privacy, security, and user trust.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Join Us */}
      <div className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
              Join Our Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-700">
              Be part of the future of secure, privacy-focused health data
            </p>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 