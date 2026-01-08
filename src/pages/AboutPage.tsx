// src/pages/AboutPage.tsx
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="bg-[#E5E7EB] min-h-screen">
      {/* Hero Section - About Us */}
      <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="amplessoft text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We help millions of Indians find the right loan at the lowest rates — fast, transparent, and completely free.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-8">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a simple belief: Getting the right loan shouldn’t be complicated, stressful, or expensive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In a market flooded with dozens of banks, NBFCs, and fintech lenders — each with different rates, eligibility, fees, and processes — we saw people struggling to find the best deal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That’s why we built this platform: to compare 30+ trusted lenders in real-time, show you the lowest rates, highest approval chances, and guide you through a 100% digital process — all at zero cost to you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0B0E14] to-[#1F2937] text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="amplessoft text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed">
                To empower every Indian with fast, fair, and transparent access to credit — so you can focus on what matters: growing your dreams, business, or life.
              </p>
              <div className="mt-8 flex flex-wrap gap-8 justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">30+</div>
                  <p className="text-sm mt-2 text-gray-300">Trusted Lenders</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">100%</div>
                  <p className="text-sm mt-2 text-gray-300">Digital Process</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">0</div>
                  <p className="text-sm mt-2 text-gray-300">Fees to You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-center text-[#0B0E14] mb-16">
            Why Millions Trust Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Lowest Rates Guaranteed",
                desc: "We compare 30+ banks & NBFCs in real-time to show you the best possible rate.",
              },
              {
                icon: "⚡",
                title: "Fastest Approvals",
                desc: "Most applications get pre-approved in minutes and disbursed within days.",
              },
              {
                icon: "🛡️",
                title: "100% Transparent",
                desc: "No hidden fees, no spam calls — just clear information and honest guidance.",
              },
              {
                icon: "📱",
                title: "Completely Digital",
                desc: "Apply, upload documents, track status — all from your phone or laptop.",
              },
              {
                icon: "🤝",
                title: "Free Forever",
                desc: "We earn from lenders — you pay nothing extra. Zero fees, ever.",
              },
              {
                icon: "⭐",
                title: "Trusted by Millions",
                desc: "Thousands of happy customers, high ratings, and real success stories.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0B0E14]/10 text-[#0B0E14] flex items-center justify-center text-4xl mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="amplessoft text-2xl font-bold text-[#0B0E14] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Transparency",
                desc: "We show you everything — rates, fees, eligibility — upfront. No surprises.",
              },
              {
                title: "Customer First",
                desc: "Your dream, your needs, your convenience — always our top priority.",
              },
              {
                title: "Speed & Simplicity",
                desc: "We cut the red tape so you get funds when you need them most.",
              },
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <h3 className="amplessoft text-3xl font-bold text-[#0B0E14]">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0F172A] to-[#1F2937] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold mb-8">
            Ready to Find Your Best Loan?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Compare 30+ lenders. Get the lowest rates. Apply in minutes — all free.
          </p>
          <Link
            to="/"
            className="
              inline-block
              bg-[#0B0E14]
              hover:bg-black
              text-white
              font-bold
              text-lg
              px-12
              py-5
              rounded-xl
              shadow-lg
              transition-all
              transform
              hover:scale-105
            "
          >
            Compare Loans Now →
          </Link>
        </div>
      </section>
    </main>
  );
}