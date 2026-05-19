"use client";

import Image from "next/image";
import ScrollReveal from "@/components/general/ScrollReveal";

const projects = [
  {
    title: "Brog — Digital Design Agency Portfolio",
    image: "/images/mock1.png",
  },
  {
    title: "Prime Studio — Website Saas Template",
    image: "/images/mock2.png",
  },
  {
    title: "HelloX — DesignAgency Portfolio",
    image: "/images/mock3.png",
  },
  {
    title: "Prismora — Personal Web Portfolio",
    image: "/images/mock4.png",
  },
  {
    title: "Crawford — Photography Portfolio",
    image: "/images/mock5.png",
  },
  {
    title: "BoostIQ — Saas Landing Page",
    image: "/images/mock6.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 lg:py-16">
      <div className="max-w-300 mx-auto w-full px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-10">
          <ScrollReveal effect="fade-right">
            <h2 className="text-[28px] sm:text-[42px] font-bold text-[#03030F] leading-tight">
              Bouw het met <br className="hidden sm:inline" /> WebStudio
              Nederland
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-left" delay={200}>
            <button className="bg-[#141721] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap sm:mt-2 w-fit">
              Alle werken bekijken
            </button>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={i} effect="fade-up" delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                {/* Card top bar */}
                <div className="flex justify-between items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <span className="text-[14px] md:text-[16px] font-medium text-[#141721] ml-1 truncate">
                    {project.title}
                  </span>
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <span className="w-2 h-2 rounded-full bg-[#FF8513]" />
                    <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative w-full aspect-[386/616] bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:object-center"
                  />
                  {/* Hover overlay with view label */}
                  {/* <div className="absolute inset-0 bg-[#141721]/0 group-hover:bg-[#141721]/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white text-[#141721] text-[13px] font-semibold px-5 py-2 rounded-full shadow-lg">
                      Bekijken →
                    </span>
                  </div> */}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
