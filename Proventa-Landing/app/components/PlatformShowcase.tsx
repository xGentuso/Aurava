'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  {
    id: 1,
    src: '/Proventa-Overview.png',
    alt: 'Proventa Platform Overview',
    title: 'Comprehensive Dashboard',
    description: 'Get a complete overview of your health metrics and predictions in one place.'
  },
  {
    id: 2,
    src: '/Proventa-Metrics.png',
    alt: 'Proventa Health Metrics',
    title: 'Health Metrics',
    description: 'Track and analyze your key health indicators with detailed visualizations.'
  },
  {
    id: 3,
    src: '/Proventa-Analytics.png',
    alt: 'Proventa Analytics',
    title: 'Predictive Analytics',
    description: 'Advanced analytics to predict and prevent potential health issues.'
  },
  {
    id: 4,
    src: '/Proventa-Calender.png',
    alt: 'Proventa Calendar',
    title: 'Health Calendar',
    description: 'Plan and track your health journey with our intuitive calendar.'
  }
];

export default function PlatformShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Experience the Future of Health Monitoring
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our intuitive platform designed to help you predict, prevent, and prosper in your health journey.
          </p>
        </div>

        <div className="relative h-[600px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative h-full w-full">
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/60 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-white/90">
                    {screenshots[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all"
            onClick={() => paginate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all"
            onClick={() => paginate(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 