'use client';

import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  // Clear success message after 10 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formStatus.success) {
      timer = setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false,
          message: ''
        }));
      }, 10000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [formStatus.success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }

    try {
      setFormStatus({
        ...formStatus,
        submitting: true,
        error: false,
        message: ''
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setFormStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent.'
        });
        
        // Log success for debugging
        console.log('Message sent successfully', data);
      } else {
        const errorMessage = data.details || data.error || 'Something went wrong';
        console.error('API error response:', data);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };

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
              {formStatus.success ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message sent successfully</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>{formStatus.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {formStatus.error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">There was an error</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>{formStatus.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                        placeholder="Your name"
                        required
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
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                        placeholder="your.email@example.com"
                        required
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
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-4 text-sm text-gray-500">
                <p>Note: This form is currently for demonstration purposes only. To contact us, please use the email address provided.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 