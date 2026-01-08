// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-screen overflow-hidden">

      {/* ===== GRADIENT BACKGROUND ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#E5E7EB]
          via-[#D1D5DB]
          to-[#0F172A]
        "
      />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-14">

        {/* ================= HERO CTA ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2
            className="
              amplessoft
              text-gray-900
              font-extrabold
              leading-tight
              text-[clamp(2rem,5vw,3.8rem)]
            "
          >
            Discover a smarter way to get loans.
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-700">
            Save time, avoid rejections, and get guided support —
            from application to disbursal.
          </p>

          <button
            className="
              mt-8
              inline-flex items-center justify-center
              rounded-full
              bg-black
              px-8 py-4 md:py-3
              text-base md:text-sm font-semibold
              text-white
              transition
              hover:bg-gray-800
              w-full sm:w-auto
            "
          >
            Get started
          </button>
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 text-[#0B0E14]">

          {/* BRAND */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[#0B0E14] font-semibold text-lg mb-4">
              YourLoanBrand
            </h4>
            <p className="text-sm leading-relaxed text-[#0B0E14] max-w-xs">
              We simplify the loan process by acting as a trusted bridge 
              between you and 30+ banks & NBFCs — helping you find the 
              best rates and fastest approval.
            </p>
          </div>

          {/* SERVICES - Expanded */}
          <div>
            <h4 className="text-[#0B0E14] font-semibold text-lg mb-4">
              Our Loan Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/personal-loan" className="hover:text-black transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/business-loan" className="hover:text-black transition-colors">
                  Business Loan
                </Link>
              </li>
              <li>
                <Link to="/home-loan" className="hover:text-black transition-colors">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link to="/loan-against-property" className="hover:text-black transition-colors">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link to="/working-capital-loan" className="hover:text-black transition-colors">
                  Working Capital Loan
                </Link>
              </li>
              <li>
                <Link to="/term-loan" className="hover:text-black transition-colors">
                  Term Loan
                </Link>
              </li>
              <li>
                <Link to="/equipment-financing" className="hover:text-black transition-colors">
                  Equipment Financing
                </Link>
              </li>
              <li>
                <Link to="/construction-financing" className="hover:text-black transition-colors">
                  Construction Financing
                </Link>
              </li>
              <li>
                <Link to="/loan-against-securities" className="hover:text-black transition-colors">
                  Loan Against Securities
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-[#0B0E14] font-semibold text-lg mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-black transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-black transition-colors">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/partner-with-us" className="hover:text-black transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-auto">
            <h4 className="text-[#0B0E14] font-semibold text-lg mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faq" className="hover:text-black transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-black transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/grievance-redressal" className="hover:text-black transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-black transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-black transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-16 md:mt-20
            flex flex-col sm:flex-row
            items-center justify-between
            gap-6
            border-t border-white/10
            pt-8
            text-sm
            text-gray-400
          "
        >
          <span>© 2026 YourLoanBrand. All rights reserved.</span>

          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a 
              href="https://facebook.com/yourloanbrand" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href="https://twitter.com/yourloanbrand" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://instagram.com/yourloanbrand" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/yourloanbrand" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}