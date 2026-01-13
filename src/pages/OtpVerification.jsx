import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulation only
    navigate("/reveal");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">

        <div className="text-center mb-6">
          <div className="text-green-600 text-2xl mb-2">📩</div>
          <h2 className="text-xl font-bold text-gray-800">
            OTP Verification Required
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            A one-time password has been sent to your registered mobile number.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            className="w-full border rounded-lg px-4 py-3 text-center tracking-widest text-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Confirm Verification
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            Didn’t receive the OTP?
          </p>
          <button className="text-xs text-blue-600 hover:underline mt-1">
            Resend OTP
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          For security reasons, do not share your OTP with anyone.
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
