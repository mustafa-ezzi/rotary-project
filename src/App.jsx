import { Routes, Route } from "react-router-dom";
import BankVerification from "./pages/BankVerification";
import VerificationForm from "./pages/VerificationForm";
import OtpVerification from "./pages/OtpVerification";
import Reveal from "./pages/Reveal";
import DataFlow from "./pages/DataFlow";
import Presenter from "./pages/Presenter";
import LegitTricks from "./pages/LegitTricks";
import ScamMessages from "./pages/ScamMessages";
import FinalPledge from "./pages/FinalPledge";
import LandingPage from "./pages/Landing";
import ScamDetect from "./pages/ScamDetectionTest";


import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bank-verification" element={<BankVerification />} />
          <Route path="/verify" element={<VerificationForm />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/reveal" element={<Reveal />} />
          <Route path="/presenter" element={<Presenter />} />
          <Route path="/data-flow" element={<DataFlow />} />
          <Route path="/how-it-looks-legit" element={<LegitTricks />} />
          <Route path="/scam-messages" element={<ScamMessages />} />
          <Route path="/final-pledge" element={<FinalPledge />} />
          <Route path="/scam-detection" element={<ScamDetect />} />


          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
