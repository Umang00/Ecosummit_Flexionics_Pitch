import { Target, AlertCircle, ShieldAlert, Crosshair, MessageSquare, ListVideo, Zap, Volume2, LogOut } from 'lucide-react';

export function PitchStrategy() {
  const pitchFlow = [
    { slide: 1, time: "0–20s", title: "Cover + Bold Hook", desc: "\"Data centres & flexibility\" + ECOSUMMIT.AI logo + opening line" },
    { slide: 2, time: "20–55s", title: "The Problem", desc: "Curtailment & grid instability — 42% intermittent by 2030, BESS failing." },
    { slide: 3, time: "55s–1:55", title: "Our 3 Solutions", desc: "FlexBox + FaaS + Wind Farm Partnerships" },
    { slide: 4, time: "1:55–2:50", title: "Traction & Proof", desc: "229.5 GWh, 11,245 activations, 9x growth, $6M+, 80.9% participation" },
    { slide: 5, time: "2:50–3:45", title: "Unit Economics & AI", desc: "$350k/MW → $310k GP/yr, 18-month payback, AI automation stack" },
    { slide: 6, time: "3:45–4:20", title: "Vision & Roadmap", desc: "2026: FaaS + wind pilot + BESS; 2027: HFT + global; 14→44→150 MW" },
    { slide: 7, time: "4:20–4:40", title: "Team", desc: "Bipin / Amy / Giridhar / CTO (Varun, no name visible)" },
    { slide: 8, time: "4:40–5:00", title: "The Ask + Exit", desc: "$10.5M Series A. IRR >50%. Exit: trade sale / strategic acquirer. (MUST BE LAST SLIDE)" }
  ];

  const objections = [
    { obj: "Too asset-heavy", ans: "CapEx is $350k/MW vs $800k–$2M for BESS. Fast 18-month payback." },
    { obj: "What if compute revenue falls?", ans: "Flexibility revenue already exceeds compute: 57%/43% split. Grid pays even when compute is idle." },
    { obj: "Too small", ans: "14 MW is proof. $10.5M turns it into 44 MW. 44 MW validates expansion to 150 MW at current sites alone." },
    { obj: "Need more flexibility revenue share", ans: "mFRR-down launched May 2025. Flexibility revenue 9x in 5 months ($56k→$487k). On track. We were the only activated asset in ~2 GWh of mFRR." },
    { obj: "Needs more customers / offtake", ans: "We sell to SVK (Swedish National Grid). They pay us continuously. No customer churn. FaaS multiplies this to third-party asset owners." }
  ];

  const exitStrategy = [
    { type: "Strategic Acquisition", desc: "Large energy utilities (RWE, E.ON, Vattenfall, Statkraft) seeking to build flexibility assets without building from scratch. FEV (from RWE/E.ON) is literally in the audience." },
    { type: "IPO", desc: "As ancillary markets reach $300B by 2030, a listed flexibility platform has strong comparable multiples." },
    { type: "Infrastructure Fund Buyout", desc: "The asset-light + recurring revenue model is ideal for infrastructure funds." },
    { type: "Colocation Expansion", desc: "Grows the balance sheet with long-term contracted revenue — de-risks an IPO or sale" }
  ];

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Pitch Strategy</h1>
        <p className="text-xl text-slate-400 font-light border-l-4 border-teal-500 pl-4">
          EcoSummit Berlin 2026 (Updated 2026-03-18)
        </p>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6" /> The Core Strategic Insight
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          The audience at EcoSummit is NOT a general audience. They are smart green VC investors, CVCs, and operators who have seen dozens of pitches this week. They will immediately skip past any generic "climate change is a problem" intro.
        </p>
        <p className="text-white font-medium mb-4">The pitch must land on three things in 5 minutes:</p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-start text-emerald-100 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <span className="text-emerald-500 font-black">1.</span> We already work. Not a theory — 14 MW live, $6M+ revenue, 229.5 GWh capacity markets, 11,245 activations.
          </li>
          <li className="flex gap-3 items-start text-emerald-100 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <span className="text-emerald-500 font-black">2.</span> We beat batteries on every axis. The BESS pitch follows ours at 12:25.
          </li>
          <li className="flex gap-3 items-start text-emerald-100 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <span className="text-emerald-500 font-black">3.</span> We need $10.5M to go from 14 MW to 44 MW, and here's the exact ROI.
          </li>
        </ul>
      </div>

      {/* Audience Profile & Messaging */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#05080c] border border-slate-800 rounded-2xl p-8 shadow-xl">
           <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Target className="w-5 h-5 text-teal-400" /> Audience Profile Calibration</h2>
           <div className="space-y-4">
             <div>
               <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2">Who will be in the room at 12:20:</h3>
               <ul className="list-disc ml-4 text-slate-300 text-sm space-y-2">
                 <li><strong className="text-white">Julia Padberg (SET Ventures)</strong> — the moderator of our session. She invested in Instagrid, Hydrogrid — asset-light digital energy. Perfect fit.</li>
                 <li><strong className="text-white">Energy CVCs</strong> (FEV from RWE/E.ON, Encevo, InnoEnergy) — looking for proven tech.</li>
                 <li><strong className="text-white">Independent VCs</strong> (Vireo, SevenGen, Supernova) — looking for strong unit economics.</li>
                 <li><strong className="text-white">Panel speakers</strong> for the following "AI data centres and energy" session.</li>
               </ul>
             </div>
             <div className="pt-4 border-t border-slate-800">
               <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2">What they care about:</h3>
               <ul className="list-disc ml-4 text-slate-300 text-sm space-y-1">
                 <li>Proven revenue, not projections</li>
                 <li>Defensible technology (IP moat)</li>
                 <li>Fast payback (18 months)</li>
                 <li>Clear path to exit</li>
               </ul>
             </div>
           </div>
        </div>

        <div className="bg-[#05080c] border border-blue-500/20 shadow-[inset_0_0_40px_rgba(59,130,246,0.02)] rounded-2xl p-8">
           <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ListVideo className="text-blue-400 w-5 h-5" /> Key Messaging Framework</h2>
           <div className="space-y-6">
             <div>
               <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Opening Hook (First 30s)</h3>
               <p className="text-slate-400 text-xs mb-2 italic">Don't open with climate change. Open with the problem investors are already seeing: curtailment, grid instability, and BESS failing.</p>
               <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800 text-slate-300 text-sm italic">
                 "Gigawatts of renewable power get curtailed every year — not because it's wrong, but because the grid can't absorb it fast enough. Batteries help, but they're slow, expensive, and run out after 4 hours. We've built something better. An unlimited, zero-chemical, sub-second response asset — and it's already running."
               </div>
             </div>
             <div>
               <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">The Investment Framing</h3>
               <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800 text-slate-300 text-sm italic">
                 "Your equity lets us sprint. One raise, cheap project finance debt, and compound valuations without repeat dilution. Raise once, unlock 150 MW."
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
               <Volume2 className="w-6 h-6" /> The 3 Closing Ideas (Bipin's Script)
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
               These are powerful and should be adapted into slide/verbal content:
            </p>
            <ul className="space-y-4">
              <li className="bg-[#0a0f16] p-5 rounded-xl border border-amber-500/20">
                <span className="text-amber-500 font-black block mb-1">1. Our Proof</span>
                <p className="text-white text-sm font-medium italic">"We delivered 229.5 GWh to grid capacity markets. 11,245 times SVK called — we answered. The model works."</p>
              </li>
              <li className="bg-[#0a0f16] p-5 rounded-xl border border-amber-500/20">
                <span className="text-amber-500 font-black block mb-1">2. Our Tempo</span>
                <p className="text-white text-sm font-medium italic">"We're cash positive and could grow organically to a $100–$500M business. Your equity lets us sprint."</p>
              </li>
              <li className="bg-[#0a0f16] p-5 rounded-xl border border-amber-500/20">
                <span className="text-amber-500 font-black block mb-1">3. Our World</span>
                <p className="text-white text-sm font-medium italic">"By 2030 someone must be the infinitely dispatchable load that ties renewables together. That's Flexionics."</p>
              </li>
            </ul>
         </div>

         {/* Crypto Note */}
         <div className="bg-[#05080c] border border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <MessageSquare className="text-slate-400 w-6 h-6" /> Dealing with the "Crypto" Question
            </h2>
            <div className="bg-slate-900 border border-slate-800/50 p-5 rounded-xl mb-4 text-sm text-slate-300">
               If an investor asks during Q&A: <i className="text-white">"Wait, isn't this just Bitcoin mining?"</i>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-sm text-slate-400 italic">
               "Bitcoin mining was our zero-to-one substrate. It was the only globally fungible, instantly interruptible compute load available three years ago to prove our grid tech without SLAs. We proved that we could control power at millisecond precision using this workload. Today, that intelligence sits on top of any compute — and as the AI inference market evolves, we are perfectly positioned to sequence inference workloads just like we did with early hashing."
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <ShieldAlert className="text-rose-400 w-6 h-6" /> Common Objections
           </h2>
           <div className="space-y-4">
             {objections.map((ob, i) => (
               <div key={i} className="bg-[#05080c] p-4 rounded-xl border border-slate-800/50">
                 <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1 mt-1">Objection</div>
                 <div className="text-white font-medium mb-3 italic">"{ob.obj}"</div>
                 <div className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-1 pt-3 border-t border-slate-800/50">Pre-emptive Response</div>
                 <div className="text-slate-300 text-sm">{ob.ans}</div>
               </div>
             ))}
           </div>
         </div>

         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Crosshair className="text-teal-400 w-6 h-6" /> Slide Architecture (5 Mins)
            </h2>
            <div className="space-y-0 text-sm border border-slate-800 rounded-xl overflow-hidden">
               <div className="grid grid-cols-12 bg-slate-800/50 text-slate-400 font-bold p-3 text-xs uppercase tracking-widest">
                  <div className="col-span-1">#</div>
                  <div className="col-span-3">Title</div>
                  <div className="col-span-6">Key Element</div>
                  <div className="col-span-2 text-right">Time</div>
               </div>
               {pitchFlow.map((flow, i) => (
                 <div key={i} className={`grid grid-cols-12 p-3 ${i !== pitchFlow.length - 1 ? 'border-b border-slate-800' : ''} bg-[#0a0f16]`}>
                    <div className="col-span-1 text-slate-500 font-bold">{flow.slide}</div>
                    <div className="col-span-3 text-white font-medium">{flow.title}</div>
                    <div className="col-span-6 text-slate-400">{flow.desc}</div>
                    <div className="col-span-2 text-right text-teal-400 font-mono text-xs">{flow.time}</div>
                 </div>
               ))}
               <div className="bg-teal-900/20 p-3 text-teal-300 text-xs text-center italic border-t border-teal-500/20">
                  Note: Ask goes on the LAST SLIDE based on successful EcoSummit pitches (Lilium, Aerones, Sunfire).
               </div>
            </div>
         </div>
      </div>
      
      {/* Exit Strategy & Avoids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-[#05080c] p-8 border border-slate-800 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <LogOut className="text-emerald-400 w-6 h-6" /> Exit Strategy
            </h2>
            <p className="text-slate-400 text-sm mb-6">Required by EcoSummit. Options to mention:</p>
            <ul className="space-y-4">
              {exitStrategy.map((exit, i) => (
                 <li key={i} className="text-sm">
                   <strong className="text-white block mb-1">{`{${i + 1}}`} {exit.type}</strong>
                   <span className="text-slate-400">{exit.desc}</span>
                 </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-sm italic">
              <strong>Preferred messaging:</strong> "Partners include the infrastructure owners of tomorrow — wind farm operators, utility CVCs. Exit paths are clear and multiple."
            </div>
         </div>

         <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-rose-400 mb-6 flex items-center gap-3">
             <AlertCircle className="w-6 h-6" /> What to AVOID
           </h2>
           <ul className="text-slate-300 space-y-3 list-none">
             {[
               "❌ Opening with 'climate change is the biggest challenge...'",
               "❌ Mentioning competitor names (EcoSummit rules)",
               "❌ Any reference to Bitcoin, crypto mining, or blockchain in pitch",
               "❌ Spending >30 seconds on market size",
               "❌ Any video or animation in the PDF",
               "❌ More than 8 slides (time will kill you)",
               "❌ Jargon without explanation (FCR-D, mFRR)",
               "❌ Passive language — be assertive and confident",
               "❌ Proprietary product names without context (Iceberg/Northwatch/Polaris/Compass)"
             ].map((av, i) => (
                <li key={i} className="text-sm border-b border-rose-500/10 pb-2 last:border-0">{av}</li>
             ))}
           </ul>
         </div>
      </div>
      
    </div>
  );
}
