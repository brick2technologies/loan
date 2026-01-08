"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';

interface LoanApplicationFormProps {
  loanType: string;
  onClose?: () => void;
}

interface FormData {
  loan_type: string;
  full_name: string;
  mobile: string;
  email: string;
  address: string;
  employment_type: string;
  income: string;
}

const LoanApplicationForm = ({ loanType, onClose }: LoanApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    loan_type: loanType,
    full_name: '',
    mobile: '',
    email: '',
    address: '',
    employment_type: '',
    income: '',
  });

  const [showSalariedDocs, setShowSalariedDocs] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, loan_type: loanType }));
  }, [loanType]);

  const getFormTitle = () => {
    const titles: Record<string, string> = {
      personal: 'Personal Loan Application',
      home: 'Home Loan Application',
      vehicle: 'Vehicle Loan Application',
      medical: 'Medical Loan Application',
      education: 'Education Loan Application',
      gold: 'Gold Loan Application',
      business: 'Business Loan Application',
      'working-capital': 'Working Capital Loan Application',
      term: 'Term Loan Application',
      equipment: 'Equipment Loan Application',
      construction: 'Construction Financing Application',
      'loan-against-securities': 'Loan Against Securities Application',
    };
    return titles[loanType] || 'Loan Application';
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'employment_type') {
      setShowSalariedDocs(value === 'salaried');
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`Files for ${e.target.name}:`, e.target.files);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting:', formData);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1400));
      alert('Application submitted successfully!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B0E14]">
          {getFormTitle()}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            type="button"
            className="text-gray-500 hover:text-[#0B0E14] text-3xl font-light transition-colors"
          >
            ×
          </button>
        )}
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Please fill in your details — we'll show you the best offers quickly
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden field */}
        <input type="hidden" name="loan_type" value={formData.loan_type} />

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200"
            placeholder="yourname@example.com"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Current Residential Address <span className="text-red-600">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200 resize-y"
            placeholder="House/Flat no, Street, Area, City, PIN"
          />
        </div>

        {/* Employment & Income */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="employment_type" className="block text-sm font-medium text-gray-700 mb-1">
              Employment Type
            </label>
            <select
              id="employment_type"
              name="employment_type"
              value={formData.employment_type}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200 bg-white"
            >
              <option value="">Select</option>
              <option value="salaried">Salaried</option>
              <option value="self_employed">Self Employed / Business Owner</option>
              <option value="professional">Professional (Doctor, CA, Lawyer etc.)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly / Annual Income
            </label>
            <input
              type="text"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-[#0B0E14]/60 focus:ring-2 focus:ring-[#0B0E14]/10 outline-none transition-all duration-200"
              placeholder="₹ 45,000 pm or ₹ 12,00,000 pa"
            />
          </div>
        </div>

        {/* Documents - Identity & Address */}
        <div className="bg-[#E5E7EB]/50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-[#0B0E14] mb-4">
            Identity & Address Proof (Mandatory)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar Card (Front & Back)
              </label>
              <input
                type="file"
                name="aadhar"
                accept="image/*,.pdf"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0B0E14]/10 file:text-[#0B0E14] hover:file:bg-[#0B0E14]/20 transition-all duration-200"
              />
              <p className="mt-1 text-xs text-gray-600">Max 10MB • JPG, PNG, PDF</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PAN Card
              </label>
              <input
                type="file"
                name="pan"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0B0E14]/10 file:text-[#0B0E14] hover:file:bg-[#0B0E14]/20 transition-all duration-200"
              />
              <p className="mt-1 text-xs text-gray-600">Clear scanned copy</p>
            </div>
          </div>
        </div>

        {/* Conditional Salaried Documents */}
        {showSalariedDocs && (
          <div className="bg-[#E5E7EB]/50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-[#0B0E14] mb-4">
              Income Documents (Salaried)
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last 3-6 months Salary Slips
                </label>
                <input
                  type="file"
                  name="salary_slips"
                  accept=".pdf,image/*"
                  multiple
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0B0E14]/10 file:text-[#0B0E14] hover:file:bg-[#0B0E14]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last 6 months Bank Statement
                </label>
                <input
                  type="file"
                  name="bank_statement"
                  accept=".pdf"
                  multiple
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0B0E14]/10 file:text-[#0B0E14] hover:file:bg-[#0B0E14]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last 2 years ITR / Form 16
                </label>
                <input
                  type="file"
                  name="itr_form16"
                  accept=".pdf"
                  multiple
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0B0E14]/10 file:text-[#0B0E14] hover:file:bg-[#0B0E14]/20 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-4 px-8 bg-[#0B0E14] text-[#E5E7EB] font-semibold rounded-xl
              hover:bg-black hover:shadow-xl active:scale-[0.98]
              focus:outline-none focus:ring-2 focus:ring-[#0B0E14]/30
              transition-all duration-300
              disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
              text-lg shadow-md
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Proceed to Apply →'}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Your data is secure with 256-bit encryption
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;