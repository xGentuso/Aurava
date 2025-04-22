'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LegalContextType {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  openDialog: (type: 'privacy' | 'terms') => void;
  closeDialog: () => void;
}

const LegalContext = createContext<LegalContextType | undefined>(undefined);

export function LegalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'privacy' | 'terms'>('privacy');

  const openDialog = (dialogType: 'privacy' | 'terms') => {
    setType(dialogType);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <LegalContext.Provider value={{ isOpen, type, openDialog, closeDialog }}>
      {children}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const context = useContext(LegalContext);
  if (context === undefined) {
    throw new Error('useLegal must be used within a LegalProvider');
  }
  return context;
} 