'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: React.ReactNode;
}

export default function AOSWrapper({ children }: AOSWrapperProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'mobile',
      duration: 750,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
} 