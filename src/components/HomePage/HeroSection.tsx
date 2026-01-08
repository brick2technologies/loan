import { Link } from "react-router-dom";
import SafeSpline from "../spline/SafeSpline";

export default function HeroSection() {
  return (
    <main className="relative bg-[#E5E7EB] overflow-hidden">

      {/* ================= MOBILE SPLINE ================= */}
      <div className="relative block md:hidden w-full h-[60vh] overflow-hidden mt-20">
        {/* Spline */}
        <div className="absolute inset-0 pointer-events-none">
          <SafeSpline />
        </div>

        {/* Fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5E7EB] via-transparent to-[#E5E7EB] pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#E5E7EB] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#E5E7EB] to-transparent pointer-events-none" />
      </div>

      {/* ================= CONTENT AREA ================= */}
      <div className="relative z-10 px-6 py-16 md:py-0 md:min-h-[100svh] flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">

          {/* ================= DESKTOP SPLINE ================= */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div
              className="
                absolute right-[-33%] top-1/2 -translate-y-1/2
                w-[120%] h-[120%]
                flex items-center justify-center
                scale-[0.95]
                lg:scale-110
                xl:scale-125
              "
            >
              <SafeSpline />
            </div>

           
          </div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="relative z-10 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="amplessoft text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#0B0E14]">
              Funding What Matters
              <br />
              <span className="text-[#1F2937]">
                Personally and Professionally
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-[#374151]">
              We connect you with tailored loan solutions for every financial
              need, delivering transparency, speed, and peace of mind.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/personal-loan">  
              <button className="rounded-full bg-[#0B0E14] px-10 py-4 text-[#E5E7EB] font-semibold hover:shadow-[0_0_40px_rgba(0,0,0,0.35)] transition">
                Apply for a Loan
              </button>
              </Link>

              <button className="rounded-full border border-black/10 bg-white/60 backdrop-blur px-10 py-4 text-[#1F2937] hover:bg-white transition">
                Check Eligibility
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
