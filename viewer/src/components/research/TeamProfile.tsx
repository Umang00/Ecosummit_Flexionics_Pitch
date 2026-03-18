import { Shield, Brain, Zap, Briefcase, Building2, Quote, Users, UserX } from 'lucide-react';

export function TeamProfile() {
  const team = [
    {
      name: "Bipin Patel",
      role: "CEO & Founder",
      focus: "The Operator",
      icon: <Building2 className="w-8 h-8 text-teal-500" />,
      bullets: [
        "25+ years as derivatives trader & risk specialist",
        "MSc Theoretical Physics, UPenn",
        "Former Chief Risk Officer, HKEX Group",
        "Deutsche Bank, London Clearing House"
      ]
    },
    {
      name: "Amy Shuai",
      role: "CFO",
      focus: "The Money",
      icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
      bullets: [
        "Chartered Accountant (ICAEW) since 2002",
        "20+ years global finance & investment banking",
        "UBS, Deutsche Bank, RBS",
        "Oversees infrastructure finance & compliance"
      ]
    },
    {
      name: "Giridhar Gandi",
      role: "Head of Flexibility",
      focus: "The Grid Expert",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      bullets: [
        "MSc Renewable Energy, KTH Royal Institute",
        "Master Thesis at Siemens Energy",
        "Expertise in VPP, PPA, Smart Grids, PyPSA",
        "Locally based in Sweden"
      ]
    },
    {
      name: "[Undisclosed]",
      role: "CTO",
      focus: "The Machine",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      bullets: [
        "Director, Barclays Investment Bank (13+ yrs)",
        "Head of AI/ML & Counterparty Risk Reporting",
        "Deutsche Bank Stress Testing",
        "MSc Finance & Investments, Bayes Business School"
      ]
    }
  ];

  const deprecated = [
    { name: "Colin Chapple", role: "Chief Engineer", bg: "Bateman Eng., Avmin Ltd." },
    { name: "Lukas Pfeiffer", role: "Head of Strategy", bg: "Genesis Digital Assets" },
    { name: "Daniel Schade", role: "VPP Product Owner", bg: "Stern Stewart consultant" },
    { name: "Nachi Singh", role: "Operations Manager", bg: "Amdocs, CGI, Accenture" }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-24">
      <div className="border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Team Profiles</h1>
        <p className="text-xl text-slate-400">Total team size: 14 employees (as of 2024-2025)</p>
      </div>

      {/* Narrative */}
      <div className="bg-teal-500/10 border-l-4 border-teal-500 p-8 rounded-r-2xl">
        <Quote className="w-8 h-8 text-teal-500/50 mb-4" />
        <p className="text-lg text-teal-50 leading-relaxed italic">
          "We are four people who have done the hard parts of this before. A CEO who ran risk at the Hong Kong Stock Exchange. A CFO from UBS and Deutsche Bank. A Head of Flexibility with a Master's from KTH and Siemens Energy... And a CTO who spent thirteen years leading AI and machine learning at Barclays. We are not a PowerPoint company. We have eleven thousand activations and six million dollars that prove we execute."
        </p>
      </div>

      {/* Core Team Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Users className="text-teal-500" /> Active Core Team</h2>
        <div className="grid grid-cols-2 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
                {member.icon}
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-1">{member.role}</p>
                <p className="text-slate-500 font-medium italic">{member.focus}</p>
              </div>
              <ul className="space-y-3 relative z-10">
                {member.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-slate-300">
                    <Shield className="w-5 h-5 text-slate-700 shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Combined Expertise Summary */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-900/50">
           <h2 className="text-xl font-bold text-white">Combined Expertise Summary</h2>
        </div>
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/50 text-slate-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-medium">Domain</th>
              <th className="px-6 py-4 font-medium">Person</th>
              <th className="px-6 py-4 font-medium">Background</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-slate-800/20"><td className="px-6 py-4 text-white font-bold">Leadership / Risk</td><td className="px-6 py-4">Bipin Patel</td><td className="px-6 py-4">HKEX CRO, Deutsche Bank, LCH</td></tr>
            <tr className="hover:bg-slate-800/20"><td className="px-6 py-4 text-white font-bold">Financial / CFO</td><td className="px-6 py-4">Amy Shuai</td><td className="px-6 py-4">UBS, Deutsche Bank, RBS, Arthur Andersen</td></tr>
            <tr className="hover:bg-slate-800/20"><td className="px-6 py-4 text-white font-bold">Flexibility / Renewable</td><td className="px-6 py-4">Giridhar Gandi</td><td className="px-6 py-4">MSc KTH, Siemens Energy thesis, VPP & PPA</td></tr>
            <tr className="hover:bg-slate-800/20"><td className="px-6 py-4 text-white font-bold">AI / CTO</td><td className="px-6 py-4">[Varun Kumar]</td><td className="px-6 py-4">Barclays Director (Head of AI/ML), Deutsche Bank</td></tr>
          </tbody>
        </table>
      </div>

      {/* Deprecated Team */}
      <div className="border border-slate-800 border-dashed rounded-2xl p-8 opacity-75">
        <h2 className="text-lg font-bold text-slate-400 mb-6 flex items-center gap-2"><UserX className="w-5 h-5"/> Deprecated Team Members (Reference Only)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deprecated.map((d, i) => (
             <div key={i} className="bg-slate-900/50 p-4 rounded-xl">
               <p className="text-white font-bold text-sm mb-1">{d.name}</p>
               <p className="text-slate-500 text-xs mb-2">{d.role}</p>
               <p className="text-slate-600 text-[11px] leading-tight">{d.bg}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
