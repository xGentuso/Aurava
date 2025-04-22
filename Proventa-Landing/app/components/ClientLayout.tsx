'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AOSWrapper from './AOSWrapper';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
        <Navigation />
        <AOSWrapper>
          {children}
        </AOSWrapper>
        <Footer />
    </>
  );
} 