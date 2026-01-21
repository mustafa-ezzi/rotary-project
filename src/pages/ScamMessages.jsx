import { useState } from "react";
import { MessageSquare, Mail, Phone, AlertTriangle, Shield, Eye, XCircle, CheckCircle, Smartphone, Package, CreditCard, Clock, TrendingUp, Award, Home, ArrowRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScamMessages = () => {
  const navigate = useNavigate();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const messages = [
    {
      id: 1,
      icon: CreditCard,
      type: "SMS",
      channel: "Text Message",
      title: "Bank Account Alert",
      sender: "BANK-ALERT",
      text: "Dear Customer, your bank account has been temporarily restricted due to suspicious activity. Please verify your details immediately at secure-bank-verify.com to avoid permanent suspension within 24 hours.",
      tag: "Urgency + Authority",
      color: "red",
      dangerLevel: "Critical",
      redFlags: [
        "Creates artificial urgency (24 hours)",
        "Threatens permanent suspension",
        "Suspicious URL (not official bank domain)",
        "Requests verification via external link",
        "Generic greeting ('Dear Customer')"
      ],
      psychologyTactic: "Fear + Authority Bias",
      realityCheck: "Banks NEVER send links for verification. They'll ask you to visit branch or call official number."
    },
    {
      id: 2,
      icon: MessageSquare,
      type: "SMS",
      channel: "Text Message",
      title: "OTP Sharing Request",
      sender: "+92 300 XXXXXXX",
      text: "Your verification OTP is 483920. Our security team is calling you. Please share this code with our representative to complete the mandatory security update process.",
      tag: "Trust Exploit",
      color: "purple",
      dangerLevel: "Critical",
      redFlags: [
        "Asks you to SHARE the OTP (NEVER do this!)",
        "Claims representative will call",
        "Uses 'mandatory' to create obligation",
        "OTP should only be entered by YOU",
        "No legitimate service asks you to share OTP"
      ],
      psychologyTactic: "Authority + Reciprocity Trap",
      realityCheck: "OTPs are ONLY for you. Sharing an OTP = handing over your account. Banks NEVER ask for OTP."
    },
    {
      id: 3,
      icon: Award,
      type: "Email",
      channel: "Email",
      title: "Prize / Cashback Offer",
      sender: "rewards@bank-offers.com",
      text: "🎉 Congratulations! You are eligible for a pending PKR 15,000 cashback refund from your recent transactions. Click the link below to claim your amount within 48 hours. Limited slots available!",
      tag: "Greed Trigger",
      color: "yellow",
      dangerLevel: "High",
      redFlags: [
        "Unexpected windfall with no context",
        "Time pressure (48 hours)",
        "Artificial scarcity (limited slots)",
        "Suspicious email domain",
        "Too good to be true offer"
      ],
      psychologyTactic: "Greed + Scarcity + FOMO",
      realityCheck: "If you didn't apply for a refund, you're not getting one. Banks process refunds automatically to your account."
    },
    {
      id: 4,
      icon: Smartphone,
      type: "SMS",
      channel: "Text Message",
      title: "SIM Block Warning",
      sender: "PTA-URGENT",
      text: "URGENT: Your SIM will be blocked today at 6 PM due to incomplete biometric verification. Visit http://pta-verify.pk immediately to re-verify and prevent service disconnection.",
      tag: "Fear Tactic",
      color: "orange",
      dangerLevel: "Critical",
      redFlags: [
        "Immediate deadline (today)",
        "Specific time to create panic",
        "Suspicious URL (not official PTA domain)",
        "Threatens service disconnection",
        "No official reference number"
      ],
      psychologyTactic: "Fear + Time Pressure",
      realityCheck: "Government agencies send physical notices, not SMS threats. PTA gives weeks of notice, not hours."
    },
    {
      id: 5,
      icon: Package,
      type: "SMS",
      channel: "Text Message",
      title: "Delivery Failure Notice",
      sender: "COURIER-SVC",
      text: "We attempted to deliver your parcel (AWB: PKG7834921) but failed. Update your address at trackpkg-pk.com to reschedule delivery. Parcel will be returned in 2 days.",
      tag: "Routine Disguise",
      color: "blue",
      dangerLevel: "High",
      redFlags: [
        "You didn't order anything",
        "Fake tracking number",
        "Suspicious URL (not official courier site)",
        "Creates urgency (2 days)",
        "Generic sender name"
      ],
      psychologyTactic: "Routine Compliance + Urgency",
      realityCheck: "Real couriers use official apps and verified numbers. Check your order history before clicking any link."
    },
    {
      id: 6,
      icon: Shield,
      type: "Email",
      channel: "Email",
      title: "Suspicious Login Alert",
      sender: "security@account-alert.com",
      text: "⚠️ SECURITY ALERT: New login detected from unknown device in Lahore at 3:42 AM. IP: 192.168.x.x. If this wasn't you, secure your account immediately by verifying your identity at secure-login-verify.com",
      tag: "Panic Induction",
      color: "red",
      dangerLevel: "Critical",
      redFlags: [
        "Designed to trigger panic",
        "Suspicious timing (3:42 AM)",
        "External verification link",
        "Not from official domain",
        "Includes fake technical details (IP address)"
      ],
      psychologyTactic: "Fear + Urgency + Technical Intimidation",
      realityCheck: "Real security alerts come from official apps/emails and let you change password directly, not via external links."
    },
    {
      id: 7,
      icon: Phone,
      type: "Call",
      channel: "Phone Call",
      title: "Fake Bank Representative",
      sender: "Official Bank Number (Spoofed)",
      text: "Hello, I'm calling from [Bank Name] fraud department. We detected unauthorized transactions on your account. To block them, I need to verify your card details and the OTP we just sent you.",
      tag: "Authority Impersonation",
      color: "purple",
      dangerLevel: "Critical",
      redFlags: [
        "Unsolicited call about fraud",
        "Caller ID can be spoofed",
        "Asks for card details",
        "Requests OTP (HUGE red flag)",
        "Creates urgency to bypass thinking"
      ],
      psychologyTactic: "Authority + Fear + Urgency",
      realityCheck: "Banks NEVER call asking for card details or OTP. Hang up and call the official number on your card."
    },
    {
      id: 8,
      icon: Mail,
      type: "Email",
      channel: "Email",
      title: "Tax/Legal Notice Scam",
      sender: "notices@fbr-gov.pk.com",
      text: "NOTICE: You have outstanding tax dues of PKR 47,500. Failure to pay within 72 hours will result in legal action and account seizure. Click here to view notice and make payment: [link]",
      tag: "Fear + Authority",
      color: "red",
      dangerLevel: "High",
      redFlags: [
        "Unexpected tax notice via email",
        "Suspicious domain (.pk.com instead of .gov.pk)",
        "Threatens legal action immediately",
        "Specific amount to seem legitimate",
        "External payment link"
      ],
      psychologyTactic: "Authority + Fear + Legal Intimidation",
      realityCheck: "FBR sends physical notices to registered address, not threatening emails with payment links."
    },
    {
      id: 9,
      icon: TrendingUp,
      type: "WhatsApp",
      channel: "WhatsApp",
      title: "Investment Opportunity",
      sender: "Investment Advisor",
      text: "🚀 Exclusive investment opportunity! Join our verified trading group. Guaranteed 30% monthly returns. Minimum investment PKR 50,000. Limited spots - only 5 remaining. DM for details.",
      tag: "Greed + Scarcity",
      color: "green",
      dangerLevel: "High",
      redFlags: [
        "Unrealistic returns (30% monthly)",
        "Guaranteed profits (impossible)",
        "Artificial scarcity (5 spots left)",
        "Requires upfront payment",
        "Unsolicited investment offer"
      ],
      psychologyTactic: "Greed + FOMO + Scarcity",
      realityCheck: "No legitimate investment guarantees returns. High returns = high risk. This is likely a Ponzi scheme."
    },
    {
      id: 10,
      icon: CreditCard,
      type: "SMS",
      channel: "Text Message",
      title: "Card Upgrade Offer",
      sender: "BANK-UPGRADE",
      text: "You're eligible for a FREE credit card upgrade to Platinum tier with 5x rewards! Click to apply: cards-upgrade.pk. Offer expires in 6 hours. No documents required!",
      tag: "Too Good To Be True",
      color: "blue",
      dangerLevel: "Medium",
      redFlags: [
        "Unsolicited upgrade offer",
        "Suspicious URL",
        "Time pressure (6 hours)",
        "No documents required (red flag)",
        "Seems too easy/free"
      ],
      psychologyTactic: "Greed + Urgency + Convenience",
      realityCheck: "Banks send upgrade offers through official channels with proper documentation requirements."
    },
    {
      id: 11,
      icon: Smartphone,
      type: "SMS",
      channel: "Text Message",
      title: "KYC Update Required",
      sender: "BANK-KYC",
      text: "Dear Customer, your KYC details have expired. Update immediately at kyc-update-portal.com or your account will be suspended. Required: CNIC, selfie, card details.",
      tag: "Urgency + Data Harvesting",
      color: "orange",
      dangerLevel: "Critical",
      redFlags: [
        "Threatens account suspension",
        "External portal for KYC",
        "Asks for sensitive data (CNIC, card details)",
        "Requests selfie (for identity theft)",
        "Generic sender ID"
      ],
      psychologyTactic: "Fear + Authority + Compliance",
      realityCheck: "Banks conduct KYC through official apps or in-branch. They never ask for card details for KYC."
    },
    {
      id: 12,
      icon: Package,
      type: "Email",
      channel: "Email",
      title: "Customs Clearance Fee",
      sender: "customs@parcel-clearance.com",
      text: "Your international package is held at customs. Pay clearance fee of PKR 2,500 within 24 hours to release shipment. Track ID: INT8473621. Payment link: [link]",
      tag: "Small Payment Trap",
      color: "yellow",
      dangerLevel: "Medium",
      redFlags: [
        "Unexpected international package",
        "Small fee to seem reasonable",
        "Fake tracking number",
        "External payment link",
        "Non-official email domain"
      ],
      psychologyTactic: "Small Commitment + Urgency",
      realityCheck: "Real customs fees are paid through official courier services, not random email links."
    }
  ];

  const filteredMessages = filterType === 'all'
    ? messages
    : messages.filter(msg => msg.type.toLowerCase() === filterType.toLowerCase());

  const getDangerColor = (level) => {
    switch (level) {
      case 'Critical': return 'red';
      case 'High': return 'orange';
      case 'Medium': return 'yellow';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-red-300">Real Scam Examples</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Common Scam Messages
            <span className="block text-2xl sm:text-3xl mt-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              They Look Normal. That's The Danger.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            These are actual scam message templates used by criminals. Learn to recognize them before you become a victim.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${filterType === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            All Messages ({messages.length})
          </button>
          <button
            onClick={() => setFilterType('sms')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${filterType === 'sms'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            SMS ({messages.filter(m => m.type === 'SMS').length})
          </button>
          <button
            onClick={() => setFilterType('email')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${filterType === 'email'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            <Mail className="w-4 h-4 inline mr-2" />
            Email ({messages.filter(m => m.type === 'Email').length})
          </button>
          <button
            onClick={() => setFilterType('call')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${filterType === 'call'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            <Phone className="w-4 h-4 inline mr-2" />
            Calls ({messages.filter(m => m.type === 'Call').length})
          </button>
          <button
            onClick={() => setFilterType('whatsapp')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${filterType === 'whatsapp'
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            WhatsApp ({messages.filter(m => m.type === 'WhatsApp').length})
          </button>
        </div>

        {/* Messages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`group cursor-pointer bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-${msg.color}-500/30 hover:border-${msg.color}-500/60 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-${msg.color}-500/20 p-3 rounded-xl`}>
                  <msg.icon className={`w-6 h-6 text-${msg.color}-400`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-${getDangerColor(msg.dangerLevel)}-600/20 text-${getDangerColor(msg.dangerLevel)}-400 border border-${getDangerColor(msg.dangerLevel)}-500/30`}>
                  {msg.dangerLevel}
                </span>
              </div>

              {/* Channel Badge */}
              <div className="mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {msg.channel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {msg.title}
              </h3>

              {/* Sender */}
              <p className="text-xs text-gray-400 mb-3">
                From: <span className="text-gray-300 font-mono">{msg.sender}</span>
              </p>

              {/* Message Preview */}
              <div className="bg-black/40 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 line-clamp-3">
                  {msg.text}
                </p>
              </div>

              {/* Tag */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${msg.color}-600/20 text-${msg.color}-400`}>
                  {msg.tag}
                </span>
                <Eye className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Warning */}
        <div className="bg-gradient-to-r from-black to-gray-900 border-2 border-red-500 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl mb-12">
          <Clock className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            If A Message Pushes You To Act Fast — PAUSE
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Scammers win when you don't think.
            <span className="block mt-2 text-red-400 font-bold">
              Legitimate organizations give you time. Scammers create urgency.
            </span>
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
              onClick={() => navigate("/scam-detection")}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Test Your Detection Skills
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Detailed Modal */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-slate-900 border-2 border-purple-500 rounded-3xl 
             w-full max-w-2xl 
             max-h-[85vh] 
             flex flex-col
             shadow-2xl"

            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r from-${selectedMessage.color}-600 to-${selectedMessage.color}-800 p-6 rounded-t-3xl`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <selectedMessage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selectedMessage.title}</h2>
                    <p className="text-sm text-white/80">{selectedMessage.channel}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                >
                  <XCircle className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">

              {/* Sender Info */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Sender/Source:</p>
                <p className="text-white font-mono">{selectedMessage.sender}</p>
              </div>

              {/* Full Message */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  Full Message
                </h3>
                <div className="bg-black/40 border-2 border-white/20 rounded-xl p-4">
                  <p className="text-gray-300">{selectedMessage.text}</p>
                </div>
              </div>

              {/* Danger Level */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Danger Level:</span>
                <span className={`text-lg font-bold px-4 py-2 rounded-full bg-${getDangerColor(selectedMessage.dangerLevel)}-600/20 text-${getDangerColor(selectedMessage.dangerLevel)}-400 border-2 border-${getDangerColor(selectedMessage.dangerLevel)}-500/30`}>
                  {selectedMessage.dangerLevel}
                </span>
              </div>

              {/* Red Flags */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  Red Flags to Spot
                </h3>
                <div className="space-y-2">
                  {selectedMessage.redFlags.map((flag, index) => (
                    <div key={index} className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">{flag}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Psychology Tactic */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Psychology Tactic Used:</h4>
                <p className="text-white font-semibold">{selectedMessage.psychologyTactic}</p>
              </div>

              {/* Reality Check */}
              <div className="bg-green-900/20 border-2 border-green-500/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Reality Check:
                </h4>
                <p className="text-white">{selectedMessage.realityCheck}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-white/5 border-t border-white/10 p-6 rounded-b-3xl">
              <button
                onClick={() => setSelectedMessage(null)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all"
              >
                Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScamMessages;