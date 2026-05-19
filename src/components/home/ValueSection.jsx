"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/general/ScrollReveal";

const features = [
  { label: "Razendsnel online", icon: "/images/img1.svg" },
  { label: "Maatwerk design", icon: "/images/img2.svg" },
  { label: "Eenvoudige samenwerking", icon: "/images/img3.svg" },
  { label: "Mobiel geoptimaliseerd", icon: "/images/img4.svg" },
  { label: "Klaar voor aanvragen", icon: "/images/img5.svg" },
  { label: "Support inbegrepen", icon: "/images/img6.svg" },
];

const ValueSection = () => {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const el = containerRef.current;
  const spread = 80;
  const proximityThreshold = 60;
  const colWidth = el ? (el.offsetWidth - 2) / 3 : 0;
  const rowHeight = el ? (el.offsetHeight - 1) / 2 : 0;

  const VDiv = ({ rowIndex, colIndex }) => {
    const lineX = (colIndex + 1) * (colWidth + 1) - 0.5;
    const dist = Math.abs(mouse.x - lineX);
    const opacity = hovering && dist < proximityThreshold
      ? 1 - dist / proximityThreshold
      : 0;
    const rowStart = rowIndex * (rowHeight + 1);
    const localPct = rowHeight > 0 ? ((mouse.y - rowStart) / rowHeight) * 100 : 50;
    const gradient = opacity > 0
      ? `linear-gradient(to bottom, transparent, transparent calc(${localPct}% - ${spread}px), rgba(129,20,165,${opacity}) ${localPct}%, transparent calc(${localPct}% + ${spread}px), transparent)`
      : "#e0daea";
    return (
      <div className="flex items-stretch w-full h-full">
        <div className="w-px flex-1 my-6" style={{ background: gradient }} />
      </div>
    );
  };

  const HDiv = ({ colIndex }) => {
    const lineY = rowHeight + 0.5;
    const dist = Math.abs(mouse.y - lineY);
    const opacity = hovering && dist < proximityThreshold
      ? 1 - dist / proximityThreshold
      : 0;
    const colStart = colIndex * (colWidth + 1);
    const localPct = colWidth > 0 ? ((mouse.x - colStart) / colWidth) * 100 : 50;
    const gradient = opacity > 0
      ? `linear-gradient(to right, transparent, transparent calc(${localPct}% - ${spread}px), rgba(129,20,165,${opacity}) ${localPct}%, transparent calc(${localPct}% + ${spread}px), transparent)`
      : "#e0daea";
    return (
      <div className="flex items-center h-full">
        <div className="h-px flex-1 mx-6" style={{ background: gradient }} />
      </div>
    );
  };

  return (
    <section className="py-12 md:py-20 px-6 md:px-8 lg:px-4">
      <div className="max-w-300 mx-auto w-full">
        <ScrollReveal effect="fade-up">
          <p className="text-[#4F00ED] text-[13px] font-medium tracking-widest uppercase text-center mb-4">
            Onze websites leveren meer
          </p>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={150}>
          <h2 className="text-[32px] sm:text-[50px] font-medium text-[#141721] leading-tight text-center mb-8 sm:mb-12">
            Je website verdient meer dan
            <br className="hidden sm:inline" />
            standaard
          </h2>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={300}>
          {/* Mobile: simple 2-col grid, no effects */}
          <div className="md:hidden grid grid-cols-2 border border-[#e0e0e0] rounded-2xl overflow-hidden">
            {features.map((feature, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col items-center justify-center text-center gap-3 py-8 px-4",
                  i % 2 === 0 ? "border-r border-[#e0daea]" : "",
                  i < 4 ? "border-b border-[#e0daea]" : "",
                ].join(" ")}
              >
                <Image
                  src={feature.icon}
                  alt={feature.label}
                  width={28}
                  height={28}
                />
                <span className="text-[#141721] text-[16px] font-medium">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: 3-col grid with proximity border effects */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="hidden md:block border border-[#e0e0e0] rounded-2xl overflow-hidden"
          >
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
                gridTemplateRows: "auto 1px auto",
              }}
            >
              {[0, 1, 2].map((col) => (
                <>
                  <div
                    key={`cell-${col}`}
                    className="flex flex-col items-center justify-center text-center gap-4 py-10 px-6 hover:bg-[#FAFAFE] transition-colors duration-300 cursor-default"
                  >
                    <Image
                      src={features[col].icon}
                      alt={features[col].label}
                      width={32}
                      height={32}
                      className="transition-transform duration-300"
                    />
                    <span className="text-[#141721] text-[20px] font-medium">
                      {features[col].label}
                    </span>
                  </div>
                  {col < 2 && <VDiv key={`vdiv-top-${col}`} rowIndex={0} colIndex={col} />}
                </>
              ))}
              <HDiv colIndex={0} />
              <div />
              <HDiv colIndex={1} />
              <div />
              <HDiv colIndex={2} />
              {[3, 4, 5].map((idx, col) => (
                <>
                  <div
                    key={`cell-${idx}`}
                    className="flex flex-col items-center justify-center text-center gap-4 py-10 px-6 hover:bg-[#FAFAFE] transition-colors duration-300 cursor-default"
                  >
                    <Image
                      src={features[idx].icon}
                      alt={features[idx].label}
                      width={32}
                      height={32}
                      className="transition-transform duration-300"
                    />
                    <span className="text-[#141721] text-[20px] font-medium">
                      {features[idx].label}
                    </span>
                  </div>
                  {col < 2 && <VDiv key={`vdiv-bot-${col}`} rowIndex={1} colIndex={col} />}
                </>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueSection;
