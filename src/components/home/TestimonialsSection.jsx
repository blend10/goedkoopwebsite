"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "“Eerlijk gezegd verwachtten we een simpele, goedkope site, maar we kregen iets dat veel professioneler oogt dan bij bureaus waar we eerder mee hebben gewerkt.”",
    name: "Maaike van Loon",
    role: "Eigenaresse, Studio Linde",
    avatar: "https://i.pravatar.cc/44?img=47",
  },
  {
    quote:
      "“Eerlijk gezegd verwachtten we een simpele, goedkope site, maar we kregen iets dat er veel professioneler uitziet dan bij bureaus waar we eerder mee hebben gewerkt.”",
    name: "Maaike van Loon",
    role: "Eigenaresse, Studio Linde",
    avatar: "https://i.pravatar.cc/44?img=11",
  },
  {
    quote:
      "“Het grootste verschil was de snelheid. Binnen een week stonden we live en de communicatie was van begin tot eind helder.”",
    name: "Jeroen van Dijk",
    role: "Directeur, Van Dijk Elektrotechniek",
    avatar: "https://i.pravatar.cc/44?img=32",
  },
  {
    quote:
      "“Duidelijke prijs, geen gedoe, en eindelijk een website waar ik trots op ben om klanten naartoe te sturen.”",
    name: "Sanne Vermeer",
    role: "Coach, Praktijk Nova",
    avatar: "https://i.pravatar.cc/44?img=14",
  },
  {
    quote:
      "“Ik was sceptisch over de prijs, maar de kwaliteit heeft alle twijfels weggenomen. Onze klanten complimenteren ons steeds vaker op hoe professioneel we online staan.”",
    name: "Thomas Bergkamp",
    role: "Eigenaar, Bergkamp Installaties",
    avatar: "https://i.pravatar.cc/44?img=53",
  },
];

