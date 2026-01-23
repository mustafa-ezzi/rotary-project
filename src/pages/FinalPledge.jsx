import React, { useState, useEffect } from "react";
import { 
  Shield, AlertTriangle, CheckCircle, Eye, Lock, 
  Brain, Heart, Users, TrendingUp, Star, 
  Sparkles, Home, Share2, Award, ShieldAlert,
  Fingerprint, MousePointerClick, Smartphone, 
  ChevronRight, ShieldCheck 
} from "lucide-react";

const FinalPledge = () => {
  const [pledged, setPledged] = useState(false);
  const [selectedCommitments, setSelectedCommitments] = useState([]);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    if (pledged) {
      setTimestamp(new Date().toLocaleString('en-PK', { 
        dateStyle: 'long', 
        timeStyle: 'short' 
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

  const shareMessage = () => {
    const text = `I've officially taken the CyberShield Pledge to stay safe from digital scams! 🛡️🇵🇰 #CyberShield #StaySafe`;
    if (navigator.share) {
      navigator.share({ title: 'My CyberShield Pledge', text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Pledge copied to clipboard!");
    }
  };

  if (pledged) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-12 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-3xl w-full relative z-10 animate-in fade-in zoom-in duration-700">
          
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-emerald-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
            
            
            <div className="absolute top-8 right-8 text-emerald-500/20"><Award size={120} strokeWidth={1} /></div>
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/50 mb-6">
                <ShieldCheck className="w-10 h-10 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                Pledge <span className="text-emerald-400">Verified</span>
              </h1>
              <p className="text-slate-400 font-medium">Digital Awareness Certificate of Completion</p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Confirmed Commitments</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {commitments.filter(c => selectedCommitments.includes(c.id)).map(c => (
                    <div key={c.id} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-center py-4 border-y border-white/5">
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
                  <p className="text-sm font-mono text-slate-400">CS-PK-2025-{Math.floor(Math.random()*9000)+1000}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={shareMessage} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group">
                <Share2 size={20} className="group-hover:rotate-12 transition-transform" />
                Share Achievement
              </button>
              <button onClick={() => window.location.href = '/'} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                <Home size={20} />
                Return Home
              </button>
            </div>
          </div>

          <div className="mt-8 text-center opacity-60">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
              <Fingerprint size={14} /> Encrypted Digital Pledge • CyberShield Awareness Program 2025
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] bg-red-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 px-4 py-2 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <ShieldAlert size={14} /> Critical Action Required
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            THE FINAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DEFENSE.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Education is the shield, but <span className="text-white font-bold">action</span> is the sword. Choose your commitments to finalize your training.
          </p>
        </div>

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
                  <div>
                    <p className={`text-sm font-bold transition-colors ${selectedCommitments.includes(c.id) ? "text-white" : "text-slate-400"}`}>
                      {c.text}
                    </p>
                  </div>
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
              <ChevronRight className={selectedCommitments.length > 0 ? "animate-bounce-x" : ""} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-slate-500">
          <div className="flex items-center gap-6">
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