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
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    // 🔜 API integration will go here
    console.log("Form Data:", formData);
    openModal('personal');
  };

  return (
    <main className="relative bg-[#E5E7EB] overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Personal Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Quick, Simple & Transparent
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Get instant personal loans from India's top banks & NBFCs.  
                We take care of eligibility, documents & approval — so you can focus on what truly matters.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/personal-loan.png"
                alt="Happy person with approved personal loan"
                className="
                  w-full max-w-[680px] xl:max-w-[820px]
                  h-auto object-contain
                  drop-shadow-2xl
                  rounded-xl
                "
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating / Horizontal Form */}
      <div className="relative z-20 px-4 sm:px-6 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pb-16 md:pb-20">
        <div className="
          max-w-5xl lg:max-w-6xl mx-auto
          bg-white rounded-2xl md:rounded-3xl
          shadow-2xl
          p-6 sm:p-8 md:p-10
          backdrop-blur-sm
        ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              />

              <select
                name="employment"
                value={formData.employment}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              >
                <option value="">Employment Type *</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business-owner">Business Owner</option>
              </select>

              <button
                type="submit"
                disabled={!formData.consent}
                className={`
                  rounded-xl px-6 md:px-10 py-3.5 text-base font-semibold transition-all duration-300
                  ${
                    formData.consent
                      ? "bg-[#0B0E14] text-[#E5E7EB] hover:bg-black hover:shadow-xl hover:scale-[1.02]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Apply Now
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
                I authorize and consent to share/fetch my information for loan processing 
                as per applicable RBI guidelines and privacy policy.
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// LOAN OVERVIEW
// ────────────────────────────────────────────────────────────────────────────────
function LoanOverview() {
  return (
    <section id="overview" className="py-16 px-6 bg-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            What Is a Personal Loan?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A personal loan is an unsecured loan that gives you quick access to funds without the need to provide any collateral.
            It's a flexible financial solution designed to help you cover life's important moments and unexpected expenses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">
                Key Features of Personal Loans
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>No collateral or security required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Fast approval & quick disbursal (often within 24-48 hours)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Fixed interest rates & predictable EMIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Flexible loan amounts (usually ₹50,000 – ₹20,00,000)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Repayment tenure from 12 to 60 months</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">
                Most Common Uses
              </h3>
              <p className="text-gray-600">
                People most often take personal loans for planned life events or to manage sudden financial needs without touching their savings.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Medical Emergencies", desc: "Cover urgent treatments, surgeries, or hospital bills" },
              { title: "Wedding Expenses", desc: "Fund your dream wedding without financial stress" },
              { title: "Travel & Vacations", desc: "Plan your dream holiday or family trip" },
              { title: "Higher Education", desc: "Pay for courses, certifications, or children's education" },
              { title: "Debt Consolidation", desc: "Combine high-interest debts into one affordable EMI" },
              { title: "Home Renovation", desc: "Redesign or upgrade your living space" },
            ].map((item) => (
              <div
                key={item.title}
                className="amplessoft bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg font-medium">
            Whether it's a planned milestone or an unexpected need — a personal loan gives you the freedom to manage life on your terms.
          </p>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// TABS NAVIGATION
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
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= buffer && rect.bottom > buffer) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const headerOffset = 100;
    const y = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-18 z-40 bg-[#E5E7EB] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 -mx-1 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`
                flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                transition-all duration-200 whitespace-nowrap
                ${activeTab === tab.id
                  ? "bg-[#0B0E14] text-white shadow-md scale-[1.04]"
                  : "bg-white/85 text-[#1F2937] hover:bg-white hover:shadow hover:scale-[1.02]"}
              `}
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
// TYPES OF PERSONAL LOANS
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfPersonalLoans() {
  const loanTypes = [
    {
      title: "Standard / General Personal Loan",
      description: "The most common type — unsecured loan for any personal purpose like marriage, travel, medical, or shopping. Flexible usage with no end-use proof required.",
      interest: "10.5% – 24% p.a.",
      amount: "₹50,000 – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "Salaried & self-employed with good credit",
      icon: "🌟",
    },
    {
      title: "Marriage Loan",
      description: "Specialized personal loan with higher amounts and slightly relaxed eligibility for wedding expenses — venue, catering, jewellery, honeymoon, etc.",
      interest: "10.8% – 18% p.a.",
      amount: "₹1 Lakh – ₹50 Lakhs",
      tenure: "12 – 72 months",
      bestFor: "Weddings & big family events",
      icon: "💍",
    },
    {
      title: "Medical / Emergency Loan",
      description: "Quick approval loans for urgent medical treatments, surgeries, hospital bills. Many lenders offer faster disbursal for genuine medical needs.",
      interest: "11% – 22% p.a.",
      amount: "₹50,000 – ₹25 Lakhs",
      tenure: "12 – 48 months",
      bestFor: "Unexpected medical emergencies",
      icon: "🏥",
    },
    {
      title: "Debt Consolidation Loan",
      description: "Combine multiple high-interest loans/credit card dues into one single loan with lower interest rate and one manageable EMI.",
      interest: "10.5% – 18% p.a.",
      amount: "₹1 Lakh – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "People with multiple EMIs / credit card debt",
      icon: "🔄",
    },
    {
      title: "Home Renovation Loan",
      description: "Unsecured loan for home improvement, interior work, kitchen/bathroom renovation, extension, or repairs — no property mortgage needed.",
      interest: "11% – 20% p.a.",
      amount: "₹3 Lakhs – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "House owners wanting to upgrade living space",
      icon: "🏠",
    },
    {
      title: "Education / Skill Loan",
      description: "Personal loan for higher education, professional courses, certifications, coaching classes, or children's education (not covered under education loan schemes).",
      interest: "10.75% – 19% p.a.",
      amount: "₹50,000 – ₹30 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "Students, professionals, upskilling",
      icon: "📚",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Different Types of Personal Loans
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the right personal loan that perfectly matches your need — fast, flexible, and tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loanTypes.map((loan) => (
            <div
              key={loan.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {loan.icon}
                </div>
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">
                  {loan.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base mb-6 leading-relaxed flex-1">{loan.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold text-[#0B0E14]">Interest</span><p className="text-gray-600">{loan.interest}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Amount</span><p className="text-gray-600">{loan.amount}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Tenure</span><p className="text-gray-600">{loan.tenure}</p></div>
                <div><span className="font-semibold text-[#0B0E14]">Best For</span><p className="text-gray-600">{loan.bestFor}</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Not sure which type is right for you?{" "}
            <span className="font-semibold text-[#0B0E14]">Fill the form above — we'll match you with the best option in 2 minutes!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// PERSONAL LOAN FEATURES & BENEFITS
// ────────────────────────────────────────────────────────────────────────────────
function PersonalLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💰",
      title: "High Loan Amounts",
      desc: "Access up to <strong>₹10,00,000</strong> to cover significant expenses like home renovations, hospital bills, or dream weddings",
      highlight: "Up to ₹10 Lakhs",
    },
    {
      icon: "📈",
      title: "Competitive Interest Rates",
      desc: "Starting at <strong>11%* p.a.</strong> — among the best rates making your EMI payments easier on your pocket",
      highlight: "From 11%* p.a.",
    },
    {
      icon: "📅",
      title: "Flexible Repayment Tenure",
      desc: "Choose from <strong>12 to 60 months</strong> — pick the tenure that perfectly fits your monthly budget",
      highlight: "12-60 Months",
    },
    {
      icon: "⚡",
      title: "Lightning Quick Approvals",
      desc: "Get approved in <strong>few hours to days</strong> with fast disbursal once documents are verified",
      highlight: "Hours to Days",
    },
    {
      icon: "🛡️",
      title: "100% Collateral-Free",
      desc: "No security or collateral required — unsecured loan for all your personal financial needs",
      highlight: "No Collateral",
    },
    {
      icon: "📱",
      title: "Seamless Digital Process",
      desc: "Apply in <strong>just a few clicks</strong> via our user-friendly website or Shriram One app",
      highlight: "100% Online",
    },
  ];

  const benefits = [
    {
      icon: "📄",
      title: "Minimal Documentation",
      desc: "Only basic paperwork required — Aadhaar, PAN, salary slips/bank statements simplify & speed up processing",
    },
    {
      icon: "🗺️",
      title: "2800+ Branches Nationwide",
      desc: "Apply online OR visit any of our <strong>2800+ branches</strong> across India for in-person support",
    },
    {
      icon: "🧮",
      title: "Free EMI Calculator",
      desc: "Use our accurate personal loan EMI calculator to plan your monthly payments and total interest outgo",
    },
    {
      icon: "🎯",
      title: "Versatile Usage",
      desc: "No end-use restrictions — spend on weddings, medical emergencies, education, travel, home renovation & more",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0E14] leading-tight">
            Personal Loan Features & Benefits
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Designed for all your financial needs — weddings, education, medical emergencies & more. 
            Quick approvals, competitive rates, and hassle-free process.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] text-center mb-12">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100
                  flex flex-col group ${index === 1 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""}
                `}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">{feature.title}</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1" dangerouslySetInnerHTML={{ __html: feature.desc }} />
                <div className="bg-[#0B0E14]/5 text-[#0B0E14] px-5 py-2 rounded-xl font-bold text-lg">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] text-center mb-12">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0B0E14] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h4 className="amplessoft text-xl font-bold text-[#0B0E14] mb-3">{benefit.title}</h4>
                  <p className="text-gray-700 text-base leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto mb-10">
            <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-4">Calculate Your EMI Now</h3>
            <p className="text-lg text-gray-700 mb-8">Use our free, accurate personal loan EMI calculator to plan your exact monthly payments</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('personal')}
                className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={() => openModal('personal')}
                className="border-2 border-[#0B0E14] text-[#0B0E14] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0B0E14]/5 transition-all"
              >
                Check EMI & Apply
              </button>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14]">
            Trusted by lakhs of Indians • <strong>Quick. Safe. Simple.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// LOAN DETAILS (Interest & Charges)
