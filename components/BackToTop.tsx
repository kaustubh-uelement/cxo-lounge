"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { clsx } from "clsx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const updatePosition = () => {
      setVisible(window.scrollY > 280);

      const targetEl = document.getElementById("foot-credit") || document.querySelector("footer");
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const defaultBottom = window.innerWidth >= 640 ? 32 : 24;

        // When the top of the signature element is within or entering the bottom viewport area
        const overlap = windowHeight - rect.top;
        if (overlap > 0) {
          // Elevate button so its bottom edge rests at least 16px above the signature
          setBottomOffset(overlap + 16);
        } else {
          setBottomOffset(defaultBottom);
        }
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ bottom: `${bottomOffset}px` }}
      className={clsx(
        "fixed right-5 sm:right-8 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full",
        "bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "text-navy-900 transition-[opacity,transform,background-color,box-shadow] duration-200 ease-out",
        "hover:bg-white/90 hover:scale-105 hover:shadow-[0_12px_36px_rgba(16,42,76,0.18)] active:scale-95",
        "focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-navy-900" aria-hidden="true" />
    </button>
  );
}
