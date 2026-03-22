import { Shield, Zap, Wind, Battery, Cpu, Server } from 'lucide-react';

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
      <div className="relative w-full h-full flex overflow-hidden rounded-2xl bg-[#05080c]">
        {/* Right half image */}
        <div className="absolute top-0 right-0 w-[60%] h-full">
          <img src="/wind_farm_datacentre_1773836471350.png" alt="Nordic Data Centre" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        {/* Left half text */}
        <div className="relative z-10 w-[45%] h-full bg-white pl-8 pr-6 py-8 flex flex-col justify-center items-start gap-4">
          <img src="/logo-black-tagline.svg" alt="Flexionics" className="h-[110px] mb-2 -ml-2" />
          <div className="w-24 h-1 bg-teal-500 rounded-full mt-2"></div>
          <p className="text-2xl text-slate-800 max-w-sm mt-4 leading-relaxed font-medium pb-12">
            Transforming compute infrastructure into high-value grid flexibility.
          </p>
        </div>
      </div>
    ),
    speakerNotes: "Flexionics operates at the boundary between compute infrastructure and grid infrastructure. We take flexible assets — HPC data centres, industrial loads — and turn them into active, contracted participants in energy markets. Our technology decides, adapts, and executes in real time.\n\nThe grid does not need ambition. It needs millisecond-accurate intelligence. That is what we build.\n\n[Pause. Step forward.]"
  },
  {
    id: 'problem',
    title: 'The Problem',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col justify-center px-10 relative py-8">
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
            { icon: <Zap className="w-6 h-6 text-amber-400" />, title: "The Grid Is Unstable", subtitle: "Who Feels It: Grid Operators & TSOs", points: ["Renewables outpace balancing infrastructure", "Frequency deviations demand millisecond response", "Legacy assets are too slow and expensive"] },
            { icon: <Wind className="w-6 h-6 text-teal-400" />, title: "Wind Industry Is Being Strained", subtitle: "Who Feels It: Wind Farm Operators", points: ["Curtailment orders and negative prices destroy returns", "15-minute imbalance penalties add massive costs", "Grid fundamentally cannot absorb excess generation"] },
            { icon: <Battery className="w-6 h-6 text-blue-400" />, title: "Batteries Solve Only Part of the Problem", subtitle: "Who Feels It: Asset Owners & Investors", points: ["Lithium-ion maxes out at ~4 hours of discharge", "Capacity continuously fades over charge cycles", "Compute-based flexibility offers near-zero marginal cost"] }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl flex flex-col gap-1 relative overflow-hidden group hover:border-teal-500/50 transition-colors">
              <div className="p-2 bg-slate-900 rounded-lg w-fit mb-1">{item.icon}</div>
              <h3 className="text-xl font-bold text-white leading-tight mb-1">{item.title}</h3>
              <span className="text-[10px] font-bold text-teal-500 tracking-wider uppercase mb-1">{item.subtitle}</span>
              <ul className="text-slate-400 leading-relaxed text-xs space-y-1.5 list-disc pl-4">
                {item.points.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: "Three structural problems. All of them unsolved. All of them creating value for whoever solves them first.\n\nOne. The grid. Renewables are being connected faster than balancing infrastructure can absorb them. Frequency deviations are measured in milliseconds now. The reserves we built this system around — spinning reserves, slow-responding loads — are too slow, too expensive, and increasingly inadequate.\n\nTwo. Wind operators. Curtailment orders. Negative spot prices. Fifteen-minute imbalance penalties on both sides of the settlement window. Revenue is not being lost because the wind stopped. It is being lost because the grid cannot take what the wind is generating.\n\nThree. Batteries. Real technology, real value — but structurally incomplete. Four hours of discharge maximum. Capacity degrades with every charge cycle. High capital cost, long payback. Compute-based flexibility has near-zero marginal cost after installation, and it generates a second revenue stream while it waits.\n\nThree problems. One technology stack. That is Flexionics."
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
            { icon: <Server className="w-5 h-5" />, title: "Solution 1: Flexibility as a Service (FaaS)", tag: "For data centre and industrial asset owners", points: ["Connects any data centre to our infrastructure for end-to-end grid participation", "We handle TSO prequalification, daily bids, 24/7 monitoring, and compliance", "They earn the revenue, we handle everything — a full-stack operator with skin in the game"] },
            { icon: <Wind className="w-5 h-5" />, title: "Solution 2: Wind & Solar Farm Partnerships", tag: "For renewable energy operators", points: ["Behind-the-meter compute deployment to absorb generation during curtailment", "Converts curtailment losses and negative spot prices into passive monthly revenue", "Eliminates imbalance penalties with zero operational burden on the farm"] },
            { icon: <Cpu className="w-5 h-5" />, title: "Solution 3: AI Energy Market Automation", tag: "For operators who want to automate their flexibility operations", points: ["Replaces specialist trading desks with automated bidding and reporting", "Generates exact, TSO-compatible audit evidence for every market activation", "Brings institutional-grade intelligence to independent operators without the headcount"] }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r flex gap-4 from-slate-800/80 to-[#0a0f16] border border-slate-700 p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 shadow-xl items-start">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">{item.icon}</div>
              <div>
                 <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{item.tag}</p>
                 <ul className="text-slate-300 leading-relaxed text-xs space-y-1 list-disc pl-4 pr-6">
                   {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
                 </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-8 right-10 text-slate-500 font-medium tracking-wide text-xs border border-slate-800 p-2 rounded bg-slate-900/50">All three powered by our proprietary AI powered technology.</div>
      </div>
    ),
    speakerNotes: "We built this technology for our own sites. We are now opening it to the market — three distinct products, one underlying platform.\n\nSolution one: Flexibility as a Service. Any HPC data centre or industrial asset connects to our infrastructure. We handle every layer — TSO prequalification, daily bid submission, compliance reporting, settlement collection. The client receives the revenue. We operate it. We are not a software vendor. We are not an aggregator. We are a full-stack operator with direct skin in the game.\n\nSolution two: Wind and solar farm partnerships. We deploy compute infrastructure at the farm, behind the meter. When curtailment hits — and in SE1 and 2, it hits regularly — our servers absorb the excess generation the grid cannot take. The curtailment loss becomes a monthly revenue line for the operator. Zero additional operational burden on their side.\n\nSolution three: AI Energy Market Automation. For operators who want to participate in flexibility markets without building the internal capability — we are productising the intelligence layer. Automated bid submission. Automated TSO reporting. Automated audit evidence for every activation. The trading desk, the compliance function, and the reporting analyst — replaced by an AI-enabled software suite."
  },
  {
    id: 'proof',
    title: 'Proof: We run this ourselves first',
    hideTitle: true,
    content: (
      <div className="w-full h-full bg-[#05080c] flex flex-col relative overflow-hidden">
        <div className="relative z-10 flex flex-col h-full justify-center px-10 py-8">
          <h2 className="text-xl font-bold text-teal-500 mb-2 tracking-widest uppercase">The Proof</h2>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Before we offer it to others —<br/>we prove the core technology on ourselves.</h1>
          <p className="text-slate-300 text-sm mb-6 max-w-3xl leading-relaxed">Flexionics operates two hybrid data centre sites in Sweden, serving as the live proving ground for our proprietary operational stack:</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-4xl">
            <div className="bg-[#05080c]/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Boden, SE1</h3>
                <p className="text-slate-400 text-xs mt-1">FCR-D, mFRR</p>
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
              "Our proprietary Edge Controller drives sub-second responses live today",
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
              { label: "Ancillary Services Share", val: "58%", sub: "of total revenue" },
              { label: "Grid Capacity Committed", val: "229.5 GWh" },
              { label: "Real Energy Activation Deliveries", val: "26.6 GWh" },
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
    speakerNotes: "Ten months. Cleared, settled, audited numbers.\n\nOver six million dollars in total revenue. Fifty-eight percent from ancillary services. Two hundred and twenty-nine gigawatt-hours of capacity committed to the grid.\n\nThe Swedish national grid called us eleven thousand, two hundred and forty-five times. We answered every single one.\n\nIn approximately two gigawatt-hours of those activations — roughly ten percent — we were the only active asset delivering mFRR services in the entire SE1 market.\n\nNot the largest. The only one.\n\nThat is not a marketing claim. That is a settlement record."
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
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex flex-col">
                <span className="text-teal-400 font-bold border-b border-teal-500/20 mb-1 pb-1">1. Compute Revenue</span>
                <span className="text-[10px] text-slate-400">Continuous baseline operation during grid standby (Digital workloads)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-teal-400 font-bold border-b border-teal-500/20 mb-1 pb-1">2. Ancillary Services Revenue</span>
                <div className="pl-2 space-y-1.5 mt-1 border-l border-slate-800">
                  <div className="flex flex-col"><span className="text-white font-medium text-[11px]">• Capacity (SVK)</span> <span className="text-[9px] text-slate-500">Monthly — just for being available</span></div>
                  <div className="flex flex-col"><span className="text-white font-medium text-[11px]">• Energy</span> <span className="text-[9px] text-slate-500">Each time the TSO activates us</span></div>
                </div>
              </div>
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
             <span className="text-white font-bold text-lg">~$450k/MW</span>
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
    speakerNotes: "The model today is simple. We earn a capacity payment every hour for being available, and an energy payment each time the grid calls us. The same hardware simultaneously runs compute workloads. Two contracted revenue streams. One asset.\n\nThe next phase is a technology business layered on top of that. Every client we onboard adds revenue without proportional capital expenditure. The stack is already built. The incremental cost of serving the next client is marginal.\n\nThe unit economics on our own sites: four hundred and fifty thousand dollars per megawatt installed. Three hundred and ten thousand in annual gross profit per megawatt. Eighteen-month payback. Greater than fifty percent IRR in Phase one.\n\nWe are not projecting this. We are already operating it."
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
            { name: "Announcement pending", title: "CTO", desc: "AI & Machine Learning (Head of AI/ML, Investment Banking) / Quantitative Finance & Credit Risk / Technology Strategy & Automation", tag: "The machine" },
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
    speakerNotes: "Five people. All of whom have executed this kind of work before, in larger institutions, at higher stakes.\n\nI am Bipin. I built risk management systems at the London Clearing House, HKEX, Deutsche Bank, and the Japan Exchange Group. I understand precisely how markets price volatility — and how to structure assets to capture it.\n\nAmy Shuai is our CFO. Chartered Accountant. Twenty-five years across UBS, Deutsche Bank, and RBS. She keeps the numbers clean and the capital structure defensible.\n\nOur CTO spent years running AI and machine learning for tier-one investment banking. He designed our intelligence layer. His announcement is imminent.\n\nGiridhar Gandi leads our flexibility operations. His grid participation is technically rigorous because he was trained in it — KTH Royal Institute, Siemens Energy, EIT InnoEnergy.\n\nUmang Thakkar builds the AI products. Fourteen production systems deployed. He architects the automation pipelines that make this scalable.\n\nCollectively — we have done everything we are asking you to fund. In bigger rooms. With sharper consequences."
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
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Use of Funds - Scale from being cash flow positive to P&L positive</h4>
          <ul className="space-y-3">
            {[
              "Power infrastructure and hardware procurement + installation / potential site acquisition",
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
        <div className="mt-8 text-center w-full">
           <span className="text-teal-500 font-bold block text-sm">Contact: bipin.patel@flexionics.com | www.flexionics.com</span>
        </div>
      </div>
    ),
    speakerNotes: "Ten point five million dollars. Convertible preferred equity.\n\nThis takes us from fourteen megawatts to forty-four. Three times the installed capacity. It also funds the commercial launch of FaaS, the first wind farm deployment, and the AI automation licensing product.\n\nUse of funds: hardware and installation at Utansjö, TSO prequalification for new capacity, FaaS commercial launch and first client acquisition, a Nordic wind farm pilot, and working capital reserve.\n\nOne raise. Three times the capacity. Commercial-stage revenue from day one of deployment."
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
            { t: "1. Strategic Acquisition", points: ["Utilities (RWE, E.ON) need flexibility portfolios.", "Assets cannot be built internally in time.", "Flexionics solves exact utility mandates."] },
            { t: "2. Infrastructure Buyout", points: ["Contracted recurring grid revenue models.", "Proven physical assets + operational platform.", "Pricing follows 15–20× EBITDA renewable models."] },
            { t: "3. IPO", points: ["Ancillary services hit $300B market by 2030.", "Listed tech-forward platforms command premiums.", "Green infrastructure IPO window is reopening."] },
            { t: "4. Tech Platform Sale", points: ["AI autonomy stack has massive standalone SaaS value.", "Separable from physical capital-heavy assets.", "Can be monetised independently or as a package."] }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0f16] border border-slate-800 p-4 rounded-xl hover:border-teal-500/50 transition-colors h-full flex flex-col">
              <h3 className="text-sm font-bold text-white mb-3 border-b border-slate-800 pb-2">{item.t}</h3>
              <ul className="text-slate-400 text-[11px] flex-1 leading-relaxed space-y-2 list-disc pl-4 pr-1">
                {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center w-full">
           <span className="text-teal-500 font-bold block text-sm">Contact: bipin.patel@flexionics.com | www.flexionics.com</span>
        </div>
      </div>
    ),
    speakerNotes: "Four credible paths. All near-term.\n\nStrategic acquisition. The utilities building flexibility portfolios need assets they cannot construct from scratch in the timeframe the market requires. RWE, E.ON — they are in this room. We are precisely what their internal teams have been commissioned to find and cannot build in time.\n\nInfrastructure fund buyout. Contracted recurring revenue, physical assets, a proven technology stack, and a sub-eighteen-month payback. This is an infrastructure asset — and it prices like one. Comparable renewable buyouts clear at fifteen to twenty times EBITDA.\n\nIPO. By 2030, we are a material revenue-generating business in a three-hundred-billion-dollar market. The listing case is straightforward.\n\nTechnology platform sale. The AI automation stack — Operations Engine, Fleet Manager, Edge Controller, Health Monitor — has independent SaaS value. It can be monetised separately from the physical business if market conditions dictate it.\n\nThe upside is asymmetric. The downside is substantially de-risked by eleven thousand activations and six million dollars in delivered, cleared revenue.\n\nThat is the position we are in. That is what you are investing in.\n\nThank you."
  }
  /*
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
            { title: "Edge Controller (Live)", icon: <Cpu className="w-5 h-5" />, tasks: "Sub-200ms dispatch, <0.7s grid response. Local telemetry every 10 seconds. Stays operational even during connectivity loss. No SLA constraints.", hl: "Activation execution, power ramp, setpoint tracking" },
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
  } */
];
