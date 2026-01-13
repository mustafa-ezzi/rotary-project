import { useNavigate } from "react-router-dom";

const roadmapItems = [
  { title: "1️⃣ Landing Page", desc: "Bank Verification Portal", path: "/" },
  { title: "2️⃣ Verification Form", desc: "CNIC, Phone, Bank Details", path: "/verify" },
  { title: "3️⃣ OTP Page", desc: "Simulated OTP Trap", path: "/otp" },
  { title: "4️⃣ Reveal Page", desc: "Dark Mode Shock", path: "/reveal" },
  { title: "5️⃣ Data Flow", desc: "How scammers misuse info", path: "/data-flow" },
  { title: "6️⃣ Presenter Panel", desc: "Manual control of flow", path: "/presenter" },
  { title: "7️⃣ Legit Tricks", desc: "How scams look real", path: "/how-it-looks-legit" },
  { title: "8️⃣ Scam Messages", desc: "Common scam messages gallery", path: "/scam-messages" },
  { title: "9️⃣ Final Pledge", desc: "Final warning & pledge", path: "/final-pledge" }
];

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
      <div className="max-w-4xl w-full">

        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          CyberShield Awareness Program Roadmap
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Click each stage to navigate through the program during your live session.
        </p>

        <div className="space-y-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-l-8 border-blue-600 transition"
            >
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          All pages are fully interactive and part of the live demonstration.
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
