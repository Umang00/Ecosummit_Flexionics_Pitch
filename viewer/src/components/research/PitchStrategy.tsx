import { Target, AlertCircle, ShieldAlert, Crosshair, MessageSquare, ListVideo, Zap, Volume2 } from 'lucide-react';

export function PitchStrategy() {
  const pitchFlow = [
    { slide: 1, time: "0–20s", title: "Cover + Bold Hook", desc: "\"Data centres & flexibility\" + Logo" },
    { slide: 2, time: "20–55s", title: "The Problem", desc: "Curtailment & BESS failing. No climate lectures." },
    { slide: 3, time: "55s–1:55", title: "Our 3 Solutions", desc: "FlexBox / FaaS / Wind Partnerships" },
    { slide: 4, time: "1:55–2:50", title: "Traction & Proof", desc: "229.5 GWh, 11k+ activations, 9x growth" },
    { slide: 5, time: "2:50–3:45", title: "Unit Economics & AI", desc: "18mo payback + AI stack replacing humans" },
    { slide: 6, time: "3:45–4:20", title: "Vision & Roadmap", desc: "14→44→150MW. FaaS & Wind Pilots." },
    { slide: 7, time: "4:20–4:40", title: "Team", desc: "The proven operators executing this." },
    { slide: 8, time: "4:40–5:00", title: "The Ask + Exit", desc: "$10.5M Series A. (MUST BE LAST SLIDE)" }
  ];

  const objections = [
    { obj: "Too asset-heavy", ans: "CapEx is $350k/MW vs $2M for BESS. Fast 18-month payback." },
    { obj: "What if compute revenue falls?", ans: "Flexibility revenue is 57%. We get paid even when compute is idle." },
    { obj: "You're too small", ans: "$10.5M takes us to 44MW, proving scalability for the 150MW pipeline." },
    { obj: "Needs more customers", ans: "SVK (Swedish National Grid) pays us continuously. Zero churn. FaaS expands this." }
  ];

  const narrativeArc = [
    { phase: "The Hook", detail: "A bold, slightly counter-intuitive thesis combining the two biggest megatrends: Energy Transition + High-Performance Compute." },
    { phase: "The Proof", detail: "Immediate validation. We are already doing this at scale (14MW). Real numbers." },
    { phase: "The Scale", detail: "The transition from an owner-operator of sites to an AI Platform enabling others." }
  ];

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Pitch Strategy</h1>
        <p className="text-xl text-slate-400 font-light border-l-4 border-teal-500 pl-4">
          How to win the smart green VC audience in 5 minutes.
        </p>
      </div>

      {/* Audience & Tone */}
      <div className="flex flex-col md:flex-row gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex-1">
           <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-teal-400" /> The Audience</h3>
           <p className="text-slate-400 text-sm leading-relaxed">Smart green VCs, CVCs, Utilities, Project Finance. Highly technical but severely time-constrained. Zero patience for general "climate change" platitudes. Looking for massive scalability and proven ROI.</p>
        </div>
        <div className="w-px bg-slate-800 hidden md:block"></div>
        <div className="flex-1">
           <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Volume2 className="w-5 h-5 text-amber-400" /> Bipin's Tone</h3>
           <p className="text-slate-400 text-sm leading-relaxed">Authoritative, data-driven, experienced. Institutional banking background applied to volatile energy markets. Not a "tech bro" — a serious financial and infrastructure operator.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Core Insight */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6" /> The Core Insight
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            The EcoSummit audience sees dozens of pitches. Skip the generic intro. They want to know three things instantly:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start text-white font-medium bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="text-emerald-500 font-black">1.</span> We already work (14MW live, $6M+ rev)
            </li>
            <li className="flex gap-3 items-start text-white font-medium bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="text-emerald-500 font-black">2.</span> We easily beat batteries on CapEx, duration, degradation
            </li>
            <li className="flex gap-3 items-start text-white font-medium bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="text-emerald-500 font-black">3.</span> We need $10.5M, here is the fast ROI (18 months)
            </li>
          </ul>
        </div>

        {/* Narrative Arc */}
        <div className="bg-[#05080c] border border-blue-500/20 shadow-[inset_0_0_40px_rgba(59,130,246,0.02)] rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <ListVideo className="text-blue-400 w-6 h-6" /> Narrative Arc
           </h2>
           <div className="space-y-6">
             {narrativeArc.map((arc, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-blue-500/30">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#05080c]" />
                  <h3 className="text-blue-400 font-bold mb-1 uppercase tracking-widest text-xs">{arc.phase}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{arc.detail}</p>
                </div>
             ))}
           </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Deep Dive: Crypto Question */}
         <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
               <MessageSquare className="w-6 h-6" /> Dealing with the "Crypto" Question
            </h2>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
               If an investor asks during Q&A: <i className="text-amber-200">"Wait, isn't this just Bitcoin mining?"</i>
            </p>
            <div className="bg-[#0a0f16] p-5 rounded-xl border border-amber-500/10">
               <p className="text-white text-sm font-medium italic leading-relaxed">
                  "Bitcoin mining was our zero-to-one substrate. It was the only globally fungible, instantly interruptible compute load available three years ago to prove our grid tech without SLAs. We proved that we could control power at millisecond precision using this workload. Today, that intelligence sits on top of any compute — and as the AI inference market evolves, we are perfectly positioned to sequence inference workloads just like we did with early hashing."
               </p>
            </div>
         </div>

         {/* Objections */}
         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <ShieldAlert className="text-rose-400 w-6 h-6" /> Pre-emptive Answers
           </h2>
           <div className="space-y-4">
             {objections.map((ob, i) => (
               <div key={i} className="bg-[#05080c] p-4 rounded-xl border border-slate-800/50">
                 <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1 mt-1">Objection</div>
                 <div className="text-white font-medium mb-3 italic">"{ob.obj}"</div>
                 <div className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-1 pt-3 border-t border-slate-800/50">Our Rebuttal</div>
                 <div className="text-slate-300 text-sm">{ob.ans}</div>
               </div>
             ))}
           </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Slide Flow Timeline */}
         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Crosshair className="text-teal-400 w-6 h-6" /> Recommended 5-Minute Flow
           </h2>
           <div className="flex flex-col gap-4">
             {pitchFlow.map((flow, i) => (
               <div key={i} className="flex flex-col xl:flex-row xl:items-center gap-4 p-4 bg-[#0a0f16] border border-slate-800 rounded-xl hover:border-teal-500/30 transition-colors">
                 <div className="flex gap-4 items-center">
                    <span className="text-2xl font-black text-slate-700 w-8">{flow.slide}</span>
                    <span className="bg-slate-800 text-slate-300 text-xs font-bold py-1 px-3 rounded-full shrink-0">{flow.time}</span>
                 </div>
                 <div className="flex-1">
                   <h3 className="text-white font-bold text-sm leading-tight">{flow.title}</h3>
                   <p className="text-slate-400 text-xs mt-1">{flow.desc}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Closings and Avoids */}
         <div className="flex flex-col gap-8">
            <div className="bg-[#05080c] p-6 border border-slate-800 rounded-2xl">
               <h2 className="text-xl font-bold text-teal-400 mb-4">The 3 Closing Ideas</h2>
               <ul className="space-y-4">
                  <li className="text-slate-300 text-sm">
                     <span className="font-bold text-white block mb-1">The Infrastructure Play:</span>
                     "Data centers are the new power plants. We are the intelligence that makes them run."
                  </li>
                  <li className="text-slate-300 text-sm">
                     <span className="font-bold text-white block mb-1">The Margin Play:</span>
                     "We earn twice on the same watt. Nobody else in the energy transition is doing this."
                  </li>
                  <li className="text-slate-300 text-sm">
                     <span className="font-bold text-white block mb-1">The Growth Play:</span>
                     "From 14 MW to 150 MW. We have the software, we have the hardware, we just need the capital."
                  </li>
               </ul>
            </div>

            <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-6 flex gap-4">
              <AlertCircle className="w-8 h-8 text-rose-500 shrink-0" />
              <div>
                <h3 className="text-rose-400 font-bold mb-2">What to AVOID</h3>
                <ul className="text-slate-300 text-sm space-y-2 list-disc ml-4">
                  <li>Opening with "climate change is the biggest challenge..."</li>
                  <li>Mentioning competitor names (EcoSummit rule)</li>
                  <li>Any reference to Bitcoin/crypto in presentation</li>
                  <li>Spending &gt;30s on market size (they know it)</li>
                  <li>Putting the Ask on Slide 1</li>
                </ul>
              </div>
            </div>
         </div>
      </div>
      
    </div>
  );
}
