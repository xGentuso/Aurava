'use client';

import React from 'react';

export default function AccessibilityPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accessibility Statement</h1>
          <p className="mt-4 text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto">
          <section>
            <h2>Our Commitment</h2>
            <p>
              At Proventa, we're committed to making our website accessible to as many people as possible, regardless of ability or technology. 
              We're working to increase the accessibility and usability of our website and adhere to many of the available standards and guidelines.
            </p>
          </section>

          <section>
            <h2>Accessibility Features</h2>
            <p>
              We're continuously working to improve the user experience for everyone and applying the relevant accessibility standards. 
              Some of the accessibility features we're implementing include:
            </p>
            <ul>
              <li>Semantic HTML structure for better screen reader support</li>
              <li>Keyboard navigable interfaces</li>
              <li>Text alternatives for non-text content</li>
              <li>Adequate color contrast ratios</li>
              <li>Resizable text without loss of functionality</li>
              <li>Clear and consistent navigation</li>
            </ul>
          </section>

          <section>
            <h2>Work in Progress</h2>
            <p>
              Our website is still under development, and we recognize that not all areas of our website are fully accessible yet. 
              We are actively working to improve the accessibility of our platform and are committed to:
            </p>
            <ul>
              <li>Regular accessibility assessments</li>
              <li>Addressing accessibility issues as they are identified</li>
              <li>Training our staff on accessibility best practices</li>
              <li>Considering accessibility during the design and development of new features</li>
            </ul>
          </section>

          <section>
            <h2>Feedback and Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <p>
              Email: <a href="mailto:proventa.health@gmail.com">proventa.health@gmail.com</a><br />
              Address: St. Catharines, ON, Canada
            </p>
            <p>
              We try to respond to feedback within 5 business days.
            </p>
          </section>

          <section>
            <h2>Assistive Technologies</h2>
            <p>
              We're striving to ensure our website works with the following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
              <li>Speech recognition software</li>
              <li>Screen magnification software</li>
              <li>Alternative keyboard and pointing devices</li>
            </ul>
          </section>

          <section>
            <h2>Browser Compatibility</h2>
            <p>
              We aim to support the current and previous major releases of the following browsers:
            </p>
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2>Future Plans</h2>
            <p>
              As we continue to develop our platform, we plan to:
            </p>
            <ul>
              <li>Perform regular accessibility audits</li>
              <li>Expand the coverage of our accessibility testing</li>
              <li>Engage with users with disabilities to understand their needs better</li>
              <li>Provide accessibility training to all team members</li>
            </ul>
          </section>

          <section>
            <h2>Resources</h2>
            <p>
              For more information about web accessibility, you might find these resources helpful:
            </p>
            <ul>
              <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative (WAI)</a></li>
              <li><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.1</a></li>
              <li><a href="https://webaim.org/" target="_blank" rel="noopener noreferrer">WebAIM</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 