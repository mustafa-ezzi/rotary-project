import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollY > 300);
      setProgress(docH > 0 ? Math.min(scrollY / docH, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const SIZE = 48;
  const R = 20;
  const CIRC = 2 * Math.PI * R;
  const dash = CIRC * progress;

  return (
    <>
      <style>{`
        @keyframes sttIn {
          from { opacity:0; transform:scale(0.7) translateY(10px); }
          to   { opacity:1; transform:scale(1)   translateY(0);    }
        }
        @keyframes sttOut {
          from { opacity:1; transform:scale(1)   translateY(0);    }
          to   { opacity:0; transform:scale(0.7) translateY(10px); }
        }
        .stt-show { animation: sttIn  0.28s cubic-bezier(0.34,1.56,0.64,1) forwards; pointer-events:auto; }
        .stt-hide { animation: sttOut 0.2s  ease forwards;                            pointer-events:none; }

        @keyframes sttBounce {
          0%,100% { transform:translateY(0);  }
          50%      { transform:translateY(-4px); }
        }
        .stt-icon { animation: sttBounce 1.8s ease-in-out infinite; }

        @keyframes sttPulse {
          0%,100% { opacity:0.5; transform:scale(1);   }
          50%      { opacity:1;   transform:scale(1.08); }
        }
        .stt-ring-glow { animation: sttPulse 2s ease-in-out infinite; }
      `}</style>

      <div
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-50 ${isVisible ? "stt-show" : "stt-hide"}`}
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Outer glow pulse ring */}
        <div
          className="stt-ring-glow absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
            transform: "scale(1.5)",
          }}
        />

        {/* SVG: track + progress arc */}
        <svg
          width={SIZE} height={SIZE}
          className="absolute inset-0"
          style={{ transform: "rotate(-90deg)", pointerEvents: "none" }}
        >
          <defs>
            <linearGradient id="stt-g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* track */}
          <circle cx={SIZE/2} cy={SIZE/2} r={R}
            fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
          {/* progress */}
          <circle cx={SIZE/2} cy={SIZE/2} r={R}
            fill="none" stroke="url(#stt-g)" strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${CIRC}`}
            style={{ transition: "stroke-dasharray 0.12s linear" }}
          />
        </svg>

        {/* Button face */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          style={{
            inset: 5,
            background: "linear-gradient(135deg, #1e1b4b, #3b1f6e)",
            border: "1px solid rgba(167,139,250,0.4)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Arrow icon — plain SVG, clearly visible */}
          <span className="stt-icon" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg
              width="16" height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 5px rgba(236,72,153,1)) drop-shadow(0 0 12px rgba(139,92,246,0.8))",
              }}
            >
              {/* Vertical stem */}
              <line x1="8" y1="13" x2="8" y2="4"
                stroke="white" strokeWidth="2" strokeLinecap="round" />
              {/* Left wing */}
              <line x1="8" y1="4" x2="3.5" y2="8.5"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Right wing */}
              <line x1="8" y1="4" x2="12.5" y2="8.5"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}