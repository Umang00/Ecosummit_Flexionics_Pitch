import { Shield, Zap, Wind, Battery, Network, Globe, Cpu, Server } from 'lucide-react';

export interface SlideData {
  id: string;
  title: string;
  hideTitle?: boolean;
  content: React.ReactNode;
  speakerNotes: string;
}

export const slides: SlideData[] = [
  {
    id: 'cover',
    title: 'Cover',
    hideTitle: true,
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
        <img src="/wind_farm_datacentre_1773836471350.png" alt="Nordic Data Centre" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080c] via-[#05080c]/80 to-transparent"></div>
        <div className="relative z-10 w-full max-w-5xl px-12 py-8 flex flex-col items-start gap-6">
          <div className="flex items-center gap-4 mb-8">
             <img src="/logo-white.svg" alt="Flexionics" className="h-10" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
            FLEXIONICS
          </h1>
          <p className="text-3xl font-light text-teal-400 mt-2">
            Enabling the Energy Transition — Bit by Bit
          </p>
          <div className="w-24 h-1 bg-teal-500 rounded-full mt-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mt-6 leading-relaxed">
            Converting compute infrastructure into prequalified, sub-second grid assets.
          </p>
        </div>
      </div>
    ),
    speakerNotes: "Good afternoon. I'm Bipin Patel, CEO and Founder of Flexionics.\n\nFlexionics exists at the intersection of computation and grid infrastructure. We transform flexible assets — data centres, compute clusters — into active participants in the energy market. Our technology anticipates, adapts, and optimises in real time.\n\nThe energy transition demands more than ambition. It demands flexible intelligence. That's what we build — bit by bit.\n\n*(Pause. Let the tagline land. Walk to the centre of the stage.)*"
  },
  {
    id: 'problem',
    title: 'The Problem',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-16 relative">
        <div className="absolute top-12 right-16">
          <div className="inline-flex flex-col items-end">
            <span className="text-5xl font-bold text-teal-400">42%</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Intermittent Energy by 2030</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-teal-500 mb-4 tracking-widest uppercase">The Landscape</h2>
        <h1 className="text-5xl font-bold text-white mb-16 tracking-tight">Three Problems. One Response.</h1>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-8 h-8 text-amber-400" />, title: "The Grid Is Unstable", subtitle: "Who Feels It: Grid Operators & TSOs", desc: "Renewables are outpacing balancing infrastructure. Frequency deviations demand millisecond response. Today's assets are too slow and too expensive or not performant." },
            { icon: <Wind className="w-8 h-8 text-teal-400" />, title: "Wind Industry Is Being Strained", subtitle: "Who Feels It: Wind Farm Operators", desc: "Curtailment orders, negative prices, and 15-min penalties are destroying wind farm returns. Revenue lost not because the wind stopped — but because the grid can't absorb it." },
            { icon: <Battery className="w-8 h-8 text-blue-400" />, title: "Batteries Solve Only Part of the Problem", subtitle: "Who Feels It: Asset Owners & Investors", desc: "BESS matters, but lithium-ion grid batteries max out at ~4 hours of discharge. Add capacity fade over charge cycles and high CapEx leave a gap. Compute-based flexibility offers near-zero marginal cost." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-teal-500/50 transition-colors">
              <div className="p-3 bg-slate-900 rounded-xl w-fit mb-2">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
              <span className="text-sm font-bold text-teal-500 tracking-wider uppercase">{item.subtitle}</span>
              <p className="text-slate-400 leading-relaxed mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: "Three problems. One response.\n\nFirst — the grid itself. Renewables are being added faster than the grid can handle them. Frequency deviations are happening in milliseconds... \n\nSecond — wind farms are being squeezed. Curtailment orders. Negative prices... \n\nThird — battery storage is real, but it is not the complete answer. Max out at ~4 hours of discharge. High capital cost... \n\nThree problems. Flexionics solves all three with one platform."
  },
  {
    id: 'solutions',
    title: 'Our 3 Solutions',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-16 relative">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Three ways we create value<br/><span className="text-teal-400">from other peoples assets.</span></h1>
        
        <div className="grid grid-cols-1 gap-6 mt-10">
          {[
            { icon: <Server className="w-6 h-6" />, title: "Solution 1: Flexibility as a Service (FaaS)", tag: "For data centre and industrial asset owners", desc: "We connect to your asset and operate your grid flexibility — end to end. TSO prequalification, daily bid submission, 24/7 monitoring, compliance reporting. You earn the revenue. We handle everything. Not software. Not an aggregator. A full-stack operator with skin in the game." },
            { icon: <Wind className="w-6 h-6" />, title: "Solution 2: Wind & Solar Farm Partnerships", tag: "For renewable energy operators", desc: "Wind operators in the Nordic region face curtailment losses, imbalance penalties, and negative spot prices. We install compute infrastructure behind their meter. During curtailment, our servers absorb excess generation at near-zero cost. The loss becomes revenue. Zero operational burden on the farm." },
            { icon: <Cpu className="w-6 h-6" />, title: "Solution 3: AI Energy Market Automation", tag: "For operators who want to automate their flexibility operations", desc: "Managing Nordic flexibility markets manually requires a specialist quant team, months of TSO setup, and daily bid windows. Our AI automation platform replaces the trading desk, the reporting team, and the compliance analyst — automatically submitting bids, generating TSO reports, and producing audit evidence for every activation." }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r flex gap-6 from-slate-800/80 to-[#0a0f16] border border-slate-700 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 shadow-xl items-start">
              <div className="w-16 h-16 shrink-0 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">{item.icon}</div>
              <div>
                 <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{item.tag}</p>
                 <p className="text-slate-300 leading-relaxed text-sm pr-12">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-16 text-slate-500 font-medium tracking-wide">All three powered by our proprietary AI-enabled platform.</div>
      </div>
    ),
    speakerNotes: "We have three solutions — all built on the same AI-enabled platform.\n\nFirst: Flexibility as a Service. Any data centre or industrial load can connect to our platform... \n\nSecond: Wind and solar farm partnerships. We install compute infrastructure at the farm... \n\nThird: AI Energy Market Automation. For operators who want the intelligence without the integration..."
  },
  {
    id: 'proof',
    title: 'Proof: We run this ourselves first',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col relative overflow-hidden">
        <img src="/tech-hero.png" alt="Proof" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 flex flex-col h-full justify-center px-16">
          <h2 className="text-2xl font-bold text-teal-500 mb-4 tracking-widest uppercase">The Proof</h2>
          <h1 className="text-5xl font-bold text-white mb-8 tracking-tight">Before we offered it to others —<br/>we built it on ourselves.</h1>
          <p className="text-slate-300 text-lg mb-8 max-w-3xl leading-relaxed">Flexionics operates two hybrid data centre sites in Sweden, running every one of our three solutions on our own infrastructure:</p>
          
          <div className="grid grid-cols-2 gap-8 mb-12 max-w-4xl">
            <div className="bg-[#05080c]/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Boden, SE1</h3>
                <p className="text-slate-400 text-sm mt-1">FCR-D, mFRR, aFRR</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-teal-400">12 MW</span>
                <div className="flex items-center gap-2 mt-1 justify-end text-emerald-400 text-sm font-bold tracking-wide">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> LIVE
                </div>
              </div>
            </div>
            <div className="bg-[#05080c]/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Utansjö, SE1</h3>
                <p className="text-slate-400 text-sm mt-1">mFRR, FFR</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-teal-400">2 MW</span>
                <div className="flex items-center gap-2 mt-1 justify-end text-emerald-400 text-sm font-bold tracking-wide">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> LIVE
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              "Our own On-Site Controller dispatches sub-second response",
              "Our own Cloud Fleet Manager manages daily bids and audit trails",
              "Our own AI Operations Platform runs bid submission automatically each morning",
              "Our own AI Health Monitor provides 24/7 reliability monitoring"
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-4 text-slate-300 text-lg">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                  {item}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 italic mt-8 text-sm max-w-2xl text-teal-200">The point: Every solution we offer to others — we use on our own sites. The platform wasn't built for a customer. It was built from necessity. And it works.</p>
        </div>
      </div>
    ),
    speakerNotes: "Everything I just described... we run all of it on our own sites first.\n\nBoden, twelve megawatts. Utansjö, two megawatts. Both live, both generating revenue today.\n\nOur own edge controllers manage the dispatch. Our own AI platform submits the daily bids. Our own monitoring system catches problems before they become compliance failures. We are not PowerPoint operators. We have been in the field for three years."
  },
  {
    id: 'traction',
    title: 'Traction: The Numbers',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-16">
         <h1 className="text-5xl font-bold text-center text-white mb-12 tracking-tight">Last 10 months. <span className="text-teal-400">Real activations. Real revenue.</span></h1>
         
         <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {[
              { label: "Total Revenue", val: ">$6M" },
              { label: "Revenue Growth", val: "9× in 5 months" },
              { label: "Grid Capacity Committed", val: "229.5 GWh" },
              { label: "Real Grid Deliveries", val: "26.6 GWh" },
              { label: "mFRR Activations (SE1)", val: "11,245" },
              { label: "Peak Monthly Ancillary Revenue", val: "$712k", sub: "(June 2025)" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center flex flex-col items-center justify-center">
                <span className="text-[#38bdf8] text-5xl font-black mb-3">{stat.val}</span>
                <span className="text-slate-400 font-medium uppercase tracking-widest text-xs leading-relaxed">{stat.label}</span>
                {stat.sub && <span className="text-slate-600 text-xs mt-1">{stat.sub}</span>}
              </div>
            ))}
         </div>
         
         <div className="max-w-4xl mx-auto w-full mt-10 grid grid-cols-2 gap-4">
            <div className="bg-[#0a0f16] border border-slate-700/50 p-4 rounded-lg text-slate-300 text-sm">
              <ul className="list-disc ml-4 space-y-2">
                 <li>80.9% peak participation rate in SE1 during high-demand periods</li>
                 <li>In ~2 GWh of events: Flexionics was the <strong>only activated asset</strong> in SE1</li>
              </ul>
            </div>
            <div className="bg-[#0a0f16] border border-slate-700/50 p-4 rounded-lg text-slate-300 text-sm">
              <ul className="list-disc ml-4 space-y-2">
                 <li>Revenue split: 43% compute / <strong>57% grid flexibility</strong> — grid is primary</li>
                 <li>Ancillary services exceeded compute revenue in most months</li>
              </ul>
            </div>
         </div>
      </div>
    ),
    speakerNotes: "Ten months of numbers. Not estimates. Not projections. These are cleared, settled, audited revenue events.\n\nOver six million dollars in total revenue. Nine times growth in five months. Two hundred and twenty-nine and a half gigawatt-hours committed.\n\nEleven thousand, two hundred and forty-five times the Swedish national grid called us. Every single time, we answered.\n\nAnd today — fifty-seven percent of our revenue comes from the grid itself."
  },
  {
    id: 'business_model',
    title: 'Business Model',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-16 relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">Business Model</h2>
        <h1 className="text-5xl font-bold text-white tracking-tight mb-8">We earn twice on every asset. <br/><span className="text-slate-400">And we're opening that to others.</span></h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Current Revenue — Own Sites</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Capacity Payment (SVK)</span> <span className="text-xs mt-1">Monthly — just for being available</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Energy Payment</span> <span className="text-xs mt-1">Each time the TSO activates us</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Compute Revenue (Digital workloads)</span> <span className="text-xs mt-1">Continuously when not dispatched</span></div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Upcoming Client Revenue (2026)</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex flex-col"><span className="text-teal-400 font-bold">FaaS Service Fee</span> <span className="text-xs mt-1">Data centre / industrial operators. Rev share or monthly retainer.</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Wind Farm Partnership</span> <span className="text-xs mt-1">Wind / solar operators. Rev share from flexibility income.</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">AI Automation Licensing</span> <span className="text-xs mt-1">Flexibility operators globally. SaaS / API access fees.</span></div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0f16] border border-slate-800 rounded-xl p-4 mb-4 text-center">
           <span className="italic text-slate-400 text-sm">"The platform business multiplies our revenue without proportional CapEx. One team, one platform, many assets."</span>
        </div>

        <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl p-6 flex items-center justify-between">
          <div className="text-center">
             <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Install Cost</span>
             <span className="text-white font-bold text-xl">~$350k/MW</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Annual Gross Profit</span>
             <span className="text-teal-400 font-bold text-xl">~$310k/MW</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Payback</span>
             <span className="text-white font-bold text-xl">~18 months</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">IRR (Phase 1)</span>
             <span className="text-emerald-400 font-bold text-xl">&gt;50%</span>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "Today our business model is straightforward: we earn a capacity payment every month just for being available, and an energy payment every time the grid calls us. On the same hardware, we run compute workloads continuously. Two revenue streams, one asset.\n\nBut this is now becoming a platform business... We are now onboarding clients. Each new client adds revenue without proportional capital expenditure. The unit economics on own sites already show the picture: three hundred and fifty thousand dollars installed. Three hundred and ten thousand in gross profit per megawatt, per year. Eighteen-month payback."
  },
  {
    id: 'tech_stack',
    title: 'Technology Stack',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-16 relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Engine</h2>
        <h1 className="text-5xl font-bold text-white tracking-tight mb-2">What Powers Our Operations</h1>
        <p className="text-slate-400 text-xl font-light mb-12">Four integrated technology layers, built entirely in-house.</p>
        
        <div className="grid grid-cols-4 gap-4 items-stretch mb-8">
          {[
            { title: "On-Site Controller", icon: <Cpu />, tasks: "Sub-200ms dispatch, <0.7s grid response. Local telemetry every 10 seconds. Stays operational even during connectivity loss. No SLA constraints.", hl: "Activation execution, power ramp, setpoint tracking" },
            { title: "Cloud Fleet Manager", icon: <Globe />, tasks: "Central oversight across all sites simultaneously. Bid management, win-rate analytics, audit trails, TSO-compatible evidence exports for every activation.", hl: "Fleet visibility, reporting, market interface" },
            { title: "AI Automation Engine", icon: <Network />, tasks: "Natural language querying. Automated trading desk — daily bids submitted via our trading software platform to our BSP partner each morning. Compliance output auto-generated.", hl: "Bid strategy, TSO reporting, market intelligence" },
            { title: "Predictive Health Monitor", icon: <Shield />, tasks: "24/7 AI-driven monitoring. Early-warning drift detection before it becomes a compliance issue. Automated alerting. Audit-ready event timelines.", hl: "Asset health, reliability, regulatory readiness" }
          ].map((item, i) => (
             <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex flex-col h-full relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
               <div className="text-teal-400 mb-4">{item.icon}</div>
               <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
               <p className="text-slate-400 text-xs flex-1 leading-relaxed mb-4">{item.tasks}</p>
               <div className="pt-3 border-t border-slate-800">
                 <p className="text-[10px] font-bold text-slate-500 uppercase leading-snug">Handles: <span className="text-slate-300">{item.hl}</span></p>
               </div>
             </div>
          ))}
        </div>
        
        <div className="max-w-4xl border-l-4 border-teal-500 pl-6 py-2">
          <p className="text-xl font-light text-slate-300 italic">"No human trader can respond in 700 milliseconds. No human team could audit 11,245 activations. This isn't AI as a feature. This is AI as the operating system."</p>
        </div>
      </div>
    ),
    speakerNotes: "Four technology layers. All built in-house. None licensed from a vendor.\n\nThe site controller executes in under one second — before any human could react. The cloud layer manages our entire fleet from a single dashboard. The AI automation engine generates and submits our market bids every morning automatically — no human touches it. And the health monitor watches every asset twenty-four hours a day, detecting degradation before it becomes a compliance failure.\n\nIn eleven thousand activations — zero compliance failures. Zero missed submissions.\n\nThis isn't a product we're selling as a feature. It is the reason our operation can scale without proportional headcount."
  },
  {
    id: 'roadmap_2026',
    title: '2026 Roadmap',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-16 relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">2026: Scale Distribution</h2>
        <h1 className="text-5xl font-bold text-white tracking-tight mb-2">From 14 MW to 44 MW.</h1>
        <p className="text-slate-400 text-xl font-light mb-12">And opening the platform to the world.</p>
        <p className="text-teal-400 font-bold mb-6">Four programmatic scale initiatives:</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#05080c] border border-slate-800 p-6 rounded-xl flex gap-4">
            <span className="text-teal-500 font-black text-2xl">01</span>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Flexibility as a Service — Global Launch</h3>
              <p className="text-sm text-slate-400">Launch FaaS for data centre operators outside our own sites. First clients onboarding. Revenue share model live. The platform opens.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-6 rounded-xl flex gap-4">
            <span className="text-teal-500 font-black text-2xl">02</span>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Wind Farm Pilot — Imbalance Management</h3>
              <p className="text-sm text-slate-400">Deploy compute infrastructure at a wind site in the Nordic region. Absorb curtailment. Eliminate imbalance penalties. First proof of the wind partnership model outside our own grid connection.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-6 rounded-xl flex gap-4">
            <span className="text-teal-500 font-black text-2xl">03</span>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">AI Market Automation — External Launch</h3>
              <p className="text-sm text-slate-400">Open the AI Automation Engine to external flexibility operators. Enable any BRP or BSP to automate their bid submission, compliance reporting, and market analytics through our platform. First paying clients onboarded.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-6 rounded-xl flex gap-4">
            <span className="text-teal-500 font-black text-2xl">04</span>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Integrated BESS — Hybrid Systems</h3>
              <p className="text-sm text-slate-400">Incorporate battery energy storage alongside compute. Maximise speed of response and unlock additional market products simultaneously (e.g., FCR-N + mFRR simultaneously at higher volumes).</p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-teal-900/10 border border-teal-500/20 p-4 rounded-xl inline-block text-white text-lg">
           Capacity target: 14 MW → <strong className="text-teal-400 font-bold">44 MW</strong> by end of 2026 at Utansjö
        </div>
      </div>
    ),
    speakerNotes: "In 2026, four initiatives running in parallel.\n\nOne: FaaS goes live for external clients.\nTwo: We deploy our first wind farm pilot in the Nordic region.\nThree: We open the AI automation platform to external operators.\nFour: We integrate battery storage into the hybrid system.\n\nAnd through all of this: Utansjö expands. Fourteen megawatts becomes forty-four. Three times the current capacity."
  },
  {
    id: 'roadmap_2027',
    title: '2027 and Beyond',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-gradient-to-t flex flex-col justify-center px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-[#0a0f16]"></div>
        <div className="relative z-10 w-full">
           <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">2027+: Compounding</h2>
           <h1 className="text-5xl font-bold text-white tracking-tight mb-12">Compound Capabilities</h1>

           <div className="flex gap-4 justify-between mb-16 items-stretch">
             {[
               { t: "Vallion Flow HFT Integration", d: "Integrate a high-frequency trading-grade stack for energy arbitrage. Move from pure reserve markets to systematic energy trading." },
               { t: "Diverse Physical Assets", d: "Onboard solar farms, EV fleets, residential battery systems, industrial loads. The platform becomes asset-class agnostic." },
               { t: "Market-Wide Systematic Trading", d: "Extend products to homes and commercial buildings — VPP (virtual power plant) model at scale. Systematic trading across residential and commercial flexibility." },
               { t: "Global Rollout", d: "Expand to markets where renewable intermittency is structural: Germany, Norway, Japan. Full international flexibility management." }
             ].map((item, i) => (
                <div key={i} className="flex-1 bg-slate-900/80 border border-slate-800 p-5 rounded-xl flex flex-col hover:-translate-y-1 transition-transform">
                  <span className="text-teal-500 font-black text-lg mb-2 block">{i + 1}. {item.t}</span>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">{item.d}</p>
                </div>
             ))}
           </div>

           <div className="flex justify-between items-center border-t border-slate-700/50 pt-8 bg-slate-900/30 p-6 rounded-2xl">
              <div><span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Long-term Pipeline</span><span className="text-xl font-bold text-white">650 MW<span className="text-xs text-slate-400 font-light block mt-1">across 9 Nordic wind farms</span></span></div>
              <div><span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Flexibility Enablement</span><span className="text-xl font-bold text-teal-400">1.5 TWh<span className="text-xs text-slate-400 font-light block mt-1">by 2030</span></span></div>
              <div><span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Targeted Revenue CAGR</span><span className="text-xl font-bold text-white">67%<span className="text-xs text-slate-400 font-light block mt-1">2024–2027</span></span></div>
              <div><span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Projected 2027 Revenue</span><span className="text-3xl font-black text-emerald-400">$52.9M</span></div>
           </div>
        </div>
      </div>
    ),
    speakerNotes: "In 2027, we compound.\n\nWe integrate a high-frequency trading stack, moving from reserve markets into systematic energy self-trading. We add solar farms, EV fleets, and battery systems to the platform. We extend to homes and businesses — virtual power plant logic applied at residential scale. And we roll this out globally. \n\nThe long-range picture: six hundred and fifty megawatts in our pipeline. One point five terawatt-hours of flexibility by 2030. Fifty-two point nine million dollars in revenue by 2027."
  },
  {
    id: 'team',
    title: 'Team',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-16 relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Operators</h2>
        <h1 className="text-5xl font-bold text-white tracking-tight mb-12">Who executes this.</h1>

        <div className="grid grid-cols-4 gap-6">
          {[
            { name: "Bipin Patel", title: "CEO & Founder", desc: "Theoretical Physicist (MSc, UPenn) / Former CRO, HKEX Group (Hong Kong Stock Exchange) / Deutsche Bank • London Clearing House • Japan Exchange Group", tag: "The operator" },
            { name: "Amy Shuai", title: "CFO", desc: "Chartered Accountant (ICAEW) / 25+ years Global Finance & Investment Banking / UBS • Deutsche Bank • RBS", tag: "The money" },
            { name: "Giridhar Gandi", title: "Head of Flexibility", desc: "MSc Renewable Energy, KTH Royal Institute of Technology + UPC / EIT InnoEnergy • Master Thesis, Siemens Energy / Energy Systems • Smart Grids • VPP & PPA", tag: "The grid expert" },
            { name: "CTO", title: "CTO", desc: "AI & Machine Learning (Head of AI/ML, Barclays Investment Bank) / Quantitative Finance & Counterparty Risk / Technology Strategy & Automation", tag: "The machine" }
          ].map((m, i) => (
             <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
               <div className="w-16 h-16 rounded-full bg-teal-500/20 mb-4 flex items-center justify-center text-teal-400 font-bold text-xl">{m.name.charAt(0)}</div>
               <h3 className="text-xl font-bold text-white mb-1">{m.name === "CTO" ? <span className="opacity-0">Hidden</span> : m.name}</h3>
               <p className="text-teal-400 font-bold text-sm tracking-wide uppercase mb-3 text-emerald-400">{m.title}</p>
               <div className="flex-1 space-y-2 mt-2">
                 {m.desc.split(" / ").map((line, idx) => (
                    <p key={idx} className="text-slate-300 text-xs font-light tracking-wide leading-relaxed">• {line}</p>
                 ))}
               </div>
               <p className="border-t border-slate-800 mt-4 pt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">{m.tag}</p>
             </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: "Four of us who have done this before.\n\nI'm Bipin. Risk management background at the HKEX, Deutsche Bank. I know how markets price volatility. Amy Shuai is our CFO. Twenty-five years globally keeping the money honest. Giridhar Gandi leads flexibility. He is the reason our grid participation is technically precise. And our CTO spent thirteen years at Barclays running AI and machine learning. He built the intelligence layer.\n\nCombined: we have done everything we are asking you to fund before, in larger institutions, with higher stakes."
  },
  {
    id: 'ask',
    title: 'The Ask',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col items-center justify-center p-16 text-center">
        <h2 className="text-2xl font-bold text-slate-500 mb-4 tracking-widest uppercase">The Ask</h2>
        <div className="text-[120px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-[#0284c7] mb-6">
          $10.5M
        </div>
        <h3 className="text-3xl font-light text-slate-300 mb-6">Series A — Convertible Preferred Equity</h3>
        <p className="text-teal-400 mb-10 italic">14 MW → 44 MW. One raise. Three times the capacity.</p>

        <div className="grid grid-cols-2 gap-8 w-full max-w-5xl text-left">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Use of Funds — Phase 1 ($10.5M)</h4>
            <ul className="space-y-4">
              {[
                "Hardware procurement + installation at Utansjö",
                "Grid certification and TSO prequalification for new capacity",
                "FaaS platform commercial launch and first client acquisition",
                "Wind farm pilot deployment (Nordic region)",
                "Working capital buffer"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-slate-300 items-start text-sm">
                  <div className="mt-1"><Shield className="w-4 h-4 text-teal-400 shrink-0" /></div>
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Financial Projections</h4>
              <div className="grid grid-cols-4 gap-2 mb-4 border-b border-slate-800 pb-2 font-bold text-slate-500 text-xs uppercase tracking-widest">
                 <div>Year</div><div>Revenue</div><div>EBITDA</div><div>Margin</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3 text-slate-300 text-sm border-b border-slate-800 pb-2">
                 <div>2024</div><div>$12M</div><div>$3M</div><div>25%</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4 text-slate-300 text-sm border-b border-slate-800 pb-2">
                 <div>2025</div><div>~$20M</div><div>~$9M</div><div>~45%</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4 text-white font-bold tracking-wide">
                 <div>2027 Target</div><div className="text-teal-400">$52.9M</div><div>$38M</div><div>72%</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-800">
                <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">IRR on Phase 1</span><span className="text-emerald-400 font-bold">&gt;50%</span></div>
                <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Per MW Payback</span><span className="text-white font-bold">~18 months</span></div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-slate-500 text-sm tracking-wide text-center">
           <strong className="text-slate-400">Existing capital in:</strong> ~$14–15M to date | Mandate: Capitalmind Investec (€52M equity + debt facility)<br/>
           Phase 2 ($4.5M) — mostly self-funded from Phase 1 cashflows<br/>
           <span className="text-teal-500 font-bold">bipin.patel@flexionics.com | www.flexionics.com</span>
        </p>
      </div>
    ),
    speakerNotes: "The ask: ten point five million dollars. Series A, convertible preferred equity.\n\nThis takes us from fourteen megawatts to forty-four. Three times the current capacity. It also launches our platform commercially — FaaS clients, wind partnerships, AI automation licensing.\n\nThe financial case: IRR above fifty percent on Phase 1. Revenue reaching fifty-two point nine million by 2027 at a seventy-two percent EBITDA margin... We are a profitable operating business today. This raise is an accelerant, not a lifeline."
  },
  {
    id: 'exit',
    title: 'Exit Strategy',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-16 relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Horizon</h2>
        <h1 className="text-5xl font-bold text-white tracking-tight mb-12">Clear paths to exit.<br/>Multiple. Near-term.</h1>

        <div className="grid grid-cols-4 gap-6 items-stretch mb-12">
          {[
            { t: "1. Strategic Acquisition", d: "Large European utilities are building flexibility portfolios they can't build from scratch. RWE (via FEV) and E.ON are both attending this event. Flexionics is exactly what their internal teams have been commissioned to find — but cannot build in time." },
            { t: "2. Infrastructure Fund Buyout", d: "Contracted recurring grid revenue + physical assets + operational platform = ideal infrastructure acquisition profile. Similar to renewable energy buyouts at 15–20× EBITDA." },
            { t: "3. IPO", d: "By 2030, the ancillary services market reaches $300B. A listed flexibility platform at $38M EBITDA commands material multiples. European green infrastructure IPO conditions are improving." },
            { t: "4. Technology Platform Sale", d: "The AI automation stack (AI Operations Platform, Health Monitor, Cloud Fleet Manager, Site Controller) has standalone SaaS value entirely separate from the physical assets. This can be monetised independently or as a package." }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0f16] border border-slate-800 p-6 rounded-xl hover:border-teal-500/50 transition-colors h-full flex flex-col">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3">{item.t}</h3>
              <p className="text-slate-400 text-sm flex-1 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center w-full">
           <span className="text-teal-500 font-bold block text-lg">bipin.patel@flexionics.com | www.flexionics.com</span>
        </div>
      </div>
    ),
    speakerNotes: "Four exit paths. All credible. All near-term.\n\nFirst — and most likely — strategic acquisition. The utilities building flexibility portfolios are in this room. They are not building from scratch in three years. They are buying. We are what they want to buy.\n\nSecond — infrastructure fund buyout. Contracted recurring revenue, physical assets, proven platform. This is infrastructure, priced like infrastructure.\n\nThird — IPO. By 2030 we are a meaningful revenue-generating platform in a three-hundred-billion-dollar market. The listing case writes itself.\n\nFourth — platform sale. Our technology stack has independent SaaS value. It can be sold apart from the physical business if the market dictates it.\n\nWe are profitable, operating, and building. The exit paths are multiple, the upside is asymmetric, and the risk is already substantially de-risked by eleven thousand activations and six million dollars in delivered revenue.\n\nThank you."
  }
];
