import React from "react";
import {
  Phone, MapPin, ShieldAlert, AlertCircle, Clock, FileText
} from "lucide-react";

const ContactPage = () => {
  const cybercrimeContacts = [
    { city: "FIA Cybercrime Helpline", phone: "0800-22523", color: "bg-red-600" },
    { city: "Karachi Office", phone: "+92 21 99333950", color: "bg-gray-800" },
    { city: "Lahore Office", phone: "+92 42 99268527", color: "bg-gray-800" },
    { city: "Islamabad Office", phone: "+92 51 9256401", color: "bg-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Cybercrime <span className="text-red-600">Reporting</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Report online fraud, scams, and cybercrime to the Federal Investigation Agency (FIA) Cybercrime Wing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <ShieldAlert className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Contact Numbers</h2>
            </div>

            <div className="space-y-4">
              {cybercrimeContacts.map((contact, i) => (
                <div key={i} className={`${contact.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs opacity-80 uppercase font-bold tracking-widest mb-2">{contact.city}</p>
                      <p className="text-2xl font-mono font-bold">{contact.phone}</p>
                    </div>
                    <Phone className="w-6 h-6 opacity-60" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-orange-900 mb-2">What to Report</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Online fraud & scams</li>
                      <li>• Identity theft</li>
                      <li>• Financial fraud</li>
                      <li>• Phishing attacks</li>
                      <li>• Online harassment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Before You Report</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Take screenshots of evidence</li>
                      <li>• Keep message records intact</li>
                      <li>• Note dates & times</li>
                      <li>• Collect URLs or account links</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Online Portal</h3>
                    <p className="text-sm text-green-800 mb-3">File your complaint 24/7 at:</p>
                    <a href="https://complaint.fia.gov.pk" target="_blank" rel="noopener noreferrer" className="text-sm font-mono bg-green-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-green-700 transition-colors">
                      complaint.fia.gov.pk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
