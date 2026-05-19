"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal — wraps children and reveals them when scrolled into view.
 *
 * @param {"fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "pop"} effect
 * @param {number} delay — ms delay before animation starts
 * @param {number} threshold — 0-1, how much of the element must be visible
 * @param {string} className — additional classes
 */
export default function ScrollReveal({
  children,
  effect = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseStyles = {
    transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles = {
    "fade-up": { opacity: 0, transform: "translateY(32px)" },
    "fade-down": { opacity: 0, transform: "translateY(-32px)" },
    "fade-left": { opacity: 0, transform: "translateX(-40px)" },
    "fade-right": { opacity: 0, transform: "translateX(40px)" },
    "scale": { opacity: 0, transform: "scale(0.85)" },
    "pop": { opacity: 0, transform: "scale(0.3)", transition: "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)", transitionDelay: `${delay}ms` },
  };

  const visibleStyles = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(visible ? visibleStyles : hiddenStyles[effect]),
      }}
    >
      {children}
    </Tag>
  );
}
