import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Shield, Lock, AlertTriangle, Clock, CheckCircle, MessageSquare, RefreshCw, ArrowRight, Phone } from "lucide-react";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [canResend, setCanResend] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 30) {
      setShowWarning(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
    
    // Focus the next empty input or last input
    const nextIndex = Math.min(newOtp.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    setIsResending(true);
    setAttempts(prev => prev + 1);
    setTimeout(() => {
      setIsResending(false);
      setTimeLeft(120);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      navigate("/reveal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Security Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-6 py-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">SMS Verification</span>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">Two-Factor Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Step 3 of 3</span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {/* Icon and Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-2xl shadow-lg">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Enter Verification Code
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                We've sent a 6-digit verification code to your registered mobile number ending in <strong className="text-gray-800">•••• 4567</strong>
              </p>
            </div>

            {/* Timer Warning */}
            {showWarning && timeLeft > 0 && (
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6 flex items-start gap-3 animate-pulse">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-orange-800">Hurry! Time is running out</p>
                  <p className="text-xs text-orange-700">Complete verification before the code expires</p>
                </div>
              </div>
            )}

            {/* Countdown Timer */}
            <div className={`rounded-2xl p-6 mb-8 text-center transition-all ${
              timeLeft <= 30 
                ? 'bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200'
            }`}>
              <div className="flex justify-center mb-3">
                <Clock className={`w-8 h-8 ${timeLeft <= 30 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`} />
              </div>
              <p className={`text-sm font-semibold mb-2 ${timeLeft <= 30 ? 'text-red-800' : 'text-blue-800'}`}>
                {timeLeft > 0 ? 'Code expires in' : 'Code expired'}
              </p>
              <p className={`text-4xl font-bold ${timeLeft <= 30 ? 'text-red-600' : 'text-blue-600'}`}>
                {formatTime(timeLeft)}
              </p>
              {timeLeft === 0 && (
                <p className="text-xs text-red-600 mt-2">Please request a new verification code</p>
              )}
            </div>

            {/* OTP Input Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
                  Enter 6-Digit Code
                </label>
                <div className="flex gap-2 sm:gap-3 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ""))}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all outline-none"
                      required
                    />
                  ))}
                </div>
              </div>

              {/* Attempts Counter */}
              {attempts > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                  <p className="text-sm text-yellow-800">
                    <strong>Attempt {attempts + 1}:</strong> Please enter the code carefully
                  </p>
                </div>
              )}

              {/* Resend Section */}
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Didn't receive the code?
                </p>
                {canResend || timeLeft === 0 ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isResending}
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2 px-6 rounded-lg border-2 border-blue-200 transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isResending ? 'animate-spin' : ''}`} />
                    {isResending ? 'Sending...' : 'Resend Code'}
                  </button>
                ) : (
                  <p className="text-xs text-gray-500">
                    You can resend the code in <strong className="text-gray-700">{formatTime(timeLeft)}</strong>
                  </p>
                )}
              </div>

              {/* Security Warning */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-1">Important Security Notice</p>
                  <p className="text-xs text-red-700">
                    Never share your OTP with anyone, including bank staff. If you didn't request this code, your account may be compromised. Contact support immediately.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={otp.some(digit => !digit)}
                className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Complete Verification
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Help Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-blue-800 mb-2">Need Help?</p>
                <p className="text-xs text-blue-700 mb-3">
                  If you're having trouble receiving the code or need assistance
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="tel:+923001234567" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    <Phone className="w-4 h-4" />
                    Call Support: +92 300 1234567
                  </a>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                    Live Chat Support
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Bank Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-green-600" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This verification protects your account from unauthorized access
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;