"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // ─── DESKTOP GSAP PINNED HORIZONTAL SCROLL ───
    if (window.innerWidth >= 1024) {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    // ─── MOBILE: SMOOTH TOUCH SCROLL + MOMENTUM ───
    if (window.innerWidth < 1024) {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const startDragging = (e: TouchEvent | MouseEvent) => {
        isDown = true;
        startX = ("touches" in e ? e.touches[0] : e).pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.cursor = "grabbing";
      };

      const stopDragging = () => {
        isDown = false;
        track.style.cursor = "grab";
      };

      const drag = (e: TouchEvent | MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = ("touches" in e ? e.touches[0] : e).pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed multiplier
        track.scrollLeft = scrollLeft - walk;
      };

      // Add event listeners for both touch and mouse (better UX on tablets)
      track.addEventListener("mousedown", startDragging);
      track.addEventListener("touchstart", startDragging);
      track.addEventListener("mouseleave", stopDragging);
      track.addEventListener("mouseup", stopDragging);
      track.addEventListener("touchend", stopDragging);
      track.addEventListener("mousemove", drag);
      track.addEventListener("touchmove", drag);

      // Optional: Add subtle snap / inertia feel with CSS (modern browsers)
      track.style.scrollSnapType = "x proximity";
      track.style.scrollBehavior = "smooth";

      return () => {
        // Cleanup
        track.removeEventListener("mousedown", startDragging);
        track.removeEventListener("touchstart", startDragging);
        track.removeEventListener("mouseleave", stopDragging);
        track.removeEventListener("mouseup", stopDragging);
        track.removeEventListener("touchend", stopDragging);
        track.removeEventListener("mousemove", drag);
        track.removeEventListener("touchmove", drag);
      };
    }
  }, []);

  return (
    <>
      {/* ================= SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative bg-[#E5E7EB] py-20 lg:overflow-hidden"
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
            className="
              flex gap-6 px-6 w-max
              overflow-x-auto
              snap-x snap-mandatory
              scrollbar-hide
              cursor-grab active:cursor-grabbing
              -webkit-overflow-scrolling: touch /* iOS momentum */
            "
          >
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    w-[80vw] h-[65vh]
                    max-w-[900px] max-h-[520px]
                    rounded-3xl
                    border border-black/10
                    bg-white
                    p-8 sm:p-10
                    shrink-0
                    flex flex-col
                    items-center justify-center
                    text-center
                    snap-center
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