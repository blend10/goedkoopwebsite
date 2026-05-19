"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroPage = () => {
  return (
    <section
      className="relative bg-[#8583a8] from-white min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Lines.svg')",
        backgroundBlend: "overlay",
      }}
    >
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.6);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-pulse-dot {
          animation: pulse-dot 2.5s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 350ms;
        }
        .delay-400 {
          animation-delay: 500ms;
        }
        .delay-500 {
          animation-delay: 650ms;
        }
      `}</style>

      <div className="max-w-300 mx-auto w-full px-6 md:px-8 pt-16 pb-4 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
          {/* Label */}
          <div className="animate-fade-in-up delay-100 bg-white/30 w-fit mx-auto md:mx-0 px-4 py-1.5 md:py-2 rounded-full text-[12px] md:text-[18px] flex flex-row items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0 animate-pulse-dot"></div>
            <div className="text-white">Geen tijdverspilling nodig</div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-200 text-[36px] sm:text-[48px] md:text-[80px] leading-tight">
            Hoogwaardige <br className="hidden md:inline" /> websites{" "}
            <br className="hidden md:inline" /> vanaf €899
          </h1>

          {/* Testimonials */}
          <div className="animate-fade-in-up delay-300 flex items-center gap-2 md:gap-3 justify-center md:justify-start flex-wrap">
            <Image
              src="/images/lefWing.svg"
              alt="Left laurel"
              width={14}
              height={20}
              className="md:w-[18px] md:h-[26px]"
            />
            <div className="flex -space-x-3 md:-space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`/images/${i}.png`}
                  alt={`klant ${i}`}
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white object-cover bg-white/30 transition-transform duration-300 hover:scale-110 hover:z-10"
                />
              ))}
            </div>
            <span className="text-[14px] md:text-[18px] font-medium">+94</span>
            <span className="text-xs md:text-base font-medium">
              Tevreden klanten
            </span>
            <Image
              src="/images/rightWing.svg"
              alt="Right laurel"
              width={14}
              height={20}
              className="md:w-[18px] md:h-[26px]"
            />
          </div>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-row gap-3 pt-1 justify-center md:justify-start">
            <button onClick={() => document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#141721] text-white px-5 sm:px-8 py-2.5 sm:py-3 shadow-2xl rounded-[10px] hover:bg-black/90 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 text-sm sm:text-base font-medium whitespace-nowrap">
              Bekijk patronen
            </button>
            <Link href="/contact" className="bg-white text-[#141721] px-5 sm:px-14 py-2.5 sm:py-3 shadow-2xl rounded-[10px] hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base font-medium whitespace-nowrap">
              Gratis Offerte →
            </Link>
          </div>
        </div>

        {/* Right Image — hidden on small mobile, shown from sm up */}
        <div className="flex justify-center order-1 md:order-2 animate-fade-in-up delay-500">
          <Image
            src="/images/group.png"
            alt="WebStudio Showcase"
            width={600}
            height={600}
            className="drop-shadow-2xl w-full max-w-[260px] sm:max-w-[280px] md:max-w-none animate-float"
          />
        </div>
      </div>

      {/* Smoke gradient fade into IconsSection */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(220,219,230,0.5) 50%, #f5f5f5 100%)",
        }}
      />
    </section>
  );
};

export default HeroPage;
