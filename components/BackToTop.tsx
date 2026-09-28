"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { clsx } from "clsx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={clsx(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full",
        "bg-white/65 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "text-navy-900 transition-all duration-300 ease-out",
        "hover:bg-white/90 hover:scale-105 hover:shadow-[0_12px_36px_rgba(16,42,76,0.18)] active:scale-95",
        "focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <ArrowUp className="h-5 w-5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-navy-900" aria-hidden="true" />
    </button>
  );
}
