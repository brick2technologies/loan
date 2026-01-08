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
    propertyType: "",
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
    console.log("Home Loan Form Data:", formData);
    openModal('home'); // or 'personal' — depending on your modal setup
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Home Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Lowest Rates • Longest Tenure
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Secure the lowest home loan interest rates from India's top banks & HFCs.  
                Up to 90% funding • Up to 30 years tenure • Tax benefits up to ₹3.5 Lakhs/year
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/home-loan.png"
                alt="Happy family outside new home with approved home loan"
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
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Property Type *</option>
                <option value="ready">Ready to Move</option>
                <option value="under-construction">Under Construction</option>
                <option value="plot">Plot + Construction</option>
                <option value="resale">Resale</option>
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
                I authorize sharing my information for home loan processing as per RBI guidelines & privacy policy.
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// OVERVIEW (unchanged content)
// ────────────────────────────────────────────────────────────────────────────────
function LoanOverview() {
  return (
    <section id="overview" className="py-16 px-6 bg-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is a Home Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A home loan is a secured loan used to purchase, construct, extend or renovate a residential property. The property itself acts as collateral, allowing banks to offer much lower interest rates and longer repayment periods compared to unsecured loans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Lowest interest rates starting 8.25%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>High loan amount — up to ₹15 Crores</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Long tenure up to 30 years</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to 90% funding (LTV)</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Tax benefits u/s 80C & 24(b)</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">Buying your dream home, constructing a house on owned plot, renovating/extending existing property, or transferring existing high-rate loan to save lakhs in interest.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Ready to Move Home", desc: "Purchase of ready flats/villas" },
              { title: "Under Construction", desc: "New projects by reputed builders" },
              { title: "Plot + Construction", desc: "Land purchase + house construction" },
              { title: "Home Extension", desc: "Add floors, renovate interiors" },
              { title: "Balance Transfer", desc: "Switch to lower interest rate" },
              { title: "Top-up Loan", desc: "Additional funds on existing loan" },
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
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
// TABS
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
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-[#0B0E14] text-white shadow-md scale-[1.04]" : "bg-white/85 text-[#1F2937] hover:bg-white hover:shadow"
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
// TYPES OF HOME LOANS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfHomeLoans() {
  const loanTypes = [
    { title: "Home Purchase Loan", description: "Finance for buying ready-to-move or resale residential property.", interest: "8.25% – 9.5%*", amount: "Up to ₹15 Cr", tenure: "Up to 30 years", bestFor: "First home buyers", icon: "🏡" },
    { title: "Construction Loan", description: "For self-construction on owned plot or under-construction projects.", interest: "8.4% – 9.8%*", amount: "Up to ₹10 Cr", tenure: "Up to 30 years", bestFor: "Custom homes", icon: "🏗️" },
    { title: "Plot + Construction Loan", description: "Combined loan for land purchase + house construction.", interest: "8.6% – 10.2%*", amount: "Up to ₹7 Cr", tenure: "Up to 25 years", bestFor: "Building dream house", icon: "🌳" },
    { title: "Home Extension/Improvement", description: "Renovation, interior work, additional floors or repairs.", interest: "8.75% – 11%*", amount: "Up to ₹75 Lakhs", tenure: "Up to 20 years", bestFor: "Existing homeowners", icon: "🛠️" },
    { title: "Balance Transfer Loan", description: "Transfer existing high-rate home loan to save on interest.", interest: "8.25% – 9.2%*", amount: "Outstanding amount", tenure: "Extend if needed", bestFor: "Reducing EMI", icon: "🔄" },
    { title: "Top-up / Additional Loan", description: "Extra funds against existing property for any purpose.", interest: "8.75% – 10.5%*", amount: "Up to 70-80% LTV", tenure: "Up to 20 years", bestFor: "Low-cost personal funds", icon: "⬆️" },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Home Loans</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Choose the perfect home loan product for your dream home journey.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loanTypes.map(loan => (
            <div key={loan.title} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{loan.icon}</div>
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
function HomeLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    { icon: "🏠", title: "Lowest Interest Rates", desc: "Starting from <strong>8.25%* p.a.</strong> — among the best rates in India", highlight: "From 8.25%*" },
    { icon: "💰", title: "High Loan Amount", desc: "Get funding up to <strong>₹15 Crores</strong> and 90% of property value", highlight: "Up to ₹15 Cr" },
    { icon: "📅", title: "Longest Tenure", desc: "Choose repayment up to <strong>30 years</strong> for comfortable EMIs", highlight: "Up to 30 Years" },
    { icon: "⚡", title: "Fast Processing", desc: "Most approvals in <strong>7-15 days</strong> with digital document submission", highlight: "7-15 Days" },
    { icon: "🛡️", title: "Tax Benefits", desc: "Save up to <strong>₹3.5 Lakhs/year</strong> under Sec 80C & 24(b)", highlight: "Big Tax Savings" },
    { icon: "🔄", title: "Balance Transfer", desc: "Switch your loan & save lakhs in interest", highlight: "Save Lakhs" },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Home Loan Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">Lowest rates • Maximum funding • Longest tenure • Maximum tax savings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={f.title} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border ${i === 0 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : "border-gray-100"}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl">{f.icon}</div>
                <h4 className="amplessoft text-2xl font-bold text-[#0B0E14]">{f.title}</h4>
              </div>
              <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: f.desc }} />
              <div className="bg-[#0B0E14]/5 text-[#0B0E14] px-5 py-2 rounded-xl font-bold">{f.highlight}</div>
            </div>
          ))}
        </div>

        {/* Added CTA at the bottom of features */}
        <div className="text-center mt-16">
          <button
            onClick={() => openModal('home')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Lowest Rate Home Loan Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Home Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Best terms • Transparent charges • Maximum savings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹5 Lakhs – ₹15 Crores", highlight: "Up to 90% LTV" },
            { title: "Interest Rate", value: "8.25%* – 10.5%* p.a.", highlight: "Lowest in market" },
            { title: "Tenure", value: "5 – 30 years", highlight: "Flexible EMIs" },
            { title: "Processing Fee", value: "0.5% – 1.5%*", highlight: "One-time" },
            { title: "Prepayment Charges", value: "Nil on floating rate", highlight: "Zero penalty" },
            { title: "Disbursal Time", value: "7 – 20 days*", highlight: "Fast process" },
          ].map((item, i) => (
            <div key={item.title} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md ${i === 1 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""}`}>
              <h3 className="amplessoft text-2xl font-bold text-[#0B0E14] mb-3">{item.title}</h3>
              <div className="text-3xl font-bold text-[#0B0E14] mb-2">{item.value}</div>
              <div className="mt-4 inline-block bg-[#0B0E14]/10 text-[#0B0E14] px-4 py-1.5 rounded-full text-sm font-medium">{item.highlight}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('home')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Check Your Home Loan Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Check Your Home Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">High approval rates even for complex profiles</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Age: 21-70 years (at loan maturity)</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Salaried: Minimum ₹25,000/month net salary</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Self-employed: 2+ years business/profession</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>CIBIL Score: 700+ preferred (650+ possible)</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6">Maximum Eligibility (approx.)</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Salaried</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹1 Cr+</div>
                <p className="text-gray-600 mt-2">Based on income & age</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Self Employed</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹75 Lakhs+</div>
                <p className="text-gray-600 mt-2">Based on ITR & business vintage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('home')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Home Loan Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// HOW TO APPLY / HOW WE HELP (unchanged content)
// ────────────────────────────────────────────────────────────────────────────────
function HowWeHelp() {
  const steps = [
    { number: 1, title: "Eligibility Check", desc: "Instant pre-approval across 40+ lenders" },
    { number: 2, title: "Best Offer Matching", desc: "Lowest rate & highest amount comparison" },
    { number: 3, title: "Document Collection", desc: "We collect & verify all property & income docs" },
    { number: 4, title: "Application Filing", desc: "Perfect application to avoid rejection" },
    { number: 5, title: "Disbursal Support", desc: "Follow-up till loan amount in your account" },
  ];
  const {openModal} = useLoanModal();

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">We Make Home Loans Simple</h2>
          <p className="mt-5 text-xl text-gray-700">Highest approval rate • Lowest rates • Zero stress</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(step => (
            <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0E14] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{step.number}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('home')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Home Loan Application
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// DOCUMENTS REQUIRED (unchanged content)
// ────────────────────────────────────────────────────────────────────────────────
function DocumentsRequired() {
  const { openModal } = useLoanModal();

  const docs = [
    { title: "Identity & Address Proof", items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID / Driving License"], icon: "🆔" },
    { title: "Income Proof", items: ["Last 3-6 months Salary Slips", "Form 16 / ITR (2 years)", "Business proof (GST/ITR)"], icon: "💼" },
    { title: "Bank Statements", items: ["Last 6 months salary/bank statements", "Clear salary credits preferred"], icon: "🏦" },
    { title: "Property Documents", items: ["Sale Agreement / Allotment Letter", "Approved Building Plan", "Title Deed / Encumbrance Certificate", "Property Tax Receipt"], icon: "🏠" },
    { title: "Others", items: ["Photographs", "Loan account statement (for BT)", "Cheque for processing fee"], icon: "📄" },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Home Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Most approvals completed with these standard documents</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map(doc => (
            <div key={doc.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl">{doc.icon}</div>
                <h3 className="amplessoft text-xl font-bold text-[#0B0E14]">{doc.title}</h3>
              </div>
              <ul className="space-y-3">
                {doc.items.map((item, i) => <li key={i} className="flex items-start gap-2"><span className="text-[#0B0E14]">•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('home')}
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
// WHY CHOOSE US (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const {openModal} = useLoanModal();
  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Your Home Loan?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Visiting multiple banks</li>
              <li><span className="text-red-500">✗</span> Missing lowest rate offers</li>
              <li><span className="text-red-500">✗</span> High rejection risk</li>
              <li><span className="text-red-500">✗</span> Paying lakhs extra in interest</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Compare 40+ lenders instantly</li>
              <li><span className="text-green-400">✓</span> Get the lowest rate guaranteed</li>
              <li><span className="text-green-400">✓</span> Highest approval chances</li>
              <li><span className="text-green-400">✓</span> Save lakhs in interest</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('home')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Home Loan Offer
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
    { q: "What is the current lowest home loan interest rate?", a: "As of 2026, the best floating rates start from **8.25%–8.50%** p.a. for prime profiles. Rates vary based on credit score, income & LTV." },
    { q: "What is the maximum home loan amount I can get?", a: "Up to **₹15 Crores** or 90% of property value (LTV), whichever is lower. Depends on your income, age & property location." },
    { q: "Can I get tax benefits on home loan?", a: "Yes! Up to **₹1.5 Lakh** u/s 80C (principal) + **₹2 Lakh** u/s 24(b) (interest) per year for self-occupied property." },
    { q: "Is there any prepayment penalty?", a: "No prepayment charges on **floating rate** home loans (as per RBI guidelines). Fixed rate loans may have charges." },
    { q: "Can I transfer my existing home loan?", a: "Yes! Balance transfer is very popular — switch to lower rate & save lakhs. Processing usually takes 15-25 days." },
    { q: "Do I need to visit the branch?", a: "Mostly **100% digital** — documents upload online. Some banks may require one physical verification." },
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
            onClick={() => openModal('home')}
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
export default function HomeLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfHomeLoans />
      <HomeLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}