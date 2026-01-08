// src/pages/ContactPage.tsx
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main className="bg-[#E5E7EB] min-h-screen">

      {/* Hero Section - Contact Us */}
      <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="amplessoft text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're here to help you with any questions about loans, eligibility, applications, or anything else.
            <br className="hidden md:block" />
            Reach out — our team responds quickly.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left - Contact Details */}
            <div>
              <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-10">
                Get in Touch
              </h2>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B0E14] mb-1">Email Us</h3>
                    <p className="text-gray-700">support@yourloanbrand.com</p>
                    <p className="text-sm text-gray-600 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B0E14] mb-1">Call Us</h3>
                    <p className="text-gray-700">+91 1800-XXX-XXXX (Toll Free)</p>
                    <p className="text-sm text-gray-600 mt-1">Mon–Sat: 9 AM – 8 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B0E14] mb-1">Live Chat</h3>
                    <p className="text-gray-700">Chat with us on WhatsApp</p>
                    <p className="text-sm text-gray-600 mt-1">Instant response during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0B0E14]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B0E14] mb-1">Office Address</h3>
                    <p className="text-gray-700">
                      YourLoanBrand Pvt Ltd<br />
                      123 Finance Tower, MG Road<br />
                      Gurugram, Haryana 122001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-gradient-to-br from-[#0B0E14] to-[#1F2937] rounded-3xl p-10 shadow-2xl">
              <h3 className="amplessoft text-3xl md:text-4xl font-bold text-white mb-8">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    className="w-full rounded-xl px-6 py-4 text-base bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full rounded-xl px-6 py-4 text-base bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    required
                    className="w-full rounded-xl px-6 py-4 text-base bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                  />
                </div>

                <div>
                  <select
                    required
                    className="w-full rounded-xl px-6 py-4 text-base bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50 transition-all"
                  >
                    <option value="" className="text-gray-800">Subject *</option>
                    <option value="general" className="text-gray-800">General Inquiry</option>
                    <option value="loan" className="text-gray-800">Loan Application Help</option>
                    <option value="eligibility" className="text-gray-800">Eligibility Query</option>
                    <option value="support" className="text-gray-800">Technical Support</option>
                    <option value="feedback" className="text-gray-800">Feedback / Complaint</option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={5}
                    required
                    className="w-full rounded-xl px-6 py-4 text-base bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    bg-white
                    hover:bg-gray-100
                    text-[#0B0E14]
                    font-bold
                    text-lg
                    py-5
                    rounded-xl
                    shadow-lg
                    transition-all
                    transform
                    hover:scale-[1.02]
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-6 bg-[#E5E7EB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-[#0B0E14] mb-12">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Most queries are answered in our FAQ section.
          </p>
          <Link
            to="/faq"
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
            View FAQs →
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0F172A] to-[#1F2937] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold mb-8">
            Need a Loan Today?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Compare rates from 30+ lenders and apply in minutes — completely free.
          </p>
          <Link
            to="/"
            className="
              inline-block
              bg-white
              hover:bg-gray-100
              text-[#0B0E14]
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