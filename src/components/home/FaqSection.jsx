"use client";

import { useState } from "react";
import ScrollReveal from "@/components/general/ScrollReveal";

const faqs = [
  {
    question: "Hoe snel is mijn website klaar?",
    answer:
      "Een eenvoudige website kan binnen enkele dagen tot 1–2 weken klaar zijn, en we streven er altijd naar om je website zo snel en efficiënt mogelijk te creëren en op te leveren.",
  },
  {
    question: "Kan ik later nog wijzigingen aanbrengen?",
    answer:
      "Ja, je kunt later altijd nog wijzigingen aanbrengen. Je website is flexibel en kan op elk moment worden aangepast of bijgewerkt.",
  },
  {
    question: "Is hosting inbegrepen in de prijs?",
    answer:
      "Hosting is niet inbegrepen in de basisprijs, tenzij anders vermeld, maar we kunnen je wel helpen met het instellen ervan of het toevoegen aan je pakket indien nodig.",
  },
  {
    question: "Kan ik mijn eigen domeinnaam gebruiken?",
    answer:
      "Ja, je kunt je eigen domeinnaam gebruiken. We kunnen deze verbinden met je website en ervoor zorgen dat alles correct wordt ingesteld.",
  },
  {
    question: "Krijg ik ook ondersteuning na oplevering?",
    answer:
      "Ja, wij bieden ook ondersteuning na oplevering om je te helpen met vragen, updates of kleine aanpassingen die je nodig hebt.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-12 md:py-20 px-6 md:px-8 lg:px-4">
      <div className="max-w-300 mx-auto w-full">
        {/* Label */}
        <ScrollReveal effect="fade-up">
          <p className="text-[#6030FF] text-[12px] font-semibold tracking-widest uppercase text-center mb-4">
            FAQ
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal effect="fade-up" delay={100}>
          <h2 className="text-[32px] sm:text-[46px] font-medium text-[#141721] leading-tight text-center mb-4">
            Alles wat je moet weten
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal effect="fade-up" delay={200}>
          <p className="text-[#4B4757] text-[14px] sm:text-[16px] text-center leading-relaxed mb-8 sm:mb-12">
            Duidelijke antwoorden op vragen die elke ondernemer stelt
            <br className="hidden sm:inline" />
            voordat hij een website laat maken
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} effect="fade-up" delay={300 + i * 80}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-4"
                >
                  <span className="text-[#141721] text-[14px] sm:text-[15px] font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[#141721] text-[22px] font-light leading-none transition-transform duration-300 shrink-0 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? "200px" : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-[#6b7280] text-[13px] sm:text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
