import { ChevronDown } from "lucide-react";

const ScrollCue = ({ label = "Scroll down", className = "" }) => {
  const handleScroll = () => {
    window.scrollBy({
      top: Math.max(window.innerHeight * 0.7, 420),
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <button
        type="button"
        onClick={handleScroll}
        aria-label={label}
        className="group inline-flex flex-col items-center gap-2 text-white/70 transition hover:text-white"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          {label}
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_24px_rgba(255,255,255,0.05)] transition duration-300 group-hover:border-white/35 group-hover:bg-white/[0.08]">
          <span className="absolute inset-1 rounded-full border border-white/10" />
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </span>
      </button>
    </div>
  );
};

export default ScrollCue;
