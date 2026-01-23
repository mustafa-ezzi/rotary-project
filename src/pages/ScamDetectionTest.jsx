import { useState } from "react";
import { 
    AlertTriangle, CheckCircle, XCircle, ArrowRight, RotateCcw, 
    Shield, Brain, Clock, MessageSquare, Target, Award, Home, Info, Smartphone, ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = [
    {
        text: "Your bank account will be blocked tonight. Verify now: http://meezan-verification.net",
        correct: "scam",
        explanation: "Banks never ask for verification via random links. The URL is fake.",
        redFlags: ["Urgent threat", "Suspicious URL"],
        technique: "Fear + Phishing Link",
        icon: AlertTriangle,
    },
    {
        text: "Dear customer, your Easypaisa OTP is 839201. Do not share it with anyone.",
        correct: "safe",
        explanation: "Standard OTP. It explicitly tells you NOT to share it.",
        redFlags: [],
        technique: "Security OTP",
        icon: CheckCircle,
    },
    {
        text: "Congratulations! You won Rs. 50,000 from JazzCash. Claim now by sending CNIC.",
        correct: "scam",
        explanation: "Official companies never ask for CNIC via SMS to 'claim' prizes.",
        redFlags: ["Unexpected prize", "Requests CNIC"],
        technique: "Social Engineering",
        icon: Target,
    },
    {
        text: "Meezan Bank: Your account statement is ready in your official mobile app.",
        correct: "safe",
        explanation: "Safe because it directs you to the official app, not a link.",
        redFlags: [],
        technique: "Official Advisory",
        icon: Shield,
    },
    {
        text: "BISP Alert: Payment approved. Call 0300-1234567 to collect cash immediately.",
        correct: "scam",
        explanation: "Government programs use official short-codes, not mobile numbers.",
        redFlags: ["Random number", "Financial bait"],
        technique: "Smishing",
        icon: Clock,
    },
];

export default function ScamDetectionTest() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [result, setResult] = useState(null);
    const [showStats, setShowStats] = useState(false);
    const navigate = useNavigate();

    const current = questions[index];
    const progress = ((index) / questions.length) * 100;

    const handleAnswer = (choice) => {
        if (answered) return;
        const correct = choice === current.correct;
        if (correct) setScore(score + 1);
        setResult(correct);
        setAnswered(true);
    };

    const next = () => {
        setAnswered(false);
        setResult(null);
        setIndex(index + 1);
    };

    const restart = () => {
        setIndex(0);
        setScore(0);
        setAnswered(false);
        setResult(null);
        setShowStats(false);
    };

    if (index >= questions.length) {
        const percentage = (score / questions.length) * 100;
        
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
                <div className="max-w-md w-full animate-in fade-in zoom-in duration-300">
                    <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 text-center shadow-xl">
                        <div className="mb-4">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border-2 ${
                                percentage >= 80 ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'
                            }`}>
                                <Award size={32} />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold mb-1">Test Results</h1>
                        <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest">Security Clearance Report</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
                                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Score</p>
                                <p className="text-2xl font-black">{score}/{questions.length}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
                                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Status</p>
                                <p className={`text-sm font-bold truncate ${percentage >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {percentage >= 80 ? "Cyber Guard" : "Needs Vigilance"}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <button 
                                onClick={() => navigate("/final-pledge")}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                            >
                                <ShieldCheck size={18} /> Take The Pledge
                            </button>
                            <button 
                                onClick={restart}
                                className="w-full bg-slate-800 py-3.5 rounded-xl font-bold text-sm text-slate-300 flex items-center justify-center gap-2"
                            >
                                <RotateCcw size={16} /> Try Again
                            </button>
                        </div>

                        <button onClick={() => setShowStats(!showStats)} className="text-indigo-400 text-xs font-bold flex items-center gap-2 mx-auto">
                            <Info size={14} /> {showStats ? "Hide Analysis" : "Show Analysis"}
                        </button>

                        {showStats && (
                            <div className="mt-4 space-y-2 text-left animate-in slide-in-from-top-2 duration-200">
                                {questions.map((q, i) => (
                                    <div key={i} className="p-3 bg-black/20 rounded-lg border border-white/5 flex items-center gap-3">
                                        <q.icon size={16} className={q.correct === 'scam' ? 'text-red-400' : 'text-green-400'} />
                                        <p className="text-[11px] text-slate-300 line-clamp-1">{q.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
                {/* Compact Header */}
                <div className="mb-6 flex items-center justify-between px-1">
                    <div>
                        <h2 className="text-sm font-black flex items-center gap-2 tracking-tight">
                            <Brain size={16} className="text-indigo-500" /> SCAM TEST
                        </h2>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Step {index + 1}/{questions.length}</span>
                        <div className="w-20 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-5 shadow-2xl relative overflow-hidden">
                    {/* SMS Sender Info */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                            <Smartphone size={18} className="text-slate-400" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Incoming SMS</p>
                            <p className="text-xs text-indigo-400 font-mono leading-none">{current.technique}</p>
                        </div>
                    </div>

                    {/* The Message */}
                    <div className="bg-slate-800/40 p-5 rounded-2xl border border-white/5 mb-6">
                        <p className="text-base md:text-lg font-medium leading-snug text-slate-200 italic">
                            "{current.text}"
                        </p>
                    </div>

                    {!answered ? (
                        <div className="grid grid-cols-1 gap-3">
                            <button
                                onClick={() => handleAnswer("scam")}
                                className="group bg-red-500/10 hover:bg-red-500 border border-red-500/30 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <AlertTriangle size={18} className="text-red-500 group-hover:text-white" />
                                <span className="font-bold text-sm text-red-500 group-hover:text-white uppercase">This is a Scam</span>
                            </button>
                            <button
                                onClick={() => handleAnswer("safe")}
                                className="group bg-green-500/10 hover:bg-green-500 border border-green-500/30 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={18} className="text-green-500 group-hover:text-white" />
                                <span className="font-bold text-sm text-green-400 group-hover:text-white uppercase">This is Safe</span>
                            </button>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className={`p-4 rounded-2xl border ${result ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"}`}>
                                <div className="flex gap-3">
                                    <div className={`p-2 rounded-lg h-fit ${result ? "bg-green-500" : "bg-red-500"}`}>
                                        {result ? <CheckCircle size={18} /> : <XCircle size={18} />}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-bold ${result ? "text-green-400" : "text-red-400"}`}>
                                            {result ? "Well Done!" : "Careful!" }
                                        </p>
                                        <p className="text-slate-300 text-xs leading-relaxed mt-1">{current.explanation}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={next}
                                className="w-full mt-4 bg-white text-slate-950 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                            >
                                NEXT QUESTION <ArrowRight size={16} />
                            </button>
                        </div>
                    )}
                </div>
                
                <p className="text-center text-slate-600 text-[10px] mt-6 font-medium uppercase tracking-widest">
                    Protecting you from digital fraud
                </p>
            </div>
        </div>
    );
}