// ────────────────────────────────────────────────────────────────────────────────
function LoanDetails() {
  const { openModal } = useLoanModal();

  return (
    <section id="interest" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Personal Loan at a Glance
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Fast, flexible, and transparent — get the money you need with the best possible terms in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Loan Amount", value: "₹50,000 – ₹40 Lakhs", desc: "Perfect for any need — from small emergencies to big life goals", highlight: "Up to ₹40 Lakhs" },
            { title: "Interest Rate", value: "Starting from 10.5%* p.a.", desc: "Competitive rates — among the lowest in the market", highlight: "Lowest rates guaranteed" },
            { title: "Repayment Tenure", value: "12 to 60 months", desc: "Choose comfortable EMIs that fit your monthly budget", highlight: "Flexible 1–5 years" },
            { title: "Approval & Disbursal", value: "As fast as 24–72 hours*", desc: "Most cases approved & money in account within 2–3 days", highlight: "Lightning fast" },
            { title: "Collateral / Security", value: "Zero Collateral Required", desc: "Unsecured loan — no property, FD, or gold needed", highlight: "100% unsecured" },
            { title: "Processing Fee", value: "Up to 3.5%* (one-time)", desc: "Transparent charges — no hidden fees after approval", highlight: "Fully disclosed" },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`
                bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col
                ${index === 1 ? "lg:col-span-2 lg:row-span-1 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">{item.title}</h3>
                <span className="text-[#0B0E14] text-2xl font-bold">
                  {index === 0 && "₹"}
                  {item.highlight.includes("Lowest") && "★"}
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#0B0E14] mb-2">{item.value}</div>
              <p className="text-gray-600 text-base leading-relaxed mt-2">{item.desc}</p>
              {item.highlight && (
                <div className="mt-4 inline-block bg-[#0B0E14]/10 text-[#0B0E14] px-4 py-1.5 rounded-full text-sm font-medium">
                  {item.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            *Interest rates, fees, approval time & loan amount depend on your profile, credit score, income & bank policy.  
            Final offer will be shared after eligibility check.
          </p>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => openModal('personal')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-lg md:text-xl hover:shadow-xl transition-all"
          >
            Check Your Exact Offer in 2 Minutes
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            95%+ Approval Rate —
            <br className="sm:hidden" />
            Check If You Qualify
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We get maximum approvals even for complex cases. See if you qualify for instant offers from 40+ banks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-4">Basic Requirements</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    Age <strong>21-60 years</strong> (salaried) / <strong>24-65 years</strong> (self-employed)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">Minimum <strong>₹20,000/month</strong> net take-home salary</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    <strong>1+ year</strong> work experience / <strong>2+ years</strong> in current job/business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">CIBIL score <strong>685+</strong> (we approve even <strong>650+</strong> cases)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#0B0E14] mb-3">Loan Amount You Can Get</h4>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-bold text-[#0B0E14]">Salaried</span>
                    <div className="text-2xl font-bold text-[#0B0E14]">₹50K - ₹30L</div>
                  </div>
                  <div>
                    <span className="font-bold text-[#0B0E14]">Self-Employed</span>
                    <div className="text-2xl font-bold text-[#0B0E14]">₹1L - ₹40L</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Salaried", desc: "Any private/govt company with PF/ESIC", icon: "👨‍💼" },
              { title: "Self-Employed", desc: "Doctors, CA, Professionals, Traders", icon: "💼" },
              { title: "21+ Years", desc: "Indian citizen with valid ID proof", icon: "🆙" },
              { title: "Regular Income", desc: "Bank statements of last 3-6 months", icon: "💰" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="amplessoft text-lg font-semibold text-[#0B0E14] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 md:mt-20">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-4">Don't see yourself here? We still approve 85%+ cases</p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Fill the form above — our experts will find the right bank for your profile in <strong>2 minutes</strong>.
          </p>
          <button
            onClick={() => openModal("personal")}
            className="bg-[#0B0E14] text-[#E5E7EB] inline-block px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Check My Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// HOW WE HELP (How to Apply)
// ────────────────────────────────────────────────────────────────────────────────
function HowWeHelp() {
  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            We Make Personal Loans
            <br className="sm:hidden" /> Effortless For You
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            India's most trusted loan experts — faster approvals, highest chances, zero stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {[
            { number: 1, title: "Collect & Verify Documents", desc: "We gather and verify every document for you — no back-and-forth" },
            { number: 2, title: "Check Real Eligibility", desc: "Accurate assessment across 40+ banks — know your true chances instantly" },
            { number: 3, title: "Get Matched to Best Offer", desc: "We compare 40+ banks & NBFCs to find you the lowest rate & highest amount" },
            { number: 4, title: "Expert Application Filing", desc: "We fill and submit your application perfectly — zero rejection due to errors" },
            { number: 5, title: "Follow-up Till Disbursal", desc: "Daily tracking + direct coordination with bank till money reaches your account" },
          ].map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0B0E14] text-white flex items-center justify-center text-xl font-bold mb-5 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="amplessoft text-lg md:text-xl font-semibold text-[#0B0E14] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg font-medium text-gray-800">
            10,000+ happy customers • 4.8+ star rating • Highest approval rate in India
          </p>
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

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Minimal Documentation — Maximum Speed
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We keep paperwork super simple. Most customers get approved with just 4–5 basic documents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Identity Proof",
              items: ["Aadhaar Card", "PAN Card (mandatory for all)", "Passport / Voter ID / Driving License (any one)"],
              icon: "🆔",
              note: "Aadhaar + PAN is usually sufficient",
            },
            {
              title: "Address Proof",
              items: ["Aadhaar Card (if address matches)", "Utility Bill (last 3 months)", "Rent Agreement / Bank Statement"],
              icon: "🏠",
              note: "Aadhaar most preferred",
            },
            {
              title: "Income Proof",
              items: ["Latest 3–6 months Salary Slips (salaried)", "Form 16 / ITR (last 2 years) – salaried/self-employed", "Business Proof (GST returns/ITR) – self-employed"],
              icon: "💼",
              note: "We accept digital copies",
            },
            {
              title: "Bank Statements",
              items: ["Last 6 months bank statements", "Salary credited account preferred", "Passbook / Online statement (PDF)"],
              icon: "🏦",
              note: "Clear salary credits help faster approval",
            },
            {
              title: "Optional / Additional",
              items: ["Latest 3 months salary credit proof", "Company ID card / Appointment letter", "Existing loan statements (if any)"],
              icon: "📄",
              note: "Only if required by the bank",
            },
          ].map((doc) => (
            <div
              key={doc.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-2xl font-bold">
                  {doc.icon}
                </div>
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">{doc.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-700 flex-1">
                {doc.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0B0E14] text-xl mt-0.5">•</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              {doc.note && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic">{doc.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md border border-gray-200">
            <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-3">90% of approvals need only:</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-800">
              <span>Aadhaar</span><span>PAN</span><span>Bank Statements</span><span>Salary Slips/ITR</span>
            </div>
          </div>

          <p className="mt-10 text-lg md:text-xl text-gray-700">Upload digital copies — no need to visit branches!</p>

          <button
            onClick={() => openModal("personal")}
            className="mt-8 inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg md:text-xl hover:shadow-xl transition-all"
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
  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Why Thousands Choose Us
            <br className="sm:hidden" /> Every Month
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We don't just process loans — we dramatically increase your approval chances and get you the best possible deal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-md border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">Common Experience</div>
            <h3 className="amplessoft text-2xl font-bold text-gray-800 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-red-500 text-xl mt-0.5">✗</span><span>Visiting 10+ banks & filling multiple forms</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 text-xl mt-0.5">✗</span><span>High rejection rate due to wrong bank choice</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 text-xl mt-0.5">✗</span><span>Confusing documentation requirements</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 text-xl mt-0.5">✗</span><span>No expert guidance — trial & error</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 text-xl mt-0.5">✗</span><span>Stuck with high interest rates</span></li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-7 md:p-9 shadow-2xl relative overflow-hidden border-2 border-[#0B0E14]">
            <div className="absolute top-0 right-0 bg-white text-[#0B0E14] text-xs font-bold px-4 py-1 rounded-bl-lg">Smart Choice</div>
            <h3 className="amplessoft text-2xl md:text-3xl font-bold mb-6">Applying With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-green-400 text-2xl mt-0.5">✓</span><span>Single application — we do all the work</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-2xl mt-0.5">✓</span><span>Smart matching to banks where you're most likely to get approved</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-2xl mt-0.5">✓</span><span>Dedicated expert handling your case end-to-end</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-2xl mt-0.5">✓</span><span>Highest possible approval rate in the market</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-2xl mt-0.5">✓</span><span>Best interest rates & maximum loan amount</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14]">Stop struggling. Start winning.</p>
          <p className="mt-3 text-gray-700">Apply once — get the best offer in India</p>
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
    { question: "Are you a bank or NBFC?", answer: "No, we are an independent **loan facilitation & advisory platform**. We partner with multiple trusted banks and NBFCs to help you get the best possible personal loan offer." },
    { question: "Is my personal information safe with you?", answer: "Yes — 100%. We use **bank-grade 256-bit SSL encryption** and follow strict RBI-compliant data privacy guidelines. Your information is shared **only** with the banks/NBFCs we match you to for loan processing — never sold or misused." },
    { question: "Are there any hidden charges or fees?", answer: "No hidden charges whatsoever. All fees (processing fee, etc.) are clearly mentioned upfront. You pay **only** what is agreed in the final loan offer from the bank/NBFC. We earn through bank partnerships — you never pay us any service fee." },
    { question: "How fast can I get the loan approval and disbursal?", answer: "Most applications receive **pre-approval in minutes** and **final approval within 24–72 hours**. Once approved, funds are usually disbursed to your account within **1–3 working days** (many cases same-day or next-day)." },
    { question: "What is the minimum CIBIL score required?", answer: "Most banks start at **685+**, but we successfully get approvals even for scores **650+** in many cases — especially with stable income and good banking behavior. We match you to the most suitable lender." },
    { question: "Do I need to visit any branch or submit physical documents?", answer: "No branch visits required! Everything is **100% digital** — you upload documents online (Aadhaar, PAN, bank statement, salary slips/ITR). Most approvals happen without any physical paperwork." },
    { question: "Will applying affect my CIBIL score?", answer: "No hard inquiry on your CIBIL when you apply through us initially. We perform a **soft check** first. Only when you accept a specific bank's offer will a hard inquiry be made (standard industry practice)." },
    { question: "Can self-employed/business owners also apply?", answer: "Yes! We serve both salaried and self-employed individuals (including professionals, doctors, CAs, shop owners, traders). Self-employed applicants usually need **ITR + bank statements** (last 1–2 years)." },
  ];

  return (
    <section id="faqs" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Got Questions? We've Got Clear Answers
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know before applying — transparent & straightforward.
          </p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group open:bg-white"
            >
              <summary className="amplessoft flex justify-between items-center cursor-pointer px-6 py-5 md:px-8 md:py-6 text-lg md:text-xl font-semibold text-[#0B0E14] list-none transition-colors group-hover:text-[#0B0E14]">
                {faq.question}
                <span className="ml-4 text-2xl font-bold transition-transform group-open:rotate-180">+</span>
              </summary>
              <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-4">Still have a question?</p>
          <p className="text-lg text-gray-700 mb-8">Our loan experts are here to help — instant chat or call support available.</p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openModal('personal')}
              className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
            >
              Apply Now – Get Started
            </button>
            <button
              onClick={() => openModal('personal')}
              className="border-2 border-[#0B0E14] text-[#0B0E14] px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#0B0E14]/5 transition-all"
            >
              Talk to Loan Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ────────────────────────────────────────────────────────────────────────────────
export default function PersonalLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfPersonalLoans />
      <PersonalLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}