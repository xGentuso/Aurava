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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        top: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100; // Adding offset for better UX

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.top) {
          return section.id;
        }
        return acc;
      }, '');

      setActiveSection(currentSection);
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
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100" style={{ top: '32px' }}>
      <nav className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-shrink-0 -ml-4 sm:-ml-6 lg:-ml-8">
            <a href="/" className="flex items-center">
              <Image 
                src="/ProventaLogo.png" 
                alt="Proventa Logo" 
                width={180} 
                height={72} 
                className="h-14 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-gray-600 hover:text-primary-600 transition-colors duration-200 ${
                  activeSection === item.href.substring(1) ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 