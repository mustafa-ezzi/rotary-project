import { useEffect, useState } from "react";
import { AlertTriangle, ShieldAlert, XCircle, TrendingDown, Eye, Copy, Lock, CreditCard, User, Mail, Phone, Key, Award, ArrowRight, Home, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reveal = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("verificationData");

    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("bg-black");


    setTimeout(() => setShowContent(true), 500);
    setTimeout(() => setAnimateCards(true), 1500);

    return () => document.body.classList.remove("bg-black");
  }, []);

  const exposedData = userData ? [
    { icon: User, label: "Full Name", value: userData.fullName || "Not provided", danger: "high" },
    { icon: CreditCard, label: "CNIC Number", value: userData.cnic || "Not provided", danger: "critical" },
    { icon: Phone, label: "Mobile Number", value: userData.mobile || "Not provided", danger: "high" },
    { icon: Mail, label: "Email Address", value: userData.email || "Not provided", danger: "high" },
    { icon: Lock, label: "Account Number", value: userData.accountNumber || "Not provided", danger: "critical" },
    { icon: CreditCard, label: "Debit Card Number", value: userData.debitCard || "Not provided", danger: "critical" },
    { icon: Key, label: "CVV", value: userData.cvv || "Not provided", danger: "critical" },
    { icon: ShieldAlert, label: "ATM PIN", value: userData.pin || "Not provided", danger: "critical" },
  ] : [];


  const threats = [
    {
      icon: XCircle,
      title: "Identity Theft",
      description: "Your complete identity can be stolen and used to open accounts, apply for loans, or commit crimes in your name.",
      color: "red",
      impact: "Immediate"
    },
    {
      icon: TrendingDown,
      title: "Financial Fraud",
      description: "Unauthorized withdrawals, transfers, and purchases. Your entire bank balance could be drained within minutes.",
      color: "orange",
      impact: "Minutes"
    },
    {
      icon: Copy,
      title: "SIM Swap Attack",
      description: "Scammers can hijack your phone number, intercept all OTPs, and take over your digital life including social media and email.",
      color: "purple",
      impact: "Hours"
    },
    {
      icon: Eye,
      title: "Data Resale",
      description: "Your information will be sold on dark web marketplaces and used by multiple criminals for years to come.",
      color: "blue",
      impact: "Years"
    },
    {
      icon: ShieldAlert,
      title: "Account Takeover",
      description: "Complete control of your bank accounts, credit cards, and online services. Password resets won't help if they have your OTP access.",
      color: "pink",
      impact: "Permanent"
    },
    {
      icon: AlertTriangle,
      title: "Credit Score Damage",
      description: "Fraudulent loans and unpaid bills in your name can destroy your credit score, affecting future loans and employment.",
      color: "yellow",
      impact: "Long-term"
    },
  ];

  const redFlags = [
    "Urgent time pressure and countdown timers",
    "Requests for complete card details including CVV",
    "Asking for ATM PIN (banks NEVER ask for this)",
    "Multi-step forms that progressively request more data",
    "Fake security badges and encryption claims",
    "Threatening account suspension or closure",
    "Too-good-to-be-true offers and cashback promises",
    "Suspicious URLs that look similar to real banks",
    "Poor grammar or spelling in official communications",
    "Requests to share OTP codes"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-6xl w-full">


          <div className={`text-center mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-3xl">
                  <AlertTriangle className="w-20 h-20 text-white animate-bounce" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              🚨 THIS WAS A SIMULATION 🚨
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              If this were a <span className="text-red-500 font-bold">REAL SCAM</span>, everything you just entered would now be in the hands of criminals.
            </p>

            <div className="inline-flex items-center gap-2 bg-red-600/20 border-2 border-red-500 rounded-full px-6 py-3">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Your data would be compromised in real-time</span>
            </div>
          </div>


          <div className={`mb-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-red-900/30 border-2 border-red-600/50 rounded-3xl p-8 backdrop-blur-xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-2 flex items-center justify-center gap-2">
                  <Eye className="w-8 h-8" />
                  Data You Just Exposed
                </h2>
                <p className="text-gray-400 text-sm">In a real scam, all of this information is now stolen</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exposedData.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-black/40 border-2 ${item.danger === 'critical' ? 'border-red-500/50' : 'border-orange-500/50'
                      } rounded-xl p-4 hover:scale-105 transition-all duration-300 ${animateCards ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${item.danger === 'critical' ? 'bg-red-600/20' : 'bg-orange-600/20'
                        } p-2 rounded-lg`}>
                        <item.icon className={`w-5 h-5 ${item.danger === 'critical' ? 'text-red-500' : 'text-orange-500'
                          }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white mb-1">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.value}</p>
                        {item.danger === 'critical' && (
                          <span className="inline-block mt-2 text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">
                            CRITICAL
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className={`mb-12 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                What Could Happen Next
              </h2>
              <p className="text-gray-400">Real consequences of data theft</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {threats.map((threat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-900 to-${threat.color}-900/20 border-2 border-${threat.color}-600/30 rounded-2xl p-6 hover:border-${threat.color}-600/60 transition-all duration-300 hover:scale-105`}
                >
                  <div className={`bg-${threat.color}-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <threat.icon className={`w-6 h-6 text-${threat.color}-400`} />
                  </div>
                  <h3 className={`text-lg font-bold text-${threat.color}-400 mb-2`}>
                    {threat.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {threat.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertTriangle className="w-3 h-3 text-orange-500" />
                    <span className="text-orange-400 font-semibold">Impact: {threat.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className={`mb-12 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-2 border-green-600/50 rounded-3xl p-8 backdrop-blur-xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 flex items-center justify-center gap-2">
                  <Award className="w-8 h-8" />
                  Red Flags You Should Have Spotted
                </h2>
                <p className="text-gray-400 text-sm">Learn to recognize these warning signs</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-green-600/30 rounded-xl p-4 flex items-start gap-3 hover:border-green-600/60 transition-all"
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className={`mb-12 transition-all duration-1000 delay-900 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500 rounded-3xl p-8 text-center backdrop-blur-xl">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">
                In Real Life, There Is NO Reveal Screen
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                Once you submit your data to scammers, it's <span className="text-red-500 font-bold">gone forever</span>.
                They won't tell you it was a scam. Your money will be drained silently.
                Your identity will be stolen without warning. By the time you realize, it's already too late.
              </p>
              <div className="inline-flex items-center gap-2 bg-black/40 border border-red-600 rounded-full px-6 py-3">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-bold">ALWAYS VERIFY BEFORE YOU TRUST</span>
              </div>
            </div>
          </div>


          <div className={`text-center space-y-4 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => navigate("/")}
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/data-flow")}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Show me data-flow
              </button>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-green-400">Educational Simulation Only</strong>
              </p>
              <p className="text-xs text-gray-500">
                This was part of the <strong className="text-white">ScamShield Security Awareness Program</strong>.
                No real data was collected, stored, or transmitted. This simulation exists purely to educate you
                about the tactics scammers use and the severe consequences of falling for them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reveal;