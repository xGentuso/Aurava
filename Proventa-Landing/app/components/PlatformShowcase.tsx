'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  {
    id: 1,
    src: '/Proventa-Overview.png',
    alt: 'Proventa Platform Overview',
    title: 'Comprehensive Dashboard',
    description: 'Get a complete overview of your health metrics and predictions in one place.',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLTAtQFBGRkBQRi4tMT43PV1FSVdiWFFhYpacnp/Cw+P/2wBDARUXFx4eHh4fHx8fHx+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  },
  {
    id: 2,
    src: '/Proventa-Metrics.png',
    alt: 'Proventa Health Metrics',
    title: 'Health Metrics',
    description: 'Track and visualize your key health indicators with detailed analytics.'
  },
  {
    id: 3,
    src: '/Proventa-Insights.png',
    alt: 'Proventa Health Insights',
    title: 'Predictive Insights',
    description: 'Receive AI-powered insights tailored to your unique health profile and lifestyle.',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLTAtQFBGRkBQRi4tMT43PV1FSVdiWFFhYpacnp/Cw+P/2wBDARUXFx4eHh4fHx8fHx+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  },
  {
    id: 4,
    src: '/Proventa-Analytics.png',
    alt: 'Proventa Analytics',
    title: 'Analytics Dashboard',
    description: 'Advanced analytics to predict and prevent potential health issues before they occur.'
  },
  {
    id: 5,
    src: '/Proventa-Calender.png',
    alt: 'Proventa Calendar',
    title: 'Smart Health Calendar',
    description: 'Plan and track your health journey with our AI-powered scheduling system.'
  }
];

export default function PlatformShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          screenshots.map((screenshot) => {
            return new Promise((resolve, reject) => {
              const img = document.createElement('img');
              img.src = screenshot.src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Still set loading to false to not block the UI
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

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
    <section id="features" className="relative py-8 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 sm:mb-4">
            Experience the Future of Health Monitoring
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our intuitive platform designed to help you predict, prevent, and prosper in your health journey.
          </p>
        </div>

        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
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
              <div className="relative h-full w-full px-0 sm:px-4">
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-contain rounded-lg shadow-2xl !p-0"
                  priority={currentIndex <= 1}
                  loading={currentIndex <= 1 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  quality={90}
                />

                {/* Preload next and previous images */}
                <div className="hidden">
                  {[
                    (currentIndex - 1 + screenshots.length) % screenshots.length,
                    (currentIndex + 1) % screenshots.length,
                  ].map((index) => (
                    <Image
                      key={screenshots[index].id}
                      src={screenshots[index].src}
                      alt=""
                      width={1}
                      height={1}
                      priority
                    />
                  ))}
                </div>

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

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}

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