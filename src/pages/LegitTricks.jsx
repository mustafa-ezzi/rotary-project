const LegitTricks = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 flex justify-center">
      <div className="max-w-5xl w-full">

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          How Scammers Make It Look Legit
        </h1>

        <p className="text-center text-gray-600 mb-12">
          These are not mistakes. They are calculated moves.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Trick 1 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              🏦 Real Bank Branding
            </h2>
            <p className="text-gray-600 text-sm">
              Logos, colors, and layouts are copied pixel-by-pixel from real bank
              websites. Your brain trusts visuals faster than logic.
            </p>
          </div>

          {/* Trick 2 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              🔒 HTTPS & Lock Icon
            </h2>
            <p className="text-gray-600 text-sm">
              That lock icon? It only means the connection is encrypted.
              It does NOT mean the site is safe or official.
            </p>
          </div>

          {/* Trick 3 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              ⏳ Fake Urgency
            </h2>
            <p className="text-gray-600 text-sm">
              “Your account will be blocked in 10 minutes.”
              Panic disables critical thinking. That’s the goal.
            </p>
          </div>

          {/* Trick 4 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              📱 OTP Trust Hack
            </h2>
            <p className="text-gray-600 text-sm">
              OTPs are associated with security — scammers exploit this by
              asking for them directly.
            </p>
          </div>

          {/* Trick 5 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              💬 Polite, Professional Language
            </h2>
            <p className="text-gray-600 text-sm">
              No typos. No slang. No threats. Just calm,
              “Dear Customer” energy.
            </p>
          </div>

          {/* Trick 6 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              🌐 Look‑Alike Domains
            </h2>
            <p className="text-gray-600 text-sm">
              One extra letter. One dash. One different TLD.
              Your eyes won’t catch it — and they know that.
            </p>
          </div>

        </div>

        <div className="mt-14 bg-gray-100 rounded-xl p-8 text-center">
          <p className="text-lg font-semibold">
            Scams don’t look like scams.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            They look like something you’ve already trusted.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LegitTricks;
