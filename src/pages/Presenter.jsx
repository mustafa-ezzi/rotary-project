import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RefreshCcw,
  Zap,
  Share2,
  LayoutGrid,
  AlertTriangle,
  Lock,
  Eye,
  Terminal,
  Activity
} from "lucide-react";

const Presenter = () => {
  const navigate = useNavigate();
  const [sessionTime, setSessionTime] = useState("00:00");
  const [isLocked, setIsLocked] = useState(false);


  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const delta = Math.floor((Date.now() - start) / 1000);
      const mins = Math.floor(delta / 60).toString().padStart(2, '0');
      const secs = (delta % 60).toString().padStart(2, '0');
      setSessionTime(`${mins}:${secs}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const controlGroups = [
    {
      label: "Simulation Flow",
      actions: [
        { name: "Restart Session", icon: <RefreshCcw size={18} />, path: "/", color: "bg-slate-700 hover:bg-slate-600" },
        { name: "Jump to Roadmap", icon: <LayoutGrid size={18} />, path: "/roadmap", color: "bg-indigo-600 hover:bg-indigo-700" },
      ]
    },
    {
      label: "Live Triggers",
      actions: [
        { name: "Show Data Flow", icon: <Share2 size={18} />, path: "/data-flow", color: "bg-blue-600 hover:bg-blue-700" },
        { name: "View Scam Gallery", icon: <Terminal size={18} />, path: "/scam-messages", color: "bg-cyan-600 hover:bg-cyan-700" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black text-slate-200 flex items-center justify-center px-6 py-12">


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl w-full bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl relative z-10">


        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-1">
              <Zap size={18} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Live Command Center</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Presenter Panel</h1>
          </div>

          <div className="flex gap-3">
            <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold">Session Time</p>
              <p className="font-mono text-xl text-purple-400">{sessionTime}</p>
            </div>
            <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold">Status</p>
              <div className="flex items-center gap-2 text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <p className="font-bold text-sm">LIVE</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {controlGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">{group.label}</h3>
              <div className="space-y-3">
                {group.actions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(action.path)}
                    className={`w-full ${action.color} text-white p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 group`}
                  >
                    <span className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      {action.icon}
                    </span>
                    <span className="font-semibold">{action.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-bold text-red-500/80 uppercase tracking-widest">Danger Zone</h3>
            <button
              onClick={() => setIsLocked(!isLocked)}
              className="text-xs flex items-center gap-1 text-slate-500 hover:text-white transition-colors"
            >
              {isLocked ? <Lock size={12} /> : <Eye size={12} />}
              {isLocked ? "Unlock Critical Controls" : "Lock Panel"}
            </button>
          </div>

          <button
            disabled={isLocked}
            onClick={() => navigate("/reveal")}
            className={`w-full group relative overflow-hidden py-6 rounded-2xl font-black text-xl tracking-tighter transition-all duration-500 ${isLocked
                ? "bg-slate-800 opacity-50 cursor-not-allowed"
                : "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
              }`}
          >
            <div className="relative z-10 flex items-center justify-center gap-3 italic">
              <AlertTriangle className={isLocked ? "hidden" : "animate-bounce"} />
              TRIGGER SECURITY REVEAL
            </div>

            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
          </button>
        </div>


        <div className="mt-8 flex items-center justify-between text-slate-600">
          <div className="flex items-center gap-2 text-[10px] font-bold">
            <Activity size={12} />
            <span>ENCRYPTED CONNECTION</span>
          </div>
          <p className="text-[10px] font-bold italic tracking-tighter">
            * KEEP THIS TAB HIDDEN FROM PARTICIPANTS *
          </p>
        </div>

      </div>
    </div>
  );
};

export default Presenter;