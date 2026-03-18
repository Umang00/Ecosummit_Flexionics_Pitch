import { Network, Server, Cloud, Cpu, Wind, FilePieChart, Zap, Settings, Thermometer, Info, Flame, Globe2, BarChart3, Bot } from 'lucide-react';

export function TechnologyProducts() {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Technology & Products</h1>
        <p className="text-xl text-slate-400 font-light border-l-4 border-teal-500 pl-4">
          The proprietary AI-enabled Flexibility Stack.
        </p>
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex gap-3 text-sm text-blue-200">
         <Info className="w-5 h-5 shrink-0 text-blue-400" />
         <div>
           <strong className="block text-blue-300 mb-1">Important Pitch Considerations (Updated 2026-03-18):</strong>
           <ul className="list-disc ml-4 space-y-1 opacity-90">
             <li><strong>Naming:</strong> Proprietary names (Iceberg, Northwatch, Polaris, Compass) replaced with generic terms in presentation.</li>
             <li><strong>Crypto:</strong> All direct references to "Bitcoin mining" removed from presentation; described as "interruptible high-performance computing (HPC) load".</li>
           </ul>
         </div>
      </div>

      {/* Core Innovation */}
      <div className="bg-[#05080c] p-8 rounded-2xl border border-teal-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
            <Server className="w-8 h-8" /> The FlexBox
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
            A proprietary software-hardware system that converts <strong className="text-white">interruptible high-performance computing load</strong> into a fully controllable grid asset. It functions as an unlimited virtual battery with zero chemicals.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
            <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Response Time</span>
              <span className="text-white font-bold text-lg">&lt;0.7s</span>
            </div>
            <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Support Limit</span>
              <span className="text-white font-bold text-lg">Unlimited</span>
            </div>
            <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Safety Risk</span>
              <span className="text-teal-400 font-bold text-lg">Zero Chemical</span>
            </div>
            <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">CapEx / MW</span>
              <span className="text-white font-bold text-lg">~$350k</span>
            </div>
            <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Gross Profit / MW</span>
              <span className="text-emerald-400 font-bold text-lg">~$310k/yr</span>
            </div>
             <div className="bg-[#0a0f16] p-4 rounded-xl border border-slate-800">
              <span className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Payback</span>
              <span className="text-white font-bold text-lg">~18 months</span>
            </div>
            <div className="col-span-2 bg-slate-800/50 p-4 rounded-xl border border-slate-800">
               <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Grid Programmes</span>
               <span className="text-white font-medium text-xs leading-tight">FCR-D, FCR-N, mFRR-up, mFRR-down, aFRR, FFR</span>
            </div>
          </div>
          <div className="text-teal-400 text-xs italic">Compliance: First worldwide qualified for FCR-D, mFRR & FFR simultaneously</div>
        </div>
      </div>

      {/* 4 AI Products */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Network className="text-teal-500 w-6 h-6" /> The 4-Product Intelligence Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Cpu className="text-teal-400 w-5 h-5" /> 1. On-Site & Cloud Controller
            </h3>
            <span className="block text-slate-500 text-xs mb-4 italic">(Internal Name: Iceberg / Harbour)</span>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Sub-200ms dispatch execution</li>
              <li>• Local storage for resilience during network drop</li>
              <li>• 90% ramp tracking accuracy for grid reporting</li>
              <li>• Deep telemetry: power meter every 10s, compute logs every 60s</li>
              <li>• Fleet-level dashboard (single pane of glass)</li>
              <li>• Evidence & audit trails for SVK, Bixia, Hansen</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <FilePieChart className="text-teal-400 w-5 h-5" /> 2. AI Operations Platform
            </h3>
            <span className="block text-slate-500 text-xs mb-4 italic">(Internal Name: Compass)</span>
            <ul className="space-y-2 text-slate-400 text-sm mb-4">
              <li>• Replaces 3-person trading & reporting desk</li>
              <li>• Automated daily TSO bid matching & submission</li>
              <li>• Natural language queries of operational data</li>
              <li>• TSO-ready compliance file generation</li>
            </ul>
            <div className="bg-[#05080c] p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300">
               Metrics: 5 Reserve Markets | 80% mFRR Activation | 200+ GWh Delivered
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Thermometer className="text-teal-400 w-5 h-5" /> 3. AI Health Monitor
            </h3>
            <span className="block text-slate-500 text-xs mb-4 italic">(Internal Name: Northwatch)</span>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Early warning degradation detection</li>
              <li>• AI-narrative generation: complex logs → plain English</li>
              <li>• Connectivity & stress supervision</li>
              <li>• 24/7 automated monitoring (no human required)</li>
              <li>• Audit-ready timelines for regulatory compliance</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Settings className="text-teal-400 w-5 h-5" /> 4. Fleet Orchestration
            </h3>
            <span className="block text-slate-500 text-xs mb-4 italic">(Internal Name: Polaris)</span>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Synchronized zero-downtime over-the-air updates</li>
              <li>• Version control across all hardware nodes</li>
              <li>• Staged rollout pipelines (test → monitor → promote)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0f16] border border-slate-800 p-6 rounded-xl font-mono text-xs text-slate-400">
         <span className="text-slate-500 font-bold block mb-2 uppercase">Platform Signal Flow (End-to-End)</span>
         TSO Signal → API Gateway (Bixia/Hansen) → On-Site Controller (0.7s dispatch) → Cloud Fleet Manager (telemetry) → AI Operations Platform (analytics/bid mgmt) → AI Health Monitor (health/compliance) → Fleet Orchestration (fleet management)
      </div>

      {/* AI in the Product */}
      <div className="bg-teal-500/5 border border-teal-500/20 p-8 rounded-2xl">
         <h2 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-3">
            <Bot className="w-6 h-6" /> AI in the Product (Required for EcoSummit Pitch)
         </h2>
         <p className="text-slate-300 font-medium italic mb-6">"No human trader could match our position or speed."</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
               { t: "1. AI Optimizer", d: "Custom firmware with AI decision-making — instantly prioritises grid revenue or compute work based on price signals" },
               { t: "2. Predictive Analytics", d: "AI reads market prices, grid data, and weather forecasts to optimise participation without human intervention" },
               { t: "3. Health Monitor AI", d: "Transforms complex system logs into plain-language operational narratives" },
               { t: "4. Operations Platform NL", d: "Natural language querying of all operational data — operators ask questions in plain English" },
               { t: "5. Automated Bidding", d: "AI-driven bid submission via direct API to Hansen and Bixia every morning" },
               { t: "6. Ramp Tracking", d: "AI-validated setpoint vs. actual activation at 90% accuracy" }
            ].map((ai, i) => (
               <div key={i} className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                  <h4 className="text-teal-400 font-bold text-sm mb-2">{ai.t}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{ai.d}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Solutions */}
      <div className="pt-8 border-t border-slate-800/50">
        <h2 className="text-2xl font-bold text-white mb-6">Three Revenue Generating Solutions</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start bg-[#0a0f16] p-6 rounded-xl border border-slate-800/50">
            <Zap className="text-amber-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">1. Grid Flexibility (Own Sites)</h3>
              <p className="text-slate-400 text-sm">Operating our own hybrid data centers in Sweden, delivering FCR-D, mFRR, aFRR, FFR services directly to SVK (Swedish National Grid). This is our proven, cash-positive model.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-[#0a0f16] p-6 rounded-xl border border-slate-800/50">
            <Cloud className="text-blue-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">2. Flexibility as a Service (FaaS)</h3>
              <p className="text-slate-400 text-sm">We run your asset's flexibility. Data center owners connect assets to our platform. We handle TSO prequalification, daily bid submission, 24/7 monitoring, and compliance reporting. Full-stack operator.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-[#0a0f16] p-6 rounded-xl border border-slate-800/50">
            <Wind className="text-teal-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">3. Wind Farm Partnerships</h3>
              <p className="text-slate-400 text-sm">Wind operators in Nordic region face curtailment losses and penalties. We install compute infrastructure behind your meter to absorb excess generation. The curtailment loss is eliminated, reversed into passive revenue.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
         {/* Market & HPC */}
         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="text-teal-400 w-6 h-6" /> Market & HPC Expansion
            </h2>
            <div className="space-y-6">
               <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">EU Flexible Consumption</h3>
                  <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">2021 Baseline</span> <span className="font-bold text-white">330 TWh</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">2030 Target (+162%)</span> <span className="font-bold text-teal-400">864 TWh</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">2050 Projection</span> <span className="font-bold text-white">1,350 TWh</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">Ancillary Market 2030 (CAGR &gt;30%)</span> <span className="font-bold text-white">$300B+</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">Intermittent energy by 2030</span> <span className="font-bold text-rose-400">42% of global production</span>
                  </div>
                  <div className="flex flex-col border-b border-slate-800 pb-2 mb-2">
                     <span className="text-sm text-slate-300">AI data center demand surge</span> <span className="font-bold text-white text-xs">Seeking 10s of GW globally in Europe; 3+ year grid wait</span>
                  </div>
               </div>
               
               <div className="bg-[#05080c] p-4 rounded-xl border border-slate-800">
                  <h3 className="text-white font-bold mb-2">The HPC/AI Data Center Play</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">Current: High-performance computing & interruptible AI inference.<br/>Future compute use targets <strong>Dedicated AI inference + HPC</strong>. As AI inference surpasses traditional compute value, we simply convert our existing infrastructure to AI compute.</p>
                  <p className="text-sm text-emerald-400 font-bold">No new permits, no new cables. Bypassing the 3+ year European grid waiting list.</p>
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-800 italic">Flexionics bridges the gap: Each 1 MW of Flexionics flexibility can enable ~5 MW of imbalance management for both generation AND AI load.</p>
               </div>
            </div>
         </div>

         {/* Extensibility */}
         <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Globe2 className="text-blue-400 w-6 h-6" /> International Reach
               </h2>
               <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex justify-between"><strong className="text-white">Current Markets</strong> <span>Sweden (SE1 & SE2 — Boden, Utansjö)</span></li>
                  <li className="flex justify-between"><strong className="text-white">Nordic Pipeline</strong> <span>Denmark, Norway</span></li>
                  <li className="flex justify-between"><strong className="text-white">Europe Expansion</strong> <span>Germany</span></li>
                  <li className="flex justify-between"><strong className="text-white">Asia Pacific</strong> <span>Japan (Active outreach)</span></li>
                  <li className="flex justify-between border-t border-slate-800 pt-3 mt-3"><strong className="text-teal-400 w-1/3">Colocation Partners</strong> <span className="text-xs w-2/3 text-right">Seeking wind/solar asset owners to host FlexBox on grid connections</span></li>
               </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Flame className="text-orange-400 w-6 h-6" /> Sustainability & Heat Reuse
               </h2>
               <ul className="space-y-2 text-sm text-slate-300 mb-4">
                  <li>• **Zero chemical risk** — no lithium, no hazardous materials</li>
                  <li>• **Heat reuse** from data centers for agriculture, forestry, district heating</li>
               </ul>
               <div className="bg-[#05080c] p-3 rounded-lg border border-orange-500/20 text-orange-200 text-sm">
                  <strong className="block text-orange-400 mb-1">Financial Impact</strong>
                  Tax reimbursement of ~$31.2/MWh from heat reuse. Estimated value: <strong>Up to $270k p.a. per MW</strong>.
               </div>
            </div>
         </div>
      </div>
      
    </div>
  );
}
