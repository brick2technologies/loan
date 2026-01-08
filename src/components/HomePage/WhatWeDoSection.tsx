import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileCheck,
  ShieldCheck,
  Landmark,
  Users,
  Bell,
  Wallet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: "Document Collection & Verification",
    desc: "We collect and verify all required documents to ensure accuracy and completeness.",
    icon: FileCheck,
  },
  {
    title: "Eligibility Check",
    desc: "Your profile is evaluated strictly based on current bank norms and criteria.",
    icon: ShieldCheck,
  },
  {
    title: "Bank Submission",
    desc: "We submit your application only to banks that best match your eligibility.",
    icon: Landmark,
  },
  {
    title: "Bank Coordination",
    desc: "Our team coordinates directly with bank officials on your behalf.",
    icon: Users,
  },
  {
    title: "Regular Updates",
    desc: "You receive timely updates at every stage of the loan process.",
    icon: Bell,
  },
  {
    title: "Approval & Disbursal Support",
    desc: "We assist you until final loan approval and successful disbursal.",
    icon: Wallet,
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // ✅ Desktop only (CRITICAL)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert(); // ✅ Scoped & safe cleanup
      ScrollTrigger.clearScrollMemory(); // ✅ Reset scroll state
    };
  }, []);

  return (
    <>
      {/* ================= SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative bg-[#E5E7EB] py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
              What We Do
            </span>

            <h2 className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
              What Happens After You Apply?
            </h2>

            <p className="mt-3 max-w-xl mx-auto text-sm text-gray-600">
              From document verification to bank disbursal, we manage the entire
              process for you.
            </p>
          </div>
        </div>

        {/* ================= HORIZONTAL TRACK ================= */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-8 px-6 w-max will-change-transform"
          >
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    w-[70vw] h-[70vh]
                    max-w-[900px] max-h-[520px]
                    rounded-3xl
                    border border-black/10
                    bg-white
                    p-8 sm:p-10
                    shrink-0
                    flex flex-col
                    items-center justify-center
                    text-center
                    transition-transform
                    hover:-translate-y-2
                  "
                >
                  <div className="w-16 h-16 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-gray-900" />
                  </div>

                  <h3 className="amplessoft text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH CTA ================= */}
      <section className="w-screen bg-[#E5E7EB] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 text-center">
          <p className="text-gray-900 font-extrabold leading-[1.05] text-[clamp(2.5rem,6vw,6.5rem)]">
            You don’t chase banks.
            <span className="block mt-3 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              We do it for you.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
