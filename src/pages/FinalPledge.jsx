import React, { useState, useEffect } from "react";
import { 
  Shield, AlertTriangle, CheckCircle, Eye, Lock, 
  Brain, Users, Home, Share2, Award, ShieldAlert,
  Fingerprint, MousePointerClick, Smartphone, 
  ChevronRight, ShieldCheck, Copy, Check
} from "lucide-react";
import ScrollCue from "../components/ScrollCue";

const PLEDGE_MSG = `🛡️ I've officially taken the *CyberShield Pledge* to stay safe from digital scams!\n\n✅ I will never share OTPs with anyone\n✅ I will verify URLs before clicking\n✅ I will question urgent requests\n✅ I will educate my family about scams\n\n#CyberShield #StaySafe #DigitalPakistan 🇵🇰\n\nLearn more at CyberShield Awareness Program 2025`;

const FinalPledge = () => {
  const [pledged, setPledged] = useState(false);
  const [selectedCommitments, setSelectedCommitments] = useState([]);
  const [timestamp, setTimestamp] = useState("");
  const [copied, setCopied] = useState(false);
  const [pledgeId] = useState(`CS-PK-2025-${Math.floor(Math.random()*9000)+1000}`);

  useEffect(() => {
    if (pledged) {
      setTimestamp(new Date().toLocaleString('en-PK', { 
        dateStyle: 'long', timeStyle: 'short' 
      }));
    }
  }, [pledged]);

  const commitments = [
    { id: 1, text: "I will never share OTPs with anyone", icon: Lock, color: "text-blue-400" },
    { id: 2, text: "I will verify URLs before clicking", icon: Eye, color: "text-purple-400" },
    { id: 3, text: "I will question urgent requests", icon: AlertTriangle, color: "text-amber-400" },
    { id: 4, text: "I will educate my family about scams", icon: Users, color: "text-green-400" },
    { id: 5, text: "I will stay skeptical of too-good-to-be-true offers", icon: Brain, color: "text-pink-400" },
    { id: 6, text: "I will use independent verification", icon: Shield, color: "text-cyan-400" },
  ];

  const toggleCommitment = (id) => {
    setSelectedCommitments(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handlePledge = () => {
    if (selectedCommitments.length > 0) setPledged(true);
  };

  // Build personalised message using selected commitments
  const buildMessage = () => {
    const chosen = commitments
      .filter(c => selectedCommitments.includes(c.id))
      .map(c => `✅ ${c.text}`)
      .join("\n");
    return `🛡️ I've officially taken the *CyberShield Pledge* to stay safe from digital scams!\n\nMy commitments:\n${chosen}\n\n#CyberShield #StaySafe #DigitalPakistan 🇵🇰\nCyberShield Awareness Program 2025`;
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = buildMessage();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "My CyberShield Pledge", text: buildMessage() });
      } catch {}
    }
  };

  if (pledged) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-10 sm:py-12 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl w-full relative z-10 animate-in fade-in zoom-in duration-700">
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-emerald-500/30 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
            
            <div className="absolute top-8 right-8 text-emerald-500/20"><Award size={120} strokeWidth={1} /></div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/50 mb-6">
                <ShieldCheck className="w-10 h-10 text-emerald-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">
                Pledge <span className="text-emerald-400">Verified</span>
              </h1>
              <p className="text-slate-400 font-medium">Digital Awareness Certificate of Completion</p>
            </div>

            {/* Commitments + Meta */}
            <div className="space-y-4 mb-8">
              <div className="p-5 bg-black/40 border border-white/5 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Confirmed Commitments</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {commitments.filter(c => selectedCommitments.includes(c.id)).map(c => (
                    <div key={c.id} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-center py-4 border-y border-white/5">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Issue Date</p>
                  <p className="text-sm font-mono text-emerald-400">{timestamp}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Status</p>
                  <p className="text-sm font-bold text-white">FULLY PROTECTED</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">ID</p>
                  <p className="text-sm font-mono text-slate-400">{pledgeId}</p>
                </div>
              </div>
            </div>

            {/* ── Share section ── */}
            <div className="mb-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3 text-center">Share Your Achievement</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all hover:scale-[1.03] active:scale-95"
                  style={{ background: "#25D366", color: "#fff", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
                >
                  {/* WhatsApp SVG icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.524 5.855L.057 23.477a.75.75 0 0 0 .92.92l5.662-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.964-1.36l-.355-.212-3.695.953.977-3.585-.232-.37A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  WhatsApp
                </button>

                {/* Copy message */}
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm border transition-all hover:scale-[1.03] active:scale-95 ${
                    copied
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                      : "bg-slate-800 border-white/10 text-white hover:bg-slate-700"
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? "Copied!" : "Copy Message"}
                </button>

                {/* Native share (mobile) / More */}
                <button
                  onClick={shareNative}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm bg-slate-800 border border-white/10 text-white hover:bg-slate-700 transition-all hover:scale-[1.03] active:scale-95"
                >
                  <Share2 size={18} />
                  More
                </button>
              </div>

              {/* Hint */}
              <p className="text-center text-[11px] text-slate-600 mt-3">
                Tap <span className="text-slate-400 font-semibold">Copy Message</span> to paste into WhatsApp, Instagram, or any app
              </p>
            </div>

            {/* Return home */}
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Return Home
            </button>
          </div>

          <div className="mt-6 text-center opacity-60">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
              <Fingerprint size={14} /> Encrypted Digital Pledge • CyberShield Awareness Program 2025
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Pre-pledge screen (unchanged) ──
  return (
    <div className="min-h-screen bg-slate-950 py-12 sm:py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] bg-red-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 px-4 py-2 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <ShieldAlert size={14} /> Critical Action Required
          </div>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-black text-white tracking-tighter mb-6">
            THE FINAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DEFENSE.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Education is the shield, but <span className="text-white font-bold">action</span> is the sword. Choose your commitments to finalize your training.
          </p>
        </div>

        <ScrollCue className="mb-12" />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {[
              { label: "Daily Attacks", val: "2.4M", color: "border-red-500/30" },
              { label: "Annual Loss", val: "₨ 5.2B", color: "border-orange-500/30" },
              { label: "Safety Success", val: "88%", color: "border-emerald-500/30" }
            ].map((stat, i) => (
              <div key={i} className={`bg-slate-900/50 backdrop-blur-md border ${stat.color} p-6 rounded-3xl`}>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-white mt-1">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MousePointerClick className="text-orange-500" /> Select Your Vows
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {commitments.map((c) => (
                <button
                  key={c.id}
                  onClick={() => toggleCommitment(c.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left group ${
                    selectedCommitments.includes(c.id)
                    ? "bg-emerald-500/10 border-emerald-500/50"
                    : "bg-slate-900/50 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                    selectedCommitments.includes(c.id) ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-500"
                  }`}>
                    <c.icon size={20} />
                  </div>
                  <p className={`text-sm font-bold transition-colors pt-1 ${selectedCommitments.includes(c.id) ? "text-white" : "text-slate-400"}`}>
                    {c.text}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={handlePledge}
              disabled={selectedCommitments.length === 0}
              className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all ${
                selectedCommitments.length > 0
                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-[0_10px_40px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-95"
                : "bg-slate-800 text-slate-600 cursor-not-allowed"
              }`}
            >
              SIGN THE PLEDGE
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-xs"><Smartphone size={14} /> Device Secured</div>
            <div className="flex items-center gap-2 text-xs"><Lock size={14} /> Identity Protected</div>
            <div className="flex items-center gap-2 text-xs"><Shield size={14} /> Fraud Aware</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPledge;