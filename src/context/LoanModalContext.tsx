// src/context/LoanModalContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import LoanApplicationForm from '../components/LoanApplicationForm';

interface LoanModalContextType {
  openModal: (loanType: string) => void;
  closeModal: () => void;
}

const LoanModalContext = createContext<LoanModalContextType | undefined>(undefined);

export const LoanModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loanType, setLoanType] = useState<string>('personal');

  const openModal = (type: string) => {
    setLoanType(type);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <LoanModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Global Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light z-10"
            >
              ×
            </button>

            {/* Form */}
            <div className="p-6 md:p-10">
              <LoanApplicationForm loanType={loanType} onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </LoanModalContext.Provider>
  );
};

export const useLoanModal = () => {
  const context = useContext(LoanModalContext);
  if (!context) throw new Error('useLoanModal must be used within LoanModalProvider');
  return context;
};