import { CheckCircle2, AlertTriangle, FileSearch, Target, TrendingUp, DollarSign, Database, ShieldAlert } from 'lucide-react';

export function NumberVerification() {
  const tractionData = [
    { metric: "> $6M Total Revenue", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Actual revenues from 2022-2024 were $14.4M, $12.1M, and $12.1M." },
    { metric: "9x Revenue Growth in 5 months ($56k to $487k)", status: "Verified", source: "Colocation Partner Outreach - 250630.docx", notes: "This specific growth occurred over the period from January to May 2025." },
    { metric: "11,245 mFRR Activations (SE1)", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Directly sourced from internal documents." },
    { metric: "$712k Peak Monthly Ancillary Revenue", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "From June 2025 projections." },
    { metric: "229.5 GWh Grid Capacity Committed", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Directly sourced from internal documents." },
    { metric: "26.6 GWh Real Grid Deliveries", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Directly sourced from internal documents." },
    { metric: "80.9% Peak Participation Rate in SE1", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Directly sourced from internal documents." },
    { metric: "Revenue Split (43% compute / 57% flexibility)", status: "Verified", source: "Flexionics-Energy-AG-Enabling...pdf", notes: "Directly sourced from internal documents." },
    { metric: "42.5% Intermittent Energy by 2030", status: "Verified", source: "Web Source (RED III)", notes: "EU binding target for renewable energy (RED III)." },
    { metric: "650 MW Pipeline (9 Nordic wind farms)", status: "Verified", source: "Colocation Partner Outreach - 250630.docx", notes: "Listed in Colocation Partner Outreach." },
    { metric: "1.5 TWh Flexibility Delivered by 2030", status: "Verified", source: "Colocation Partner Outreach - 250630.docx", notes: "Listed in Colocation Partner Outreach." }
  ];

  const unitEconomics = [
    { metric: "~$350k/MW Install Cost", status: "Verified", source: "Ecosummit Pitch Transcript.docx & 250721_Flexionics_Pitch.pdf", notes: "Mentioned across multiple 2025 presentation materials." },
    { metric: "~$310k/MW Annual Gross Profit", status: "Verified", source: "250721_Flexionics_Pitch.pdf", notes: "Mentioned across multiple 2025 presentation materials." },
    { metric: "~18 months Payback", status: "Verified", source: "Colocation Partner Outreach - 250630.docx & 250214 Project Daedalus.pdf", notes: "In line with current project teaser metrics." },
    { metric: ">50% IRR (Phase 1)", status: "Verified", source: "2026 Flexionics Company Profile Content.docx & 250214 CEO Pitch.docx", notes: "Sourced from 2026 Company Profile Content." }
  ];
  
  const askInvestments = [
    { metric: "$10.5M Series A", status: "Verified", source: "250214 CEO Pitch.docx & Multiple Decks", notes: "Represents capital currently being raised for Expansion Phase 1 (target close July 2025)." },
    { metric: "Phase 2: $4.5M", status: "Verified", source: "2026 Flexionics Company Profile Content.docx", notes: "Conditional follow-on raise for Phase 2." },
    { metric: "~$14-15M capital raised to date", status: "Verified", source: "2024 pitch materials & 2025 presentation slides", notes: "Mentioned historically as $14m in 2024 and $15m in 2025." }
  ];
  
  const financialProjections = [
    { metric: "2024 Revenue $12M", status: "Verified", source: "250618_Flexionics_T2Y.pdf", discrepancy: false, notes: "Actual total revenues were ~$12.2M." },
    { metric: "2024 EBITDA $3M", status: "Discrepancy", source: "Financial Summaries", discrepancy: true, notes: "Actual 2024 EBITDA was reported as ~$1.52M." },
    { metric: "2025 Revenue $21.5M", status: "Discrepancy", source: "Financial Forecasts", discrepancy: true, notes: "Financial plans show ~$11M - $12M for 2025." },
    { metric: "2025 EBITDA ~$9M", status: "Discrepancy", source: "Financial Summaries", discrepancy: true, notes: "Projected 2025 EBITDA is roughly $1.0M - $1.17M." },
    { metric: "2027 Target Revenue $52.9M", status: "Verified", source: "250214 Project Daedalus - Teaser.pdf", discrepancy: false, notes: "Sourced from 250214 Project Daedalus - Teaser." },
    { metric: "2027 EBITDA $38M", status: "Major Discrepancy", source: "Financial Plans", discrepancy: true, notes: "Financial plans project an EBITDA of ~$20.2M for 2027. It appears the pitch deck confused the projected 38% EBITDA margin with an absolute dollar amount of $38M." },
    { metric: "CAGR 67%", status: "Discrepancy", source: "Financial Forecasts", discrepancy: true, notes: "The closest CAGR found in the documents is 64%. Other timelines show 54% or 136%." }
  ];

  const DataCard = ({ metric, status, source, notes, isDiscrepancy = false }: { metric: string, status: string, source?: string, notes: string, isDiscrepancy?: boolean }) => (
    <div className={`p-4 rounded-xl border ${isDiscrepancy ? 'bg-rose-500/5 border-rose-500/20' : 'bg-[#05080c] border-slate-800/50'} flex flex-col gap-2`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-bold ${isDiscrepancy ? 'text-rose-400' : 'text-slate-200'}`}>{metric}</h3>
        <div className={`shrink-0 px-2 py-1 rounded text-[10px] uppercase tracking-widest font-bold ${isDiscrepancy ? 'bg-rose-500/20 text-rose-300' : 'bg-teal-500/20 text-teal-400'}`}>
          {status}
        </div>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{notes}</p>
      {source && (
        <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-slate-500">
          <Database className="w-3.5 h-3.5" />
          {source}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Number Verification & Source Mapping</h1>
        <p className="text-slate-400 text-lg max-w-3xl">
          This document maps all the numbers used in the EcoSummit pitch deck to their source documents found within the provided RAG SourceLMs. It highlights where data is verified and flags discrepancies in projections that require attention.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <TrendingUp className="text-teal-500 w-6 h-6" /> Traction & Operational Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tractionData.map((item, idx) => <DataCard key={idx} {...item} />)}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-teal-500 w-6 h-6" /> Unit Economics (per MW)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unitEconomics.map((item, idx) => <DataCard key={idx} {...item} />)}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <DollarSign className="text-emerald-500 w-6 h-6" /> The Ask & Investments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {askInvestments.map((item, idx) => <DataCard key={idx} {...item} />)}
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3 text-amber-200 text-sm items-start">
           <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400" />
           <div>
             <strong className="block text-amber-400 mb-1">Minor Discrepancy on Mandate Target</strong>
             The term sheet document specifies the intent to raise EUR 50m in equity and debt, whereas the pitch deck references a €52M equity + debt facility target.
           </div>
        </div>
      </div>

      <div className="bg-rose-500/5 border border-rose-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <ShieldAlert className="text-rose-500 w-6 h-6" /> Financial Projections Review
        </h2>
        <p className="text-slate-400 mb-6 text-sm">
          Several projections in the presentation deck significantly overshoot internal models. These items have been highlighted below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {financialProjections.map((item, idx) => <DataCard key={idx} source="Internal Models / RAG SourceLM" {...item} isDiscrepancy={item.discrepancy} />)}
        </div>
      </div>

    </div>
  );
}
