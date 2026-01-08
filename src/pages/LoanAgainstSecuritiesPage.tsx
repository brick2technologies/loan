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
    portfolioType: "",
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
    console.log("Loan Against Securities Form Data:", formData);
    openModal('loan-against-securities');
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Loan Against Securities
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Quick Liquidity • No Sale of Assets
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Get instant funds against your shares, mutual funds, bonds, or other demat securities without selling them.  
                Up to 50–70% of portfolio value • Starting @9.5%* p.a. • Overdraft facility • Flexible repayment • 100% online process
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/loan-against-securities-hero.png"
                alt="Investor accessing quick funds against pledged shares and mutual funds"
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
                name="portfolioType"
                value={formData.portfolioType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Portfolio Type *</option>
                <option value="shares">Listed Shares / Stocks</option>
                <option value="mutual-funds">Mutual Funds</option>
                <option value="bonds">Bonds / Debentures</option>
                <option value="other">Other Securities</option>
              </select>
              <select
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Purpose of Loan *</option>
                <option value="personal">Personal / Emergency</option>
                <option value="business">Business Needs</option>
                <option value="investment">New Investment Opportunity</option>
                <option value="other">Other</option>
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
                I authorize sharing my information for loan against securities processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is Loan Against Securities?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Loan Against Securities (LAS) is a credit facility where you pledge your shares, mutual funds, bonds, or other demat securities as collateral to get quick liquidity without selling your investments. It offers low interest rates and flexible repayment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to 50–70% of portfolio value</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Interest rate starting @9.5%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Overdraft facility available</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No need to sell investments</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Quick online approval & disbursal</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Personal / family emergencies, business working capital, new investment opportunities, home renovation, education fees, medical expenses, or any short-term liquidity need without liquidating portfolio.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Emergency Funds", desc: "Medical / family needs" },
              { title: "Business Liquidity", desc: "Working capital & operations" },
              { title: "Investment Opportunity", desc: "New stock / property purchase" },
              { title: "Home Renovation", desc: "Upgrade your residence" },
              { title: "Education / Wedding", desc: "Major life expenses" },
              { title: "Debt Consolidation", desc: "Pay off high-interest loans" },
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
// TYPES OF LOAN AGAINST SECURITIES (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfLoanAgainstSecurities() {
  const loanTypes = [
    {
      title: "Loan Against Shares",
      description: "Overdraft or term loan against listed equity shares & stocks.",
      interest: "Starting 9.5%*",
      amount: "Up to 50–60% of value",
      tenure: "Overdraft / 12–60 months",
      bestFor: "Equity investors",
      icon: "📈",
    },
    {
      title: "Loan Against Mutual Funds",
      description: "Quick liquidity against equity, debt, or hybrid mutual fund units.",
      interest: "Starting 9.5%*",
      amount: "Up to 50–70% of NAV",
      tenure: "Overdraft / 12–60 months",
      bestFor: "Mutual fund investors",
      icon: "📊",
    },
    {
      title: "Loan Against Bonds / Debentures",
      description: "Funding against government, corporate, or tax-free bonds.",
      interest: "Starting 9.5%*",
      amount: "Up to 70–80% of value",
      tenure: "Overdraft / 12–60 months",
      bestFor: "Fixed income investors",
      icon: "💵",
    },
    {
      title: "Loan Against Demat Portfolio",
      description: "Combined facility against mixed securities portfolio.",
      interest: "Starting 9.5%*",
      amount: "Up to 50–70% of portfolio",
      tenure: "Overdraft / 12–60 months",
      bestFor: "Diversified investors",
      icon: "🔗",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Loan Against Securities</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the right facility based on your pledged securities.
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
function LoanAgainstSecuritiesFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "⚡",
      title: "Quick Liquidity",
      desc: "Instant overdraft facility — funds in hours",
      highlight: "Instant Access",
    },
    {
      icon: "💰",
      title: "Low Interest Rates",
      desc: "Starting from <strong>9.5%* p.a.</strong> — cheaper than personal loans",
      highlight: "From 9.5%*",
    },
    {
      icon: "🔄",
      title: "Overdraft Facility",
      desc: "Pay interest only on the amount you use",
      highlight: "Pay for Used Amount",
    },
    {
      icon: "🛡️",
      title: "No Need to Sell Assets",
      desc: "Keep your investments growing while borrowing",
      highlight: "Retain Portfolio",
    },
    {
      icon: "📈",
      title: "High Loan Value",
      desc: "Up to <strong>50–70%</strong> of your securities value",
      highlight: "50–70% LTV",
    },
    {
      icon: "📱",
      title: "100% Digital Process",
      desc: "Pledge securities & get funds completely online",
      highlight: "Fully Digital",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Loan Against Securities Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Instant cash • Low rates • Keep investments intact • Flexible usage
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
            onClick={() => openModal('loan-against-securities')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Loan Against Securities Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Loan Against Securities at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Low cost • Flexible • Secure</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Value", value: "Up to 50–70% of securities", highlight: "High LTV" },
            { title: "Interest Rate", value: "Starting @9.5%* p.a.", highlight: "Competitive" },
            { title: "Facility Type", value: "Overdraft / Term Loan", highlight: "Flexible" },
            { title: "Processing Fee", value: "Up to 1–2%*", highlight: "One-time" },
            { title: "Penal Charges", value: "2–4% p.m. on default", highlight: "On overdue" },
            { title: "Disbursal Time", value: "Hours to 2 days*", highlight: "Super fast" },
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
            onClick={() => openModal('loan-against-securities')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Loan Against Securities Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Loan Against Securities Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">Simple for investors with demat holdings</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Indian citizen / NRI</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Minimum portfolio value as per lender</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Good CIBIL score (700+ preferred)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age 21–70 years</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('loan-against-securities')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Loan Against Securities Eligibility Now
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
    { number: 1, title: "Apply Online", desc: "Submit basic details & pledge info" },
    { number: 2, title: "Portfolio Valuation", desc: "Instant check of pledged securities" },
    { number: 3, title: "Pledge Securities", desc: "Digital pledge process" },
    { number: 4, title: "Approval & Sanction", desc: "Get limit in minutes" },
    { number: 5, title: "Disbursal", desc: "Funds in account instantly" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">How to Apply for Loan Against Securities</h2>
          <p className="mt-5 text-xl text-gray-700">Quick, paperless & fully online</p>
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
            onClick={() => openModal('loan-against-securities')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Loan Against Securities Application
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
      title: "KYC Documents",
      items: ["PAN Card", "Aadhaar / Passport / Voter ID"],
      icon: "🆔",
    },
    {
      title: "Demat Account Details",
      items: ["Demat account statement", "Client master list"],
      icon: "📊",
    },
    {
      title: "Portfolio Proof",
      items: ["Latest holding statement", "Valuation report"],
      icon: "💹",
    },
    {
      title: "Others",
      items: ["Bank statements (6 months)", "Income proof (if required)"],
      icon: "📄",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Loan Against Securities</h2>
          <p className="mt-5 text-xl text-gray-700">Minimal & digital-friendly process</p>
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
            onClick={() => openModal('loan-against-securities')}
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Loan Against Securities?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Multiple lenders comparison</li>
              <li><span className="text-red-500">✗</span> Missing best rates & LTV</li>
              <li><span className="text-red-500">✗</span> Delayed approval</li>
              <li><span className="text-red-500">✗</span> Higher interest & charges</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Instant comparison 30+ lenders</li>
              <li><span className="text-green-400">✓</span> Best rates starting 9.5%</li>
              <li><span className="text-green-400">✓</span> Highest LTV & quick disbursal</li>
              <li><span className="text-green-400">✓</span> Fully digital & secure pledging</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('loan-against-securities')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Loan Against Securities Offer
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
      q: "What is the interest rate for Loan Against Securities?",
      a: "Interest rate starts from **9.5%** per annum (as of January 2026), depending on portfolio quality, LTV & lender.",
    },
    {
      q: "What is the maximum loan amount against securities?",
      a: "Up to **50–70%** of your securities value — depends on stock volatility, mutual fund type & lender policy.",
    },
    {
      q: "Do I need to sell my investments?",
      a: "No — you pledge the securities & continue to hold them. They remain invested and can grow.",
    },
    {
      q: "Is it an overdraft or term loan?",
      a: "Mostly offered as **overdraft facility** — draw & repay anytime, pay interest only on utilised amount.",
    },
    {
      q: "What securities are accepted?",
      a: "Listed equity shares, equity & debt mutual funds, bonds, debentures, and other approved demat securities.",
    },
    {
      q: "What documents are required?",
      a: "KYC (PAN/Aadhaar), demat account statement, latest holding & valuation report, and bank statements (if required).",
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
            onClick={() => openModal('loan-against-securities')}
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
export default function LoanAgainstSecuritiesPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfLoanAgainstSecurities />
      <LoanAgainstSecuritiesFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}