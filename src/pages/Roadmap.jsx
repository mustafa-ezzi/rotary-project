import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  MousePointer2, FormInput, Lock, Eye, 
  Share2, Settings2, CheckCircle2, MessageSquare, 
  ShieldCheck, ArrowRight 
} from "lucide-react";

const roadmapItems = [
  { 
    title: "Landing Page", 
    desc: "The Bait: A convincing bank verification portal designed to trick users.", 
    path: "/", 
    icon: <MousePointer2 className="w-6 h-6" />,
    phase: "Phase 1: The Trap"
  },
  { 
    title: "Verification Form", 
    desc: "Data Harvesting: Collecting sensitive CNIC, Phone, and Bank details.", 
    path: "/verify", 
    icon: <FormInput className="w-6 h-6" />,
    phase: "Phase 1: The Trap"
  },
  { 
    title: "OTP Page", 
    desc: "The Final Barrier: Simulating the high-pressure OTP theft scenario.", 
    path: "/otp", 
    icon: <Lock className="w-6 h-6" />,
    phase: "Phase 1: The Trap"
  },
  { 
    title: "Reveal Page", 
    desc: "The Reality Check: Shocking transition to reveal the user was 'phished'.", 
    path: "/reveal", 
    icon: <Eye className="w-6 h-6" />,
    phase: "Phase 2: The Shock"
  },
  { 
    title: "Data Flow", 
    desc: "Behind the Scenes: Visualizing how stolen data travels to the Dark Web.", 
    path: "/data-flow", 
    icon: <Share2 className="w-6 h-6" />,
    phase: "Phase 2: The Shock"
  },
  { 
    title: "Presenter Panel", 
    desc: "Live Control: Manual dashboard to manipulate the training flow.", 
    path: "/presenter", 
    icon: <Settings2 className="w-6 h-6" />,
    phase: "Phase 3: Education"
  },
  { 
    title: "Legit vs Scam", 
    desc: "Spotting the Difference: Breaking down URL tricks and fake SSL signs.", 
    path: "/how-it-looks-legit", 
    icon: <CheckCircle2 className="w-6 h-6" />,
    phase: "Phase 3: Education"
  },
  { 
    title: "Scam Messages", 
    desc: "The Hook Library: A gallery of common SMS and WhatsApp scams.", 
    path: "/scam-messages", 
    icon: <MessageSquare className="w-6 h-6" />,
    phase: "Phase 3: Education"
  },
  { 
    title: "Final Pledge", 
    desc: "Commitment: A final summary and security oath for participants.", 
    path: "/final-pledge", 
    icon: <ShieldCheck className="w-6 h-6" />,
    phase: "Phase 3: Education"
  }
];

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Training Curriculum</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">
            CyberShield <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Roadmap</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interactive session flow. Click any stage to jump to that part of the awareness demonstration.
          </p>
        </header>

        
        <div className="relative">
          
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center group cursor-pointer ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                onClick={() => navigate(item.path)}
              >
                
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-purple-500 rounded-full z-20 group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group-hover:translate-y-[-4px] shadow-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-slate-800 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                        {item.phase}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {index + 1}. {item.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            All modules are live and interactive for demonstration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;