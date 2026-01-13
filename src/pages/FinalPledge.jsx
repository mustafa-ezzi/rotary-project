import { useState } from "react";

const FinalPledge = () => {
  const [pledged, setPledged] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-black flex flex-col items-center justify-center px-6 text-white">
      <div className="max-w-3xl w-full text-center bg-black/80 p-10 rounded-2xl shadow-xl border border-gray-700">

        <h1 className="text-4xl font-extrabold mb-6 text-yellow-400">
          ⚠️ FINAL WARNING
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Cyber scams are everywhere. Your personal info is the currency they trade.  
          One careless click can cause years of damage.
        </p>

        <p className="text-gray-400 mb-8">
          If you’ve learned even a single trick today, it can save your money, identity, and peace of mind.
        </p>

        {!pledged ? (
          <button
            onClick={() => setPledged(true)}
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500 transition"
          >
            I Pledge to Stay Alert
          </button>
        ) : (
          <p className="text-green-400 text-lg font-semibold mt-6">
            ✅ Thank you! You’re now officially cyber-aware.
          </p>
        )}

        <p className="text-xs text-gray-500 mt-10">
          Part of <strong>CyberShield Awareness Program</strong> – Stay Safe Online
        </p>
      </div>
    </div>
  );
};

export default FinalPledge;
