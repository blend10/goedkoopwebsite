"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CALENDLY_URL = "https://calendly.com/goedkoopwebsite-info/30min";

const Footer = () => {
  const pathname = usePathname();

  const handlePrijzen = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      document
        .getElementById("prijzen")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#prijzen";
    }
  };

  return (
    <div className="p-2">
      <footer id="calendly" className="bg-[#0e0f1a] text-white rounded-2xl">
        {/* Top CTA + Calendly */}
        <div className="max-w-300 mx-auto w-full px-4 pt-14 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="flex flex-col justify-start pt-4">
              <p className="text-[#FEFEFE] text-[16px] mb-4 text-center md:text-left">
                Laten we binnen 30 minuten praten
              </p>
              <h2 className="text-[22px] text-center md:text-left md:text-[50px] font-medium leading-tight">
                Boek een gratis
                <br />
                strategiegesprek
              </h2>
            </div>

            {/* Right — Calendly iframe */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-2xl h-[480px]">
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Boek een gesprek"
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="max-w-300 mx-auto w-full px-4 py-10 ">
          <div className="grid p-10 xl:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1fr_auto_auto] gap-10 items-start lg:items-end">
            {/* Mockup image */}
            <div className="relative w-70 h-70 sm:w-70 sm:h-60 shrink-0">
              <Image
                src="/images/group.png"
                alt="Website mockup"
                width={270}
                height={300}
                className="absolute left-5 md:left-0 md:-top-10 lg:top-0 rounded-lg shadow-lg "
              />
            </div>

            {/* Description + social */}
            <div className="max-w-sm">
              <p className="text-white/80 text-[15px] text-center md:text-left leading-relaxed mb-5">
                WebStudio Nederland ontwikkelt moderne websites die bedrijven
                professioneel presenteren, vertrouwen opbouwen en nieuwe
                klantaanvragen genereren.
              </p>
              <div className="flex items-center gap-5 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#9ca3af] hover:text-white transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-[#9ca3af] hover:text-white transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Seiten */}
            <div className="text-center md:text-left">
              <h4 className="text-white  text-[18px] font-medium mb-4">
                Seiten
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 text-[15px] hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projecten"
                    className="text-white/80 text-[15px] hover:text-white transition-colors"
                  >
                    Projecten
                  </Link>
                </li>
                <li>
                  <a
                    href="/#prijzen"
                    onClick={handlePrijzen}
                    className="text-white/80 text-[15px] hover:text-white transition-colors"
                  >
                    Prijzen
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 text-[15px] hover:text-white transition-colors"
                  >
                    Contact opnemen
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="flex flex-col text-center md:text-left">
              <h4 className="text-white text-[18px] font-medium mb-4">
                Information
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 text-[15px] hover:text-white transition-colors"
                  >
                    Contact opnemen
                  </Link>
                </li>
                <li className="text-white/80 text-[15px] hover:text-white transition-colors">
                  Privacybeleid
                </li>
                <li className="text-white/80 text-[15px] hover:text-white transition-colors">
                  Algemene voorwaarden
                </li>
                <li className="text-transparent text-[15px] select-none pointer-events-none">
                  Algemene voorwaarden
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="">
          <div className="max-w-300 mx-auto w-full px-4 py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[16px]">
              <span className="font-bold text-[20px] sm:text-[24px] text-white">
                WebStudio Nederland
              </span>
              <span className="text-[#B5B5B5]">•</span>
              <span className="text-[#B5B5B5]">Design Agency</span>
            </div>
            <p className="text-[#FEFEFE] text-[15px]">
              © {new Date().getFullYear()} WebStudio Nederland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
