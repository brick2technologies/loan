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
    employment: "",
    goldType: "",
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
    console.log("Gold Loan Form Data:", formData);
    openModal('gold'); // or 'personal' if using unified modal flow
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Gold Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Lowest Rates • Instant Cash
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Unlock instant cash against your gold jewellery with the lowest interest rates in India.  
                Up to 85% LTV • Starting @8.25%* p.a. • Quick disbursal in minutes • No income proof needed
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/gold-loan-hero.png"
                alt="Person receiving instant cash against pledged gold jewellery"
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
                name="employment"
                value={formData.employment}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Employment Type *</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business-owner">Business Owner</option>
              </select>
              <select
                name="goldType"
                value={formData.goldType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Gold Type *</option>
                <option value="jewellery">Jewellery</option>
                <option value="coins">Coins</option>
                <option value="bars">Bars (if accepted)</option>
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
                I authorize sharing my information for gold loan processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is a Gold Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A gold loan is a secured loan where you pledge gold jewellery or coins as collateral to get instant cash. It offers low interest rates, quick disbursal, and flexible repayment — ideal for emergencies, business needs, weddings, or any urgent requirement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Lowest interest rates starting 8.25%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to 85% LTV (as per RBI guidelines)</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Instant disbursal in minutes</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No income proof or credit score check</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Flexible tenure & repayment options</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Medical emergencies, wedding expenses, business working capital, education fees, home renovation, debt consolidation, or any short-term cash need.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Medical Emergency", desc: "Urgent hospital bills" },
              { title: "Wedding & Festive", desc: "Marriage, Diwali expenses" },
              { title: "Business Needs", desc: "Working capital, stock purchase" },
              { title: "Education Fees", desc: "School/college payments" },
              { title: "Debt Consolidation", desc: "Pay off high-interest loans" },
              { title: "Home Improvement", desc: "Renovation & repairs" },
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
// TYPES OF GOLD LOANS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfGoldLoans() {
  const loanTypes = [
    {
      title: "Standard Gold Loan",
      description: "Regular loan against jewellery for any purpose.",
      interest: "8.25% – 12%*",
      amount: "Up to ₹50 Lakhs",
      tenure: "3–36 months",
      bestFor: "General needs",
      icon: "💍",
    },
    {
      title: "Bullet Repayment Loan",
      description: "Pay interest monthly, principal at end (max 12 months as per RBI).",
      interest: "8.5% – 11%*",
      amount: "Up to ₹1 Cr",
      tenure: "Up to 12 months",
      bestFor: "Short-term cash",
      icon: "💥",
    },
    {
      title: "High Value Gold Loan",
      description: "For larger amounts against high-purity gold.",
      interest: "9% – 13%*",
      amount: "₹50 Lakhs+",
      tenure: "6–36 months",
      bestFor: "Business use",
      icon: "🏦",
    },
    {
      title: "Overdraft Gold Loan",
      description: "Draw & repay as needed like overdraft facility.",
      interest: "9.5% – 14%*",
      amount: "Up to ₹2 Cr",
      tenure: "Up to 12 months",
      bestFor: "Flexible usage",
      icon: "🔄",
    },
    {
      title: "Agricultural Gold Loan",
      description: "Special low-rate loans for farmers.",
      interest: "7.5% – 10%*",
      amount: "As per need",
      tenure: "Up to 36 months",
      bestFor: "Farmers",
      icon: "🌾",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Gold Loans</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the perfect gold finance option — quick cash with minimal hassle.
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
                <div>
                  <span className="font-semibold text-[#0B0E14]">Interest</span>
                  <p className="text-gray-600">{loan.interest}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Amount</span>
                  <p className="text-gray-600">{loan.amount}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Tenure</span>
                  <p className="text-gray-600">{loan.tenure}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Best For</span>
                  <p className="text-gray-600">{loan.bestFor}</p>
                </div>
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
function GoldLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💰",
      title: "Lowest Interest Rates",
      desc: "Starting from <strong>8.25%* p.a.</strong> — cheaper than personal loans",
      highlight: "From 8.25%*",
    },
    {
      icon: "⚖️",
      title: "High LTV",
      desc: "Up to <strong>85%</strong> of gold value (RBI guideline for small loans)",
      highlight: "Up to 85% LTV",
    },
    {
      icon: "⚡",
      title: "Instant Disbursal",
      desc: "Cash in minutes after gold valuation",
      highlight: "Minutes Approval",
    },
    {
      icon: "📄",
      title: "Minimal Documentation",
      desc: "Just ID proof & gold — no income docs",
      highlight: "No Income Proof",
    },
    {
      icon: "🔒",
      title: "Safe Custody",
      desc: "Gold stored securely with insurance",
      highlight: "Insured Vaults",
    },
    {
      icon: "🔄",
      title: "Flexible Repayment",
      desc: "EMI, bullet, or interest-only options",
      highlight: "Multiple Options",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Gold Loan Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Instant cash • Low rates • No credit check • Secure & fast
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border ${
                i === 0
                  ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50"
                  : "border-gray-100"
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
            onClick={() => openModal('gold')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Gold Loan Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// INTEREST & CHARGES
// ────────────────────────────────────────────────────────────────────────────────
function LoanDetails() {
  const { openModal } = useLoanModal();

  return (
    <section id="interest" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Gold Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Lowest rates • High LTV • Instant funds</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹1,500 – ₹2 Crores+", highlight: "As per gold value" },
            { title: "Interest Rate", value: "8.25%* – 24%* p.a.", highlight: "Lowest from banks" },
            { title: "LTV Ratio", value: "Up to 85% (tiered)", highlight: "Max funding" },
            { title: "Tenure", value: "3 – 36 months", highlight: "Flexible" },
            { title: "Processing Fee", value: "0.5% – 2%*", highlight: "One-time" },
            { title: "Disbursal Time", value: "Minutes to hours*", highlight: "Super fast" },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md ${
                i === 1
                  ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50"
                  : ""
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
            onClick={() => openModal('gold')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Gold Loan Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// ELIGIBILITY
// ────────────────────────────────────────────────────────────────────────────────
function Eligibility() {
  const { openModal } = useLoanModal();

  return (
    <section id="eligibility" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Check Your Gold Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">Easy approval — gold is the only requirement</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age: 18–70 years</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Indian resident</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Gold jewellery/coins (18K+ purity, hallmarked preferred)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>No credit score or income proof needed</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6">Maximum Eligibility (approx.)</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Small Loans</div>
                <div className="text-3xl font-bold text-[#0B0E14]">Up to 85% LTV</div>
                <p className="text-gray-600 mt-2">&lt; ₹2.5 Lakhs</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Higher Amounts</div>
                <div className="text-3xl font-bold text-[#0B0E14]">Up to ₹2 Cr+</div>
                <p className="text-gray-600 mt-2">Depends on gold value</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('gold')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Gold Loan Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// HOW TO APPLY / HOW WE HELP
// ────────────────────────────────────────────────────────────────────────────────
function HowWeHelp() {
  const { openModal } = useLoanModal();

  const steps = [
    { number: 1, title: "Gold Valuation", desc: "Instant appraisal at branch/home" },
    { number: 2, title: "Best Rate Matching", desc: "Compare 30+ lenders for lowest rate" },
    { number: 3, title: "Document Check", desc: "Minimal KYC & gold pledge" },
    { number: 4, title: "Loan Approval", desc: "Quick sanction in minutes" },
    { number: 5, title: "Cash Disbursal", desc: "Instant transfer to account" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">We Make Gold Loans Super Simple</h2>
          <p className="mt-5 text-xl text-gray-700">Instant cash • Best rates • Zero hassle</p>
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
            onClick={() => openModal('gold')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Gold Loan Application
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// DOCUMENTS REQUIRED
// ────────────────────────────────────────────────────────────────────────────────
function DocumentsRequired() {
  const { openModal } = useLoanModal();

  const docs = [
    {
      title: "Identity & Address Proof",
      items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID"],
      icon: "🆔",
    },
    {
      title: "Gold Jewellery",
      items: ["18K+ purity", "Hallmarked preferred", "Ornaments/coins"],
      icon: "💍",
    },
    {
      title: "Photographs",
      items: ["Passport size photos of applicant"],
      icon: "📸",
    },
    {
      title: "Others (if applicable)",
      items: ["Existing loan statement", "KYC for co-applicant"],
      icon: "📄",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Gold Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Minimal — mostly just your gold!</p>
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
            onClick={() => openModal('gold')}
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
// WHY CHOOSE US
// ────────────────────────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const { openModal } = useLoanModal();

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Your Gold Loan?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Visiting multiple branches</li>
              <li><span className="text-red-500">✗</span> Missing lowest rate offers</li>
              <li><span className="text-red-500">✗</span> Delayed valuation & disbursal</li>
              <li><span className="text-red-500">✗</span> Higher interest & hidden charges</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Compare 30+ lenders instantly</li>
              <li><span className="text-green-400">✓</span> Guaranteed lowest rate</li>
              <li><span className="text-green-400">✓</span> Fastest valuation & disbursal</li>
              <li><span className="text-green-400">✓</span> Transparent & secure process</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('gold')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Gold Loan Offer
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────────────────────
function FAQ() {
  const { openModal } = useLoanModal();

  const faqs = [
    {
      q: "What is the lowest gold loan interest rate in 2026?",
      a: "As of January 2026, best rates start from **8.25%–9.5%** p.a. from public banks (SBI, PNB, etc.) for prime profiles. NBFCs range from 9.5%–24%+ depending on scheme & gold value.",
    },
    {
      q: "What is the maximum LTV for gold loans?",
      a: "As per RBI 2026 guidelines: Up to **85%** for loans <₹2.5 Lakhs, **80%** for ₹2.5–5 Lakhs, and **75%** for higher amounts. Depends on gold purity & lender.",
    },
    {
      q: "What is the maximum tenure for gold loans?",
      a: "Typically **3–36 months**; bullet repayment loans capped at **12 months** (renewable). Flexible options like monthly interest.",
    },
    {
      q: "Are there prepayment penalties?",
      a: "No penalties on most floating rate gold loans (RBI guideline). Some lenders may charge nominal fee for early closure.",
    },
    {
      q: "What gold is accepted for loan?",
      a: "18K+ purity jewellery & coins (hallmarked preferred). Bars/bullion may be accepted by select lenders. No gold-plated items.",
    },
    {
      q: "Do I need credit score or income proof?",
      a: "No — gold loan is secured against gold only. Minimal documentation & instant approval.",
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
            onClick={() => openModal('gold')}
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
export default function GoldLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfGoldLoans />
      <GoldLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}