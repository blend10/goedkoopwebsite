import React from "react";
import Image from "next/image";

const items = [
  { icon: "/images/icon1.svg", label: "Krachtig\ndesignsysteem" },
  {
    icon: "/images/icon2.svg",
    label: "Responsief design:\ndesktop, tablet en mobiel",
  },
  { icon: "/images/icon3.svg", label: "Soepele, moderne\nanimaties" },
  { icon: "/images/icon4.svg", label: "Lanceer binnen\nenkele minuten" },
  { icon: "/images/icon5.svg", label: "Eenvoudige visuele\naanpassingen" },
  { icon: "/images/icon6.svg", label: "Gebouwd voor\nsnelheid en prestaties" },
];

const IconsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-6 lg:py-5">
      <div className="max-w-300 mx-auto w-full px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-y-6 gap-x-8 lg:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#141721]">
              <Image src={item.icon} alt={item.label} width={32} height={32} />
              <span className="text-[13px] font-medium leading-snug whitespace-pre-line">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
