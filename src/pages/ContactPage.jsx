import React from "react";
import { 
  Mail, Phone, MapPin, ShieldAlert, Globe, 
  Users, Heart, BookOpen, Droplets, ShieldCheck, 
  ExternalLink, Info 
} from "lucide-react";

const ContactPage = () => {
  const rotaryInfo = [
    {
      title: "About Rotary International",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      description: "A global network of 1.4 million neighbors, friends, and leaders who volunteer their skills and resources to solve some of the world's most complex humanitarian challenges."
    },
    {
      title: "Core Values",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      description: "Integrity, Diversity, Service, Fellowship, and Leadership. We believe in taking action on our world’s most persistent issues."
    }
  ];

  const areasOfFocus = [
    { name: "Peace Promotion", icon: <Heart className="w-5 h-5" /> },
    { name: "Fighting Disease", icon: <ShieldAlert className="w-5 h-5" /> },
    { name: "Clean Water", icon: <Droplets className="w-5 h-5" /> },
    { name: "Education", icon: <BookOpen className="w-5 h-5" /> },
  ];

  const rotaryContacts = [
    { 
      name: "Rotary District 3271 Secretariat", 
      email: "rotarysecretariat3271@gmail.com", 
      phone: "N/A", 
      address: "Sindh & Balochistan Region",
      tag: "District Office"
    },
    { 
      name: "Rotary Club of Karachi Centennial", 
      email: "jalil@rckcentennial.com", 
      phone: "+92 333 2373487", 
      address: "Avari Towers / Karachi Club Annexe",
      tag: "Active Club"
    },
    { 
      name: "Rotary Club of Karachi", 
      email: "rotarykhi@gmail.com", 
      phone: "+92 333 2077015", 
      address: "231, Muhammadi House, I.I. Chundrigar Road",
      tag: "Main Hub"
    },
    { 
      name: "Rotary Pakistan Smart Villages", 
      email: "support@rotarypakistansmartvillages.org", 
      phone: "N/A", 
      address: "ICCI, Block 9, Clifton, Karachi",
      tag: "Project Office"
    },
  ];

  const cybercrimeContacts = [
    { city: "FIA Cybercrime Helpline", phone: "0800-22523", color: "bg-red-600" },
    { city: "Karachi Office", phone: "+92 21 99333950", color: "bg-gray-800" },
    { city: "Lahore Office", phone: "+92 42 99268527", color: "bg-gray-800" },
    { city: "Islamabad Office", phone: "+92 51 9256401", color: "bg-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connecting you with humanitarian leaders across Pakistan and providing essential support for digital safety.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Users className="text-blue-600 w-8 h-8" />
                <h2 className="text-3xl font-bold text-slate-800">Rotary Pakistan</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {rotaryInfo.map((info, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="mb-4">{info.icon}</div>
                    <h3 className="font-bold text-slate-800 mb-2">{info.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{info.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-slate-700 mb-4 uppercase tracking-wider">Areas of Focus</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {areasOfFocus.map((area, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg text-blue-700">
                    {area.icon}
                    <span className="text-sm font-medium">{area.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">District Directory</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rotaryContacts.map((contact, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:border-blue-300 transition-all">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                          {contact.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {contact.name}
                      </h3>
                      <div className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-3 text-slate-400" />
                          <a href={`mailto:${contact.email}`} className="hover:text-blue-600">{contact.email}</a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-3 text-slate-400" />
                          <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-3 text-slate-400 mt-1" />
                          <span>{contact.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <ShieldAlert className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold">Cybercrime Support</h2>
                </div>
                <p className="text-slate-400 text-sm mb-8">
                  Report online harassment, financial fraud, or identity theft to the FIA Cybercrime Wing immediately.
                </p>
                
                <div className="space-y-4">
                  {cybercrimeContacts.map((contact, i) => (
                    <div key={i} className={`${contact.color} p-4 rounded-xl flex justify-between items-center group cursor-pointer hover:scale-[1.02] transition-transform`}>
                      <div>
                        <p className="text-xs opacity-70 uppercase font-bold tracking-widest">{contact.city}</p>
                        <p className="text-lg font-mono font-bold">{contact.phone}</p>
                      </div>
                      <Phone className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800">
                  <h4 className="font-bold mb-3 flex items-center">
                    <Info className="w-4 h-4 mr-2 text-blue-400" /> 
                    Quick Steps to Report:
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc ml-4">
                    <li>Take screenshots of the incident.</li>
                    <li>Do not delete any message threads.</li>
                    <li>Visit <a href="https://complaint.fia.gov.pk" className="text-blue-400 underline">complaint.fia.gov.pk</a></li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
            </section>

            <section className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4 italic">"Service Above Self"</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Interested in making a difference in your community? Join a local Rotary club and become part of a global movement.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors">
                <span>Find a Club Near You</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </section>
          </div>
          
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;