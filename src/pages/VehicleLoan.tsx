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
    vehicleType: "",
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
    console.log("Vehicle Loan Form Data:", formData);
    openModal('vehicle'); // or 'personal' if you use the same modal flow
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Vehicle Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Lowest Rates • Fast Approval
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Drive home your dream car, bike or commercial vehicle with the lowest interest rates in India.  
                Up to 100% funding • Up to 7 years tenure for cars • Quick approval in 30 minutes*
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/vehicle-loan-hero.png"
                alt="Happy family with new car after vehicle loan approval"
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
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Vehicle Type *</option>
                <option value="car">Car / SUV</option>
                <option value="bike">Two Wheeler / Bike</option>
                <option value="commercial">Commercial Vehicle</option>
                <option value="used">Used Vehicle</option>
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
                I authorize sharing my information for vehicle loan processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is a Vehicle Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A vehicle loan is a secured loan used to purchase a new or used car, bike, SUV or commercial vehicle. The vehicle itself acts as collateral, enabling banks & NBFCs to offer competitive interest rates and flexible tenures compared to personal loans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Lowest interest rates starting 8.25%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to 100% on-road funding for new vehicles</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Flexible tenure up to 7 years (cars) / 4 years (bikes)</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Quick approval — often in 30 minutes*</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>No prepayment charges on most floating rate loans</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Buying your first car or upgrading to SUV, purchasing premium bike/scooter, financing electric vehicle, buying commercial vehicle for business, or refinancing existing high-rate vehicle loan.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "New Car / SUV", desc: "Brand new vehicles from showrooms" },
              { title: "Two Wheeler", desc: "Bike, scooter, electric two-wheeler" },
              { title: "Used Vehicle", desc: "Pre-owned cars & bikes" },
              { title: "Commercial Vehicle", desc: "Vans, trucks for business use" },
              { title: "Refinance / BT", desc: "Switch to lower interest rate" },
              { title: "Electric Vehicle", desc: "Eco-friendly cars & bikes" },
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
// TYPES OF VEHICLE LOANS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfVehicleLoans() {
  const loanTypes = [
    {
      title: "New Car Loan",
      description: "Finance for brand new cars, SUVs & MUVs from showrooms.",
      interest: "8.25% – 9.5%*",
      amount: "Up to ₹1.5 Cr",
      tenure: "Up to 7 years",
      bestFor: "Family & first-time buyers",
      icon: "🚗",
    },
    {
      title: "Two Wheeler Loan",
      description: "For bikes, scooters, superbikes & electric two-wheelers.",
      interest: "10% – 14%*",
      amount: "Up to ₹30 Lakhs",
      tenure: "Up to 4 years",
      bestFor: "Daily commute & youth",
      icon: "🏍️",
    },
    {
      title: "Used Vehicle Loan",
      description: "Pre-owned cars & bikes (up to 5–7 years old).",
      interest: "10.5% – 15%*",
      amount: "Up to 85% of value",
      tenure: "Up to 5 years",
      bestFor: "Budget buyers",
      icon: "🔄",
    },
    {
      title: "Commercial Vehicle Loan",
      description: "Vans, tempos, trucks for business use.",
      interest: "9% – 13%*",
      amount: "Up to ₹10 Cr+",
      tenure: "Up to 7 years",
      bestFor: "Business owners",
      icon: "🚚",
    },
    {
      title: "Balance Transfer / Refinance",
      description: "Transfer existing high-rate vehicle loan to save interest.",
      interest: "8.5% – 10%*",
      amount: "Outstanding amount",
      tenure: "Extend if needed",
      bestFor: "Reducing EMI",
      icon: "↔️",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Vehicle Loans</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the right vehicle finance solution for your wheels — new or pre-owned.
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
function VehicleLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💰",
      title: "Lowest Interest Rates",
      desc: "Starting from <strong>8.25%* p.a.</strong> for new cars — best rates in market",
      highlight: "From 8.25%*",
    },
    {
      icon: "🚗",
      title: "Up to 100% Funding",
      desc: "Full on-road price financing for new cars & bikes",
      highlight: "100% On-Road",
    },
    {
      icon: "📅",
      title: "Flexible Tenure",
      desc: "Up to <strong>7 years</strong> for cars & 4 years for bikes",
      highlight: "Up to 7 Years",
    },
    {
      icon: "⚡",
      title: "Instant Approval",
      desc: "Pre-approved offers & disbursal in <strong>hours</strong> for many profiles",
      highlight: "30 Min Approval*",
    },
    {
      icon: "🛡️",
      title: "Minimal Documentation",
      desc: "Quick digital process with basic KYC & income proof",
      highlight: "Paperless Process",
    },
    {
      icon: "🔄",
      title: "Balance Transfer",
      desc: "Switch & save thousands in interest on existing loans",
      highlight: "Save Thousands",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Vehicle Loan Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Lowest rates • Maximum funding • Fastest approval • Zero hassle
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
            onClick={() => openModal('vehicle')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Vehicle Loan Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Vehicle Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Best terms • Transparent charges • Quick disbursal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹1 Lakh – ₹1.5 Crores+", highlight: "Up to 100% funding" },
            { title: "Interest Rate", value: "8.25%* – 14%* p.a.", highlight: "Lowest for new cars" },
            { title: "Tenure", value: "1 – 7 years", highlight: "Flexible EMIs" },
            { title: "Processing Fee", value: "0.5% – 2%*", highlight: "One-time" },
            { title: "Prepayment Charges", value: "Nil on most floating loans", highlight: "Zero penalty" },
            { title: "Disbursal Time", value: "Same day – 7 days*", highlight: "Super fast" },
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
            onClick={() => openModal('vehicle')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Get Your Vehicle Loan Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Check Your Vehicle Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">High approval rates for salaried & self-employed</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age: 21-65/70 years (at loan maturity)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Salaried: Minimum ₹15,000–25,000/month net salary</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Self-employed: 1–2 years business/profession</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>CIBIL Score: 650+ preferred (700+ for best rates)</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6">Maximum Eligibility (approx.)</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Salaried</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹50 Lakhs+</div>
                <p className="text-gray-600 mt-2">Based on income & profile</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Self Employed</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹30 Lakhs+</div>
                <p className="text-gray-600 mt-2">Based on ITR & vintage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('vehicle')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Vehicle Loan Eligibility Now
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
    { number: 2, title: "Best Deal Matching", desc: "Lowest rate & highest funding comparison" },
    { number: 3, title: "Document Upload", desc: "Digital KYC & income proof submission" },
    { number: 4, title: "Application Processing", desc: "Fast verification & approval" },
    { number: 5, title: "Disbursal", desc: "Direct payment to dealer — drive away same day" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">We Make Vehicle Loans Super Easy</h2>
          <p className="mt-5 text-xl text-gray-700">Fastest approval • Best rates • Drive away today</p>
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
            onClick={() => openModal('vehicle')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Vehicle Loan Application
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
      items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID / Driving License"],
      icon: "🆔",
    },
    {
      title: "Income Proof",
      items: ["Last 3-6 months Salary Slips", "Form 16 / ITR (1-2 years)", "Business proof (GST/ITR)"],
      icon: "💼",
    },
    {
      title: "Bank Statements",
      items: ["Last 6 months salary/bank statements", "Clear salary credits preferred"],
      icon: "🏦",
    },
    {
      title: "Vehicle Documents",
      items: ["Proforma Invoice", "Vehicle Quotation", "Insurance copy (post disbursal)"],
      icon: "🚗",
    },
    {
      title: "Others",
      items: ["Photographs", "Cheque for processing fee", "Existing loan statement (for BT)"],
      icon: "📄",
    },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Vehicle Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Most approvals done with minimal digital documents</p>
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
            onClick={() => openModal('vehicle')}
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Your Vehicle Loan?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Visiting multiple dealers & banks</li>
              <li><span className="text-red-500">✗</span> Missing best rate offers</li>
              <li><span className="text-red-500">✗</span> Higher processing time</li>
              <li><span className="text-red-500">✗</span> Paying extra interest for years</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Compare 30+ lenders instantly</li>
              <li><span className="text-green-400">✓</span> Guaranteed lowest rate</li>
              <li><span className="text-green-400">✓</span> Highest approval chances</li>
              <li><span className="text-green-400">✓</span> Save thousands in interest</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('vehicle')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Vehicle Loan Offer
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
      q: "What is the lowest vehicle loan interest rate in 2026?",
      a: "As of 2026, best rates for new car loans start from **8.25%–9.0%** p.a. for prime profiles. Two-wheeler loans usually start from 10% onwards. Rates depend on credit score, vehicle type & LTV.",
    },
    {
      q: "Can I get 100% funding on a new car?",
      a: "Yes! Many banks offer up to **100%** of on-road price for new cars & bikes (subject to profile & vehicle). Used vehicles usually get 75–85% funding.",
    },
    {
      q: "What is the maximum tenure for car loans?",
      a: "Up to **7 years** for cars/SUVs and **4–5 years** for two-wheelers. Longer tenure helps reduce monthly EMI.",
    },
    {
      q: "Are there prepayment penalties?",
      a: "No prepayment charges on most **floating rate** vehicle loans (RBI guideline). Fixed rate loans may have nominal charges.",
    },
    {
      q: "Can I transfer my existing vehicle loan?",
      a: "Yes! Balance transfer is popular — switch to lower rate & save on interest. Process usually takes 7–15 days.",
    },
    {
      q: "Do I need to visit the branch?",
      a: "Mostly **digital** — upload documents online. Some lenders may require one physical verification for disbursal.",
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
            onClick={() => openModal('vehicle')}
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
export default function VehicleLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfVehicleLoans />
      <VehicleLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}