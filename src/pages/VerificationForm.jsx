import { useNavigate } from "react-router-dom";


const VerificationForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/otp");
    };
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-8">

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Account Holder Verification
                </h2>

                <p className="text-sm text-gray-600 mb-6">
                    Please provide the required details below to verify your account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name (as per bank record)"
                        className="w-full border rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                        type="text"
                        placeholder="CNIC Number"
                        className="w-full border rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full border rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded-lg px-4 py-3 text-sm"
                    />

                    <select className="w-full border rounded-lg px-4 py-3 text-sm">
                        <option>Select Bank</option>
                        <option>National Bank</option>
                        <option>Private Bank</option>
                        <option>Islamic Bank</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Verify Account
                    </button>
                </form>

                <p className="text-xs text-gray-400 text-center mt-6">
                    Your information will be used solely for verification purposes.
                </p>
            </div>
        </div>
    );
};

export default VerificationForm;
