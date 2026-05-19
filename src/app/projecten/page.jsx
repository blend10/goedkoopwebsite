"use client";

import FaqSection from "@/components/home/FaqSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const allProjects = [
  {
    title: "Brog — Digital Design Agency Portfolio",
    image: "/images/mock1.png",
    category: "Portfolio",
  },
  {
    title: "Prime Studio — Website Saas Template",
    image: "/images/mock2.png",
    category: "SaaS",
  },
  {
    title: "Hakot — DesignAgency Portfolio",
    image: "/images/mock3.png",
    category: "Portfolio",
  },
  {
    title: "Prismora — Personal Web Portfolio",
    image: "/images/mock4.png",
    category: "Portfolio",
  },
  {
    title: "Crawford — Photography Portfolio",
    image: "/images/mock5.png",
    category: "Photography",
  },
  {
    title: "BoostIQ — Saas Landing Page",
    image: "/images/mock6.png",
    category: "SaaS",
  },
  {
    title: "Brog — Digital Design Agency Portfolio",
    image: "/images/mock1.png",
    category: "Portfolio",
  },
  {
    title: "Prime Studio — Website Saas Template",
    image: "/images/mock2.png",
    category: "SaaS",
  },
  {
    title: "Hakot — DesignAgency Portfolio",
    image: "/images/mock3.png",
    category: "Portfolio",
  },
  {
    title: "Prismora — Personal Web Portfolio",
    image: "/images/mock4.png",
    category: "Portfolio",
  },
  {
    title: "Crawford — Photography Portfolio",
    image: "/images/mock5.png",
    category: "Photography",
  },
  {
    title: "BoostIQ — Saas Landing Page",
    image: "/images/mock6.png",
    category: "SaaS",
  },
];

const categories = ["Alle", "Portfolio", "SaaS", "Photography"];

const styles = ["Alle stijlen", "Modern", "Minimal", "Bold"];
const sortOptions = ["Nieuwste", "Oudste", "A-Z"];

export default function ProjectenPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [style, setStyle] = useState("Alle stijlen");
  const [sort, setSort] = useState("Nieuwste");
  const [openMenu, setOpenMenu] = useState(null);
  const [visible, setVisible] = useState(6);

  const handleSearch = (val) => {
    setSearch(val);
    setVisible(6);
  };
  const handleCategory = (val) => {
    setCategory(val);
    setVisible(6);
    setOpenMenu(null);
  };
  const handleStyle = (val) => {
    setStyle(val);
    setVisible(6);
    setOpenMenu(null);
  };
  const handleSort = (val) => {
    setSort(val);
    setOpenMenu(null);
  };
  const toggleMenu = (name) => setOpenMenu((m) => (m === name ? null : name));

  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = allProjects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Alle" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <main className=" bg-transparent">
      {/* Hero + filter (with absolute background image behind header) */}
      <section className="relative pt-36 pb-12 px-4 sm:px-8">
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
        <div className="max-w-300 mx-auto w-full flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16 gap-6">
          <h1 className="text-[36px] sm:text-[45px] lg:text-[55px] font-medium text-[#141721] leading-tight max-w-xl">
            Gemaakt met
            <br />
            WebStudio Nederland
          </h1>
          <p className="text-[15px] text-[#555] leading-relaxed max-w-sm lg:pt-3">
            Wij bouwen websites die merken vooruit helpen. Sterk design, hoge
            kwaliteit en altijd maatwerk dat past bij jouw verhaal. Websites met
            karakter. Bedrijven die dachten dat het maanden zou duren, stonden
            binnen 11 werkdagen live. Echt.
          </p>
        </div>

        {/* Filter bar */}
        <div
          ref={menuRef}
          className="max-w-300 mx-auto w-full mt-12 flex flex-wrap items-center gap-3"
        >
          {/* Search pill */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Zoeken"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 text-[14px] rounded-full bg-white/90 text-[#141721] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F00ED]/20"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-[13px]">
              ⌘
            </span>
          </div>

          {/* Categorie dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("cat")}
              className="flex items-center gap-2 bg-white/90 text-[#A4A9AD] px-5 py-2.5 rounded-full text-[14px] shadow-sm hover:bg-white transition"
            >
              {category === "Alle" ? "Categorie" : category}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openMenu === "cat" && (
              <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-20">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 ${category === cat ? "text-[#4F00ED] font-medium" : "text-[#141721]"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Stijl dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("style")}
              className="flex items-center gap-2 bg-white/90 text-[#A4A9AD] px-5 py-2.5 rounded-full text-[14px] shadow-sm hover:bg-white transition"
            >
              {style === "Alle stijlen" ? "Stijl" : style}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openMenu === "style" && (
              <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-20">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStyle(s)}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 ${style === s ? "text-[#4F00ED] font-medium" : "text-[#141721]"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort dropdown (right) */}
          <div className="relative ml-auto">
            <button
              onClick={() => toggleMenu("sort")}
              className="flex items-center gap-2 border border-[#141721]/30 text-[#141721] px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-white/40 transition"
            >
              {sort}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openMenu === "sort" && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-20">
                {sortOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSort(s)}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 ${sort === s ? "text-[#4F00ED] font-medium" : "text-[#141721]"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <section className="px-4 sm:px-8 py-12">
          <div className="max-w-300 mx-auto w-full">
            {filtered.length === 0 ? (
              <p className="text-center text-gray-400 py-24 text-[16px]">
                Geen projecten gevonden.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {shown.map((project, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      {/* Card top bar */}
                      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
                        <span className="text-[16px] font-medium text-[#141721] truncate pr-3">
                          {project.title}
                        </span>
                        <div className="flex gap-1.5 shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                          <span className="w-2 h-2 rounded-full bg-[#FF8513]" />
                          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                        </div>
                      </div>

                      {/* Screenshot */}
                      <div className="relative w-full aspect-386/616 bg-gray-50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => setVisible((v) => v + 3)}
                      className="flex items-center gap-2 bg-[#141721] text-white px-8 py-3 rounded-xl text-[15px] font-medium hover:bg-black/80 transition"
                    >
                      Meer laden
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </section>

      <FeaturesSection />
      <FaqSection />
    </main>
  );
}
