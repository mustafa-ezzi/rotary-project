import { useEffect, useState } from "react";

const ScrollCue = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        @keyframes lineDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          35%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          75%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        .sc-line-fill { animation: lineDrop 2.2s ease-in-out infinite; }

        @keyframes chevronWave {
          0%   { opacity: 0.15; transform: translateY(-3px); }
          50%  { opacity: 1;    transform: translateY(0px); }
          100% { opacity: 0.15; transform: translateY(3px); }
        }
        .sc-chev { animation: chevronWave 2.2s ease-in-out infinite; }

        @keyframes labelPulse {
          0%, 100% { opacity: 0.35; letter-spacing: 0.28em; }
          50%       { opacity: 0.85; letter-spacing: 0.38em; }
        }
        .sc-label-v {
          writing-mode: vertical-rl;
          animation: labelPulse 2.8s ease-in-out infinite;
        }
        .sc-label-h {
          animation: labelPulse 2.8s ease-in-out infinite;
        }

        @keyframes dotPing {
          0%, 100% { transform: scale(1);   opacity: 0.6; }
          50%       { transform: scale(1.6); opacity: 1;   }
        }
        .sc-dot { animation: dotPing 2.2s ease-in-out infinite; }

        /* Mobile: bottom-center horizontal layout */
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0px);  opacity: 0.5; }
          50%       { transform: translateY(5px);  opacity: 1; }
        }
        .sc-mobile-arrow { animation: arrowBounce 1.6s ease-in-out infinite; }
        .sc-mobile-arrow:nth-child(2) { animation-delay: 0.2s; }
        .sc-mobile-arrow:nth-child(3) { animation-delay: 0.4s; }

        @keyframes hLineDrop {
          0%   { transform: scaleX(0); transform-origin: left; opacity: 0; }
          40%  { transform: scaleX(1); transform-origin: left; opacity: 1; }
          80%  { transform: scaleX(1); transform-origin: right; opacity: 1; }
          100% { transform: scaleX(0); transform-origin: right; opacity: 0; }
        }
        .sc-hline-fill { animation: hLineDrop 2.2s ease-in-out infinite; }
      `}</style>

      {/* ── DESKTOP: fixed right side, vertical ── */}
      {!isMobile && (
        <div
          className="fixed right-5 sm:right-7 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="sc-label-v text-[10px] font-bold uppercase text-white/50 tracking-[0.3em]"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            scroll
          </span>

          <div
            className="sc-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(167,139,250,0.8)", boxShadow: "0 0 6px 2px rgba(167,139,250,0.5)" }}
          />

          <div
            className="relative rounded-full overflow-hidden"
            style={{ width: 2, height: 100, background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="sc-line-fill absolute inset-x-0 top-0 bottom-0 rounded-full"
              style={{
                background: "linear-gradient(180deg, rgba(139,92,246,0.3) 0%, rgba(167,139,250,1) 40%, rgba(236,72,153,1) 80%, rgba(251,113,133,0.4) 100%)",
              }}
            />
          </div>

          <div className="flex flex-col items-center" style={{ gap: 3 }}>
            {[0,1,2,3,4].map(i => {
              const isBottom = i >= 3;
              const progress = i / 4;
              return (
                <svg
                  key={i}
                  className="sc-chev"
                  width="14" height="9" viewBox="0 0 14 9" fill="none"
                  style={{
                    animationDelay: `${i * 0.18}s`,
                    filter: isBottom
                      ? "drop-shadow(0 0 5px rgba(236,72,153,1)) drop-shadow(0 0 12px rgba(167,139,250,0.8))"
                      : "drop-shadow(0 0 2px rgba(167,139,250,0.4))",
                  }}
                >
                  <polyline
                    points="1,1 7,7 13,1"
                    stroke={isBottom ? `rgba(236,${Math.round(72+progress*60)},153,1)` : `rgba(167,139,250,${0.3+progress*0.5})`}
                    strokeWidth={isBottom ? "2" : "1.5"}
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              );
            })}
          </div>

          <div
            className="sc-dot w-2 h-2 rounded-full"
            style={{
              background: "rgba(236,72,153,0.9)",
              boxShadow: "0 0 8px 3px rgba(236,72,153,0.6), 0 0 20px 6px rgba(139,92,246,0.3)",
              animationDelay: "0.4s"
            }}
          />
        </div>
      )}

      {/* ── MOBILE: fixed bottom-center, horizontal pill ── */}
      {isMobile && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Label */}
          <span
            className="sc-label-h text-[9px] font-bold uppercase text-white/50 tracking-[0.3em]"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            scroll
          </span>

          {/* Horizontal line + dots pill */}
          <div className="flex items-center gap-2">
            <div
              className="sc-dot w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(167,139,250,0.8)", boxShadow: "0 0 6px 2px rgba(167,139,250,0.5)" }}
            />
            <div
              className="relative rounded-full overflow-hidden"
              style={{ width: 48, height: 2, background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="sc-hline-fill absolute inset-y-0 left-0 right-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, rgba(139,92,246,0.3) 0%, rgba(167,139,250,1) 40%, rgba(236,72,153,1) 80%, transparent 100%)",
                }}
              />
            </div>
            <div
              className="sc-dot w-1.5 h-1.5 rounded-full"
              style={{
                background: "rgba(236,72,153,0.9)",
                boxShadow: "0 0 8px 3px rgba(236,72,153,0.6)",
                animationDelay: "0.4s"
              }}
            />
          </div>

          {/* Three stacked chevrons pointing down */}
          <div className="flex flex-col items-center" style={{ gap: 2 }}>
            {[0,1,2].map(i => (
              <svg
                key={i}
                className="sc-mobile-arrow"
                width="18" height="11" viewBox="0 0 18 11" fill="none"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  filter: i === 2
                    ? "drop-shadow(0 0 5px rgba(236,72,153,1)) drop-shadow(0 0 10px rgba(167,139,250,0.8))"
                    : "none",
                }}
              >
                <polyline
                  points="1,1 9,9 17,1"
                  stroke={i === 2 ? "rgba(236,72,153,1)" : `rgba(167,139,250,${0.4 + i * 0.25})`}
                  strokeWidth={i === 2 ? "2.5" : "2"}
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollCue;