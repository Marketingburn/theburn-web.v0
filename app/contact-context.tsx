'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactContextType {
  isOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ isOpen, openContactModal, closeContactModal }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactProvider');
  }
  return context;
}
