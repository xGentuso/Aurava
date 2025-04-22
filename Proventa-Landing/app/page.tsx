'use client';

import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import About from './components/About';
import ComparisonSection from './components/ComparisonSection';
import PlatformShowcase from './components/PlatformShowcase';
import { features, steps } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import { ChartBarIcon, SparklesIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
    </div>
  );
}

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ErrorBoundary>
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        {/* Platform Showcase Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <PlatformShowcase />
        </Suspense>

        {/* Features Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <ComparisonSection />
        </Suspense>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Proventa Works
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Three simple steps to predictive health insights
              </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 relative">
              {/* Step 1 */}
              <div 
                className="bg-white rounded-3xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.05)] relative flex flex-col"
                data-aos="fade-up"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-medium shadow-md z-10">
                  1
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-5 mt-5">
                  <div className="bg-primary-50/80 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <ChartBarIcon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Connect Your Data
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center">
                  Securely integrate your health data from wearables, apps, and manual inputs for a comprehensive view of your health.
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {steps[0].features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Connector */}
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-2">
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-primary-400"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div 
                className="bg-white rounded-3xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.05)] relative flex flex-col"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-medium shadow-md z-10">
                  2
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-5 mt-5">
                  <div className="bg-primary-50/80 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <SparklesIcon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  AI Analysis
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center">
                  Our advanced AI algorithms analyze your data to identify patterns and predict potential health risks before they become issues.
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {steps[1].features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Connector */}
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-2">
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-primary-400"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div 
                className="bg-white rounded-3xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.05)] relative flex flex-col"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-medium shadow-md z-10">
                  3
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-5 mt-5">
                  <div className="bg-primary-50/80 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <ArrowTrendingUpIcon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Personalized Recommendations
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center">
                  Receive tailored, evidence-based recommendations for lifestyle changes, nutrition, and activities to prevent potential health issues.
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {steps[2].features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <a
                href="#waitlist"
                className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Start Your Health Journey
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
