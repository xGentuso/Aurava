export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg prose-primary">
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By accessing and using Proventa's platform, you agree to be bound by these Terms of Service 
          and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Medical Disclaimer</h2>
        <p className="text-gray-600">
          Proventa is not a medical service provider. The platform is designed to provide health insights 
          and recommendations based on data analysis, but it is not a substitute for professional medical 
          advice, diagnosis, or treatment.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <p className="text-gray-600">
          As a user of the platform, you agree to:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account</li>
          <li>Use the platform in compliance with all applicable laws</li>
          <li>Consult with healthcare professionals for medical advice</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Platform Availability</h2>
        <p className="text-gray-600">
          While we strive to maintain continuous platform availability, we do not guarantee uninterrupted 
          access. We reserve the right to modify or discontinue the service at any time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact</h2>
        <p className="text-gray-600">
          For questions about these Terms of Service, please contact us at:
          <br />
          <a href="mailto:legal@proventa.health" className="text-primary-600 hover:text-primary-500">
            legal@proventa.health
          </a>
        </p>
      </div>
    </div>
  );
} 