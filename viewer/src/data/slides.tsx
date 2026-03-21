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
        <div className="relative z-10 w-full max-w-5xl px-12 py-8 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 mb-4">
             <img src="/logo-white.svg" alt="Flexionics" className="h-10" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-tight">
            FLEXIONICS
          </h1>
          <p className="text-2xl lg:text-3xl font-light text-teal-400 mt-2">
            Enabling the Energy Transition — Bit by Bit
          </p>
          <div className="w-24 h-1 bg-teal-500 rounded-full mt-4"></div>
          <p className="text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed">
            Transforming compute infrastructure into high-value grid flexibility.
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
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-10 relative py-8">
        <div className="absolute top-8 right-10">
          <div className="inline-flex flex-col items-end">
            <span className="text-4xl font-bold text-teal-400">42.5%</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Renewable Energy Target by 2030</span>
            <span className="text-[8px] text-slate-500 mt-1 uppercase tracking-tighter">Source: EU Renewable Energy Directive (RED III)</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Landscape</h2>
        <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">The Flexibility Gap</h1>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: <Zap className="w-6 h-6 text-amber-400" />, title: "The Grid Is Unstable", subtitle: "Who Feels It: Grid Operators & TSOs", desc: "Renewables are outpacing balancing infrastructure. Frequency deviations demand millisecond response. Today's assets are too slow and too expensive or not performant." },
            { icon: <Wind className="w-6 h-6 text-teal-400" />, title: "Wind Industry Is Being Strained", subtitle: "Who Feels It: Wind Farm Operators", desc: "Curtailment orders, negative prices, and 15-min penalties are destroying wind farm returns. Revenue lost not because the wind stopped — but because the grid can't absorb it." },
            { icon: <Battery className="w-6 h-6 text-blue-400" />, title: "Batteries Solve Only Part of the Problem", subtitle: "Who Feels It: Asset Owners & Investors", desc: "BESS matters, but lithium-ion grid batteries max out at ~4 hours of discharge. Add capacity fade over charge cycles and high CapEx leave a gap. Compute-based flexibility offers near-zero marginal cost." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl flex flex-col gap-3 relative overflow-hidden group hover:border-teal-500/50 transition-colors">
              <div className="p-2 bg-slate-900 rounded-lg w-fit mb-1">{item.icon}</div>
              <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
              <span className="text-xs font-bold text-teal-500 tracking-wider uppercase">{item.subtitle}</span>
              <p className="text-slate-400 leading-relaxed text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: "Three problems.\n\nFirst — the grid itself. Renewables are being added faster than the grid can handle them. Frequency deviations are happening in milliseconds. The assets we've had for decades — spinning reserves, slow-responding loads — are not fast or cheap enough to keep up.\n\nSecond — wind farms are being squeezed. Curtailment orders. Negative prices. Settlement penalties at every fifteen-minute interval. Revenue is being destroyed not because the wind stops — but because the grid cannot absorb what's being generated.\n\nThird — battery storage is real, but it is not the complete answer. Max out at ~4 hours of discharge. High capital cost. Degradation with every cycle. Compute-based flexibility offers something different: near-zero marginal cost after installation, and a second revenue stream from the compute itself running in parallel.\n\nThree problems. Flexionics solves all three with one AI powered technology stack."
  },
  {
    id: 'solutions',
    title: 'Our 3 Solutions',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 relative py-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">Our Response: Three Solutions</h1>
        
        <div className="grid grid-cols-1 gap-3 mt-4">
          {[
            { icon: <Server className="w-5 h-5" />, title: "Solution 1: Flexibility as a Service (FaaS)", tag: "For data centre and industrial asset owners", desc: "Any data centre or industrial load can connect to our infrastructure and we operate their grid flexibility — end to end. TSO prequalification, daily bid submission, 24/7 monitoring, compliance reporting. They earn the revenue. We handle everything. Not software. Not an aggregator. A full-stack operator with skin in the game." },
            { icon: <Wind className="w-5 h-5" />, title: "Solution 2: Wind & Solar Farm Partnerships", tag: "For renewable energy operators", desc: "Wind operators in the Nordic region face curtailment losses, imbalance penalties, and negative spot prices. We can install compute infrastructure behind their meter. During curtailment, our servers absorb excess generation at near-zero cost. The loss becomes revenue. Zero operational burden on the farm." },
            { icon: <Cpu className="w-5 h-5" />, title: "Solution 3: AI Energy Market Automation", tag: "For operators who want to automate their flexibility operations", desc: "Managing Nordic flexibility markets manually requires a specialist quant team, months of TSO setup, and daily bid windows. Our AI automation technology is being built to replace the trading desk, the reporting team, and the compliance analyst — automatically submitting bids, generating TSO reports, and producing audit evidence for every activation." }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r flex gap-4 from-slate-800/80 to-[#0a0f16] border border-slate-700 p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 shadow-xl items-start">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">{item.icon}</div>
              <div>
                 <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{item.tag}</p>
                 <p className="text-slate-300 leading-relaxed text-xs pr-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-8 right-10 text-slate-500 font-medium tracking-wide text-xs border border-slate-800 p-2 rounded bg-slate-900/50">All three powered by our proprietary AI powered technology.</div>
      </div>
    ),
    speakerNotes: "We are opening three capabilities — all built on the same proprietary AI powered technology stack.\n\nFirst: Flexibility as a Service. Any data centre or industrial load can connect to our infrastructure. We can run every stage of their grid participation — from TSO approval to collecting the monthly payment. They receive the revenue. We do the work.\n\nSecond: Wind and solar farm partnerships. We can install compute infrastructure at the farm, behind the meter. When curtailment hits — and it hits often — our servers absorb the generation that the grid can't take. What was a loss becomes a passive monthly payment to the operator.\n\nThird: AI Energy Market Automation. For operators who want the intelligence without the integration — we are building the AI layer to automate the trading desk, the compliance reporting, and the bid submission. This system will become a technology suite any operator can access."
  },
  {
    id: 'proof',
    title: 'Proof: We run this ourselves first',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col relative overflow-hidden">
        <img src="/tech-hero.png" alt="Proof" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 flex flex-col h-full justify-center px-10 py-8">
          <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Proof</h2>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Before we offer it to others —<br/>we prove the core technology on ourselves.</h1>
          <p className="text-slate-300 text-sm mb-6 max-w-3xl leading-relaxed">Flexionics operates two hybrid data centre sites in Sweden, serving as the live proving ground for our proprietary operational stack:</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-4xl">
            <div className="bg-[#05080c]/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Boden, SE1</h3>
                <p className="text-slate-400 text-xs mt-1">FCR-D, mFRR, aFRR</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-teal-400">12 MW</span>
                <div className="flex items-center gap-2 mt-1 justify-end text-emerald-400 text-xs font-bold tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> LIVE
                </div>
              </div>
            </div>
            <div className="bg-[#05080c]/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Utansjö, SE2</h3>
                <p className="text-slate-400 text-xs mt-1">mFRR, FFR</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-teal-400">2 MW</span>
                <div className="flex items-center gap-2 mt-1 justify-end text-emerald-400 text-xs font-bold tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> LIVE
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl space-y-2">
            {[
              "Our proprietary On-Site Controller drives sub-second responses live today",
              "Our in-house Cloud Fleet Manager is advancing to centralise daily bid management",
              "Our AI Operations Engine is getting developed to fully automate market submissions",
              "Our AI Health Monitor is getting built to provide predictive 24/7 reliability oversight"
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                  </div>
                  {item}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    ),
    speakerNotes: "The core technology behind our solutions is proven on our own sites first.\n\nBoden, twelve megawatts. Utansjö, two megawatts. Both live today, generating strong revenue in the most demanding ancillary markets.\n\nOur proprietary site controllers are already executing sub-second responses. And to scale our operations, we are actively developing our in-house cloud fleet manager, AI operations engine, and predictive health monitors. We are testing these native systems on our own infrastructure before we wrap them into external solutions."
  },
  {
    id: 'traction',
    title: 'Traction: The Numbers',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 py-8">
         <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">Last 10 months. <span className="text-teal-400">Real activations. Real revenue.</span></h1>
         
         <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
            {[
              { label: "Total Revenue", val: ">$6M" },
              { label: "Revenue Growth", val: "9× in 5 mths", sub: "(Jan–May 2025)" },
              { label: "Grid Capacity Committed", val: "229.5 GWh" },
              { label: "Real Grid Deliveries", val: "26.6 GWh" },
              { label: "mFRR Activations (SE1)", val: "11,245" },
              { label: "Peak Mth Ancillary Rev", val: "$712k", sub: "(June 2025)" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-center flex flex-col items-center justify-center">
                <span className="text-[#38bdf8] text-3xl font-black mb-2">{stat.val}</span>
                <span className="text-slate-400 font-medium uppercase tracking-widest text-[10px] leading-relaxed">{stat.label}</span>
                {stat.sub && <span className="text-slate-600 text-[10px] mt-1">{stat.sub}</span>}
              </div>
            ))}
         </div>
         
         <div className="max-w-4xl mx-auto w-full mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#0a0f16] border border-slate-700/50 p-4 rounded-lg text-slate-300 text-xs">
              <ul className="list-disc ml-4 space-y-1">
                 <li>80.9% peak participation rate (May–Sept 2025) in SE1 during high-demand periods</li>
                 <li>In ~2 GWh of events: Flexionics was the <strong>only active asset delivering mFRR services</strong> in SE1</li>
              </ul>
            </div>
            <div className="bg-[#0a0f16] border border-slate-700/50 p-4 rounded-lg text-slate-300 text-xs">
              <ul className="list-disc ml-4 space-y-1">
                 <li>Revenue split: 42% compute / <strong>58% ancillary services</strong></li>
                 <li>Ancillary services exceeded compute revenue in most months</li>
              </ul>
            </div>
         </div>
      </div>
    ),
    speakerNotes: "Ten months of numbers. Not estimates. Not projections. These are cleared, settled, audited revenue events.\n\nOver six million dollars in total revenue. Nine times growth in five months. Two hundred and twenty-nine and a half gigawatt-hours committed.\n\nEleven thousand, two hundred and forty-five times the Swedish national grid called us. Every single time, we answered.\n\nAnd today — fifty-eight percent of our revenue comes from the grid itself."
  },
  {
    id: 'business_model',
    title: 'Business Model',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 relative py-8">
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">Business Model</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-6">We earn dual revenue on our assets. <br/><span className="text-slate-400">And we're opening that to others.</span></h1>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-slate-700 pb-2">Current Revenue — Own Sites</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Capacity Payment (SVK)</span> <span className="text-[10px] mt-0.5">Monthly — just for being available</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Energy Payment</span> <span className="text-[10px] mt-0.5">Each time the TSO activates us</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Compute Revenue (Digital workloads)</span> <span className="text-[10px] mt-0.5">Continuous baseline operation during grid standby</span></div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-slate-700 pb-2">Upcoming Client Revenue (2026)</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex flex-col"><span className="text-teal-400 font-bold">FaaS Service Fee</span> <span className="text-[10px] mt-0.5">Data centre / industrial operators. Revenue share or monthly retainer.</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">Wind Farm Partnership</span> <span className="text-[10px] mt-0.5">Wind / solar operators. Revenue share from flexibility income.</span></div>
              <div className="flex flex-col"><span className="text-teal-400 font-bold">AI Automation Licensing</span> <span className="text-[10px] mt-0.5">Flexibility operators globally. SaaS / API access fees.</span></div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0f16] border border-slate-800 rounded-lg p-3 mb-4 text-center">
           <span className="italic text-slate-400 text-xs">"The AI powered technology business multiplies our revenue without proportional CapEx. One team, one stack, many assets."</span>
        </div>

        <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 flex items-center justify-between">
          <div className="text-center">
             <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Install Cost</span>
             <span className="text-white font-bold text-lg">~$350k/MW</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Annual Gross Profit</span>
             <span className="text-teal-400 font-bold text-lg">~$310k/MW</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Payback</span>
             <span className="text-white font-bold text-lg">~18 months</span>
          </div>
          <div className="text-center">
             <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">IRR (Phase 1)</span>
             <span className="text-emerald-400 font-bold text-lg">&gt;50%</span>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "Today our business model is straightforward: we earn a capacity payment every month just for being available, and an energy payment every time the grid calls us. On the same hardware, we run compute workloads. Two revenue streams, one asset.\n\nBut this is now becoming a technology business... We are now onboarding clients. Each new client adds revenue without proportional capital expenditure. The unit economics on own sites already show the picture: three hundred and fifty thousand dollars installed. Three hundred and ten thousand in gross profit per megawatt, per year. Eighteen-month payback."
  },
  {
    id: 'team',
    title: 'Team',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 relative py-8">
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Operators</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Who executes this.</h1>

        <div className="grid grid-cols-5 justify-center gap-3 w-full max-w-6xl mx-auto">
          {[
            { name: "Bipin Patel", title: "CEO & Founder", desc: "Theoretical Physicist (MSc, UPenn) / Former CRO, HKEX Group (Hong Kong Stock Exchange) / Deutsche Bank • London Clearing House • Japan Exchange Group", tag: "The operator" },
            { name: "Amy Shuai", title: "CFO", desc: "Chartered Accountant (ICAEW) / 25+ years Global Finance & Investment Banking / UBS • Deutsche Bank • RBS", tag: "The money" },
            { name: "Appointed – Announcement pending", title: "CTO", desc: "AI & Machine Learning (Head of AI/ML, Investment Banking) / Quantitative Finance & Credit Risk / Technology Strategy & Automation", tag: "The machine" },
            { name: "Giridhar Gandi", title: "Head of Flexibility", desc: "MSc Renewable Energy, KTH Royal Institute of Technology + UPC / EIT InnoEnergy • Master Thesis, Siemens Energy / Energy Systems • Smart Grids • VPP & PPA", tag: "The grid expert" },
            { name: "Umang Thakkar", title: "AI Product & Automation Expert", desc: "AI Product Builder (14+ deployed production systems) / Multi-Agent Systems & LLM Architect / End-to-End AI Automation / Pipeline Engineering", tag: "The AI builder" }
          ].map((m, i) => (
             <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex flex-col cursor-default hover:border-teal-500/50 transition-colors">
               <div className="w-10 h-10 rounded-full bg-teal-500/20 mb-2 flex items-center justify-center text-teal-400 font-bold text-base">{m.title === "CTO" ? "C" : m.name.charAt(0)}</div>
               <h3 className="text-base font-bold text-white mb-1 leading-tight">{m.name}</h3>
               <p className="text-teal-400 font-bold text-[10px] tracking-wide uppercase mb-2 text-emerald-400">{m.title}</p>
               <div className="flex-1 space-y-1 mt-1">
                 {m.desc.split(" / ").map((line, idx) => (
                    <p key={idx} className="text-slate-300 text-[9px] font-light tracking-wide leading-relaxed">• {line}</p>
                 ))}
               </div>
               <p className="border-t border-slate-800 mt-2 pt-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">{m.tag}</p>
             </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: "Five of us who have done this before.\n\nI'm Bipin. Risk management background at the HKEX, Deutsche Bank. I know how markets price volatility. Amy Shuai is our CFO. Chartered Accountant with twenty-five years across UBS, Deutsche Bank, and RBS. She keeps the money honest and the cap table clean. Our CTO spent years running AI and machine learning for tier-one investment banking; he built our intelligence layer. Giridhar Gandi leads flexibility. He is the reason our grid participation is technically precise. And Umang Thakkar is an AI product builder who architects our end-to-end automation pipelines.\n\nCombined: we have done everything we are asking you to fund before, in larger institutions, with higher stakes."
  },
  {
    id: 'ask',
    title: 'The Ask',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-xl font-bold text-slate-500 mb-3 tracking-widest uppercase">The Ask</h2>
        <div className="text-[80px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-[#0284c7] mb-4">
          $10.5M
        </div>
        <h3 className="text-2xl font-light text-slate-300 mb-4">Convertible Preferred Equity</h3>
        <p className="text-teal-400 mb-8 italic text-sm">14 MW → 44 MW. One raise. Three times the capacity.</p>

        <div className="grid grid-cols-1 gap-6 w-full max-w-3xl text-left bg-slate-900 border border-slate-800 p-6 rounded-xl mx-auto">
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Use of Funds</h4>
          <ul className="space-y-3">
            {[
              "Hardware procurement + installation at Utansjö",
              "Grid certification and TSO prequalification for new capacity",
              "FaaS platform commercial launch and first client acquisition",
              "Wind farm pilot deployment (Nordic region)",
              "Working capital buffer"
            ].map((text, i) => (
              <li key={i} className="flex gap-2 text-slate-300 items-start text-sm">
                <div className="mt-0.5"><Shield className="w-4 h-4 text-teal-400 shrink-0" /></div>
                <span className="font-medium leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-slate-500 text-[11px] tracking-wide text-center">
           <strong className="text-slate-400">Existing capital in:</strong> 79.5M SEK in debt<br/>
           <span className="text-teal-500 font-bold block text-sm mt-3 border-t border-slate-800 pt-3">Contact: bipin.patel@flexionics.com | www.flexionics.com</span>
        </p>
      </div>
    ),
    speakerNotes: "The ask: ten point five million dollars. Convertible preferred equity.\n\nThis takes us from fourteen megawatts to forty-four. Three times the current capacity. It also launches our service commercially — FaaS clients, wind partnerships, AI automation licensing."
  },
  {
    id: 'appendix_divider',
    title: 'Appendix',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex items-center justify-center">
         <h1 className="text-5xl font-black text-slate-700 tracking-widest uppercase opacity-40">Appendix</h1>
      </div>
    ),
    speakerNotes: "(Optional) Transition to deep-dive appendix slides if needed for Q&A."
  },
  {
    id: 'tech_stack',
    title: 'Technology Stack',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-10 relative py-8">
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Engine</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">What Powers Our Operations</h1>
        <p className="text-slate-400 text-sm font-light mb-6">Four technology layers, capturing our operational expertise in software.</p>
        
        <div className="grid grid-cols-4 gap-3 items-stretch mb-6">
          {[
            { title: "On-Site Controller (Live)", icon: <Cpu className="w-5 h-5" />, tasks: "Sub-200ms dispatch, <0.7s grid response. Local telemetry every 10 seconds. Stays operational even during connectivity loss. No SLA constraints.", hl: "Activation execution, power ramp, setpoint tracking" },
            { title: "Cloud Fleet Manager (In Dev)", icon: <Globe className="w-5 h-5" />, tasks: "Designed for central oversight across all sites simultaneously. Bid management, win-rate analytics, audit trails, and TSO-compatible evidence exports.", hl: "Fleet visibility, reporting, market interface" },
            { title: "AI Automation Engine (In Dev)", icon: <Network className="w-5 h-5" />, tasks: "Training for automated trading and natural language querying. Built to generate and submit bids securely to our BSP partner.", hl: "Bid strategy, TSO reporting, market intelligence" },
            { title: "Predictive Health Monitor (In Dev)", icon: <Shield className="w-5 h-5" />, tasks: "Advancing to provide 24/7 AI-driven monitoring. Early-warning drift detection before it becomes a compliance issue. Automated alerting.", hl: "Asset health, reliability, regulatory readiness" }
          ].map((item, i) => (
             <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col h-full relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
               <div className="text-teal-400 mb-3">{item.icon}</div>
               <h3 className="text-sm font-bold text-white mb-2 leading-tight">{item.title}</h3>
               <p className="text-slate-400 text-[10px] flex-1 leading-relaxed mb-3">{item.tasks}</p>
               <div className="pt-2 border-t border-slate-800">
                 <p className="text-[9px] font-bold text-slate-500 uppercase leading-snug">Handles: <span className="text-slate-300">{item.hl}</span></p>
               </div>
             </div>
          ))}
        </div>
        
        <div className="max-w-4xl border-l-4 border-teal-500 pl-4 py-1">
          <p className="text-sm font-light text-slate-300 italic">"No human trader can respond in 700 milliseconds without software. This isn't AI as a feature. This is AI as the operating system for the future grid."</p>
        </div>
      </div>
    ),
    speakerNotes: "Four technology layers forming our proprietary intelligence stack.\n\nOur site controllers are live today, executing sub-second responses before any human could react. To scale our current operations, we are engineering the subsequent layers: a cloud fleet manager for multi-site visibility, an AI engine to automate daily bid submissions, and a health monitor for predictive anomaly detection.\n\nWe have completed eleven thousand manual and third-party-assisted activations and now, we are capturing that operational mastery into our own software.\n\nThis isn't just a product feature. It is the operating system that will allow us to scale FaaS and wind partnerships globally without scaling proportional headcount."
  },
  {
    id: 'roadmap_2026',
    title: '2026 Roadmap',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#0a0f16] flex flex-col justify-center px-10 relative py-8">
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">2026: Scale Distribution</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">From 14 MW to 44 MW.</h1>
        <p className="text-slate-400 text-sm font-light mb-6">And opening the service to the world.</p>
        <p className="text-teal-400 font-bold text-sm mb-4">Four programmatic scale initiatives:</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#05080c] border border-slate-800 p-4 rounded-xl flex gap-3">
            <span className="text-teal-500 font-black text-xl">01</span>
            <div>
              <h3 className="text-white font-bold text-sm mb-1">Flexibility as a Service — Global Launch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Launch FaaS for data centre operators outside our own sites. First clients onboarding.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-4 rounded-xl flex gap-3">
            <span className="text-teal-500 font-black text-xl">02</span>
            <div>
              <h3 className="text-white font-bold text-sm mb-1">Wind Farm Pilot — Imbalance Management</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Deploy compute infrastructure at a wind site in the Nordic region. Absorb curtailment. Eliminate imbalance penalties. First proof of the wind partnership model.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-4 rounded-xl flex gap-3">
            <span className="text-teal-500 font-black text-xl">03</span>
            <div>
              <h3 className="text-white font-bold text-sm mb-1">AI Market Automation — External Launch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Open the AI Automation Engine to external flexibility operators. Enable any operator to automate their bid submission, compliance reporting, and market analytics through our technology. First paying clients onboarded.</p>
            </div>
          </div>
          <div className="bg-[#05080c] border border-slate-800 p-4 rounded-xl flex gap-3">
            <span className="text-teal-500 font-black text-xl">04</span>
            <div>
              <h3 className="text-white font-bold text-sm mb-1">Integrated BESS — Hybrid Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Incorporate battery energy storage alongside compute. Maximise speed of response and unlock additional market products simultaneously (e.g., FCR-N + mFRR simultaneously at higher volumes).</p>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "In 2026, four initiatives running in parallel.\n\nOne: FaaS goes live for external clients.\nTwo: We deploy our first wind farm pilot in the Nordic region.\nThree: We open the AI automation technology to external operators.\nFour: We integrate battery storage into the hybrid system.\n\nAnd through all of this: Utansjö expands. Fourteen megawatts becomes forty-four. Three times the current capacity."
  },
  {
    id: 'roadmap_2027',
    title: '2027 and Beyond',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-gradient-to-t flex flex-col justify-center px-10 relative py-8">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-[#0a0f16]"></div>
        <div className="relative z-10 w-full">
           <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">2027+: Compounding</h2>
           <h1 className="text-4xl font-bold text-white tracking-tight mb-8">Compound Capabilities</h1>

           <div className="flex gap-3 justify-between mb-10 items-stretch">
             {[
               { t: "Vallion Flow HFT Integration", d: "Integrate a high-frequency trading-grade stack for energy arbitrage. Move from pure reserve markets to systematic energy trading." },
               { t: "Diverse Physical Assets", d: "Onboard solar farms, EV fleets, residential battery systems, industrial loads. The technology becomes asset-class agnostic." },
               { t: "Market-Wide Systematic Trading", d: "Extend products to homes and commercial buildings — VPP (virtual power plant) model at scale. Systematic trading across residential and commercial flexibility." },
               { t: "Global Rollout", d: "Expand to markets where renewable intermittency is structural: Germany, Norway, Japan. Full international flexibility management." }
             ].map((item, i) => (
                <div key={i} className="flex-1 bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex flex-col hover:-translate-y-1 transition-transform">
                  <span className="text-teal-500 font-black text-sm mb-2 block">{i + 1}. {item.t}</span>
                  <p className="text-[10px] text-slate-300 leading-relaxed font-light">{item.d}</p>
                </div>
             ))}
           </div>

           <div className="flex justify-center gap-32 items-center border-t border-slate-700/50 pt-6 bg-slate-900/30 p-5 rounded-xl">
              <div className="text-center"><span className="block text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Long-term Pipeline</span><span className="text-lg font-bold text-white">650 MW<span className="text-[10px] text-slate-400 font-light block mt-1">across 9 Nordic wind farms</span></span></div>
              <div className="text-center"><span className="block text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Flexibility Enablement</span><span className="text-lg font-bold text-teal-400">1.5 TWh<span className="text-[10px] text-slate-400 font-light block mt-1">by 2030</span></span></div>
           </div>
        </div>
      </div>
    ),
    speakerNotes: "In 2027, we compound.\n\nWe integrate a high-frequency trading stack, moving from reserve markets into systematic energy self-trading. We add solar farms, EV fleets, and battery systems to the network. We extend to homes and businesses — virtual power plant logic applied at residential scale. And we roll this out globally. \n\nThe long-range picture: six hundred and fifty megawatts in our pipeline. One point five terawatt-hours of flexibility by 2030."
  },
  {
    id: 'exit',
    title: 'Exit Strategy',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 relative py-8">
        <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Horizon</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-8">Clear paths to exit.<br/>Multiple. Near-term.</h1>

        <div className="grid grid-cols-4 gap-4 items-stretch mb-8">
          {[
            { t: "1. Strategic Acquisition", d: "Large European utilities are building flexibility portfolios they can't build from scratch. RWE (via FEV) and E.ON are both attending this event. Flexionics is exactly what their internal teams have been commissioned to find — but cannot build in time." },
            { t: "2. Infrastructure Fund Buyout", d: "Contracted recurring grid revenue + physical assets + operational platform = ideal infrastructure acquisition profile. Similar to renewable energy buyouts at 15–20× EBITDA." },
            { t: "3. IPO", d: "By 2030, the ancillary services market reaches $300B. A listed flexibility platform commands material multiples. European green infrastructure IPO conditions are improving." },
            { t: "4. Technology Platform Sale", d: "The AI automation stack (AI Operations Platform, Health Monitor, Cloud Fleet Manager, Site Controller) has standalone SaaS value entirely separate from the physical assets. This can be monetised independently or as a package." }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0f16] border border-slate-800 p-4 rounded-xl hover:border-teal-500/50 transition-colors h-full flex flex-col">
              <h3 className="text-sm font-bold text-white mb-3 border-b border-slate-800 pb-2">{item.t}</h3>
              <p className="text-slate-400 text-[10px] flex-1 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center w-full">
           <span className="text-teal-500 font-bold block text-sm">Contact: bipin.patel@flexionics.com | www.flexionics.com</span>
        </div>
      </div>
    ),
    speakerNotes: "Four exit paths. All credible. All near-term.\n\nFirst — and most likely — strategic acquisition. The utilities building flexibility portfolios are in this room. They are not building from scratch in three years. They are buying. We are what they want to buy.\n\nSecond — infrastructure fund buyout. Contracted recurring revenue, physical assets, proven technology. This is infrastructure, priced like infrastructure.\n\nThird — IPO. By 2030 we are a meaningful revenue-generating business in a three-hundred-billion-dollar market. The listing case writes itself.\n\nFourth — technology sale. Our technology stack has independent SaaS value. It can be sold apart from the physical business if the market dictates it.\n\nWe are operating and building. The exit paths are multiple, the upside is asymmetric, and the risk is already substantially de-risked by eleven thousand activations and six million dollars in delivered revenue.\n\nThank you."
  }
];
