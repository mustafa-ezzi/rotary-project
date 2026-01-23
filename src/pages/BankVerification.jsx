import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Shield, Lock, AlertTriangle, Clock, Phone, Mail, 
  CheckCircle, ArrowRight, X, Info 
} from "lucide-react";

const BankVerification = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 60);
  const [showAd, setShowAd] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!showForm) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? (clearInterval(timer), 0) : prev - 1));
    }, 1000);

    const popupTimer = setTimeout(() => setShowPopup(true), 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(popupTimer);
    };
  }, [showForm]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // --- LANDING SCREEN (BEFORE VERIFICATION) ---
  if (!showForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-3 sm:p-6">
        <div className="w-full max-w-2xl">
          <div className="bg-white border border-red-100 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-red-600 text-white py-2 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Lock size={14} className="animate-pulse" />
              Security Alert
            </div>
            
            <div className="p-5 sm:p-10 text-center">
              <div className="inline-flex bg-green-600 p-3 rounded-xl mb-4 shadow-lg shadow-green-200">
                <Shield size={32} className="text-white" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-3 leading-tight">
                Critical Security Verification Required
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-left">
                <p className="text-red-800 text-xs sm:text-sm leading-relaxed">
                  <strong>Suspicious Activity!</strong> Unusual login attempts detected from an unrecognized device. Your account access is currently restricted.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs sm:text-sm border-b pb-2">
                  <span className="text-slate-500">Risk Level:</span>
                  <span className="text-red-600 font-bold uppercase">High</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm border-b pb-2">
                  <span className="text-slate-500">Time Limit:</span>
                  <span className="text-slate-800 font-bold">24 Hours</span>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              >
                Review Account Details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      
      {/* Small Responsive Ad */}
      {showAd && (
        <div className="fixed bottom-4 left-4 right-4 sm:bottom-auto sm:top-24 sm:right-6 sm:left-auto bg-orange-500 text-white p-4 rounded-xl shadow-2xl z-50 sm:w-72 animate-bounce border-2 border-orange-300">
          <button onClick={() => setShowAd(false)} className="absolute top-1 right-1 p-1"><X size={14} /></button>
          <p className="text-[11px] font-black uppercase tracking-tighter opacity-80">Limited Offer</p>
          <p className="text-sm font-bold leading-tight">Get 10% Cashback on verification!</p>
        </div>
      )}

      {/* Header */}
      <header className="w-full bg-slate-900 text-white py-3 px-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-green-400" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">SECURE PORTAL</span>
        </div>
        <div className="text-[10px] sm:text-xs flex gap-3 opacity-70">
          <span className="hidden sm:inline">Support: +92 300 1234567</span>
          <span className="bg-white/10 px-2 py-1 rounded">SSL ENCRYPTED</span>
        </div>
      </header>

      <main className="w-full max-w-5xl p-4 sm:p-8">
        {/* Urgent Timer Banner */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="text-red-600 animate-pulse" size={24} />
            <div>
              <p className="text-[10px] font-bold text-red-400 uppercase">Session Expires In</p>
              <p className="text-2xl sm:text-3xl font-black text-red-600 font-mono">{formatTime(timeLeft)}</p>
            </div>
          </div>
          <p className="text-xs text-red-700 text-center sm:text-left max-w-xs">
            Complete verification immediately to prevent permanent account suspension.
          </p>
        </div>

        <h1 className="text-xl sm:text-3xl font-black text-slate-800 mb-6 px-1">Security Review Dashboard</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Account Details */}
          <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-bold flex items-center gap-2 mb-4 text-slate-500 uppercase tracking-wider">
              <Info size={16} /> Account Info
            </h2>
            <div className="space-y-3">
              {[
                ["Customer ID", "0000-1234-5678-90"],
                ["Account Type", "Current / Checking"],
                ["Balance", "PKR 125,430.00", "text-green-600 font-bold"],
                ["Email", "user@example.com"],
                ["Last Login", "02-Jan-2026"]
              ].map(([label, value, customClass], i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                  <span className="text-xs sm:text-sm text-slate-500">{label}</span>
                  <span className={`text-xs sm:text-sm font-semibold text-slate-800 ${customClass}`}>{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Transactions */}
          <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-bold flex items-center gap-2 mb-4 text-slate-500 uppercase tracking-wider">
              <Clock size={16} /> Recent Activity
            </h2>
            <div className="space-y-3">
              {[
                { label: "Utility Payment", date: "31-Dec", amt: "-2,500" },
                { label: "Salary Credit", date: "30-Dec", amt: "+45,000", pos: true },
                { label: "Online Shopping", date: "28-Dec", amt: "-3,200" }
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">{tx.label}</p>
                    <p className="text-[10px] text-slate-400">{tx.date}</p>
                  </div>
                  <span className={`text-xs sm:text-sm font-black ${tx.pos ? 'text-green-600' : 'text-red-500'}`}>
                    {tx.amt}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/verify")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 text-sm sm:text-lg"
          >
            <Lock size={20} />
            Proceed to Secure Verification <ArrowRight size={20} />
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
            Your data is protected by 256-bit AES Encryption
          </p>
        </div>
      </main>

      {/* Simplified Mobile-Friendly Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <AlertTriangle className="text-red-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">Time is Running Out!</h3>
            <p className="text-sm text-slate-500 mb-6">Verify now to avoid service interruption.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl text-sm"
            >
              Continue Verification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankVerification;