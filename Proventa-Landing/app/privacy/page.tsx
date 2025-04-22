'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto">
          <section>
            <h2>Introduction</h2>
            <p>
              At Proventa, we're committed to protecting your privacy and handling your data with transparency and care. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
              or interact with our services.
            </p>
            <p>
              Proventa is currently in development. This policy will evolve as our platform matures and 
              before we begin processing health data.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> When you sign up for our waitlist or contact us, we collect your email address and any other information you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you interact with our website, including pages visited and time spent.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the device you use to access our website, such as device type, operating system, and browser.
              </li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Communicate with you about our services and updates</li>
              <li>Improve our website and user experience</li>
              <li>Develop new features and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. As we develop our platform, we are designing our systems with privacy 
              and security as foundational principles.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect your information, no method of transmission 
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this 
              Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal 
              obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct or update your personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to object to or restrict the processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the information provided below.
            </p>
          </section>

          <section>
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze 
              how users navigate and utilize the site. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services such as analytics providers and email service providers. These services 
              may collect information sent by your browser as part of a web page request, such as cookies or your IP address.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 16. We do not knowingly collect personal 
              information from children under 16. If we become aware that we have collected personal information from 
              a child under 16, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:proventa.health@gmail.com">proventa.health@gmail.com</a><br />
              Address: St. Catharines, ON, Canada
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 