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
    treatmentType: "",
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
    console.log("Medical Loan Form Data:", formData);
    openModal('medical'); // or 'personal' if using same modal flow
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Medical Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Lowest Rates • Instant Approval
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Cover any medical emergency or planned treatment with fast, affordable loans.  
                Up to ₹40 Lakhs • Starting @9.99%* p.a. • No collateral • Quick disbursal in hours
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/medical-loan-hero.png"
                alt="Family with patient receiving medical treatment after loan approval"
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
                name="treatmentType"
                value={formData.treatmentType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Treatment Type *</option>
                <option value="emergency">Emergency / Hospitalization</option>
                <option value="surgery">Surgery / Procedure</option>
                <option value="dental">Dental / Cosmetic</option>
                <option value="other">Other Medical Treatment</option>
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
                I authorize sharing my information for medical loan processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is a Medical Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A medical loan is an unsecured personal loan designed to cover emergency or planned medical expenses like hospitalization, surgeries, treatments, or diagnostics. It offers quick access to funds without collateral, helping you focus on health rather than finances.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Lowest interest rates starting 9.99%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to ₹40 Lakhs funding</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Flexible tenure up to 5–7 years</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Quick approval — often in minutes</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No collateral or guarantor required</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Emergency hospitalization, major surgeries, cancer treatment, organ transplants, dental procedures, cosmetic surgeries, IVF, or any health-related expense not covered by insurance.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Emergency Hospitalization", desc: "Sudden illness or accident" },
              { title: "Major Surgery", desc: "Heart, ortho, cancer procedures" },
              { title: "Dental / Cosmetic", desc: "Implants, smile makeovers" },
              { title: "Fertility Treatment", desc: "IVF & related procedures" },
              { title: "Critical Illness", desc: "Cancer, organ transplant" },
              { title: "Diagnostics & Tests", desc: "MRI, PET scans, advanced tests" },
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
// TYPES OF MEDICAL LOANS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfMedicalLoans() {
  const loanTypes = [
    {
      title: "Emergency Medical Loan",
      description: "Quick funds for sudden hospitalization, accidents, or ICU care.",
      interest: "9.99% – 12%*",
      amount: "Up to ₹20 Lakhs",
      tenure: "Up to 5 years",
      bestFor: "Urgent needs",
      icon: "🚑",
    },
    {
      title: "Surgery / Procedure Loan",
      description: "Finance major surgeries like heart, ortho, or cancer treatments.",
      interest: "10.5% – 13.5%*",
      amount: "Up to ₹40 Lakhs",
      tenure: "Up to 7 years",
      bestFor: "Planned operations",
      icon: "⚕️",
    },
    {
      title: "Dental / Cosmetic Treatment",
      description: "Cover implants, smile design, or aesthetic procedures.",
      interest: "11% – 15%*",
      amount: "Up to ₹10 Lakhs",
      tenure: "Up to 5 years",
      bestFor: "Elective treatments",
      icon: "🦷",
    },
    {
      title: "Fertility / IVF Loan",
      description: "Support IVF cycles, fertility treatments & related expenses.",
      interest: "10.99% – 14%*",
      amount: "Up to ₹15 Lakhs",
      tenure: "Up to 5 years",
      bestFor: "Family planning",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Critical Illness Loan",
      description: "Funds for cancer care, organ transplant, or chronic conditions.",
      interest: "10% – 13%*",
      amount: "Up to ₹30 Lakhs",
      tenure: "Up to 7 years",
      bestFor: "Long-term care",
      icon: "🩺",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Medical Loans</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Flexible financing options for every healthcare need — emergency or planned.
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
function MedicalLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💉",
      title: "Lowest Interest Rates",
      desc: "Starting from <strong>9.99%* p.a.</strong> — among the best for unsecured loans",
      highlight: "From 9.99%*",
    },
    {
      icon: "💰",
      title: "High Loan Amount",
      desc: "Get up to <strong>₹40 Lakhs</strong> to cover major treatments",
      highlight: "Up to ₹40 Lakhs",
    },
    {
      icon: "📅",
      title: "Flexible Tenure",
      desc: "Repay comfortably over <strong>up to 7 years</strong>",
      highlight: "Up to 7 Years",
    },
    {
      icon: "⚡",
      title: "Instant Approval",
      desc: "Pre-approved offers & disbursal in <strong>hours</strong> for emergencies",
      highlight: "Minutes Approval*",
    },
    {
      icon: "🛡️",
      title: "No Collateral",
      desc: "Unsecured loan — no assets or guarantor needed",
      highlight: "Zero Security",
    },
    {
      icon: "🔄",
      title: "Top-up Facility",
      desc: "Additional funds if treatment costs increase",
      highlight: "Flexible Funding",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Medical Loan Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Fast funds • Lowest rates • No security • Focus on recovery
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
            onClick={() => openModal('medical')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Medical Loan Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Medical Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Affordable terms • Transparent charges • Fast support</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹50,000 – ₹40 Lakhs", highlight: "As per need" },
            { title: "Interest Rate", value: "9.99%* – 15%* p.a.", highlight: "Lowest for prime profiles" },
            { title: "Tenure", value: "6 months – 7 years", highlight: "Easy EMIs" },
            { title: "Processing Fee", value: "Up to 3%*", highlight: "One-time" },
            { title: "Prepayment Charges", value: "Nil on most floating loans", highlight: "Zero penalty" },
            { title: "Disbursal Time", value: "Hours to 2 days*", highlight: "Emergency ready" },
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
            onClick={() => openModal('medical')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Medical Loan Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Check Your Medical Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">High approval even in urgent situations</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age: 21-60 years (at maturity)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Salaried: Minimum ₹20,000–25,000/month net</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Self-employed: 1–2 years stable income</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>CIBIL Score: 700+ preferred (650+ possible)</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6">Maximum Eligibility (approx.)</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Salaried</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹20–40 Lakhs</div>
                <p className="text-gray-600 mt-2">Based on income & profile</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Self Employed</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹10–25 Lakhs</div>
                <p className="text-gray-600 mt-2">Based on ITR & stability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('medical')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Medical Loan Eligibility Now
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
    { number: 1, title: "Instant Check", desc: "Pre-approval across 30+ lenders" },
    { number: 2, title: "Best Rate Matching", desc: "Lowest rate & suitable amount comparison" },
    { number: 3, title: "Minimal Docs", desc: "Digital KYC & income proof upload" },
    { number: 4, title: "Fast Processing", desc: "Quick verification & approval" },
    { number: 5, title: "Disbursal", desc: "Funds in account — start treatment immediately" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">We Make Medical Loans Hassle-Free</h2>
          <p className="mt-5 text-xl text-gray-700">Fastest support • Best rates • Focus on health</p>
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
            onClick={() => openModal('medical')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Medical Loan Application
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
      title: "Income Proof",
      items: ["Last 3-6 months Salary Slips", "Form 16 / ITR (1-2 years)", "Business proof"],
      icon: "💼",
    },
    {
      title: "Bank Statements",
      items: ["Last 6 months statements", "Salary credits visible"],
      icon: "🏦",
    },
    {
      title: "Medical Documents",
      items: ["Doctor's estimate / quotation", "Hospital bill / admission note (if available)"],
      icon: "🩺",
    },
    {
      title: "Others",
      items: ["Photographs", "Cheque for processing fee", "Treatment details"],
      icon: "📄",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Medical Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Minimal & mostly digital — fast process</p>
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
            onClick={() => openModal('medical')}
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Your Medical Loan?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Multiple bank visits in emergency</li>
              <li><span className="text-red-500">✗</span> Missing lowest rate deals</li>
              <li><span className="text-red-500">✗</span> Delay in approval & disbursal</li>
              <li><span className="text-red-500">✗</span> Higher interest burden</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Instant comparison 30+ lenders</li>
              <li><span className="text-green-400">✓</span> Guaranteed lowest rate</li>
              <li><span className="text-green-400">✓</span> Fastest approval & disbursal</li>
              <li><span className="text-green-400">✓</span> Save on interest — focus on health</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('medical')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Medical Loan Offer
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
      q: "What is the lowest medical loan interest rate in 2026?",
      a: "As of January 2026, best rates start from **9.99%–10.99%** p.a. for prime profiles with good credit. Rates vary by lender, income, and CIBIL score (higher for average profiles).",
    },
    {
      q: "How much medical loan can I get?",
      a: "Up to **₹40 Lakhs** (or more in special cases), depending on income, credit score, and lender. No upper limit for high-income profiles.",
    },
    {
      q: "What is the maximum tenure for medical loans?",
      a: "Up to **5–7 years** depending on lender & amount — longer tenure means lower EMIs.",
    },
    {
      q: "Are there prepayment penalties?",
      a: "No penalties on most **floating rate** medical loans (RBI rule). Fixed-rate may have nominal charges.",
    },
    {
      q: "Can I get a loan for planned treatment?",
      a: "Yes! Medical loans cover both emergencies (hospitalization) and planned procedures (surgery, IVF, dental, etc.).",
    },
    {
      q: "Do I need to visit the branch?",
      a: "Mostly **100% digital** — upload docs online. Some lenders may need one verification.",
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
            onClick={() => openModal('medical')}
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
export default function MedicalLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfMedicalLoans />
      <MedicalLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}