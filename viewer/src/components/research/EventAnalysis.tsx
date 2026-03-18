import { Calendar, MapPin, Users, Target, CheckCircle2, AlertTriangle, MonitorPlay } from 'lucide-react';

export function EventAnalysis() {
  const pitchRules = [
    { title: "Time Limit", desc: "Exactly 5 minutes maximum. Countdown clock on floor. No extensions." },
    { title: "Format", desc: "Fast-paced, high energy. PDF, 16:9 resolution only. No videos, no PPTX." },
    { title: "Submission", desc: "Deadline: Monday, 23 March 2026, 12:00." },
    { title: "Language", desc: "English only." },
    { title: "Recording", desc: "Will be published to Ecosummit TV YouTube channel." },
    { title: "Q&A", desc: "None. No audience Q&A to preserve schedule." },
    { title: "Do NOT talk about", desc: "Climate change in general, competitors." },
    { title: "Logo requirement", desc: "ECOSUMMIT.AI logo (white or coloured) on first slide. Confirmed required." }
  ];

  const targetInvestors = [
    { name: "SET Ventures", person: "Julia Padberg (Partner), Moritz Müller (Inv. Mgr.)", type: "Bronze Sponsor / Energy VC", focus: "Digital energy economy, €200M Fund IV", approach: "Priority 1. Julia moderates our session — she will be watching closely. Message around digital energy economy framing. Pre-connect on LinkedIn before the event." },
    { name: "Future Energy Ventures (FEV)", person: "Moritz Jungmann (Partner)", type: "CVC (RWE + E.ON)", focus: "Digital, asset-light infrastructure, grid modernisation, energy storage", approach: "Priority 1. FEV's thesis is a direct match: \"digital and asset-light infrastructure.\" Mention AI-enabled flexibility, no physical BESS exposure." },
    { name: "InnoEnergy", person: "Christian Bauer (CEO DACH)", type: "Silver Sponsor / VC", focus: "Early-stage cleantech industrialisation", approach: "Suena Energy (portfolio) is in energy storage optimization — we're adjacent. Frame around proven revenue and grid impact." },
    { name: "Encevo Group", person: "Martin Wienands (Venture Partner)", type: "CVC", focus: "Energy value chain (production, storage, supply, trading, distribution)", approach: "Encevo is vertically integrated across energy — our flexibility revenue and grid services fit their value chain." },
    { name: "High-Tech Gründerfonds", person: "Johannes Weber (Principal)", type: "VC", focus: "Early-stage German startups", approach: "Good for Series A framing. German roots. Mention Utansjö expansion and Nordic→Germany market pipeline." },
    { name: "Supernova Invest", person: "Henrietta Hearth (Senior Inv. Director)", type: "VC", focus: "Growth-stage energy/climate", approach: "Growth-stage: lead with 9x revenue growth + 67% CAGR + >50% IRR." },
    { name: "Inven Capital", person: "Petra Sokolová (Inv. Director)", type: "VC", focus: "CEE energy tech", approach: "On the \"AI-accelerated decarbonisation\" panel at the event. Approach during panel networking." },
    { name: "Vireo Ventures", person: "Felix Krause (Partner)", type: "VC", focus: "Climate tech", approach: "On \"AI data centres and energy\" panel — our exact session. Meet immediately after our pitch." },
    { name: "GET Fund", person: "Isabelle Canu (Partner)", type: "VC", focus: "Climate", approach: "On \"How AI changes investing\" panel. Will be active during event networking." },
    { name: "SevenGen Investment", person: "Thijs Nijland (Partner)", type: "VC", focus: "Climate tech", approach: "Attend his session. Lead with market size ($300B) and IRR story." },
    { name: "Lattis", person: "Sue Yang-Krochmal (Partner)", type: "VC", focus: "General", approach: "On \"AI data centres and energy\" panel — exact fit." },
    { name: "Mobilize AI x Energy", person: "Sudheesh Sureshkumar (Partner)", type: "CVC", focus: "AI + energy", approach: "On \"AI data centres and energy\" panel — pitch the AI stack specifically." },
    { name: "SPRIND", person: "Christian Bogatu (Inv. Director)", type: "German Innovation Agency", focus: "Technology funding", approach: "Government grant angle — mention 650 MW pipeline and national grid security." },
    { name: "Michael Wilshire", person: "Michael Wilshire", type: "Private Investor", focus: "Private", approach: "On \"AI data centres and energy\" panel. Approach 1-on-1." }
  ];

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Event Context: EcoSummit Berlin</h1>
        <div className="flex flex-wrap gap-6 text-slate-400">
          <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-teal-500" /> May 2026</div>
          <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-teal-500" /> Radialsystem, Berlin</div>
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-teal-500" /> ~500 Top EU Energy VCs</div>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <AlertTriangle className="text-amber-500 w-6 h-6" /> The Pitch Rules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pitchRules.map((rule, i) => (
             <div key={i} className="flex gap-4 items-start p-4 bg-[#05080c] rounded-xl border border-slate-800/50">
               <div className="p-2 bg-slate-800 rounded-lg shrink-0 mt-1"><CheckCircle2 className="w-4 h-4 text-teal-400" /></div>
               <div>
                  <h3 className="text-white font-bold mb-1">{rule.title}</h3>
                  <p className="text-slate-400 text-sm">{rule.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </div>

       {/* YouTube Embeds */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <MonitorPlay className="text-rose-500 w-6 h-6" /> Pitch Reference Analysis
        </h2>
        <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl mb-6 text-rose-200 text-sm">
           <strong className="block text-rose-400 mb-1">Key finding: The investment ask goes at the END — not Slide 1.</strong>
           EcoSummit recommends it on slide 1, but ALL 4 actual pitches kept the ask for the final slide. We should follow this pattern. Investors don't decide in the first 20 seconds — they decide after you've built the story.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-rose-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">Dainis Kruze — Aerones</h3>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.youtube.com/embed/Lq_NuTgLudg" title="Dainis Kruze pitches Aerones" className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-slate-400 text-sm flex-1">
              <strong>Why it works:</strong> Opens immediately with hardware functionality. Shows traction early. Completely focused on operational execution.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-rose-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">Nils Aldag — Sunfire</h3>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.youtube.com/embed/UCF_eTUgOtg" title="Nils Aldag pitches Sunfire" className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-slate-400 text-sm flex-1">
              <strong>Why it works:</strong> Masterclass in authoritative tone. He establishes deep market knowledge instantly, making the "Ask" feel like a privilege for the investor.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-rose-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">Daniel Wiegand — Lilium</h3>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.youtube.com/embed/htaeARwse1w" title="Daniel Wiegand Lilium Aviation" className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-slate-400 text-sm flex-1">
              <strong>Why it works:</strong> Highly ambitious structural problem solving. Excellent example of how to present a hardware-heavy CAPEX intensive business with confidence.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-rose-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">Christoph Sollich — The Pitch Doctor</h3>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.youtube.com/embed/ni0hVJlOrlk" title="The Pitch Doctor Christoph Sollich pitches Berlin" className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-slate-400 text-sm flex-1">
              <strong>Why it works:</strong> Great for understanding the meta-game of the EcoSummit stage. He dissects what the audience expects and what they immediately tune out.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
         <h2 className="text-xl font-bold text-blue-400 mb-4">Pre-Meeting Strategy (Strategic & CVC)</h2>
         <p className="text-slate-300 text-sm leading-relaxed mb-4">Targeting E.ON / RWE / Vattenfall (Corporate VC arms), Statkraft Ventures, and National Grid Partners.</p>
         <ul className="text-slate-300 text-sm list-disc ml-5 space-y-2">
           <li><strong>Do not send the full deck.</strong> Send the one-pager with the 14 MW / $6M revenue traction numbers.</li>
           <li><strong>Ask for 15 minutes.</strong> "We have a 14 MW live asset executing sub-second dispatch. I'll show you the live dashboard."</li>
           <li>Angle for utilities: "We have the operating platform you need; you have the balance sheet we need to scale from 14 MW to 150 MW."</li>
         </ul>
      </div>

      {/* Target Investors */}
      <div className="bg-[#05080c] p-8 border border-slate-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-blue-500 w-6 h-6" /> Key Investor Targets Present
        </h2>
        <div className="space-y-4">
          {targetInvestors.map((inv, i) => (
             <div key={i} className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl gap-4">
               <div className="lg:w-1/3">
                 <strong className="text-white text-lg block mb-1">{inv.name}</strong>
                 <div className="text-slate-400 text-sm mb-1">{inv.person}</div>
                 <div className="text-teal-500 text-xs font-bold tracking-widest uppercase">{inv.type}</div>
               </div>
               <div className="lg:w-1/3 text-slate-300 text-sm">
                 <div className="font-bold text-white mb-1">Focus:</div>
                 {inv.focus}
               </div>
               <div className="lg:w-1/3 text-slate-300 text-sm">
                 <div className="font-bold text-white mb-1">Approach Angle:</div>
                 {inv.approach}
               </div>
             </div>
          ))}
        </div>
      </div>

    </div>
  );
}
