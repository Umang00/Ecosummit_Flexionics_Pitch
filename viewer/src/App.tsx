import { useState } from 'react';
import { Presentation, FileText, ChevronRight, Menu } from 'lucide-react';

import { PitchDeckViewer } from './components/PitchDeckViewer';
import { slides } from './data/slides';

import { EventAnalysis } from './components/research/EventAnalysis';
import { FinancialsFunding } from './components/research/FinancialsFunding';
import { TechnologyProducts } from './components/research/TechnologyProducts';
import { TeamProfile } from './components/research/TeamProfile';
import { PitchStrategy } from './components/research/PitchStrategy';
import { NumberVerification } from './components/research/NumberVerification';

const DOCS = [
  { id: 'pitch', title: 'Pitch Deck', icon: <Presentation className="w-5 h-5" />, Component: () => <PitchDeckViewer slides={slides} />, type: 'presentation' },
  { id: 'r06', title: 'Number Verification', icon: <FileText className="w-5 h-5" />, Component: NumberVerification, type: 'research' },
  { id: 'r01', title: 'Event Analysis', icon: <FileText className="w-5 h-5" />, Component: EventAnalysis, type: 'research' },
  { id: 'r02', title: 'Financials & Funding', icon: <FileText className="w-5 h-5" />, Component: FinancialsFunding, type: 'research' },
  { id: 'r03', title: 'Technology & Products', icon: <FileText className="w-5 h-5" />, Component: TechnologyProducts, type: 'research' },
  { id: 'r04', title: 'Team Profile', icon: <FileText className="w-5 h-5" />, Component: TeamProfile, type: 'research' },
  { id: 'r05', title: 'Pitch Strategy', icon: <FileText className="w-5 h-5" />, Component: PitchStrategy, type: 'research' },
];



function App() {
  const [activeDocId, setActiveDocId] = useState('pitch');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeDoc = DOCS.find(d => d.id === activeDocId) || DOCS[0];

  return (
    <div className="flex h-screen w-full bg-[#05080c] text-slate-200 overflow-hidden font-sans selection:bg-teal-500/30">
      
      {/* Sidebar */}
      <div className={`transition-all duration-300 ease-in-out border-r border-slate-800 bg-[#0a0f16] flex flex-col ${sidebarOpen ? 'w-80' : 'w-0 opacity-0'} overflow-hidden shrink-0`}>
        <div className="p-6 pb-4 border-b border-slate-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-white.svg" alt="Flexionics" className="h-6 w-auto opacity-90" />
            <h1 className="text-sm font-semibold tracking-wide text-slate-400 whitespace-nowrap uppercase">EcoSummit '26</h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-10">
          
          {/* Section: Presentation */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Presentation</h2>
            <div className="space-y-1">
              {DOCS.filter(d => d.type === 'presentation').map(doc => (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeDocId === doc.id 
                      ? 'bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  {doc.icon}
                  <span className="truncate">{doc.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section: Research Context */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Research Context</h2>
            <div className="space-y-1">
              {DOCS.filter(d => d.type === 'research').map(doc => (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeDocId === doc.id 
                      ? 'bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  {doc.icon}
                  <span className="truncate">{doc.title}</span>
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-[#05080c] overflow-hidden relative">
        
        {/* Header Bar */}
        <header className="h-16 border-b border-slate-800/50 bg-[#0a0f16]/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10 w-full">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-800"></div>
            <div className="flex items-center gap-2 text-sm tracking-wide">
              <span className="text-slate-500 font-medium uppercase text-xs">{activeDoc.type}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
              <span className="font-semibold text-slate-200">{activeDoc.title}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Render Area */}
        <main className="flex-1 overflow-hidden relative">
          {activeDoc.type === 'presentation' ? (
            <activeDoc.Component />
          ) : (
            <div className="h-full w-full overflow-y-auto bg-[#0a0f16]">
              <div className="max-w-6xl mx-auto py-12 px-8">
                <activeDoc.Component />
              </div>
            </div>
          )}
        </main>
      </div>
      
    </div>
  );
}

export default App;
