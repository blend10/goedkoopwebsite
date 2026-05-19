"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/general/ScrollReveal";

const stats = [
  {
    prefix: "+ ",
    value: 10,
    suffix: "",
    title: "Jaren ervaring",
    description:
      "Webdesign, ontwikkeling en digitale oplossingen voor kleine bedrijven.",
  },
  {
    prefix: "",
    value: 7,
    suffix: " Dagen",
    title: "Tot aan de voltooide website",
    description:
      "Snelle uitvoering zonder lange wachttijden of onnodige afstemming.",
  },
  {
    prefix: "",
    value: 100,
    suffix: " %",
    title: "Op maat ontworpen",
    description:
      "Geen standaardlook: je website wordt afgestemd op jouw bedrijf.",
  },
];

function useCountUp(target, duration = 1600, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

function StatCard({ stat, delay }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(stat.value, 1600, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal key={delay} effect="fade-up" delay={delay}>
      <div ref={ref} className="bg-[#FAF9FF] rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 h-full">
        <div className="space-y-4">
          <div className="text-[36px] md:text-[40px] font-semibold text-[#3C3C4399] leading-none tabular-nums">
            {stat.prefix}{count}{stat.suffix}
          </div>
          <p className="text-[15px] font-bold text-[#03030F]">{stat.title}</p>
        </div>
        <p className="text-[14px] text-[#424242] leading-relaxed">{stat.description}</p>
      </div>
    </ScrollReveal>
  );
}

const StatsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 lg:py-16">
      <div className="max-w-300 mx-auto w-full px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
