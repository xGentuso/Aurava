'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLegal } from '../context/LegalContext';

export default function LegalDialog() {
  const { isOpen, type, closeDialog } = useLegal();
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  const content = type === 'privacy' ? privacyContent : termsContent;

  // Convert components to plain JSX to avoid TypeScript errors
  if (!isOpen) return null;
  
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <div className="absolute right-0 top-0 pr-4 pt-4">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={closeDialog}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-6">
                  {title}
                </h3>
                <div className="mt-2 prose prose-sm max-h-[60vh] overflow-y-auto">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const privacyContent = (
  <div className="space-y-6 text-gray-600">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    
    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h4>
      <p>
        At Proventa, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
        disclose, and safeguard your information when you use our health platform.
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Information We Collect</h4>
      <p>We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Personal identification information</li>
        <li>Health and wellness data</li>
        <li>Wearable device data</li>
        <li>Environmental data</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">3. How We Use Your Information</h4>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide and improve our services</li>
        <li>Generate personalized health insights</li>
        <li>Communicate with you about our services</li>
        <li>Ensure platform security and prevent fraud</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Data Security</h4>
      <p>
        We implement bank-level security measures to protect your personal information. 
        However, no method of transmission over the Internet is 100% secure.
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Contact Us</h4>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:privacy@proventa.health" className="text-primary-600 hover:text-primary-500">
          privacy@proventa.health
        </a>
      </p>
    </section>
  </div>
);

const termsContent = (
  <div className="space-y-6 text-gray-600">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    
    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h4>
      <p>
        By accessing and using Proventa's platform, you agree to be bound by these Terms of Service 
        and all applicable laws and regulations.
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Medical Disclaimer</h4>
      <p>
        Proventa is not a medical service provider. The platform is designed to provide health insights 
        and recommendations based on data analysis, but it is not a substitute for professional medical 
        advice, diagnosis, or treatment.
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">3. User Responsibilities</h4>
      <p>As a user of the platform, you agree to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account</li>
        <li>Use the platform in compliance with all applicable laws</li>
        <li>Consult with healthcare professionals for medical advice</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Platform Availability</h4>
      <p>
        While we strive to maintain continuous platform availability, we do not guarantee uninterrupted 
        access. We reserve the right to modify or discontinue the service at any time.
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Contact</h4>
      <p>
        For questions about these Terms of Service, please contact us at:{' '}
        <a href="mailto:legal@proventa.health" className="text-primary-600 hover:text-primary-500">
          legal@proventa.health
        </a>
      </p>
    </section>
  </div>
); 