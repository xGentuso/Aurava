'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
          <div className="max-w-md w-full space-y-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re sorry, but something went wrong. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 