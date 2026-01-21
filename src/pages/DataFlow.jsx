import { useEffect, useState } from "react";
import { 
  Upload, Database, Copy, Users, CreditCard, Phone, Mail, 
  AlertTriangle, Globe, DollarSign, ShieldOff, TrendingDown,
  ArrowRight, Server, Lock, Eye, Skull, Home,Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataFlow = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(-1);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActiveStep(0), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeStep >= 0 && activeStep < 6) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Data Capture",
      subtitle: "Instant Interception",
      description: "The moment you click 'Submit', your data is transmitted to a malicious server. There's no turning back - it happens in milliseconds.",
      color: "red",
      details: [
        "Form data intercepted via fake HTTPS",
        "Captured before you can close the browser",
        "No security warnings or alerts shown",
        "Timestamp and IP address logged"
      ],
      timing: "< 1 second"
    },
    {
      number: 2,
      icon: Database,
      title: "Storage & Indexing",
      subtitle: "Permanent Record Created",
      description: "Your complete profile is stored in criminal databases, indexed, and tagged for easy retrieval and sale.",
      color: "orange",
      details: [
        "Stored in encrypted criminal databases",
        "Tagged by country, bank, and data quality",
        "Cross-referenced with existing records",
        "Assigned a monetary value"
      ],
      timing: "< 5 seconds",
      showJson: true
    },
    {
      number: 3,
      icon: Copy,
      title: "Mass Duplication",
      subtitle: "Viral Spread Begins",
      description: "Your data is duplicated and distributed across dozens of scam networks, dark web marketplaces, and criminal organizations worldwide.",
      color: "yellow",
      details: [
        "Copied to 20+ criminal servers globally",
        "Shared in encrypted messaging groups",
        "Posted on dark web marketplaces",
        "Sold to multiple buyer networks"
      ],
      timing: "Within minutes"
    },
    {
      number: 4,
      icon: DollarSign,
      title: "Monetization",
      subtitle: "Your Data Has a Price",
      description: "Complete identity packages are sold on dark web markets. Your full profile can fetch $50-500 depending on account balance and credit score.",
      color: "green",
      details: [
        "Basic info: $10-20 per record",
        "Full banking details: $50-150",
        "Premium profiles: $200-500",
        "Sold multiple times to different buyers"
      ],
      timing: "Hours to days"
    },
    {
      number: 5,
      icon: Users,
      title: "Criminal Network Distribution",
      subtitle: "Organized Crime Takes Over",
      description: "Specialized criminal teams receive your data - each team focuses on different types of fraud for maximum profit.",
      color: "purple",
      details: [
        "Identity theft specialists",
        "SIM swap attack teams",
        "Phishing campaign operators",
        "Money mule recruitment networks"
      ],
      timing: "Days to weeks"
    },
    {
      number: 6,
      icon: Skull,
      title: "Active Exploitation",
      subtitle: "The Attacks Begin",
      description: "Multiple simultaneous attacks launched using your stolen identity. Each criminal team executes their specialized fraud.",
      color: "red",
      details: [
        "Unauthorized bank transfers initiated",
        "SIM swap to hijack your phone number",
        "Credit card applications in your name",
        "Tax fraud and government benefits theft",
        "Social engineering attacks on contacts",
        "Account takeovers across platforms"
      ],
      timing: "Weeks to years",
      critical: true
    }
  ];

  const sampleData = {
    "victim_id": "VIC-2025-001847",
    "timestamp": "2025-01-21T14:32:18Z",
    "personal": {
      "full_name": "User Full Name",
      "cnic": "XXXXX-XXXXXXX-X",
      "phone": "+92-XXX-XXXXXXX",
      "email": "user@email.com",
      "bank": "Selected Bank Name"
    },
    "financial": {
      "account_number": "XXXXXXXXXXXXXXXXXX",
      "card_number": "XXXX XXXX XXXX XXXX",
      "cvv": "XXX",
      "expiry": "MM/YY",
      "pin": "XXXX"
    },
    "auth": {
      "otp_captured": "XXXXXX",
      "session_id": "abc123xyz789"
    },
    "metadata": {
      "ip_address": "XXX.XXX.XXX.XXX",
      "location": "Karachi, PK",
      "device": "Desktop/Mobile",
      "estimated_value": "$350-500"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 flex justify-center">
        <div className="max-w-6xl w-full">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/50 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 p-6 rounded-3xl">
                  <Server className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Behind the Scenes: The Dark Journey of Your Data
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-6">
              This simulated flow reveals exactly what happens to your stolen information from the moment you click "Submit" until it's actively used against you.
            </p>

            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 rounded-full px-6 py-2">
              <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">Real criminal workflow - Educational simulation</span>
            </div>
          </div>

          {/* Timeline Flow */}
          <div className="relative mb-16">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-orange-600 to-purple-600"></div>

            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    activeStep >= index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 sm:left-4 flex items-center justify-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-${step.color}-600 to-${step.color}-800 flex items-center justify-center border-4 border-black shadow-2xl ${
                      activeStep >= index ? 'animate-pulse' : ''
                    }`}>
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 sm:ml-32">
                    <div className={`bg-gradient-to-br from-gray-900 to-${step.color}-900/20 border-2 border-${step.color}-600/50 rounded-2xl p-6 sm:p-8 hover:border-${step.color}-600/80 transition-all ${
                      step.critical ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-black' : ''
                    }`}>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-3xl sm:text-4xl font-bold text-${step.color}-400`}>
                              {step.number}
                            </span>
                            <div>
                              <h2 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h2>
                              <p className={`text-sm text-${step.color}-400 font-semibold`}>{step.subtitle}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 border border-orange-600/50 self-start sm:self-auto">
                          <Clock className="w-4 h-4 text-orange-400" />
                          <span className="text-xs sm:text-sm font-semibold text-orange-400">{step.timing}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="bg-black/40 rounded-xl p-4 sm:p-6 mb-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          What Happens:
                        </h3>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                              <ArrowRight className={`w-4 h-4 text-${step.color}-500 flex-shrink-0 mt-0.5`} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* JSON Code Sample for Step 2 */}
                      {step.showJson && activeStep >= index && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                              <Database className="w-4 h-4" />
                              Sample Database Record:
                            </h3>
                            <button
                              onClick={() => setShowCode(!showCode)}
                              className="text-xs text-orange-400 hover:text-orange-300 font-semibold"
                            >
                              {showCode ? 'Hide' : 'Show'} Code
                            </button>
                          </div>
                          {showCode && (
                            <pre className="bg-black border border-green-900/50 rounded-xl p-4 text-xs text-green-400 overflow-x-auto">
                              {JSON.stringify(sampleData, null, 2)}
                            </pre>
                          )}
                        </div>
                      )}

                      {/* Critical Warning */}
                      {step.critical && (
                        <div className="bg-red-600/20 border-2 border-red-500 rounded-xl p-4 flex items-start gap-3">
                          <ShieldOff className="w-6 h-6 text-red-500 flex-shrink-0 animate-pulse" />
                          <div>
                            <p className="text-sm font-bold text-red-400 mb-1">CRITICAL PHASE</p>
                            <p className="text-xs text-red-300">
                              At this stage, active crimes are being committed using your identity. Financial losses begin, and recovery becomes extremely difficult.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 border-2 border-red-600/50 rounded-2xl p-6 text-center">
              <Globe className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-red-400 mb-2">20+</p>
              <p className="text-sm text-gray-300">Countries Data Reaches</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-2 border-orange-600/50 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-orange-400 mb-2">50+</p>
              <p className="text-sm text-gray-300">Criminal Groups Access</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border-2 border-yellow-600/50 rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-yellow-400 mb-2">$500</p>
              <p className="text-sm text-gray-300">Average Sale Value</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-2 border-purple-600/50 rounded-2xl p-6 text-center">
              <TrendingDown className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-purple-400 mb-2">0%</p>
              <p className="text-sm text-gray-300">Recovery Rate</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-br from-gray-900 to-red-900/30 border-2 border-red-600/50 rounded-3xl p-8 sm:p-12 text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">
              One Form Submission. Countless Crimes.
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Every piece of data you enter feeds a global criminal ecosystem. Once submitted, your information enters an irreversible cycle of theft, sale, and exploitation that can continue for years.
            </p>
            <div className="inline-flex items-center gap-2 bg-black/40 border border-red-600 rounded-full px-6 py-3">
              <Lock className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-bold">NEVER share sensitive data through unverified links</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate("/how-it-looks-legit")}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-gray-700 hover:border-gray-600"
            >
              How it looks legit
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Educational simulation showing real criminal data handling processes
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DataFlow;