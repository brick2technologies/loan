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
    equipmentType: "",
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
    console.log("Equipment Financing Form Data:", formData);
    openModal('equipment');
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Equipment Financing
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Fund Your Machinery • Easy Terms
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Finance new machinery, equipment, tools, or technology upgrades for your business with flexible long-term funding.  
                ₹1 Lakh – ₹90 Lakhs • Starting @12%* p.a. • Tenure up to 60 months • No collateral • Quick online approval
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/equipment-financing-hero.png"
                alt="Manufacturing unit with new machinery financed through equipment loan"
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
                <option value="construction">Construction</option>
                <option value="services">Services / IT</option>
                <option value="other">Other</option>
              </select>
              <select
                name="equipmentType"
                value={formData.equipmentType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Equipment Type *</option>
                <option value="machinery">Machinery & Tools</option>
                <option value="vehicles">Commercial Vehicles</option>
                <option value="technology">IT & Tech Equipment</option>
                <option value="other">Other Equipment</option>
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
                I authorize sharing my information for equipment financing processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is Equipment Financing?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Equipment financing (also known as machinery loan) is a long-term funding solution that helps businesses purchase essential machinery, equipment, tools, or technology upgrades without paying the full amount upfront. It supports productivity enhancement and business growth with flexible repayment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Loan amount ₹1 Lakh – ₹90 Lakhs</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Interest rate starting @12%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Tenure 12–60 months</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No collateral required</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Fast approval & disbursal</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Purchase of manufacturing machinery, construction equipment, commercial vehicles, IT hardware/software, medical/diagnostic tools, or any productive asset that improves business efficiency.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Manufacturing Machinery", desc: "CNC machines, production lines" },
              { title: "Construction Equipment", desc: "Excavators, cranes, heavy tools" },
              { title: "Commercial Vehicles", desc: "Trucks, delivery vans" },
              { title: "IT & Technology", desc: "Servers, computers, software" },
              { title: "Medical / Diagnostic Tools", desc: "MRI, lab equipment" },
              { title: "Other Productive Assets", desc: "Tools & equipment for growth" },
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
// TYPES OF EQUIPMENT FINANCING (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfEquipmentFinancing() {
  const loanTypes = [
    {
      title: "Manufacturing Machinery Financing",
      description: "Fund CNC machines, production lines, or industrial tools.",
      interest: "Starting 12%*",
      amount: "₹1 Lakh – ₹90 Lakhs",
      tenure: "12–60 months",
      bestFor: "Manufacturing units",
      icon: "🏭",
    },
    {
      title: "Construction Equipment Financing",
      description: "Finance excavators, cranes, bulldozers, or heavy machinery.",
      interest: "Starting 12%*",
      amount: "₹1 Lakh – ₹90 Lakhs",
      tenure: "12–60 months",
      bestFor: "Construction firms",
      icon: "🚧",
    },
    {
      title: "Commercial Vehicle Financing",
      description: "Fund trucks, delivery vans, or fleet vehicles for logistics.",
      interest: "Starting 12%*",
      amount: "₹1 Lakh – ₹90 Lakhs",
      tenure: "12–60 months",
      bestFor: "Logistics & transport",
      icon: "🚚",
    },
    {
      title: "IT & Technology Equipment Financing",
      description: "Finance servers, computers, software licenses, or digital tools.",
      interest: "Starting 12%*",
      amount: "₹1 Lakh – ₹90 Lakhs",
      tenure: "12–60 months",
      bestFor: "Tech & service businesses",
      icon: "💻",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Equipment Financing</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Tailored financing options for the machinery and equipment your business needs.
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
function EquipmentFinancingFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "📏",
      title: "Customized Loan Amount",
      desc: "Funding from <strong>₹1 Lakh – ₹90 Lakhs</strong> based on equipment cost",
      highlight: "₹1L – ₹90L",
    },
    {
      icon: "📅",
      title: "Flexible Tenure",
      desc: "Repay comfortably over <strong>12 to 60 months</strong>",
      highlight: "Up to 60 Months",
    },
    {
      icon: "💳",
      title: "Convenient EMI Options",
      desc: "Fixed or Structured EMI to match cash flow",
      highlight: "Flexible EMIs",
    },
    {
      icon: "📄",
      title: "Minimum Documentation",
      desc: "Apply with basic documents — no lengthy process",
      highlight: "Minimal Docs",
    },
    {
      icon: "⚡",
      title: "Quick Approval & Disbursal",
      desc: "Fast processing & funds directly to vendor/account",
      highlight: "Fast Funding",
    },
    {
      icon: "🛡️",
      title: "No Collateral Required",
      desc: "Unsecured financing — no asset pledging",
      highlight: "Zero Security",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Equipment Financing Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Fund your machinery • Flexible repayment • Fast & easy • No collateral
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
            onClick={() => openModal('equipment')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Equipment Financing Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Equipment Financing at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Affordable • Transparent • Growth-focused</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹1 Lakh – ₹90 Lakhs", highlight: "As per equipment" },
            { title: "Interest Rate", value: "Starting @12%* p.a.", highlight: "Competitive" },
            { title: "Tenure", value: "12 – 60 months", highlight: "Flexible" },
            { title: "Processing Fee", value: "Up to 3% + GST*", highlight: "One-time" },
            { title: "Part-prepayment / Foreclosure", value: "4.5% of amount", highlight: "Applicable" },
            { title: "Penal Charges", value: "3% p.m. on default", highlight: "On overdue" },
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
            onClick={() => openModal('equipment')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Equipment Financing Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Equipment Financing Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">Simple criteria for businesses & professionals</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Indian citizen / Registered business</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Minimum 1–2 years in business (for owners)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Minimum CIBIL score 675</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age 21–65 years</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('equipment')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Equipment Financing Eligibility Now
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
    { number: 1, title: "Apply Online", desc: "Fill basic details & get OTP" },
    { number: 2, title: "Upload Documents", desc: "KYC & financials digitally" },
    { number: 3, title: "Quick Verification", desc: "Eligibility & credit check" },
    { number: 4, title: "Approval & Sanction", desc: "Get loan offer in minutes" },
    { number: 5, title: "Disbursal", desc: "Funds to vendor/account instantly" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">How to Apply for Equipment Financing</h2>
          <p className="mt-5 text-xl text-gray-700">Quick, simple & 100% online process</p>
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
            onClick={() => openModal('equipment')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Equipment Financing Application
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
      items: ["PAN Card", "Aadhaar / Voter ID / Passport / Driving License"],
      icon: "🆔",
    },
    {
      title: "Business Proof",
      items: ["GST Registration", "Trade License", "Partnership Deed / Proprietorship Declaration"],
      icon: "🏢",
    },
    {
      title: "Financial Documents",
      items: ["Last 2 years ITR", "Audited Balance Sheet & P&L", "Bank statements (6 months)"],
      icon: "📊",
    },
    {
      title: "Equipment Details",
      items: ["Quotation / Proforma Invoice", "Equipment specifications"],
      icon: "🛠️",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Equipment Financing</h2>
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
            onClick={() => openModal('equipment')}
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Equipment Financing?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Multiple lenders comparison</li>
              <li><span className="text-red-500">✗</span> Missing best rates & offers</li>
              <li><span className="text-red-500">✗</span> Delayed approval & disbursal</li>
              <li><span className="text-red-500">✗</span> Higher interest burden</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Instant comparison across lenders</li>
              <li><span className="text-green-400">✓</span> Competitive rates starting 12%</li>
              <li><span className="text-green-400">✓</span> Quick online approval & disbursal</li>
              <li><span className="text-green-400">✓</span> Minimal documentation & no collateral</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('equipment')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Equipment Financing Offer
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
      q: "What is the interest rate for Equipment Financing?",
      a: "Interest rate starts from **12%** per annum (as of January 2026), depending on your business profile, CIBIL score & loan amount.",
    },
    {
      q: "What is the maximum equipment financing amount?",
      a: "Up to **₹90 Lakhs** — based on equipment cost, business turnover, financials, and repayment capacity.",
    },
    {
      q: "What is the tenure for equipment financing?",
      a: "Flexible tenure from **12 to 60 months** — choose what suits your cash flow.",
    },
    {
      q: "Is collateral required for equipment financing?",
      a: "No — Tata Capital offers **unsecured** equipment financing with no collateral.",
    },
    {
      q: "What documents are required?",
      a: "KYC (PAN/Aadhaar), business proof (GST/Trade License), last 2 years ITR, audited financials, 6 months bank statements & equipment quotation.",
    },
    {
      q: "Who can apply for Equipment Financing?",
      a: "Business owners (minimum 1–2 years vintage) & salaried individuals with good credit score (675+ preferred).",
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
            onClick={() => openModal('equipment')}
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
export default function EquipmentFinancingPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfEquipmentFinancing />
      <EquipmentFinancingFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}