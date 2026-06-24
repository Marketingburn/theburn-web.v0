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

  const openContactModal = () => {
    console.log("[v0] openContactModal called, setting isOpen to true")
    setIsOpen(true);
  };
  const closeContactModal = () => {
    console.log("[v0] closeContactModal called, setting isOpen to false")
    setIsOpen(false);
  };

  console.log("[v0] ContactProvider isOpen state:", isOpen)

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