const SWIPE_THRESHOLD_PX = 50;

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const headingRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [slideStepPx, setSlideStepPx] = useState(296);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);
  const swipeStartRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setSlideStepPx(mq.matches ? 432 : 296);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (pauseAutoplay) return;
    const len = testimonials.length;
    const id = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % len),
      4000,
    );
    return () => window.clearInterval(id);
  }, [pauseAutoplay]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const len = testimonials.length;
  const handleSelect = (i) => setActiveIndex(i);
  const goPrev = () => setActiveIndex((i) => (i - 1 + len) % len);
  const goNext = () => setActiveIndex((i) => (i + 1) % len);

  const clearSwipeStart = () => {
    swipeStartRef.current = null;
  };

  const releasePointerCaptureSafe = (el, pointerId) => {
    try {
      if (el.hasPointerCapture(pointerId)) el.releasePointerCapture(pointerId);
    } catch {
      /* already released */
    }
  };

  const onCarouselPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    swipeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      pointerId: e.pointerId,
    };
  };

  const applySwipeFromPointer = (e) => {
    const start = swipeStartRef.current;
    clearSwipeStart();
    if (!start || start.pointerId !== e.pointerId) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < SWIPE_THRESHOLD_PX)
      return;
    if (dx > 0) goPrev();
    else goNext();
  };

  const onCarouselPointerUp = (e) => {
    releasePointerCaptureSafe(e.currentTarget, e.pointerId);
    applySwipeFromPointer(e);
  };

  const onCarouselPointerCancel = (e) => {
    releasePointerCaptureSafe(e.currentTarget, e.pointerId);
    if (swipeStartRef.current?.pointerId === e.pointerId) clearSwipeStart();
  };

  const getRelativeIndex = (index) => {
    const diff = index - activeIndex;
    let n = diff;
    if (n > len / 2) n -= len;
    if (n < -len / 2) n += len;
    return n;
  };

  const lines = [
    { text: "Klantverhalen over GOEDKOOPWEBSITE.COM ", from: 78, to: 16 },
    { text: "Echt vertrouwen.", from: 78, to: 16 },
  ];
  const totalWords = lines.reduce(
    (n, line) => n + line.text.split(" ").length,
    0,
  );
  const step = 1 / totalWords;
  let wordIdx = 0;

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 hidden h-[60%] w-full -translate-x-1/2 -translate-y-1/2 md:block"
        style={{
          backgroundImage: "url('/images/testimonials-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      />

      {/* 3D world map dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden items-end justify-center md:flex"
        style={{ perspective: "1200px", height: "90%" }}
      >
        <div
          className="relative w-[170%] max-w-none"
          style={{
            transform: "rotateX(58deg) scale(1.15) translateY(15%)",
            transformOrigin: "center bottom",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 75% at center, black 45%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 65% 75% at center, black 45%, transparent 90%)",
          }}
        >
          <img
            src="/images/map-base.svg"
            alt=""
            className="w-full opacity-50 scale-75"
            style={{
              filter: "drop-shadow(0 20px 40px hsl(220 80% 50% / 0.25))",
            }}
          />
          {[
            { x: 22, y: 38, d: 0 },
            { x: 30, y: 52, d: 1.2 },
            { x: 42, y: 32, d: 2.4 },
            { x: 48, y: 58, d: 0.6 },
            { x: 55, y: 42, d: 3.0 },
            { x: 62, y: 36, d: 1.8 },
            { x: 70, y: 50, d: 0.9 },
            { x: 78, y: 44, d: 2.1 },
            { x: 35, y: 70, d: 2.7 },
            { x: 82, y: 60, d: 1.5 },
            { x: 18, y: 55, d: 3.3 },
            { x: 50, y: 25, d: 0.3 },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className="block h-2 w-2 rounded-full bg-[hsl(220_90%_60%)] animate-map-ping"
                style={{ animationDelay: `${p.d}s` }}
              />
              <span
                className="absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(220_90%_60%)] opacity-0 animate-map-glow"
                style={{ animationDelay: `${p.d}s` }}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto w-full min-w-0 max-w-full text-center">
          <h1 className="text-[#4F00ED] text-[13px] font-medium uppercase tracking-widest mb-5">
            Wat onze klanten zeggen
          </h1>
          <h2
            ref={headingRef}
            className="mx-auto max-w-full text-[26px] font-semibold leading-[1.12] tracking-tight sm:text-[32px] sm:leading-[1.08] md:text-[40px] lg:text-[44px]"
          >
            {lines.map((line, li) => {
              const words = line.text.split(" ");
              return (
                <span
                  key={li}
                  className="block max-w-full wrap-break-word text-center md:whitespace-nowrap"
                >
                  {words.map((w, i) => {
                    const myIdx = wordIdx++;
                    const local = Math.max(
                      0,
                      Math.min(1, (progress - myIdx * step) / step),
                    );
                    const lightness = Math.round(
                      line.from - local * (line.from - line.to),
                    );
                    return (
                      <span
                        key={i}
                        style={{ color: `hsl(220 20% ${lightness}%)` }}
                      >
                        {w}
                        {i < words.length - 1 ? " " : null}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Avatar selector */}
        <div className="mt-12 flex items-center justify-center gap-5">
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`relative rounded-full transition-all duration-300 ${isActive ? "scale-110" : "opacity-70 hover:opacity-100"}`}
                aria-label={`Show testimonial from ${t.name}`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -inset-0.75 rounded-full"
                    style={{
                      background:
                        "linear-gradient(243.62deg, #1B24FD 10.2%, #FF4848 50.03%, #FF7448 89.54%)",
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                )}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div
          ref={carouselSectionRef}
          className="relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 px-0"
          onMouseEnter={() => setPauseAutoplay(true)}
          onMouseLeave={() => setPauseAutoplay(false)}
          onFocusCapture={() => setPauseAutoplay(true)}
          onBlurCapture={(e) => {
            if (!carouselSectionRef.current?.contains(e.relatedTarget))
              setPauseAutoplay(false);
          }}
        >
          <div
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
            className="relative mx-auto h-52.5 w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing md:touch-auto xl:h-69.5"
            style={{ WebkitTouchCallout: "none" }}
            onDragStart={(e) => e.preventDefault()}
            onPointerDown={onCarouselPointerDown}
            onPointerUp={onCarouselPointerUp}
            onPointerCancel={onCarouselPointerCancel}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                goPrev();
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                goNext();
              }
            }}
          >
            {testimonials.map((t, i) => {
              const rel = getRelativeIndex(i);
              const abs = Math.abs(rel);
              if (abs > 2) return null;

              const isActive = rel === 0;
              const translate = rel * slideStepPx;
              const opacity = abs === 0 ? 1 : abs === 1 ? 0.85 : 0.55;

              return (
                <article
                  key={i}
                  aria-hidden={!isActive}
                  aria-current={isActive ? "true" : undefined}
                  className={`absolute left-1/2 top-1/2 flex h-47.5 w-70 flex-col rounded-[30px] px-6 py-5 backdrop-blur-md transition-all duration-500 ease-out xl:h-61.5 xl:w-100 xl:px-8 xl:py-7 ${
                    isActive
                      ? "bg-[hsl(220_30%_12%/0.95)] text-white"
                      : "bg-[hsl(220_15%_45%/0.55)] text-white/90"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translate}px)`,
                    opacity,
                    zIndex: 10 - abs,
                  }}
                >
                  <p className="min-h-0 flex-1 text-[14px] leading-normal xl:text-[15px] xl:leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto shrink-0 border-t border-white/10 pt-3 xl:pt-4">
                    <div className="text-[13px] font-medium xl:text-[14px]">
                      {t.name}
                    </div>
                    <div className="mt-0.5 text-[11px] opacity-70 xl:text-[12px]">
                      {t.role}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
