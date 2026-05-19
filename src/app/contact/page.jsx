"use client";

import FaqSection from "@/components/home/FaqSection";
import Image from "next/image";
import { useState } from "react";

const bullets = [
  "15 minuten gratis telefoongesprek",
  "Geheimhoudingsverklaring? Natuurlijk, gewoon vragen.",
  "Reactie binnen 24 uur",
];

const CheckIcon = () => (
  <Image
    src="/images/iconCont.svg"
    alt=""
    width={20}
    height={20}
    className="shrink-0"
  />
);

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    project: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mkoegdan", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", company: "", email: "", project: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10"
        style={{ top: "-72px", bottom: 0 }}
      >
        <Image
          src="/images/background2.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-300 mx-auto w-full px-6 md:px-8 pt-36 pb-24">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <h1 className="text-[42px] md:text-[56px] font-medium text-[#141721] leading-[1.05]">
            Samen iets groots
            <br />
            creëren
          </h1>
          <p className="text-[16px] text-[#4B4757] leading-relaxed max-w-md md:pt-4">
            Met WebStudio Nederland ontwikkelen we moderne websites en digitale
            oplossingen die merken versterken, vertrouwen opbouwen en groei
            stimuleren.
          </p>
        </div>

        {/* Two-column area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: contact info */}
          <div className="flex flex-col gap-10">
            {/* Aanvraag */}
            <div>
              <p className="text-[13px] text-[#3C3C4399] mb-3">Aanvraag</p>
              <a
                href="tel:+31648291375"
                className="block text-[18px] text-[#141721] font-medium mb-1 hover:underline"
              >
                +31 6 48291375
              </a>
              <a
                href="mailto:info@goedkoopwebsite.com"
                className="text-[15px] text-[#03030F] font-semibold hover:underline"
              >
                info@goedkoopwebsite.com
              </a>
            </div>

            <div className="border-t border-[#141721]/15" />

            {/* Vind ons */}
            <div>
              <p className="text-[13px] text-[#3C3C4399] mb-3">Vind ons</p>
              <p className="text-[16px] text-[#03030F] font-semibold leading-relaxed">
                1287 Cedar Ridge Ave, Suite 300,
                <br />
                Annapolis Junction, MD 20701
              </p>
            </div>

            <div className="border-t border-[#141721]/15" />

            {/* Plan een telefoongesprek */}
            <div>
              <p className="text-[14px] text-[#141721] mb-4">
                Plan een telefoongesprek
              </p>
              <a
                href="tel:+31648291375"
                className="flex items-center gap-4 w-full max-w-sm rounded-2xl px-4 py-4 text-left transition hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(90deg, #1a1a1f 0%, #2a1a35 40%, #6b1f8a 100%)",
                }}
              >
                <div className="relative w-12 h-12 shrink-0">
                  <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-white/20">
                    <Image
                      src="/images/ethan.png"
                      alt="Ethan Walker"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Image
                    src="/images/ethanSvg.svg"
                    alt=""
                    width={27}
                    height={27}
                    className="absolute -right-3 top-3 rounded-full bg-black p-0.5"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white text-[16px] font-medium">
                    Ethan Walker
                  </p>
                  <p className="text-white/70 text-[15px]">Oprichter & CEO</p>
                </div>
              </a>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[14px] text-[#141721]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10">
            <h2 className="text-[20px] font-bold text-[#03030F] mb-2">
              Wij zijn hier om te helpen
            </h2>
            <p className="text-[14px] text-[#424242] mb-7">
              Neem contact met ons op bij vragen of ondersteuning.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[16px] font-semibold text-[#141721]">Bericht verzonden!</p>
                <p className="text-[14px] text-[#424242]">We nemen zo snel mogelijk contact met je op.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[13px] text-[#4F00ED] hover:underline"
                >
                  Nieuw bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#141721] mb-2">
                      Uw naam
                    </label>
                    <input
                      type="text"
                      placeholder="Jhon Doe"
                      value={form.name}
                      onChange={update("name")}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[14px] text-[#141721] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20 focus:border-[#4F00ED]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#141721] mb-2">
                      Uw telefoonnummer
                    </label>
                    <input
                      type="tel"
                      placeholder="Telefon"
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[14px] text-[#141721] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20 focus:border-[#4F00ED]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#141721] mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      placeholder="Firma XYZ"
                      value={form.company}
                      onChange={update("company")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[14px] text-[#141721] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20 focus:border-[#4F00ED]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#141721] mb-2">
                      Uw e-mailadres
                    </label>
                    <input
                      type="email"
                      placeholder="ihreadresse@mail.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[14px] text-[#141721] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20 focus:border-[#4F00ED]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#141721] mb-2">
                    Vertel ons over uw project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Schrijf hier wat er in je opkomt..."
                    value={form.project}
                    onChange={update("project")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[14px] text-[#141721] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20 focus:border-[#4F00ED]/40 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-500">
                    Er is iets misgegaan. Probeer het opnieuw.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="self-start mt-2 bg-[#141721] text-white px-7 py-3 rounded-lg text-[14px] font-medium hover:bg-black/80 transition disabled:opacity-60"
                >
                  {status === "loading" ? "Verzenden…" : "Vrijblijvend gesprek"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <FaqSection />
    </main>
  );
}
