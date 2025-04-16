import { useState } from 'react';

interface FormState {
  state: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>({
    state: 'idle',
    message: '',
  });
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ state: 'loading', message: '' });

    // Validate Formspree ID
    if (!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
      setFormState({
        state: 'error',
        message: 'Form configuration error. Please contact the administrator.',
      });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          email,
          subject: 'New Proventa Waitlist Signup',
          message: `New waitlist signup from ${email}\n\n` +
            `Timestamp: ${new Date().toISOString()}\n` +
            `Source: Proventa Landing Page\n` +
            'Action needed: Send welcome email',
          _gotcha: '', // spam prevention
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({
          state: 'success',
          message: '🎉 Welcome to the Proventa community! You\'ll receive:\n\n' +
            '• A confirmation email shortly\n' +
            '• Early access invitation when we launch\n' +
            '• Exclusive updates on our development progress\n' +
            '• Opportunity to shape our product features'
        });
        setEmail('');
      } else {
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        state: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div id="waitlist" className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:w-64 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          disabled={formState.state === 'loading' || formState.state === 'success'}
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            disabled={formState.state === 'loading' || formState.state === 'success'}
            className="flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.state === 'loading' ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </div>
      </form>
      {formState.message && (
        <div className={`mt-4 p-4 rounded-lg ${
          formState.state === 'success' 
            ? 'bg-primary-50 text-primary-700 border border-primary-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          <p className="text-sm whitespace-pre-line">
            {formState.message}
          </p>
        </div>
      )}
    </div>
  );
} 