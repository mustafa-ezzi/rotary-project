const DataFlow = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex justify-center">
      <div className="max-w-4xl w-full">

        <h1 className="text-3xl font-extrabold text-red-500 mb-4 text-center">
          Behind the Scenes: What Happens to Your Data
        </h1>

        <p className="text-center text-gray-400 mb-10">
          This is a simulated flow showing how scammers process stolen data.
        </p>

        <div className="space-y-6">

          {/* Step 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Step 1: Data Capture</h2>
            <p className="text-gray-300 text-sm">
              As soon as you submit the form, your personal information is sent to
              an unauthorized server controlled by attackers.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Step 2: Storage</h2>
            <p className="text-gray-300 text-sm mb-2">
              Your data is stored in a database for later use.
            </p>

            <pre className="bg-black rounded-lg p-4 text-xs text-green-400 overflow-x-auto">
{`{
  "name": "User Name",
  "cnic": "xxxxx-xxxxxxx-x",
  "phone": "+92xxxxxxxxxx",
  "email": "user@email.com",
  "otp": "******"
}`}
            </pre>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Step 3: Duplication</h2>
            <p className="text-gray-300 text-sm">
              The same data is copied and shared across multiple scam networks.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Step 4: Abuse</h2>
            <p className="text-gray-300 text-sm">
              Your identity may now be used for bank fraud, SIM swaps, fake loans,
              or impersonation scams.
            </p>
          </div>

        </div>

        <p className="text-center text-gray-400 mt-10">
          One form submission. Multiple crimes.
        </p>

      </div>
    </div>
  );
};

export default DataFlow;
