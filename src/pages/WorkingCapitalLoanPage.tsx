"use client";

import { useState, useEffect } from "react";
import { useLoanModal } from '../context/LoanModalContext';

// ────────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ────────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  const { openModal } = useLoanModal();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    businessType: "",
    loanPurpose: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Working Capital Loan Form Data:", formData);
    openModal('working-capital');
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Working Capital Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Instant Funds • Overdraft Facility
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Working capital is the lifeblood of any business. Secure quick & easy funding to meet operational expenses, manage cash flow, and grow without hurdles.  
                Competitive rates • 100% online • No collateral • Overdraft facility
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/working-capital-loan-hero.png"
                alt="Business operations running smoothly with working capital loan support"
                className="w-full max-w-[680px] xl:max-w-[820px] h-auto object-contain drop-shadow-2xl rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 px-4 sm:px-6 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pb-16 md:pb-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                value={formData.mobile}
                onChange={handleChange}
              />
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Business Type *</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="trading">Trading/Retail</option>
                <option value="services">Services</option>
                <option value="other">Other</option>
              </select>
              <select
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Purpose of Loan *</option>
                <option value="inventory">Inventory & Raw Materials</option>
                <option value="suppliers">Supplier Payments</option>
                <option value="operations">Daily Operations</option>
                <option value="expansion">Business Growth</option>
              </select>
              <button
                type="submit"
                disabled={!formData.consent}
                className={`rounded-xl px-6 md:px-10 py-3.5 text-base font-semibold transition-all duration-300 ${
                  formData.consent
                    ? "bg-[#0B0E14] text-[#E5E7EB] hover:bg-black hover:shadow-xl hover:scale-[1.02]"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Check Eligibility
              </button>
            </div>
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1.5 h-5 w-5 rounded border-gray-300 text-[#0B0E14] focus:ring-black/30"
                required
              />
              <span className="leading-relaxed">
                I authorize sharing my information for working capital loan processing as per RBI guidelines & privacy policy.
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// OVERVIEW (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function LoanOverview() {
  return (
    <section id="overview" className="py-16 px-6 bg-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is a Working Capital Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Working capital is the lifeblood of any business. A Working Capital Loan (also known as working capital term loan) provides quick and easy funding to meet day-to-day business expenses, manage cash flow, and support growth without financial hurdles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Competitive interest rates</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Overdraft facility — interest only on utilised amount</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No collateral required</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>100% online funding</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Pre-approved offers for good credit profiles</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Purchase inventory/raw materials, pay suppliers/vendors, manage payroll & overheads, meet seasonal demand, bridge cash flow gaps, or support short-term business growth.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Inventory & Raw Materials", desc: "Stock up for production/sales" },
              { title: "Supplier Payments", desc: "Timely vendor settlements" },
              { title: "Payroll & Overheads", desc: "Smooth employee & operational payments" },
              { title: "Seasonal Demand", desc: "Handle peak business periods" },
              { title: "Cash Flow Management", desc: "Bridge short-term shortfalls" },
              { title: "Business Growth", desc: "Scale operations quickly" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// TABS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Types", id: "types" },
  { label: "Features", id: "features" },
  { label: "Interest & Charges", id: "interest" },
  { label: "Eligibility", id: "eligibility" },
  { label: "How to Apply", id: "how-to-apply" },
  { label: "FAQs", id: "faqs" },
];

function LoanTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      const buffer = 160;
      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= buffer && rect.bottom >= buffer) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-18 z-40 bg-[#E5E7EB] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#0B0E14] text-white shadow-md scale-[1.04]"
                  : "bg-white/85 text-[#1F2937] hover:bg-white hover:shadow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// TYPES OF WORKING CAPITAL SOLUTIONS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfWorkingCapitalLoans() {
  const loanTypes = [
    {
      title: "Working Capital Demand Loan",
      description: "Short-term loan to meet regular operational and cash flow needs.",
      interest: "Competitive rates*",
      amount: "As per requirement",
      tenure: "Flexible",
      bestFor: "Daily operations",
      icon: "💰",
    },
    {
      title: "Channel Finance",
      description: "Finance your channel partners, distributors, and dealers for raw material purchase.",
      interest: "Competitive rates*",
      amount: "As per requirement",
      tenure: "Flexible",
      bestFor: "Supply chain",
      icon: "📦",
    },
    {
      title: "Invoice Discounting",
      description: "Get instant cash against unpaid invoices from customers.",
      interest: "Competitive rates*",
      amount: "Up to 90% of invoice",
      tenure: "30–180 days",
      bestFor: "B2B businesses",
      icon: "📄",
    },
    {
      title: "Purchase Order Funding",
      description: "Fund large purchase orders before delivery to suppliers.",
      interest: "Competitive rates*",
      amount: "As per PO value",
      tenure: "Up to 180 days",
      bestFor: "Order-based growth",
      icon: "🛒",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Working Capital Solutions</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the perfect solution to keep your business moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loanTypes.map((loan) => (
            <div
              key={loan.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {loan.icon}
                </div>
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">{loan.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 flex-1">{loan.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold text-[#0B0E14]">Interest</span><p className="text-gray-600">{loan.interest}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Amount</span><p className="text-gray-600">{loan.amount}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Tenure</span><p className="text-gray-600">{loan.tenure}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Best For</span><p className="text-gray-600">{loan.bestFor}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FEATURES & BENEFITS
// ────────────────────────────────────────────────────────────────────────────────
function WorkingCapitalFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💰",
      title: "Competitive Interest Rates",
      desc: "Best-in-market rates — pay considerably lower EMIs",
      highlight: "Lowest Rates",
    },
    {
      icon: "🔄",
      title: "Overdraft Facility",
      desc: "Pay interest only on the amount you actually use",
      highlight: "Pay for Used Amount",
    },
    {
      icon: "🛡️",
      title: "No Collateral Required",
      desc: "Unsecured funding — simple eligibility criteria",
      highlight: "Zero Security",
    },
    {
      icon: "⚡",
      title: "Pre-approved Offers",
      desc: "Exclusive offers for good credit profiles",
      highlight: "Instant Offers",
    },
    {
      icon: "📱",
      title: "100% Online Process",
      desc: "Apply, track & get funds completely digitally",
      highlight: "Fully Digital",
    },
    {
      icon: "📈",
      title: "Customizable Funding",
      desc: "Tailored for short-term & long-term business needs",
      highlight: "Flexible Funding",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Features of Working Capital Loan</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Meet short-term needs • Plan long-term growth • Hassle-free funding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border ${
                i === 0 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl">
                  {f.icon}
                </div>
                <h4 className="amplessoft text-2xl font-bold text-[#0B0E14]">{f.title}</h4>
              </div>
              <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: f.desc }} />
              <div className="bg-[#0B0E14]/5 text-[#0B0E14] px-5 py-2 rounded-xl font-bold">{f.highlight}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Working Capital Loan Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// INTEREST & CHARGES (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function LoanDetails() {
  const { openModal } = useLoanModal();

  return (
    <section id="interest" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Working Capital Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Affordable • Transparent • Fast</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Interest Rate", value: "Competitive market rates*", highlight: "Best in market" },
            { title: "Overdraft Facility", value: "Interest only on utilised amount", highlight: "Pay for used" },
            { title: "Collateral", value: "Not required", highlight: "Unsecured" },
            { title: "Process", value: "100% online", highlight: "Digital" },
            { title: "Penal Charges", value: "4%–24% p.a. on overdue", highlight: "On default" },
            { title: "Other Charges", value: "Stock statement, insurance, etc.", highlight: "As applicable" },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md ${
                i === 1 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""
              }`}
            >
              <h3 className="amplessoft text-2xl font-bold text-[#0B0E14] mb-3">{item.title}</h3>
              <div className="text-3xl font-bold text-[#0B0E14] mb-2">{item.value}</div>
              <div className="mt-4 inline-block bg-[#0B0E14]/10 text-[#0B0E14] px-4 py-1.5 rounded-full text-sm font-medium">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Working Capital Loan Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// ELIGIBILITY (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function Eligibility() {
  const { openModal } = useLoanModal();

  return (
    <section id="eligibility" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Working Capital Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">Easy criteria for smooth application</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Indian citizen</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Favourable CIBIL score</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Registered business</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Able to furnish required documents</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Working Capital Loan Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// HOW TO APPLY / HOW WE HELP (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function HowWeHelp() {
  const { openModal } = useLoanModal();

  const steps = [
    { number: 1, title: "Apply Online", desc: "Fill basic business details" },
    { number: 2, title: "Upload Documents", desc: "KYC & financials digitally" },
    { number: 3, title: "Quick Verification", desc: "Eligibility & credit check" },
    { number: 4, title: "Approval", desc: "Get sanction in few hours" },
    { number: 5, title: "Disbursal", desc: "Funds in account instantly" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">How to Apply for Working Capital Loan</h2>
          <p className="mt-5 text-xl text-gray-700">100% online • Quick & simple</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0E14] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Working Capital Loan Application
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// DOCUMENTS REQUIRED (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function DocumentsRequired() {
  const { openModal } = useLoanModal();

  const docs = [
    {
      title: "Application Form",
      items: ["Duly filled application form"],
      icon: "📝",
    },
    {
      title: "KYC Documents",
      items: ["Aadhaar Card", "Driving Licence", "Partnership Deed (if applicable)"],
      icon: "🆔",
    },
    {
      title: "Business Proof",
      items: ["GST Registration", "Business registration proof"],
      icon: "🏢",
    },
    {
      title: "Financial Documents",
      items: ["Bank statements", "ITR", "Other financial documents"],
      icon: "📊",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Working Capital Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Minimal & digital-friendly</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((doc) => (
            <div key={doc.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl">
                  {doc.icon}
                </div>
                <h3 className="amplessoft text-xl font-bold text-[#0B0E14]">{doc.title}</h3>
              </div>
              <ul className="space-y-3">
                {doc.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0B0E14]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Upload Documents & Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// WHY CHOOSE US (updated title & CTA)
// ────────────────────────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const { openModal } = useLoanModal();

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Advantages of Working Capital Loan with Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Multiple lenders comparison</li>
              <li><span className="text-red-500">✗</span> Missing best rates</li>
              <li><span className="text-red-500">✗</span> Delayed funding</li>
              <li><span className="text-red-500">✗</span> Higher costs & hurdles</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Highly customizable loans</li>
              <li><span className="text-green-400">✓</span> Flexible repayment tenures</li>
              <li><span className="text-green-400">✓</span> Quick turnaround time</li>
              <li><span className="text-green-400">✓</span> Minimal documentation</li>
              <li><span className="text-green-400">✓</span> High loan amount</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Working Capital Loan Offer
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FAQ (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function FAQ() {
  const { openModal } = useLoanModal();

  const faqs = [
    {
      q: "What is a Working Capital Loan?",
      a: "A working capital loan helps businesses meet short-term financial needs for daily operations, inventory, salaries, and cash flow management.",
    },
    {
      q: "How do you calculate working capital requirements?",
      a: "Working capital requirement = Current Assets - Current Liabilities. Lenders assess turnover, receivables, inventory cycle, and cash flow.",
    },
    {
      q: "What is the interest rate for working capital loan?",
      a: "Competitive market rates — among the best available. Exact rate depends on your business profile and credit.",
    },
    {
      q: "Who can take a working capital loan?",
      a: "Any Indian citizen with a registered business and favourable CIBIL score can apply.",
    },
    {
      q: "What is the limit of working capital loan?",
      a: "Limit depends on your business turnover, financials, and requirements — high funding available.",
    },
    {
      q: "What is the CIBIL score for working capital loan?",
      a: "Favourable CIBIL score required — higher score gets better rates and faster approval.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white rounded-2xl shadow-sm">
              <summary className="px-6 py-5 text-lg font-semibold cursor-pointer">{f.q}</summary>
              <div className="px-6 pb-6 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('working-capital')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Still Confused? Talk to Expert
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ────────────────────────────────────────────────────────────────────────────────
export default function WorkingCapitalLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfWorkingCapitalLoans />
      <WorkingCapitalFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}