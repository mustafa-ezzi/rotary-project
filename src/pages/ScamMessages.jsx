const messages = [
  {
    title: "Bank Account Alert",
    text: "Dear Customer, your bank account has been temporarily restricted. Please verify your details immediately to avoid permanent suspension.",
    tag: "Urgency + Authority"
  },
  {
    title: "OTP Request",
    text: "Your verification OTP is 483920. Please share it with our representative to complete the security process.",
    tag: "Trust Exploit"
  },
  {
    title: "Prize / Refund Scam",
    text: "Congratulations! You are eligible for a pending refund. Click the link below to claim your amount.",
    tag: "Greed Trigger"
  },
  {
    title: "SIM Block Warning",
    text: "Your SIM will be blocked today due to incomplete verification. Verify now to continue services.",
    tag: "Fear Tactic"
  },
  {
    title: "Delivery Issue",
    text: "We tried delivering your parcel but failed. Update your address to reschedule delivery.",
    tag: "Routine Disguise"
  },
  {
    title: "Account Login Alert",
    text: "New login detected from an unknown device. If this wasn't you, secure your account immediately.",
    tag: "Panic Induction"
  }
];

const ScamMessages = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center">
      <div className="max-w-6xl w-full">

        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Common Scam Messages
        </h1>

        <p className="text-center text-gray-600 mb-12">
          These messages look normal. That’s the danger.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold text-lg mb-3">
                  {msg.title}
                </h2>
                <p className="text-sm text-gray-700">
                  {msg.text}
                </p>
              </div>

              <span className="mt-6 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-600 self-start">
                {msg.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-black text-white rounded-xl p-8 text-center">
          <p className="text-lg font-semibold">
            If a message pushes you to act fast — pause.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Scammers win when you don’t think.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ScamMessages;
