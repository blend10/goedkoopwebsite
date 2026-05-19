"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projecten", href: "/projecten" },
  { label: "Prijzen", href: null, id: "prijzen" },
  { label: "Contact opnemen", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const dark = pathname === "/projecten" || pathname === "/contact";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleBooking = () => {
    if (pathname === "/") {
      const el = document.getElementById("calendly");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#calendly";
    }
  };

  const textColor = dark || scrolled ? "text-[#141721]" : "text-white";
  const hoverColor =
    dark || scrolled ? "hover:text-[#141721]/70" : "hover:text-white/80";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        } ${mobileOpen ? "!bg-[#0e0f1a]" : ""} ${mobileOpen ? "text-white" : textColor}`}
      >
        <div className="flex items-center justify-between max-w-300 mx-auto w-full py-4 px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className={`text-[20px] md:text-[24px] font-bold shrink-0 transition-colors duration-300 ${mobileOpen ? "text-white" : ""}`}>
            WebStudio Nederland
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-8 text-[16px] font-semibold">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${hoverColor}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className={`transition ${hoverColor}`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={handleBooking}
            className={`hidden lg:inline-flex px-6 py-2 rounded-[10px] transition font-medium ${
              dark || scrolled
                ? "bg-[#141721] text-white hover:bg-[#141721]/90"
                : "bg-white text-[#141721] hover:bg-white/90"
            }`}
          >
            Vrijblijvend gesprek
          </button>

          {/* Mobile hamburger — animated bars */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`lg:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${mobileOpen ? "text-white" : ""}`}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "bg-white rotate-45 translate-y-[9px]" : (dark || scrolled ? "bg-[#141721]" : "bg-white")}`}
              />
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"} ${dark || scrolled ? "bg-[#141721]" : "bg-white"}`}
              />
              <span
                className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "bg-white -rotate-45 -translate-y-[9px]" : (dark || scrolled ? "bg-[#141721]" : "bg-white")}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark glassmorphism backdrop */}
        <div className="absolute inset-0 bg-[#0e0f1a]/[0.97] backdrop-blur-xl" />

        {/* Nav content */}
        <nav className="relative z-10 flex flex-col justify-center items-center h-full px-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-sm">
            {navItems.map((item, index) => {
              const delay = `${100 + index * 80}ms`;
              const linkClasses = `text-[32px] font-semibold text-white/90 hover:text-white transition-all duration-500 tracking-tight ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`;

              return item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={linkClasses}
                  style={{ transitionDelay: mobileOpen ? delay : "0ms" }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={(e) => {
                    handleSectionClick(e, item.id);
                    setMobileOpen(false);
                  }}
                  className={linkClasses}
                  style={{ transitionDelay: mobileOpen ? delay : "0ms" }}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Divider */}
            <div
              className={`w-16 h-[1px] bg-white/20 my-2 transition-all duration-500 ${
                mobileOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: mobileOpen ? "420ms" : "0ms" }}
            />

            {/* CTA Button */}
            <button
              onClick={() => {
                handleBooking();
                setMobileOpen(false);
              }}
              className={`w-full max-w-xs bg-gradient-to-r from-white to-white/90 text-[#0e0f1a] text-[16px] font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-white/10 transition-all duration-500 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
            >
              Vrijblijvend gesprek
            </button>

            {/* Subtle bottom tagline */}
            <p
              className={`text-white/30 text-[12px] tracking-widest uppercase mt-6 transition-all duration-500 ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? "600ms" : "0ms" }}
            >
              WebStudio Nederland
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
