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
    employment: "", // Parent/Guardian employment
    studyType: "",
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
    console.log("Education Loan Form Data:", formData);
    openModal('education'); // or 'personal' if using unified modal flow
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-[#E5E7EB] overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
                Education Loan
                <br className="sm:hidden" />
                <span className="text-[#1F2937] font-semibold">
                  — Lowest Rates • Long Tenure
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
                Fund your higher education dreams in India or abroad with the lowest interest rates & flexible terms.  
                Up to ₹1.5 Crores+ • Starting @8.25%* p.a. • Moratorium period • Tax benefits u/s 80E
              </p>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="/images/education-loan-hero.png"
                alt="Student graduating with education loan support"
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
                <option value="">Parent/Guardian Employment *</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business-owner">Business Owner</option>
              </select>
              <select
                name="studyType"
                value={formData.studyType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
              >
                <option value="">Study Type *</option>
                <option value="india">Studies in India</option>
                <option value="abroad">Studies Abroad</option>
                <option value="ug">Undergraduate</option>
                <option value="pg">Postgraduate / MBA</option>
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
                I authorize sharing my information for education loan processing as per RBI guidelines & privacy policy.
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">What is an Education Loan?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An education loan is a purpose-specific loan to finance higher studies in India or abroad, covering tuition, hostel, books, travel & more. It offers low interest rates, moratorium period (course duration + 6–12 months), and tax benefits under Sec 80E.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Lowest interest rates starting 8.25%* p.a.</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Up to ₹1.5 Crores+ funding (abroad)</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Long tenure up to 15 years</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Moratorium — no EMI during studies</li>
                <li className="flex items-start"><span className="text-[#0B0E14] mr-3 text-xl">•</span>Tax deduction on interest u/s 80E</li>
              </ul>
            </div>
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">Most Common Uses</h3>
              <p className="text-gray-600">
                Undergraduate & postgraduate courses, MBA, engineering, medical, study abroad programs, skill development, vocational training, or any recognized higher education.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Studies in India", desc: "UG/PG in top colleges" },
              { title: "Study Abroad", desc: "International universities" },
              { title: "MBA / Management", desc: "Top B-schools" },
              { title: "Engineering / Medical", desc: "Professional degrees" },
              { title: "Vocational / Skill", desc: "Short-term courses" },
              { title: "Top-up / Extension", desc: "Additional funding" },
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
// TYPES OF EDUCATION LOANS (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
function TypesOfEducationLoans() {
  const loanTypes = [
    {
      title: "Studies in India Loan",
      description: "Finance UG/PG courses in Indian colleges/universities.",
      interest: "8.25% – 10.5%*",
      amount: "Up to ₹50 Lakhs",
      tenure: "Up to 15 years",
      bestFor: "Domestic higher education",
      icon: "🎓",
    },
    {
      title: "Study Abroad Loan",
      description: "Cover tuition, living, travel for international universities.",
      interest: "8.5% – 11.5%*",
      amount: "Up to ₹1.5 Cr+",
      tenure: "Up to 15 years",
      bestFor: "Overseas programs",
      icon: "🌍",
    },
    {
      title: "MBA / Management Loan",
      description: "Specialized funding for top B-school programs.",
      interest: "8.75% – 12%*",
      amount: "Up to ₹75 Lakhs",
      tenure: "Up to 12 years",
      bestFor: "Business aspirants",
      icon: "💼",
    },
    {
      title: "Vocational / Skill Loan",
      description: "Short-term skill development & job-oriented courses.",
      interest: "9% – 13%*",
      amount: "Up to ₹7.5 Lakhs",
      tenure: "Up to 7 years",
      bestFor: "Quick employability",
      icon: "🛠️",
    },
    {
      title: "PM Vidyalaxmi / Merit Loan",
      description: "Collateral-free for meritorious students in top institutions.",
      interest: "8.25% – 10%*",
      amount: "As per need",
      tenure: "Up to 15 years",
      bestFor: "High achievers",
      icon: "🏆",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14]">Types of Education Loans</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Tailored financing for every academic journey — India or abroad.
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
function EducationLoanFeatures() {
  const { openModal } = useLoanModal();

  const features = [
    {
      icon: "💰",
      title: "Lowest Interest Rates",
      desc: "Starting from <strong>8.25%* p.a.</strong> — best rates from top banks",
      highlight: "From 8.25%*",
    },
    {
      icon: "📚",
      title: "High Funding",
      desc: "Up to <strong>₹1.5 Crores+</strong> for abroad studies",
      highlight: "Up to ₹1.5 Cr+",
    },
    {
      icon: "📅",
      title: "Long Tenure",
      desc: "Repay over <strong>up to 15 years</strong> with moratorium",
      highlight: "Up to 15 Years",
    },
    {
      icon: "⏳",
      title: "Moratorium Period",
      desc: "No EMI during course + 6–12 months",
      highlight: "Study First",
    },
    {
      icon: "🛡️",
      title: "Tax Benefits",
      desc: "Full interest deduction u/s <strong>80E</strong> — no limit",
      highlight: "Sec 80E",
    },
    {
      icon: "🔄",
      title: "Collateral Options",
      desc: "Collateral-free up to certain limits",
      highlight: "Flexible Security",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Education Loan Features & Benefits</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Low rates • No repayment during studies • Tax savings • Dream education secured
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
                <div className="w-16 h-16 rounded-2xl bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-3xl">{f.icon}</div>
                <h4 className="amplessoft text-2xl font-bold text-[#0B0E14]">{f.title}</h4>
              </div>
              <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: f.desc }} />
              <div className="bg-[#0B0E14]/5 text-[#0B0E14] px-5 py-2 rounded-xl font-bold">{f.highlight}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('education')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Apply for Education Loan Now
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Education Loan at a Glance</h2>
          <p className="mt-5 text-xl text-gray-700">Best terms • Moratorium • Maximum savings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loan Amount", value: "₹4 Lakhs – ₹1.5 Cr+", highlight: "100% funding" },
            { title: "Interest Rate", value: "8.25%* – 12%* p.a.", highlight: "Lowest in market" },
            { title: "Tenure", value: "Up to 15 years", highlight: "With moratorium" },
            { title: "Processing Fee", value: "Nil – 1%*", highlight: "Often waived" },
            { title: "Prepayment Charges", value: "Nil on floating rate", highlight: "Zero penalty" },
            { title: "Disbursal Time", value: "7 – 30 days*", highlight: "Fast process" },
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
            onClick={() => openModal('education')}
            className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Check Your Education Loan Offer Now
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
        <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-6">Check Your Education Loan Eligibility</h2>
        <p className="text-xl text-gray-700 mb-12">High approval for meritorious students</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Basic Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Indian citizen, age 18+</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Secured admission to recognized institution</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Co-applicant (parent/guardian) required</li>
              <li className="flex items-start gap-3"><span className="text-[#0B0E14] text-2xl">✓</span>Good academic record & entrance scores</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6">Maximum Eligibility (approx.)</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Studies in India</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹50 Lakhs+</div>
                <p className="text-gray-600 mt-2">Based on course & college</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-xl font-bold mb-2">Studies Abroad</div>
                <div className="text-3xl font-bold text-[#0B0E14]">₹1.5 Cr+</div>
                <p className="text-gray-600 mt-2">Based on university & expenses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('education')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Check My Education Loan Eligibility Now
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
    { number: 1, title: "Eligibility Check", desc: "Instant pre-approval across 30+ lenders" },
    { number: 2, title: "Best Offer Matching", desc: "Lowest rate & highest amount comparison" },
    { number: 3, title: "Document Collection", desc: "We collect & verify all docs" },
    { number: 4, title: "Application Filing", desc: "Perfect submission to avoid rejection" },
    { number: 5, title: "Disbursal Support", desc: "Follow-up till funds in account" },
  ];

  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">We Make Education Loans Simple</h2>
          <p className="mt-5 text-xl text-gray-700">Highest approval • Lowest rates • Zero stress</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0E14] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{step.number}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal('education')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Your Education Loan Application
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
    { title: "Identity & Address Proof", items: ["Aadhaar Card", "PAN Card", "Passport"], icon: "🆔" },
    { title: "Academic Documents", items: ["Marksheets", "Entrance exam scores", "Admission letter"], icon: "📚" },
    { title: "Income Proof (Co-applicant)", items: ["Salary slips / ITR (2 years)", "Bank statements"], icon: "💼" },
    { title: "Course & Institute Docs", items: ["Fee structure", "Course details", "Institute ID"], icon: "🏫" },
    { title: "Others", items: ["Photographs", "Collateral docs (if applicable)", "Co-applicant KYC"], icon: "📄" },
  ];

  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Documents Required for Education Loan</h2>
          <p className="mt-5 text-xl text-gray-700">Standard & digital-friendly process</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((doc) => (
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
            onClick={() => openModal('education')}
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
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14]">Why Choose Us for Your Education Loan?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Applying Alone</h3>
            <ul className="space-y-4 text-gray-700">
              <li><span className="text-red-500">✗</span> Multiple banks comparison hassle</li>
              <li><span className="text-red-500">✗</span> Missing lowest rate offers</li>
              <li><span className="text-red-500">✗</span> Rejection due to documentation</li>
              <li><span className="text-red-500">✗</span> Higher interest burden</li>
            </ul>
          </div>

          <div className="bg-[#0B0E14] text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">With Us</h3>
            <ul className="space-y-4">
              <li><span className="text-green-400">✓</span> Compare 30+ lenders instantly</li>
              <li><span className="text-green-400">✓</span> Guaranteed lowest rate</li>
              <li><span className="text-green-400">✓</span> Highest approval chances</li>
              <li><span className="text-green-400">✓</span> Save lakhs on interest</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('education')}
            className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Your Best Education Loan Offer
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
      q: "What is the lowest education loan interest rate in 2026?",
      a: "As of January 2026, best rates start from **8.25%–9.5%** p.a. from public banks (SBI, BOB etc.) for prime/collateral-backed loans. Private/NBFC rates from 9.99% onwards.",
    },
    {
      q: "What is the maximum education loan amount?",
      a: "Up to **₹50 Lakhs** for studies in India and **₹1.5 Crores+** for abroad (or even higher with collateral). Depends on course, institution & co-applicant income.",
    },
    {
      q: "What is the repayment tenure for education loans?",
      a: "Up to **15 years** (including course duration + moratorium of 6–12 months). Longer tenure for lower EMIs.",
    },
    {
      q: "Are there prepayment penalties?",
      a: "No prepayment charges on most **floating rate** education loans (RBI guideline). Fixed rate may have nominal charges.",
    },
    {
      q: "Is there tax benefit on education loan?",
      a: "Yes! Full interest paid is deductible u/s **80E** with no upper limit (for 8 years max).",
    },
    {
      q: "Do I need collateral for education loan?",
      a: "Not required up to certain limits (₹7.5–50 Lakhs depending on bank). Higher amounts usually need security.",
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
            onClick={() => openModal('education')}
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
export default function EducationLoanPage() {
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfEducationLoans />
      <EducationLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}