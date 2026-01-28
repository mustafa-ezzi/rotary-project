import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; // Added useState
import SplashScreen from "./components/SplashScreen"; // Import your new component

// Page Imports
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
import ContactPage from "./pages/ContactPage";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Track splash screen state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {loading ? (
        /* 1. Show Splash Screen first */
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        /* 2. Show Main App once loading is false */
        <div className="flex flex-col min-h-screen animate-in fade-in duration-1000">
          <Navbar />

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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;