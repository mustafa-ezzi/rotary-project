import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  AlertTriangle,
  X,
  ArrowRight,
  Shield,
  CreditCard,
  Smartphone,
  ShoppingBag,
  Briefcase,
  Heart,
  Quote,
  MapPin,
  Calendar,
  DollarSign,
  Lightbulb,
} from "lucide-react";

const CASES = [
  {
    id: 1,
    name: "Ayesha Khan",
    age: 34,
    city: "Karachi",
    date: "March 2024",
    loss: "PKR 285,000",
    subject: "Fake Bank Helpline Call",
    category: "Banking Fraud",
    icon: CreditCard,
    color: "from-rose-500 to-pink-600",
    accent: "rose",
    preview:
      "A scammer impersonated a bank officer and convinced Ayesha to share her OTP, draining her savings in minutes.",
    quote:
      "He sounded so professional. He knew my account number. I never thought it could be a scam until my balance was zero.",
    story: [
      "Ayesha, a school teacher and mother of two, received a call from a number that appeared to be from her bank. The caller introduced himself as 'Officer Ahmed from the Fraud Prevention Department' and informed her that suspicious transactions of PKR 50,000 had been attempted on her account from Lahore.",
      "He sounded calm and professional. He already knew her full name, last four digits of her account number, and even her recent transaction history — details he had likely obtained through a data leak. He warned her that if she didn't act fast, her entire balance would be wiped out.",
      "To 'verify her identity and stop the transaction,' he asked her to read out the 6-digit OTP that she would receive shortly. Three OTPs later, the scammer had completed three wire transfers totaling PKR 285,000 — Ayesha's entire savings for her children's school fees.",
      "By the time she called the actual bank helpline, the money had already been moved through three different accounts and withdrawn from ATMs in Sukkur and Multan.",
    ],
    redFlags: [
      "Bank never calls to ask for an OTP — that's a fundamental rule",
      "Created false urgency ('your account will be drained in minutes')",
      "Knew personal details to build trust (data was leaked)",
      "Refused to let her call back on the official number",
    ],
    lesson:
      "If anyone asks for your OTP — even someone claiming to be from your bank — hang up immediately. Your OTP is your signature. Sharing it is the same as handing over your wallet.",
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    age: 22,
    city: "Lahore",
    date: "August 2024",
    loss: "PKR 120,000",
    subject: "Fake Online Job Offer",
    category: "Employment Scam",
    icon: Briefcase,
    color: "from-amber-500 to-orange-600",
    accent: "amber",
    preview:
      "Bilal was promised a remote 'data entry' job paying PKR 80,000/month — but first he had to pay a refundable security deposit.",
    quote:
      "I had been unemployed for 7 months. The offer felt like a miracle. By the time I realized it was a scam, my Easypaisa account was empty.",
    story: [
      "Bilal, a recent graduate, had been searching for a job for months. One day he received a WhatsApp message from a 'HR Manager' at a 'Dubai-based digital marketing firm' offering him a remote data entry position with a salary of PKR 80,000 per month — no interview needed.",
      "The 'company website' looked professional, complete with stock photos and fake LinkedIn pages of 'employees.' The HR Manager sent him an official-looking offer letter on what appeared to be company letterhead.",
      "He was told to pay a 'refundable security deposit' of PKR 35,000 to receive his work laptop. Once he paid, they demanded another PKR 40,000 for 'employee insurance and training materials.' Then another PKR 45,000 for 'tax registration.'",
      "Each time, they promised the previous amount would be refunded with his first salary. After paying PKR 120,000 total, the phone numbers stopped working, the website disappeared, and the WhatsApp number blocked him.",
    ],
    redFlags: [
      "No legitimate company asks employees to pay before joining",
      "Job offered without interview, CV review, or verification",
      "Communication only on WhatsApp — no office, no video call",
      "Continuous 'one more payment and you'll get the job' pattern",
    ],
    lesson:
      "Real employers pay YOU. If a 'job' requires you to pay any kind of fee — security deposit, training fee, insurance — it is a scam. Always verify the company on LinkedIn and through a phone call to their official office.",
  },
  {
    id: 3,
    name: "Fatima Siddiqui",
    age: 28,
    city: "Islamabad",
    date: "January 2025",
    loss: "PKR 45,000",
    subject: "Online Shopping Fraud",
    category: "E-commerce Scam",
    icon: ShoppingBag,
    color: "from-fuchsia-500 to-purple-600",
    accent: "fuchsia",
    preview:
      "She ordered an iPhone at half the market price from an Instagram store — and received a soap bar in a sealed box.",
    quote:
      "The page had 50,000 followers and hundreds of positive comments. I trusted it. When I opened the box, it was a Lifebuoy soap.",
    story: [
      "Fatima saw an Instagram ad for an iPhone 14 priced at PKR 90,000 — nearly half the market rate. The page, '@iphone_karachi_official,' had 50,000+ followers, fake reviews, and even a 'showroom address' in Dolmen Mall.",
      "She messaged them and was told the deal was a 'special clearance because the SIM tray was slightly damaged.' They asked for 50% advance payment via Easypaisa to 'reserve the unit' and promised cash on delivery for the remaining amount.",
      "Two days later, a TCS package arrived. She paid the remaining PKR 45,000 to the rider before opening the box — as instructed. Inside was a Lifebuoy soap wrapped in newspaper.",
      "By the time she called the Instagram page, she had been blocked. The 'showroom address' didn't exist. The reviews and followers had been bought from bot services.",
    ],
    redFlags: [
      "Price too good to be true (50% below market)",
      "Pressure to pay advance to 'reserve' the unit",
      "Asked to pay rider before opening the package",
      "No physical store, no return policy, no proper invoice",
    ],
    lesson:
      "Never pay any amount to a courier before opening and inspecting the package. Use trusted platforms (Daraz, Amazon, brand stores) with buyer protection. If a deal is too good to be true — it is.",
  },
  {
    id: 4,
    name: "Imran Saleem",
    age: 41,
    city: "Faisalabad",
    date: "November 2024",
    loss: "PKR 650,000",
    subject: "Investment / Crypto Scam",
    category: "Investment Fraud",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
    preview:
      "Imran was added to a WhatsApp group promising 30% monthly returns on crypto. Small early profits turned into a massive loss.",
    quote:
      "I withdrew profit twice — small amounts. That's how they earned my trust. Then I put in my brother's savings too. Everything vanished overnight.",
    story: [
      "Imran was added to a WhatsApp group called 'FX Wealth — Elite Members.' The group had 200+ members posting daily 'profit screenshots' showing PKR 50,000–200,000 daily earnings. An 'expert trader' named 'Mr. Kevin Brooks' offered personal mentorship.",
      "He started with PKR 25,000. Within 2 days, his 'dashboard' on a fake trading website showed PKR 32,000. He requested a withdrawal and actually received PKR 7,000 profit in his bank account — this convinced him the platform was real.",
      "He invested PKR 200,000 next. Withdrew PKR 25,000 profit. The trust grew. He then convinced his brother and a friend to invest. They pooled together PKR 650,000.",
      "When they tried to withdraw, they were asked for a 'tax clearance fee' of PKR 75,000. After paying, they were asked for an 'anti-money-laundering verification fee.' Then a 'currency conversion fee.' Then the website went offline. The WhatsApp group disappeared. Mr. Kevin Brooks was never real — it was an AI-generated photo.",
    ],
    redFlags: [
      "Guaranteed 'high monthly returns' — real investments don't work that way",
      "Pressure to recruit family and friends",
      "Small early withdrawals used to build trust (Ponzi pattern)",
      "Repeated 'one more fee' demands before payout",
    ],
    lesson:
      "Legitimate investments don't guarantee fixed returns. If you can't withdraw your own money without paying additional 'fees,' it's a scam. Crypto and forex carry real risks — but real platforms are regulated, not anonymous WhatsApp groups.",
  },
  {
    id: 5,
    name: "Sana Tariq",
    age: 26,
    city: "Karachi",
    date: "February 2025",
    loss: "PKR 95,000 + Emotional Trauma",
    subject: "Romance / Catfishing Scam",
    category: "Social Engineering",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    accent: "pink",
    preview:
      "After 4 months of online conversations with a 'British engineer working in Dubai,' Sana sent money to help him 'release a stuck package.'",
    quote:
      "He called me every day. He sent voice notes, photos, even Zoom calls. I believed we were going to get married. He didn't exist.",
    story: [
      "Sana matched with 'David Mitchell' on a dating app — a handsome British engineer working on an oil rig in Dubai. They chatted for 4 months. He sent her voice notes, photos, and even did short video calls (later revealed to be deepfake or pre-recorded clips).",
      "He spoke about marriage, future plans, and visiting her family in Karachi. He even sent her gifts — a teddy bear, perfume — through 'his sister' in the UK. He never asked for money.",
      "One day, he frantically told her his bank account had been frozen and he urgently needed PKR 95,000 to release a 'work permit document package' stuck at customs. He promised to return it within a week with his next paycheck.",
      "Sana sent the money. The next day, his number was unreachable. His Instagram was deleted. The 'Dubai address' he had given her didn't exist. The Pakistani investigation team later confirmed the scammer was operating from West Africa, using stolen photos of a real American engineer.",
    ],
    redFlags: [
      "Refused to meet in person — always 'too busy' or 'in another country'",
      "Built deep emotional connection before asking for money",
      "Emergency situation requiring urgent money transfer",
      "Used stolen identity (real photos, fake person)",
    ],
    lesson:
      "Never send money to someone you've never physically met. Real relationships don't depend on financial emergencies. Reverse-image search photos of new online contacts — scammers reuse the same images on thousands of victims.",
  },
];

