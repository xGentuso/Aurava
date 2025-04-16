'use client';

import { aboutCards, features } from '../constants';

export default function About() {
  return (
    <>
      {/* Why Proventa Is Different */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
              More Than Tracking — Predicting Your Health's Future
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Leveraging advanced AI and continuous monitoring to transform reactive healthcare into proactive wellness
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Early Detection */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Early Detection</h3>
                <p className="text-gray-600">Spot potential health risks before they develop into serious concerns</p>
              </div>
            </div>

            {/* Real-time Monitoring */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Continuous health tracking with real-time notifications and instant alerts</p>
              </div>
            </div>

            {/* AI-Powered Analysis */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">Advanced algorithms process your health data for personalized insights</p>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast potential health changes based on your historical data and patterns</p>
              </div>
            </div>

            {/* Personalized Insights */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Personalized Insights</h3>
                <p className="text-gray-600">Tailored recommendations that adapt to your unique lifestyle and wellness goals</p>
              </div>
            </div>

            {/* Continuous Learning */}
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary-100 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Our AI system evolves with you, improving predictions and recommendations over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
              Our Approach
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Building the future of healthcare with innovation, security, and scientific rigor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="rounded-full bg-primary-100 p-4 mb-6">
                  <card.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8" data-aos="fade-up">
              Our Mission
            </h2>
            <div className="relative">
              <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-lg text-gray-600 italic" data-aos="fade-up" data-aos-delay="100">
                "We believe the future of healthcare is proactive. Proventa is being built to empower you with the tools to predict, prevent, and prosper — all while keeping your privacy sacred. We're starting small, focused on building something you can trust and love."
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                <p className="text-base font-semibold text-gray-900">Ryan Mota</p>
                <p className="text-sm text-gray-600">Founder, Proventa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 