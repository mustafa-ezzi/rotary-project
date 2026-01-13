import { useEffect } from "react";

const Reveal = () => {
  useEffect(() => {
    document.body.classList.add("bg-black");
    return () => document.body.classList.remove("bg-black");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white">
      <div className="max-w-2xl w-full text-center">

        <h1 className="text-4xl font-extrabold text-red-500 mb-4">
          This Was a Simulation.
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          If this were a real scam, your personal and financial data could
          already be compromised.
        </p>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Data You Just Exposed
          </h2>

          <ul className="space-y-2 text-left text-gray-300">
            <li>• Full Name</li>
            <li>• CNIC Number</li>
            <li>• Mobile Number</li>
            <li>• Email Address</li>
            <li>• OTP Access</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
            <h3 className="font-semibold text-red-400 mb-1">
              Identity Theft
            </h3>
            <p className="text-sm text-gray-300">
              Your identity can be used to impersonate you.
            </p>
          </div>

          <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-1">
              Financial Fraud
            </h3>
            <p className="text-sm text-gray-300">
              Unauthorized transactions and account takeovers.
            </p>
          </div>

          <div className="bg-purple-600/20 border border-purple-600/30 rounded-lg p-4">
            <h3 className="font-semibold text-purple-400 mb-1">
              SIM Swap Attacks
            </h3>
            <p className="text-sm text-gray-300">
              Loss of phone control and OTP interception.
            </p>
          </div>

          <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-1">
              Long-Term Damage
            </h3>
            <p className="text-sm text-gray-300">
              Data once leaked can circulate for years.
            </p>
          </div>
        </div>

        <p className="text-lg font-semibold text-gray-200 mb-4">
          In real life, there is no reveal screen.
        </p>

        <p className="text-sm text-gray-400">
          This simulation is part of the <strong>CyberShield Awareness Program</strong>.
          No real data was collected or stored.
        </p>
      </div>
    </div>
  );
};

export default Reveal;
