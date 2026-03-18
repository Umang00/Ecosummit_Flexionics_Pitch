import { DollarSign, TrendingUp, Cpu, Workflow, Landmark, Banknote, Activity } from 'lucide-react';

export function FinancialsFunding() {
  const metrics = [
    { icon: <DollarSign />, label: "2024 ARR", value: "$12M" },
    { icon: <TrendingUp />, label: "2024 EBITDA", value: "$3M" },
    { icon: <TrendingUp />, label: "2027 Projected Rev", value: "$52.9M" },
    { icon: <Banknote />, label: "2027 Projected EBITDA", value: "$38M" },
    { icon: <Workflow />, label: "Capital Invested To Date", value: "~$14–15M" },
    { icon: <Landmark />, label: "Series A Target", value: "$10.5M" }
  ];

  return (
    <div className="space-y-12">
      <div className="mb-2">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Financials & Funding</h1>
        <p className="text-xl text-slate-400 font-light border-l-4 border-teal-500 pl-4">
          Data confirmed across pitch decks and financial models (Updated 2026-03-18).
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center flex flex-col items-center justify-center hover:border-teal-500/30 transition-colors">
            <div className="text-teal-500 mb-3">{m.icon}</div>
            <div className="text-3xl font-black text-white mb-1">{m.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Unit Economics */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Unit Economics (Per MW)</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Infrastructure Cost (CapEx)</span>
              <span className="text-lg font-bold text-white">~$350k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Annual Gross Profit</span>
              <span className="text-lg font-bold text-teal-400">~$310k <span className="text-sm font-normal text-slate-500">(88% of CapEx)</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Gross Margin</span>
              <span className="text-lg font-bold text-white">51%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Average Payback</span>
              <span className="text-lg font-bold text-white">~18 months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Phase 1 Expansion IRR</span>
              <span className="text-lg font-bold text-emerald-400">&gt;50%</span>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <Activity className="text-teal-500 w-5 h-5" /> Revenue Profile
           </h2>
           <p className="text-slate-300 font-medium mb-4 italic">100% recurring operational revenue.</p>
           
           <div className="space-y-4">
             <div>
               <div className="flex justify-between text-sm mb-1"><span className="text-white font-bold">Grid Flexibility (Ancillary Markets)</span> <span className="text-teal-400 font-bold">57%</span></div>
               <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-teal-500 h-2 rounded-full" style={{width: '57%'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-1"><span className="text-white font-bold">Compute Hosting</span> <span className="text-blue-400 font-bold">43%</span></div>
               <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '43%'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-1"><span className="text-slate-400 font-bold">Platform SaaS (Launching 2026)</span> <span className="text-slate-500 font-bold">&lt;1%</span></div>
               <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-slate-600 h-2 rounded-full" style={{width: '1%'}}></div></div>
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Live Operations */}
        <div className="bg-[#05080c] border border-blue-500/20 shadow-[inset_0_0_40px_rgba(59,130,246,0.02)] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <Cpu className="text-blue-400" /> Live Operations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-300">
              <strong className="block text-white mb-1">14 MW Currently Live</strong>
              Boden, SE1 (12 MW) + Utansjö, SE1 (2 MW). <br/><span className="italic opacity-80">(Note: Mellerud site (1 MW) is offline and excluded from pitch data).</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-800 pb-2">
              <span>Energy Security Delivered</span>
              <strong className="text-white">229.5 GWh Committed / 26.6 GWh Activated</strong>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-800 pb-2">
              <span>mFRR Activations Recorded</span>
              <strong className="text-white">11,245</strong>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-300">
              <span>Future Capacity Target</span>
              <strong className="text-teal-400">44 MW (Post-Raise)</strong>
            </div>
          </div>
        </div>

        {/* Funding History & Valuation */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Funding & Use of Funds</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">History</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between"><strong className="text-white">Seed Round (2022)</strong> £1.3M</div>
                <div className="flex justify-between"><strong className="text-white">Asset Finance (23-24)</strong> ~£13M (Site Infra)</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Current Ask: $10.5M Series A</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500" /> Utansjö Expansion (45%)</span> <strong>$4.7M</strong></div>
                <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Platform Engineering (30%)</span> <strong>$3.1M</strong></div>
                <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Sales & GTM (15%)</span> <strong>$1.6M</strong></div>
                <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-500" /> Working Capital (10%)</span> <strong>$1.1M</strong></div>
              </div>
            </div>

            <div className="p-3 bg-teal-500/10 rounded-lg text-xs text-teal-300 border border-teal-500/20 italic">
               Note for Q&A: Pre-money valuation expectation is not explicitly stated on slides, but internal DCF supports $45M+.
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Benchmarking */}
      <div className="bg-[#05080c] p-8 rounded-2xl border border-slate-800 overflow-x-auto">
         <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <TrendingUp className="text-teal-500 w-5 h-5" /> Competitive Benchmarking
         </h2>
         <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider text-xs border-b border-slate-800">
              <tr>
                <th className="p-4 rounded-tl-lg">Metric</th>
                <th className="p-4 text-teal-400 font-bold bg-teal-900/10">Flexionics</th>
                <th className="p-4">Standard BESS (Lithium)</th>
                <th className="p-4 rounded-tr-lg">Pure Compute Co-lo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-4 font-medium text-white">CapEx per MW</td>
                <td className="p-4 font-bold text-teal-400 bg-teal-900/10">~$350k</td>
                <td className="p-4">~$1.5M - $2M</td>
                <td className="p-4">~$300k</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Response Time</td>
                <td className="p-4 font-bold text-teal-400 bg-teal-900/10">&lt;0.7s</td>
                <td className="p-4">&lt;1.0s</td>
                <td className="p-4 text-slate-500">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Duration Limit</td>
                <td className="p-4 font-bold text-teal-400 bg-teal-900/10">Unlimited</td>
                <td className="p-4 text-rose-300">2-4 hours limit</td>
                <td className="p-4 text-slate-500">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Degradation</td>
                <td className="p-4 font-bold text-teal-400 bg-teal-900/10">Zero capacity fade</td>
                <td className="p-4 text-rose-300">2-3% annual tracking fade</td>
                <td className="p-4 text-slate-500">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Primary Revenue</td>
                <td className="p-4 font-bold text-teal-400 bg-teal-900/10">Dual (Grid + Compute)</td>
                <td className="p-4">Single (Grid)</td>
                <td className="p-4">Single (Compute)</td>
              </tr>
            </tbody>
         </table>
      </div>
    </div>
  );
}
