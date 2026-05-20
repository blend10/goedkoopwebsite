"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/general/ScrollReveal";
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Start-up",
    subtitle: "Voor starters en lokale bedrijven",
    price: "€899",
    note: "Eenmalig bedrag. Geen maandelijkse bureaukosten.",
    features: [
      "Tot 5 pagina's",
      "Maatwerk design",
      "Mobielvriendelijk ontwerp",
      "Contactformulier",
      "Oplevering binnen 7 dagen",
      "Geen verborgen kosten",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Professional",
    subtitle: "Meest gekozen",
    price: "€1200",
    note: "Eenmalig bedrag. Geen maandelijkse agency-koten.",
    features: [
      "Tot 8 pagina's",
      "Sterkere contentstructuur",
      "Extra secties voor diensten of cases",
      "Integratie van reviews en portfolio",
      "Strategischere conversie-opbouw",
      "Snelle oplevering + support bij livegaing",
    ],
    highlighted: true,
    badge: "Meest gekozen",
  },
  {
    name: "Premium",
    subtitle: "Voor bedrijven die willen opschalen",
    price: "€1800",
    note: "Eenmalig bedrag. Geen maandelijkse bureaukosten.",
    features: [
      "Tot 12 pagina's",
      "Uitgebreide maatwerksopbouw",
      "Meerdere pagina's",
      "Geavanceerde formulieren",
      "Extra designafwerking en contentblokken",
      "Klaar om later verder uit te breiden",
    ],
    highlighted: false,
    badge: null,
  },
];

const stats = [
  { countTo: 7, suffix: "", unit: "Dagen", label: "Meestal online" },
  { countTo: 100, suffix: "%", unit: "Maatwerk", label: "design" },
  {
    countTo: 5000,
    suffix: " €+",
    thousands: true,
    unit: "Bespaar op",
    label: "bureaukosten",
  },
];

const CountUp = ({ countTo, suffix, thousands }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = countTo / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= countTo) {
              setCount(countTo);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [countTo]);

  const display = thousands ? count.toLocaleString("nl-NL") : count;
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const CheckIconWhite = () => (
  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-white">
    <Image src="/images/tikBlack.svg" alt="Check mark" width={12} height={12} />
  </span>
);
const CheckIconBlack = () => (
  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#141721]">
    <Image src="/images/tikIcon.svg" alt="Check mark" width={12} height={12} />
  </span>
);

const PricingSection = () => {
  return (
    <div className="p-2">
      {" "}
      <section
        id="prijzen"
        className="bg-[#141721] py-12 md:py-20 px-4 rounded-2xl"
      >
        <div className="max-w-300 mx-auto w-full">
          {/* Header */}
          <ScrollReveal effect="fade-up">
            <h2 className="text-[32px] sm:text-[50px] font-medium text-white leading-tight mb-8 sm:mb-12 text-center sm:text-left">
              Passende websitepakketten <br className="hidden sm:inline" />
              voor elk bedrijf
            </h2>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} effect="fade-up" delay={i * 120}>
                <div
                  className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    plan.highlighted
                      ? "bg-[#FFFFFF] border border-white/20"
                      : "bg-[#1B2030]"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span className="absolute top-5 right-5 bg-linear-to-r from-black to-[#8715AD] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}

                  {/* Name & subtitle */}
                  <div>
                    <h3
                      className={`text-[18px] font-semibold mb-1 ${plan.highlighted ? "text-[#141721]" : "text-white"}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-[13px] ${plan.highlighted ? "text-[#141721]/60" : "text-[#9ca3af]"}`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <span
                      className={`text-[42px] font-bold leading-none ${plan.highlighted ? "text-[#141721]" : "text-white"}`}
                    >
                      {plan.price}
                    </span>
                    <p
                      className={`text-[12px] mt-1 ${plan.highlighted ? "text-[#141721]/60" : "text-[#9ca3af]"}`}
                    >
                      {plan.note}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        {plan.highlighted ? (
                          <CheckIconBlack />
                        ) : (
                          <CheckIconWhite />
                        )}
                        <span
                          className={`text-[13px] ${plan.highlighted ? "text-[#141721]" : "text-[#d1d5db]"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`mt-2 w-full py-3 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-90 ${
                      plan.highlighted
                        ? "bg-linear-to-r from-black to-[#8715AD] text-white"
                        : "bg-white text-[#141721]"
                    }`}
                  >
                    Website aanvragen
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats bar */}
          <ScrollReveal effect="fade-up" delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-8 sm:gap-16 mt-12 py-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-white text-[32px] sm:text-[40px] font-semibold">
                    <CountUp
                      countTo={stat.countTo}
                      suffix={stat.suffix}
                      thousands={stat.thousands}
                    />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-white text-[16px] sm:text-[20px]">
                      {stat.unit}
                    </span>
                    <span className="text-white text-[16px] sm:text-[20px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA banner */}
          <ScrollReveal effect="fade-up" delay={150}>
            <div className="mt-8 bg-[#2b2e37] rounded-xl border border-white px-6 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-0 text-center sm:text-left">
              <div>
                <h3 className="text-white text-[28px] sm:text-[36px] mb-2 sm:mb-1">
                  Klaar voor je nieuwe website?
                </h3>
                <p className="text-[#9ca3af] text-[14px]">
                  Laten we kort over je project praten en ontdekken wel pakket
                  het beste bij <br className="hidden sm:inline" /> jouw bedrijf
                  past.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 bg-white text-[#0e0f1a] text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
              >
                Gratis aanvraag
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
