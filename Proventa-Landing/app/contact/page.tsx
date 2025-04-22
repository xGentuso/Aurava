'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-gray-500">We'd love to hear from you</p>
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2>Get in Touch</h2>
              <p>
                We're currently in the development phase of our platform. If you have questions, 
                suggestions, or would like to learn more about what we're building, feel free to reach out.
              </p>
              
              <div className="mt-6">
                <h3 className="text-base font-semibold">Email</h3>
                <p className="mt-2">
                  <a 
                    href="mailto:proventa.health@gmail.com" 
                    className="text-primary-600 hover:text-primary-700"
                  >
                    proventa.health@gmail.com
                  </a>
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-base font-semibold">Location</h3>
                <p className="mt-2">
                  St. Catharines, ON<br />
                  Canada
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2>Send Us a Message</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Send Message
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  Note: This form is currently for demonstration purposes only. To contact us, please use the email address provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 