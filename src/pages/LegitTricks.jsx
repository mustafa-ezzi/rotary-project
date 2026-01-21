import { useState } from "react";
import { Shield, Lock, Clock, MessageSquare, Eye, Globe, AlertTriangle, CheckCircle, XCircle, Mail, Phone, CreditCard, User, TrendingUp, Target, Zap, Award, Brain, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LegitTricks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tricks');

  const tricks = [
    {
      icon: Shield,
      title: "Pixel-Perfect Bank Branding",
      description: "Scammers clone official bank websites with 99% accuracy. Logos, colors, fonts, layouts—everything copied down to the smallest detail.",
      example: "They steal actual CSS and HTML from real bank sites",
      danger: "critical",
      color: "red",
      realVsFake: {
        real: "Official branding on verified domain",
        fake: "Identical branding on fake domain with one character different"
      }
    },
    {
      icon: Lock,
      title: "HTTPS & Green Lock Deception",
      description: "That padlock icon only means the connection is encrypted—NOT that the site is legitimate. Scammers easily get SSL certificates for their fake sites.",
      example: "https://secure-bank-verify.com looks safe but isn't",
      danger: "high",
      color: "orange",
      realVsFake: {
        real: "Encryption protects data in transit",
        fake: "Scammers use HTTPS too—it's not a trust indicator"
      }
    },
    {
      icon: Clock,
      title: "Weaponized Urgency",
      description: "Countdown timers, threatening deadlines, and 'immediate action required' messages bypass your logical thinking and trigger panic responses.",
      example: "Account will be suspended in 3 minutes",
      danger: "critical",
      color: "red",
      realVsFake: {
        real: "Banks give days/weeks for important actions",
        fake: "Minutes or hours to create panic"
      }
    },
    {
      icon: MessageSquare,
      title: "OTP Psychological Exploit",
      description: "People associate OTPs with security, not theft. Scammers abuse this trust by making you think sharing the OTP is part of 'verification.'",
      example: "Enter OTP to verify your identity and secure your account",
      danger: "critical",
      color: "purple",
      realVsFake: {
        real: "OTPs are ONLY for YOU to use on official sites",
        fake: "Asking you to share or enter OTP on their fake site"
      }
    },
    {
      icon: User,
      title: "Professional Corporate Tone",
      description: "No typos, no broken English, no obvious errors. Polite, formal language that mimics official bank communication perfectly.",
      example: "Dear Valued Customer, We regret to inform you...",
      danger: "high",
      color: "blue",
      realVsFake: {
        real: "Professional tone is standard",
        fake: "Professional tone is deliberately crafted to deceive"
      }
    },
    {
      icon: Globe,
      title: "Look-Alike Domain Names",
      description: "Instead of bankname.com, they use bankname-verify.com or banknarne.com (rn instead of m). Your eyes won't catch the difference in URLs.",
      example: "paypa1.com (number 1 instead of letter l)",
      danger: "critical",
      color: "yellow",
      realVsFake: {
        real: "example-bank.com",
        fake: "example-bank-secure.com or examp1e-bank.com"
      }
    },
    {
      icon: Mail,
      title: "Spoofed Email Addresses",
      description: "Email display names can be faked. The email shows 'Bank Support' but the actual address is random@scammer.com in the details.",
      example: "From: Bank Security <no-reply@bankname.com> (spoofed)",
      danger: "high",
      color: "pink",
      realVsFake: {
        real: "Check actual email address, not just display name",
        fake: "Display name looks official, actual address is suspicious"
      }
    },
    {
      icon: Phone,
      title: "Caller ID Manipulation",
      description: "Scammers can make their calls appear to come from official bank numbers. The caller ID you see can be completely faked.",
      example: "Shows official bank number but calls from anywhere",
      danger: "high",
      color: "green",
      realVsFake: {
        real: "Banks rarely call asking for sensitive info",
        fake: "Urgent call requesting immediate verification"
      }
    },
    {
      icon: CreditCard,
      title: "Progressive Information Requests",
      description: "They don't ask for everything at once. Multi-step forms gradually request more sensitive data, building false trust at each stage.",
      example: "Step 1: Name, Step 2: Account, Step 3: Card, Step 4: PIN",
      danger: "critical",
      color: "indigo",
      realVsFake: {
        real: "Banks already have all your information",
        fake: "Asking you to provide information they claim to have"
      }
    },
    {
      icon: Target,
      title: "Personalized Information",
      description: "They use data from breaches to include your real name, partial account number, or recent transaction—making it seem legitimate.",
      example: "Hello [Your Real Name], regarding your PKR 2,500 payment...",
      danger: "critical",
      color: "red",
      realVsFake: {
        real: "Banks have your info but won't ask you to verify it",
        fake: "Using your info to build false credibility"
      }
    },
    {
      icon: Award,
      title: "Fake Security Badges",
      description: "SSL seals, verified badges, trust indicators—all can be copied as images. They're decorative, not functional proof of legitimacy.",
      example: "256-bit Encrypted, PCI Compliant, Bank Verified badges",
      danger: "medium",
      color: "blue",
      realVsFake: {
        real: "Real badges are linked and verifiable",
        fake: "Static images that mean nothing"
      }
    },
    {
      icon: Brain,
      title: "Social Proof Manipulation",
      description: "Fake testimonials, fabricated user counts, and false scarcity ('Only 2 spots left!') create false legitimacy through perceived popularity.",
      example: "Join 50,000+ customers who secured their accounts today",
      danger: "medium",
      color: "purple",
      realVsFake: {
        real: "Real social proof is verifiable",
        fake: "Made-up numbers to pressure you"
      }
    }
  ];

  const psychologyTactics = [
    {
      icon: Brain,
      title: "Authority Bias",
      description: "We're trained to obey authority figures. Scammers impersonate banks, police, government—entities you don't question.",
      impact: "You comply without thinking"
    },
    {
      icon: Clock,
      title: "Time Pressure",
      description: "Urgency shuts down critical thinking. When rushed, you skip verification steps you'd normally take.",
      impact: "Panic leads to poor decisions"
    },
    {
      icon: AlertTriangle,
      title: "Fear Exploitation",
      description: "Threats of account closure, legal action, or financial loss trigger fight-or-flight responses that override logic.",
      impact: "Fear overrides rationality"
    },
    {
      icon: TrendingUp,
      title: "Reciprocity Trap",
      description: "'We detected suspicious activity and protected your account—now verify your identity.' They create a fake favor to make you feel obligated.",
      impact: "You feel you owe them cooperation"
    },
    {
      icon: Eye,
      title: "Consistency Principle",
      description: "Once you start the process (Step 1), you're psychologically committed to completing it, even when red flags appear.",
      impact: "You've invested time, so you continue"
    },
    {
      icon: Zap,
      title: "Scarcity Mindset",
      description: "Limited time offers, exclusive access, 'act now or lose benefits' create artificial urgency through perceived scarcity.",
      impact: "FOMO drives rushed action"
    }
  ];

  const defenseStrategies = [
    {
      icon: CheckCircle,
      title: "Always Verify Independently",
      action: "If you receive suspicious communication, close it and contact your bank directly using the number on your card or official website",
      color: "green"
    },
    {
      icon: Eye,
      title: "Inspect URLs Carefully",
      action: "Check the entire domain name character by character. Look for extra words, hyphens, or misspellings. Bookmark official sites.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Resist Urgency",
      action: "Legitimate organizations give you time. If someone rushes you, it's a scam. Always take time to think and verify.",
      color: "purple"
    },
    {
      icon: Lock,
      title: "Never Share OTPs",
      action: "OTPs are for YOUR use ONLY. No bank, police, or government will EVER ask for your OTP. Sharing it = account takeover.",
      color: "red"
    },
    {
      icon: Phone,
      title: "Don't Trust Caller ID",
      action: "Hang up and call back using the official number from your bank card or website. Caller ID can be spoofed.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Enable All Security Features",
      action: "Use two-factor authentication, transaction alerts, and spending limits. Layer your defenses.",
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-red-300">Critical Knowledge</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            How Scammers Make It Look
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              100% Legitimate
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            These are not mistakes. They are <span className="text-red-400 font-bold">calculated psychological weapons</span> designed to exploit how your brain works.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('tricks')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'tricks'
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Deception Tactics
            </button>
            <button
              onClick={() => setActiveTab('psychology')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'psychology'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Psychology
            </button>
            <button
              onClick={() => setActiveTab('defense')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'defense'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Defense Strategies
            </button>
          </div>
        </div>

        {/* Deception Tactics Tab */}
        {activeTab === 'tricks' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tricks.map((trick, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-${trick.color}-500/30 hover:border-${trick.color}-500/60 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`bg-${trick.color}-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <trick.icon className={`w-7 h-7 text-${trick.color}-400`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {trick.title}
                </h3>
                
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {trick.description}
                </p>

                <div className={`bg-${trick.color}-900/30 border border-${trick.color}-500/30 rounded-lg p-3 mb-4`}>
                  <p className="text-xs font-mono text-gray-400 mb-1">Example:</p>
                  <p className={`text-sm text-${trick.color}-300 font-semibold`}>{trick.example}</p>
                </div>

                {trick.danger === 'critical' && (
                  <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-lg px-3 py-2">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-bold text-red-400">CRITICAL THREAT</span>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-green-300"><strong>Real:</strong> {trick.realVsFake.real}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300"><strong>Fake:</strong> {trick.realVsFake.fake}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Psychology Tab */}
        {activeTab === 'psychology' && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">The Psychology of Deception</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Scammers exploit fundamental human psychology. Understanding these tactics makes you immune to them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychologyTactics.map((tactic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30 hover:border-purple-500/60 rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <tactic.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{tactic.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{tactic.description}</p>
                  <div className="bg-pink-900/30 border border-pink-500/30 rounded-lg p-3">
                    <p className="text-xs text-pink-300"><strong>Impact:</strong> {tactic.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Defense Strategies Tab */}
        {activeTab === 'defense' && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Your Defense Playbook</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Practical, actionable steps to protect yourself from sophisticated scams
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {defenseStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${strategy.color}-900/30 to-${strategy.color}-800/20 border-2 border-${strategy.color}-500/30 hover:border-${strategy.color}-500/60 rounded-2xl p-6 transition-all duration-300 hover:scale-105`}
                >
                  <div className={`bg-${strategy.color}-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <strategy.icon className={`w-6 h-6 text-${strategy.color}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-sm text-gray-300">{strategy.action}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl mb-12">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Scams Don't Look Like Scams
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            They look exactly like something you've already trusted. That's the entire point. 
            <span className="block mt-2 text-red-400 font-bold">Your skepticism is your strongest defense.</span>
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/")}
              className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
            <button
              onClick={() => navigate("/scam-messages")}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Some common messages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegitTricks;