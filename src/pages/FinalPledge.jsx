import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, Brain, Heart, Users, TrendingUp, Star, Sparkles, Home, Share2 } from "lucide-react";

const FinalPledge = () => {
  const [pledged, setPledged] = useState(false);
  const [selectedCommitments, setSelectedCommitments] = useState([]);

  const commitments = [
    { id: 1, text: "I will never share OTPs with anyone", icon: Lock },
    { id: 2, text: "I will verify URLs before clicking", icon: Eye },
    { id: 3, text: "I will question urgent requests", icon: AlertTriangle },
    { id: 4, text: "I will educate my family about scams", icon: Users },
    { id: 5, text: "I will stay skeptical of too-good-to-be-true offers", icon: Brain },
    { id: 6, text: "I will use independent verification for all requests", icon: Shield },
  ];

  const toggleCommitment = (id) => {
    if (selectedCommitments.includes(id)) {
      setSelectedCommitments(selectedCommitments.filter(c => c !== id));
    } else {
      setSelectedCommitments([...selectedCommitments, id]);
    }
  };

  const handlePledge = () => {
    if (selectedCommitments.length > 0) {
      setPledged(true);
    }
  };

  const shareMessage = () => {
    const text = "I just completed the CyberShield Awareness Program and pledged to stay scam-aware! 🛡️ Protect yourself and your loved ones from cyber scams.";
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Pledge message copied to clipboard!");
    }
  };

  if (pledged) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4 sm:px-6 text-white relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl w-full relative z-10">
          
          {/* Success Badge */}
          <div className="text-center mb-8 animate-bounce">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-4 border-green-500/50 mb-6 animate-pulse">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
          </div>

          {/* Main Success Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-green-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl mb-8">
            
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Pledge Accepted!
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-2">
                You're Now Officially <span className="text-green-400 font-bold">Cyber-Aware</span> 🛡️
              </p>
              <p className="text-gray-400">
                Your vigilance is your strongest defense
              </p>
            </div>

            {/* Your Commitments */}
            <div className="bg-black/30 border border-green-500/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Your Commitments:</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {commitments
                  .filter(c => selectedCommitments.includes(c.id))
                  .map((commitment) => (
                    <div key={commitment.id} className="flex items-center gap-3 bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                      <div className="bg-green-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <commitment.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-sm text-gray-300">{commitment.text}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{selectedCommitments.length}</p>
                <p className="text-xs text-gray-400">Commitments</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-4 text-center">
                <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400">Awareness</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Safe</p>
                <p className="text-xs text-gray-400">Status</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Share this knowledge with family and friends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Stay updated on new scam tactics and trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Report suspicious messages to help protect others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Review your security settings regularly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={shareMessage}
                className="flex-1 group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share Your Pledge
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300">
                Part of <strong className="text-white">CyberShield Awareness Program</strong>
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Together, we can build a safer digital Pakistan 🇵🇰
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex flex-col items-center justify-center px-4 sm:px-6 text-white relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Warning Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border-2 border-red-500/50 rounded-full px-6 py-3 mb-6 animate-pulse">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <span className="text-sm font-bold text-red-300">CRITICAL AWARENESS CHECKPOINT</span>
          </div>
        </div>

        {/* Main Pledge Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-2 border-red-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Final Warning
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-4 text-gray-300 mb-8">
              <p className="text-lg sm:text-xl leading-relaxed">
                Cyber scams are <span className="text-red-400 font-bold">everywhere</span>. Your personal information is the currency they trade.
              </p>
              <p className="text-base sm:text-lg">
                One careless click can cause <span className="text-orange-400 font-bold">years of damage</span> – financial loss, identity theft, and endless stress.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-red-400 mb-1">2M+</p>
              <p className="text-xs text-gray-400">Scams Daily</p>
            </div>
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-orange-400 mb-1">₨5B</p>
              <p className="text-xs text-gray-400">Lost Annually</p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400 mb-1">80%</p>
              <p className="text-xs text-gray-400">Preventable</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">
                If you've learned <span className="text-purple-400 font-bold">even a single trick</span> today, it can save your money, identity, and peace of mind. 
                <span className="block mt-2 text-white font-semibold">But knowledge without action is meaningless.</span>
              </p>
            </div>
          </div>

          {/* Commitments Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Make Your Commitment
            </h2>
            <p className="text-gray-400 text-center mb-6 text-sm">
              Select the actions you pledge to take (at least one required)
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {commitments.map((commitment) => {
                const isSelected = selectedCommitments.includes(commitment.id);
                return (
                  <button
                    key={commitment.id}
                    onClick={() => toggleCommitment(commitment.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      isSelected
                        ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50 shadow-lg'
                        : 'bg-white/5 border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-green-500/20' : 'bg-gray-700/30'
                    }`}>
                      {isSelected ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <commitment.icon className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <span className={`text-sm text-left ${
                      isSelected ? 'text-white font-semibold' : 'text-gray-300'
                    }`}>
                      {commitment.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pledge Button */}
          <div className="text-center">
            <button
              onClick={handlePledge}
              disabled={selectedCommitments.length === 0}
              className={`group px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform shadow-2xl flex items-center justify-center gap-3 mx-auto ${
                selectedCommitments.length > 0
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black hover:scale-110 cursor-pointer'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Shield className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              {selectedCommitments.length > 0 ? 'I Pledge to Stay Alert' : 'Select at Least One Commitment'}
            </button>
            
            {selectedCommitments.length === 0 && (
              <p className="text-xs text-gray-500 mt-3">
                Choose your commitments above to activate the pledge
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm text-gray-300">
              Part of <strong className="text-white">CyberShield Awareness Program</strong>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Your commitment today protects you and your loved ones tomorrow
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalPledge;