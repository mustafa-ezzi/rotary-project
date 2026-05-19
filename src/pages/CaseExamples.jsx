import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";

const CASES = [
  {
    id: 1,
    name: "Ayesha Khan",
    subject: "Fake Bank Helpline Call",
    story: `Ayesha received a call from someone claiming to be from her bank's fraud department. The caller said suspicious transactions were happening on her account and asked her to share the OTP she would receive to stop them.

She shared three OTPs in panic. Within minutes, PKR 285,000 was transferred out of her account. When she called the real bank helpline, the money had already been withdrawn from other cities.`,
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    subject: "Fake Online Job Offer",
    story: `Bilal was offered a remote data entry job on WhatsApp with a salary of PKR 80,000 per month. He was asked to pay a refundable security deposit of PKR 35,000 to receive his laptop.

After paying, they asked for more fees — insurance, training, tax registration. He paid PKR 120,000 in total. Then the number was blocked and the company website disappeared.`,
  },
  {
    id: 3,
    name: "Fatima Siddiqui",
    subject: "Online Shopping Fraud",
    story: `Fatima ordered an iPhone from an Instagram page at half the market price. She paid 50% advance via Easypaisa and the rest to the courier on delivery.

When she opened the package, it contained only a soap bar. The seller had blocked her and the showroom address they gave did not exist.`,
  },
  {
    id: 4,
    name: "Imran Saleem",
    subject: "Investment / Crypto Scam",
    story: `Imran joined a WhatsApp group promising high monthly returns on crypto trading. He invested small amounts first and was able to withdraw small profits, which built his trust.

He then invested PKR 650,000 with family and friends. When he tried to withdraw, he was asked to pay tax and verification fees again and again. The platform went offline and the group was deleted.`,
  },
  {
    id: 5,
    name: "Sana Tariq",
    subject: "Romance / Catfishing Scam",
    story: `Sana met someone online who said he was a British engineer working abroad. They talked daily for months and discussed marriage.

One day he said he needed PKR 95,000 urgently to release a document stuck at customs. She sent the money. The next day his number was gone and his profile had disappeared.`,
  },
];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #ec4899, #8b5cf6)",
  "linear-gradient(135deg, #8b5cf6, #3b82f6)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #10b981, #3b82f6)",
  "linear-gradient(135deg, #f472b6, #6366f1)",
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function storyPreview(story, maxLen = 120) {
  const flat = story.replace(/\s+/g, " ").trim();
  if (flat.length <= maxLen) return flat;
  return `${flat.slice(0, maxLen).trim()}…`;
}

export default function CaseExamples() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{`
        @keyframes caseIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .case-card {
          border-radius: 1.15rem;
          background: linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform 0.25s ease, border-color 0.25s, box-shadow 0.25s;
          cursor: pointer;
          text-align: left;
        }
        .case-card:hover {
          transform: translateY(-3px);
          border-color: rgba(167,139,250,0.35);
          box-shadow: 0 16px 48px rgba(139,92,246,0.2);
        }
        .case-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.02em;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .case-modal-bg {
          position: fixed; inset: 0; z-index: 10040;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: caseIn 0.25s ease both;
        }
        .case-modal {
          width: 100%; max-width: 32rem; max-height: 85dvh;
          overflow-y: auto;
          border-radius: 1.25rem;
          background: linear-gradient(160deg, rgba(255,255,255,0.1) 0%, rgba(15,8,35,0.95) 100%);
          border: 1px solid rgba(167,139,250,0.25);
          backdrop-filter: blur(24px);
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
          animation: modalIn 0.35s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        }
        .case-modal::-webkit-scrollbar { width: 5px; }
        .case-modal::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.4); border-radius: 999px; }
      `}</style>

      <div className="min-h-screen w-full bg-[#070b18] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-5xl font-extrabold"
            style={{
              background: "linear-gradient(130deg, #f472b6, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Cases &amp; Examples
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Real stories shared by people who faced online scams. Tap a case to
            read the full story.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {CASES.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c)}
              className="case-card p-5 sm:p-6 group w-full"
              style={{ animation: `caseIn 0.5s ${i * 0.06}s both` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="case-avatar"
                  style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                  aria-hidden
                >
                  {getInitials(c.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg font-bold text-white truncate">
                    {c.name}
                  </p>
                  <p className="text-sm font-semibold text-violet-300/90 mt-0.5 line-clamp-2">
                    {c.subject}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {storyPreview(c.story)}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/8 flex justify-end">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-300 group-hover:text-pink-300 transition-colors">
                  Read full story
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <CaseModal data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function CaseModal({ data, onClose }) {
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);
  const idx = CASES.findIndex((c) => c.id === data.id);

  return createPortal(
    <div className="case-modal-bg" onClick={onClose} role="dialog" aria-modal="true">
      <div className="case-modal" onClick={stopPropagation}>
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #ec4899, #8b5cf6, #3b82f6, transparent)",
          }}
        />

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="case-avatar"
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  fontSize: "0.9rem",
                  background: AVATAR_GRADIENTS[(idx >= 0 ? idx : 0) % AVATAR_GRADIENTS.length],
                }}
              >
                {getInitials(data.name)}
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold text-white">{data.name}</p>
                <p className="text-sm font-semibold text-violet-300/90">{data.subject}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-0 bg-white/10 hover:bg-white/15 text-white/80"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="text-sm sm:text-[15px] leading-relaxed text-slate-300 whitespace-pre-line">
            {data.story}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full py-2.5 rounded-xl border-0 text-sm font-bold text-white"
            style={{
              background: "linear-gradient(130deg, #ec4899, #8b5cf6, #3b82f6)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
