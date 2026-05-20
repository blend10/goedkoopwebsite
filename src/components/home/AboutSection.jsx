"use client";

import Image from "next/image";
import ScrollReveal from "@/components/general/ScrollReveal";

const AboutSection = () => {
  const avatars = [
    {
      src: "/images/6.png",
      pos: "top-2 left-12 lg:left-16",
      size: "w-20 h-20 lg:w-24 lg:h-24",
      dur: "4s",
      del: "0s",
    },
    {
      src: "/images/7.png",
      pos: "top-0 right-12 lg:right-16",
      size: "w-16 h-16 lg:w-20 lg:h-20",
      dur: "4.5s",
      del: "0.6s",
    },
    {
      src: "/images/8.png",
      pos: "top-24 right-6 lg:right-8",
      size: "w-12 h-12 lg:w-16 lg:h-16",
      dur: "3.8s",
      del: "1.2s",
    },
    {
      src: "/images/9.png",
      pos: "bottom-4 left-6 lg:left-8",
      size: "w-16 h-16 lg:w-20 lg:h-20",
      dur: "5s",
      del: "0.3s",
    },
    {
      src: "/images/10.png",
      pos: "bottom-4 right-12 lg:right-16",
      size: "w-16 h-16 lg:w-20 lg:h-20",
      dur: "4.2s",
      del: "0.9s",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 lg:py-24">
      <style jsx>{`
        @keyframes bubble {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="max-w-300 mx-auto w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 lg:gap-16 items-center">
        {/* Left — avatars + years */}
        <div className="relative flex items-center justify-center h-72 lg:h-80">
          {/* Big background number */}
          <ScrollReveal effect="scale" delay={100} className="absolute">
            <span className="text-[120px] lg:text-[160px] font-bold text-[#CCCCCC] leading-none select-none">
              10+
            </span>
          </ScrollReveal>
          <ScrollReveal
            effect="fade-up"
            delay={500}
            className="absolute bottom-8 lg:bottom-8"
          >
            <span className="text-[14px] lg:text-[15px] font-medium text-[#424242]">
              Jaren ervaring
            </span>
          </ScrollReveal>

          {/* Floating avatars — always visible with bubble float */}
          {avatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar.src}
              alt="team"
              className={`absolute ${avatar.size} ${avatar.pos} rounded-full object-cover  shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg`}
              style={{
                animation: `bubble ${avatar.dur} ease-in-out ${avatar.del} infinite`,
              }}
            />
          ))}
        </div>

        {/* Right — text */}
        <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
          <ScrollReveal effect="fade-up" delay={200}>
            <span className="text-[13px] font-medium tracking-widest text-[#4F00ED] uppercase">
              Sinds 2014
            </span>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={350}>
            <h2 className="text-[24px] sm:text-[33px] font-semibold leading-snug text-[#03030F] mt-2 lg:mt-5">
              Strakke websites, die professioneel{" "}
              <em
                className="underline decoration-1 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ogen,
              </em>{" "}
              vertrouwen opbouwen, ervaring tonen{" "}
              <br className="hidden lg:inline" /> en nieuwe aanvragen{" "}
              <em
                className="underline decoration-1 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                genereren.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={500}>
            <p className="text-[15px] text-[#424242] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Wij helpen ondernemers een sterke online aanwezigheid op te bouwen
              zonder ingewikkelde processen of dure bureauprijzen. Je website
              wordt op maat ontworpen, technisch netjes uitgevoerd en is meestal
              binnen 7 dagen klaar.
            </p>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={650}>
            <button
              onClick={() =>
                document
                  .getElementById("prijzen")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#141721] text-white px-6 py-3 rounded-[10px] hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-lg mt-6 lg:mt-10 transition-all duration-300 font-medium"
            >
              Bekijk pakketten
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
