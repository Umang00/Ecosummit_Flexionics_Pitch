import { Network, Server, Cloud, Cpu, Wind, FilePieChart, Zap, Settings, Thermometer, Info, Flame, Globe2, BarChart3 } from 'lucide-react';

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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
          </div>
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
              <li>• Deep telemetry: power meter every 10s</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <FilePieChart className="text-teal-400 w-5 h-5" /> 2. AI Operations Platform
            </h3>
            <span className="block text-slate-500 text-xs mb-4 italic">(Internal Name: Compass)</span>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Replaces 3-person trading & reporting desk</li>
              <li>• Automated daily TSO bid matching & submission</li>
              <li>• Natural language queries of operational data</li>
              <li>• TSO-ready compliance file generation</li>
            </ul>
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

      <div className="bg-teal-500/10 border border-teal-500/20 p-6 rounded-xl flex gap-4 text-teal-300">
         <div className="flex-1">
            <strong className="block text-white mb-2 text-lg">"No human trader could match our position or speed."</strong>
            <p className="text-sm opacity-90 leading-relaxed">AI isn't a feature; it's the operating system. AI optimises price signals, transforms complex engineering logs into natural language, auto-generates market bids, and tracks setpoints at sub-second speeds.</p>
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
              <p className="text-slate-400 text-sm">Sweden (SE1 & SE2). Delivering FCR-D, mFRR, aFRR to SVK directly. Highly cash positive.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-[#0a0f16] p-6 rounded-xl border border-slate-800/50">
            <Cloud className="text-blue-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">2. Flexibility as a Service (FaaS)</h3>
              <p className="text-slate-400 text-sm">Full-stack operation for 3rd party asset owners. We handle TSO prequalification, bidding, reporting, and monitoring.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-[#0a0f16] p-6 rounded-xl border border-slate-800/50">
            <Wind className="text-teal-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">3. Wind Farm Partnerships</h3>
              <p className="text-slate-400 text-sm">HPC infra installed behind the meter at European wind farms. Absorbs excess generation. Defeats curtailment penalties directly.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                     <span className="text-sm text-slate-300">Ancillary Market 2030</span> <span className="font-bold text-white">$300B+</span>
                  </div>
               </div>
               
               <div className="bg-[#05080c] p-4 rounded-xl border border-slate-800">
                  <h3 className="text-white font-bold mb-2">The AI Data Center Play</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">Future compute use targets <strong>Dedicated AI inference + HPC</strong>. As AI inference surpasses traditional compute value, we simply convert our existing infrastructure to AI compute.</p>
                  <p className="text-sm text-emerald-400 font-bold">No new permits, no new cables. Bypassing the 3+ year European grid waiting list.</p>
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
                  <li className="flex justify-between"><strong className="text-white">Current</strong> <span>Sweden (SE1 & SE2)</span></li>
                  <li className="flex justify-between"><strong className="text-white">Nordic Pipeline</strong> <span>Denmark, Norway</span></li>
                  <li className="flex justify-between"><strong className="text-white">Europe Expansion</strong> <span>Germany</span></li>
                  <li className="flex justify-between"><strong className="text-white">Asia Pacific</strong> <span>Japan (Partnership outreach)</span></li>
               </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Flame className="text-orange-400 w-6 h-6" /> Heat Reuse & Green Impact
               </h2>
               <ul className="space-y-2 text-sm text-slate-300 mb-4">
                  <li>• Zero hazardous materials</li>
                  <li>• Captures HPC heat exhaust for district heating / agriculture</li>
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
