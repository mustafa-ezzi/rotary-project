import { useState } from "react";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, RotateCcw, Shield, Brain, Eye, Clock, MessageSquare, TrendingUp, Target, Award, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = [
    {
        text: "Your bank account will be blocked tonight. Verify now: http://meezan-verification.net",
        correct: "scam",
        explanation: "Banks never ask for verification via random links. Also URL is fake.",
        redFlags: ["Urgent threat", "Suspicious URL", "Immediate action demand"],
        technique: "Fear + Fake Domain",
        icon: AlertTriangle,
    },
    {
        text: "Dear customer, your Easypaisa OTP is 839201. Do not share it with anyone.",
        correct: "safe",
        explanation: "This is a standard OTP message and does not ask you to share it.",
        redFlags: [],
        technique: "Legitimate OTP",
        icon: CheckCircle,
    },
    {
        text: "Congratulations! You won Rs. 50,000 from JazzCash. Claim now by sending CNIC.",
        correct: "scam",
        explanation: "Lottery scams often ask for CNIC or advance info. Major red flag.",
        redFlags: ["Unexpected prize", "Requests CNIC", "Too good to be true"],
        technique: "Fake Prize + Information Harvesting",
        icon: Target,
    },
    {
        text: "Meezan Bank: Your account statement for June is ready in your official app.",
        correct: "safe",
        explanation: "No links, no pressure, directs to official app. Safe format.",
        redFlags: [],
        technique: "Standard Bank Communication",
        icon: Shield,
    },
    {
        text: "Urgent: Your SIM will be blocked. Send OTP to keep number active.",
        correct: "scam",
        explanation: "No telecom company asks for OTP. This is classic SIM swap scam.",
        redFlags: ["Asks for OTP", "Urgency pressure", "SIM swap tactic"],
        technique: "OTP Theft + Urgency",
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
        const grade = percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : "Needs Improvement";
        const gradeColor = percentage >= 80 ? "green" : percentage >= 60 ? "yellow" : "red";

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4 sm:p-6">
                <div className="max-w-3xl w-full">

                    {/* Results Card */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">

                        {/* Trophy Icon */}
                        <div className="mb-8">
                            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${percentage >= 80 ? 'from-green-500/20 to-emerald-500/20 border-green-500/50' :
                                percentage >= 60 ? 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50' :
                                    'from-red-500/20 to-pink-500/20 border-red-500/50'
                                } border-2 animate-pulse`}>
                                <Award className={`w-12 h-12 ${percentage >= 80 ? 'text-green-400' :
                                    percentage >= 60 ? 'text-yellow-400' :
                                        'text-red-400'
                                    }`} />
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Test Complete!</h1>

                        {/* Score Display */}
                        <div className="mb-8">
                            <div className="text-7xl sm:text-8xl font-black mb-4">
                                <span className={`bg-gradient-to-r ${percentage >= 80 ? 'from-green-400 to-emerald-400' :
                                    percentage >= 60 ? 'from-yellow-400 to-orange-400' :
                                        'from-red-400 to-pink-400'
                                    } bg-clip-text text-transparent`}>
                                    {score}/{questions.length}
                                </span>
                            </div>
                            <div className={`inline-block px-6 py-2 rounded-full bg-${gradeColor}-500/20 border border-${gradeColor}-500/30`}>
                                <span className={`text-lg font-bold text-${gradeColor}-400`}>{grade}</span>
                            </div>
                        </div>

                        {/* Percentage Bar */}
                        <div className="mb-8 max-w-md mx-auto">
                            <div className="bg-white/10 rounded-full h-4 overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${percentage >= 80 ? 'from-green-500 to-emerald-500' :
                                        percentage >= 60 ? 'from-yellow-500 to-orange-500' :
                                            'from-red-500 to-pink-500'
                                        } transition-all duration-1000 ease-out`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2">{percentage.toFixed(0)}% Correct</p>
                        </div>

                        {/* Feedback Message */}
                        <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-br ${percentage >= 80 ? 'from-green-900/30 to-emerald-900/30 border-green-500/30' :
                            percentage >= 60 ? 'from-yellow-900/30 to-orange-900/30 border-yellow-500/30' :
                                'from-red-900/30 to-pink-900/30 border-red-500/30'
                            } border-2`}>
                            <p className="text-xl sm:text-2xl font-bold mb-2">
                                {percentage >= 80 && "🎯 Excellent! You're scam-aware!"}
                                {percentage >= 60 && percentage < 80 && "👍 Good job, but stay vigilant!"}
                                {percentage < 60 && "⚠️ You're at risk. Study the red flags!"}
                            </p>
                            <p className="text-gray-300">
                                {percentage >= 80 && "You have a strong ability to identify scams. Keep that skepticism!"}
                                {percentage >= 60 && percentage < 80 && "You caught most scams, but review the ones you missed carefully."}
                                {percentage < 60 && "Scammers could easily trick you. Learn the warning signs to protect yourself."}
                            </p>
                        </div>

                        {/* Stats Toggle */}
                        <button
                            onClick={() => setShowStats(!showStats)}
                            className="mb-6 text-purple-400 hover:text-purple-300 font-semibold underline"
                        >
                            {showStats ? "Hide" : "Show"} Detailed Breakdown
                        </button>

                        {/* Detailed Stats */}
                        {showStats && (
                            <div className="mb-8 grid gap-4 text-left">
                                {questions.map((q, i) => {
                                    const userAnswered = i < index;
                                    return (
                                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${userAnswered ? (q.correct === "scam" ? "bg-red-500/20" : "bg-green-500/20") : "bg-gray-500/20"
                                                    }`}>
                                                    <q.icon className={`w-4 h-4 ${userAnswered ? (q.correct === "scam" ? "text-red-400" : "text-green-400") : "text-gray-400"
                                                        }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-300 mb-1">{q.text}</p>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <span className={`px-2 py-1 rounded ${q.correct === "scam" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                                                            }`}>
                                                            {q.correct === "scam" ? "SCAM" : "SAFE"}
                                                        </span>
                                                        <span className="text-gray-500">{q.technique}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={restart}
                                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                Retake Test
                            </button>

                            <button
                                onClick={() => navigate("/final-pledge")}
                                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Home className="w-5 h-5" />
                                Final pledge
                            </button>
                        </div>
                    </div>

                    {/* Bottom Tip */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            💡 Remember: Real banks never ask for OTPs, passwords, or PINs via messages or calls
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4 sm:p-6">
            <div className="max-w-4xl w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-300">Scam Detection Challenge</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Can You Spot The
                        <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                            Scam Messages?
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Test your ability to identify real vs fake messages
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-gray-400">Question {index + 1} of {questions.length}</span>
                        <span className="text-purple-400 font-semibold">{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Main Question Card */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">

                    {/* Question Icon & Type */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Incoming Message</p>
                            <p className="text-xs text-purple-400 font-mono">{current.technique}</p>
                        </div>
                    </div>

                    {/* Message Display */}
                    <div className="bg-gradient-to-br from-black/40 to-black/60 border-2 border-gray-700/50 rounded-2xl p-6 mb-6 min-h-[120px] flex items-center shadow-inner">
                        <p className="text-gray-100 text-lg leading-relaxed">{current.text}</p>
                    </div>

                    {/* Red Flags Hint (shown after answer) */}
                    {answered && current.redFlags.length > 0 && (
                        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                            <p className="text-sm text-red-400 font-semibold mb-2">🚩 Red Flags:</p>
                            <div className="flex flex-wrap gap-2">
                                {current.redFlags.map((flag, i) => (
                                    <span key={i} className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
                                        {flag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    {!answered ? (
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleAnswer("scam")}
                                className="group bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 sm:py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-500/30"
                            >
                                <AlertTriangle className="w-6 h-6 group-hover:animate-pulse" />
                                <span className="text-lg">This is a SCAM</span>
                            </button>

                            <button
                                onClick={() => handleAnswer("safe")}
                                className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-4 sm:py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-green-500/30"
                            >
                                <CheckCircle className="w-6 h-6 group-hover:animate-pulse" />
                                <span className="text-lg">This is SAFE</span>
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Feedback */}
                            <div className={`p-6 rounded-2xl border-2 mb-6 ${result
                                ? "bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50"
                                : "bg-gradient-to-br from-red-900/30 to-pink-900/30 border-red-500/50"
                                }`}>
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${result ? "bg-green-500/20" : "bg-red-500/20"
                                        }`}>
                                        {result ? (
                                            <CheckCircle className="w-7 h-7 text-green-400" />
                                        ) : (
                                            <XCircle className="w-7 h-7 text-red-400" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <p className={`text-2xl font-bold mb-2 ${result ? "text-green-400" : "text-red-400"}`}>
                                            {result ? "✅ Correct!" : "❌ Incorrect"}
                                        </p>
                                        <p className="text-gray-300 leading-relaxed">{current.explanation}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={next}
                                className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Continue to Next Question
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </>
                    )}
                </div>

                {/* Current Score Indicator */}
                <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                        <Target className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-gray-300">
                            Current Score: <span className="font-bold text-purple-400">{score}</span> / {index}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}