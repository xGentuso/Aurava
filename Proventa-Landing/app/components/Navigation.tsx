'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        top: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.top) {
          return section.id;
        }
        return acc;
      }, '');

      setActiveSection(currentSection);

      // Update scroll state
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed w-full bg-white/90 backdrop-blur-md z-40 transition-all duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      style={{ top: '32px' }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image 
                src="/ProventaLogo.png" 
                alt="Proventa Logo" 
                width={160} 
                height={64} 
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 ${
                  activeSection === item.href.substring(1) ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={(e) => handleNavClick(e, '#waitlist')}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-500 transition-all duration-200"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
} 