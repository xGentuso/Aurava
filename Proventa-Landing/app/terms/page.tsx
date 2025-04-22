'use client';

import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto">
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to Proventa. By accessing our website at <a href="https://proventa.health">proventa.health</a>, you agree to be bound by these Terms of Service. 
              Please read these terms carefully before using our website or services.
            </p>
            <p>
              Proventa is currently in development. These terms will evolve as our platform matures.
            </p>
          </section>

          <section>
            <h2>Not Medical Advice</h2>
            <p>
              <strong>
                Proventa is not a medical device, diagnostic tool, or treatment platform at this time. 
                The information provided on our website is for informational purposes only and is not intended as 
                medical advice, diagnosis, or treatment recommendations.
              </strong>
            </p>
            <p>
              Always consult with qualified healthcare providers regarding any health concerns or conditions. 
              Never disregard professional medical advice or delay seeking it because of something you have read on our website.
            </p>
          </section>

          <section>
            <h2>Website Use</h2>
            <p>
              You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others 
              or restrict or inhibit anyone else's use and enjoyment of the website.
            </p>
            <p>
              Prohibited behavior includes, but is not limited to:
            </p>
            <ul>
              <li>Conducting any systematic or automated data collection activities without our express consent</li>
              <li>Attempting to gain unauthorized access to any portion of our website</li>
              <li>Transmitting or distributing viruses, malware, or other malicious code</li>
              <li>Impersonating another person or entity</li>
              <li>Using our website in any way that could damage, disable, overburden, or impair it</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The content on our website, including text, graphics, logos, images, audio clips, digital downloads, data compilations, 
              and software, is the property of Proventa or its content suppliers and is protected by Canadian and international copyright laws.
            </p>
            <p>
              You may view, download, and print pages from our website for your own personal use, subject to the restrictions set out in these terms.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from our website</li>
              <li>Sell, rent, or sublicense material from our website</li>
              <li>Reproduce, duplicate, copy, or otherwise exploit material on our website for a commercial purpose</li>
              <li>Redistribute content from our website, unless content is specifically made for redistribution</li>
            </ul>
          </section>

          <section>
            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. 
              Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your 
              computer or device. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </section>

          <section>
            <h2>Limitations of Liability</h2>
            <p>
              Proventa will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website.
            </p>
            <p>
              We do not guarantee that our website will be secure or free from bugs or viruses. You are responsible for configuring 
              your technology to access our website. You should use your own virus protection software.
            </p>
          </section>

          <section>
            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Proventa, its officers, directors, employees, and agents, from and against 
              any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, 
              arising out of or in any way connected with your access to or use of our website or your violation of these Terms of Service.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Canada and the province of Ontario.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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