export default function CaseExamples() {
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCase]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{`
        @keyframes caseFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes caseModalIn {
          from { opacity: 0; transform: scale(0.94) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes caseGlowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes caseShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .case-page { animation: caseFadeIn 0.6s ease-out both; }
        .case-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.25rem;
          background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(20,10,45,0.6) 100%);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .case-card:hover {
          transform: translateY(-4px);
          border-color: rgba(167,139,250,0.4);
          box-shadow: 0 20px 60px rgba(139,92,246,0.25), 0 0 0 1px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .case-card::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%);
          transform: translateX(-100%);
          pointer-events: none;
          transition: transform 0.6s;
        }
        .case-card:hover::before { transform: translateX(100%); }

        .case-icon-wrap {
          position: relative;
          width: 3.5rem; height: 3.5rem;
          border-radius: 1rem;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .case-icon-glow {
          position: absolute; inset: -6px;
          border-radius: 1.25rem;
          opacity: 0.5;
          filter: blur(14px);
          animation: caseGlowPulse 3s ease-in-out infinite;
          z-index: 0;
        }

        .case-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .case-modal-backdrop {
          position: fixed; inset: 0;
          z-index: 10040;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: caseFadeIn 0.3s ease-out both;
        }
        .case-modal {
          width: 100%;
          max-width: 42rem;
          max-height: 90dvh;
          overflow-y: auto;
          border-radius: 1.5rem;
          background: linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 30%, rgba(15,8,35,0.95) 100%);
          backdrop-filter: blur(32px) saturate(180%);
          -webkit-backdrop-filter: blur(32px) saturate(180%);
          border: 1px solid rgba(167,139,250,0.25);
          box-shadow: 0 30px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.18);
          animation: caseModalIn 0.45s cubic-bezier(0.34, 1.4, 0.64, 1) both;
        }
        .case-modal::-webkit-scrollbar { width: 6px; }
        .case-modal::-webkit-scrollbar-track { background: transparent; }
        .case-modal::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.4); border-radius: 999px; }

        .case-rainbow-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #ec4899, #8b5cf6, #3b82f6, transparent);
        }

        .case-meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(226,232,240,0.9);
        }

        .case-quote {
          position: relative;
          padding: 1rem 1.1rem 1rem 2.5rem;
          background: linear-gradient(135deg, rgba(244,114,182,0.08), rgba(139,92,246,0.08));
          border-left: 3px solid #ec4899;
          border-radius: 0.75rem;
          font-style: italic;
          color: rgba(244,228,255,0.95);
          line-height: 1.55;
        }

        .case-section-title {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(167,139,250,0.95);
          margin-bottom: 0.6rem;
        }

        .case-redflag {
          display: flex; align-items: flex-start; gap: 0.65rem;
          padding: 0.65rem 0.85rem;
          background: rgba(244, 63, 94, 0.08);
          border: 1px solid rgba(244, 63, 94, 0.2);
          border-radius: 0.75rem;
          color: rgba(254,205,211,0.95);
          font-size: 0.85rem;
          line-height: 1.45;
        }
        .case-redflag svg { flex-shrink: 0; margin-top: 2px; color: #fb7185; }

        .case-lesson {
          padding: 1rem 1.1rem;
          background: linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.10));
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 0.85rem;
          color: rgba(220,252,231,0.95);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        @media (max-width: 640px) {
          .case-modal { max-height: 92dvh; border-radius: 1.25rem; }
        }
      `}</style>

      <div className="case-page min-h-screen w-full bg-[#070b18] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute -top-32 left-[10%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-[30%] right-[5%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
        />

        {/* Header */}
        <div className="relative max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase mb-5">
            <AlertTriangle size={12} />
            Real-World Case Studies
          </div>
          <h1
            className="font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              background: "linear-gradient(130deg, #f472b6 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.03em",
            }}
          >
            Cases &amp; Examples
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-world scam stories that happened to ordinary Pakistanis. Tap on any
            case to read the full story, spot the red flags, and learn the lesson.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-12 sm:w-20 bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="h-px w-12 sm:w-20 bg-white/10" />
          </div>
        </div>

        {/* Cases grid */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CASES.map((c, idx) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCase(c)}
                className="case-card text-left p-5 sm:p-6 group"
                style={{ animation: `caseFadeIn 0.6s ${idx * 0.08}s both ease-out` }}
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className="case-icon-glow"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  />
                  <div
                    className={`case-icon-wrap bg-gradient-to-br ${c.color}`}
                  >
                    <Icon size={26} className="text-white relative z-10" strokeWidth={2} />
                  </div>
                </div>

                {/* Category tag */}
                <span
                  className="case-tag mb-3"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(226,232,240,0.85)",
                  }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${c.color}`} />
                  {c.category}
                </span>

                {/* Name + subject */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight mb-1">
                  {c.name}
                </h3>
                <p className="text-sm font-semibold text-pink-300/90 mb-3">
                  {c.subject}
                </p>

                {/* Preview */}
                <p className="text-[13px] leading-relaxed text-slate-400 mb-4 line-clamp-3">
                  {c.preview}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                    <MapPin size={10} /> {c.city}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                    <Calendar size={10} /> {c.date}
                  </span>
                </div>

                {/* Loss + arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-rose-400/80">
                      Loss
                    </p>
                    <p className="text-sm font-extrabold text-rose-300">
                      {c.loss}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-300 group-hover:text-pink-300 transition-colors">
                    Read story
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="relative max-w-3xl mx-auto mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-start gap-3 px-5 py-4 rounded-2xl bg-violet-500/5 border border-violet-500/20 text-left">
            <Shield size={18} className="shrink-0 text-violet-400 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Names changed for privacy.</strong> These
              cases are based on real patterns reported to the FIA Cybercrime Cell
              and the National Response Centre for Cyber Crime. If you or someone
              you know has been scammed, report it immediately at{" "}
              <span className="text-violet-300 font-semibold">1991</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <CaseModal
          data={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </>
  );
}

function CaseModal({ data, onClose }) {
  const Icon = data.icon;

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return createPortal(
    <div
      className="case-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <div className="case-modal" onClick={stopPropagation}>
        {/* Top rainbow line */}
        <div className="case-rainbow-line" />

        {/* Sticky header */}
        <div
          className="sticky top-0 z-10 px-5 sm:px-7 py-4 border-b border-white/8 backdrop-blur-xl"
          style={{ background: "rgba(10,6,28,0.85)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className={`case-icon-wrap bg-gradient-to-br ${data.color}`}
              style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem" }}
            >
              <Icon size={20} className="text-white" strokeWidth={2.25} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-400">
                {data.category}
              </p>
              <h2
                id="case-modal-title"
                className="text-base sm:text-lg font-extrabold text-white leading-tight truncate"
              >
                {data.subject}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-0 bg-white/8 hover:bg-white/15 text-white/80 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-7 py-6 sm:py-7 space-y-7">
          {/* Victim profile */}
          <div>
            <p className="case-section-title">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              Victim Profile
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/8">
              <div className="flex-1">
                <p className="text-xl font-extrabold text-white">{data.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Age {data.age} • {data.city}, Pakistan
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="case-meta-chip">
                  <Calendar size={11} className="text-violet-300" />
                  {data.date}
                </span>
                <span
                  className="case-meta-chip"
                  style={{
                    background: "rgba(244,63,94,0.12)",
                    borderColor: "rgba(244,63,94,0.3)",
                    color: "#fecdd3",
                  }}
                >
                  <DollarSign size={11} />
                  {data.loss}
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="case-quote">
            <Quote
              size={22}
              className="absolute top-3 left-3 text-pink-400/70"
            />
            "{data.quote}"
          </div>

          {/* Story */}
          <div>
            <p className="case-section-title">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              What Happened
            </p>
            <div className="space-y-3.5 text-[14px] leading-relaxed text-slate-300">
              {data.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Red flags */}
          <div>
            <p className="case-section-title" style={{ color: "#fb7185" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              Red Flags Spotted
            </p>
            <div className="space-y-2">
              {data.redFlags.map((flag, i) => (
                <div key={i} className="case-redflag">
                  <AlertTriangle size={15} />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson */}
          <div>
            <p
              className="case-section-title"
              style={{ color: "rgb(110,231,183)" }}
            >
              <Lightbulb size={12} />
              Lesson Learned
            </p>
            <div className="case-lesson">{data.lesson}</div>
          </div>

          {/* Footer */}
          <div className="pt-3 flex items-center justify-between gap-3 border-t border-white/8">
            <p className="text-[11px] text-slate-500">
              Report scams: <span className="text-violet-300 font-semibold">1991</span>{" "}
              (FIA Cybercrime)
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white border-0 transition-transform hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(130deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
                boxShadow: "0 4px 20px rgba(139,92,246,0.4)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
