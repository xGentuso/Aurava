'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Proventa</h3>
            <p className="text-sm mb-2">
              Building the future of predictive health monitoring
            </p>
            <p className="text-sm">
              St. Catharines, ON<br />
              Canada
            </p>
            <div className="mt-4 flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Made in Canada
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <p className="text-sm mb-4">
              <a href="mailto:proventa.health@gmail.com" className="hover:text-white transition-colors">
                proventa.health@gmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/proventa" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/proventahealth" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            
            {/* Waitlist Form */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-2">Join our waitlist</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm bg-gray-800 text-white rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                />
                <button 
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 text-sm font-medium rounded-r-md transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Proventa Health. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Proventa is currently in development. The platform is not yet available for medical use.
          </p>
        </div>
      </div>
    </footer>
  );
} 