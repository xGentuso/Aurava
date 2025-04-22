export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg prose-primary">
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          At Proventa, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you use our health platform.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p className="text-gray-600">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Personal identification information</li>
          <li>Health and wellness data</li>
          <li>Wearable device data</li>
          <li>Environmental data</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-600">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Provide and improve our services</li>
          <li>Generate personalized health insights</li>
          <li>Communicate with you about our services</li>
          <li>Ensure platform security and prevent fraud</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="text-gray-600">
          We implement bank-level security measures to protect your personal information. 
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:privacy@proventa.health" className="text-primary-600 hover:text-primary-500">
            privacy@proventa.health
          </a>
        </p>
      </div>
    </div>
  );
} 