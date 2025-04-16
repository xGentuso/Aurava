'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import About from './components/About';
import ComparisonSection from './components/ComparisonSection';
import { features, steps } from './constants';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Hero />

      {/* Features Section */}
      <ComparisonSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Proventa Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Three simple steps to predictive health insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="bg-white rounded-3xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.05)] relative"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Step Number Circle */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-primary-50/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="h-6 w-6 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {step.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-primary-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Connector Line (only for first two cards) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a
              href="#waitlist"
              className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-500 transition-all duration-300"
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
      <About />

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Be Part of the Health Revolution</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our early community and get updates, behind-the-scenes access, and a chance to shape the future of proactive healthcare.
            </p>
            <WaitlistForm />
            <p className="mt-4 text-sm text-gray-500">
              Limited beta spots available. Early supporters will help shape the product.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
