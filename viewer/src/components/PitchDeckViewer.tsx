import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareText } from 'lucide-react';
import type { SlideData } from '../data/slides';

export function PitchDeckViewer({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = () => setCurrent(p => Math.min(p + 1, slides.length - 1));
  const prevSlide = () => setCurrent(p => Math.max(p - 1, 0));

  return (
    <div className="flex flex-col h-full bg-[#05080c] relative">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        {/* Slide Canvas */}
        <div className="w-full max-w-6xl aspect-video bg-[#0a0f16] rounded-2xl shadow-2xl relative overflow-hidden border border-slate-800/50 flex flex-col">
          {slides[current].content}
        </div>
      </div>

      {/* Control Bar */}
      <div className="h-16 border-t border-slate-800/50 bg-[#0a0f16]/90 backdrop-blur shrink-0 flex items-center justify-between px-8 relative z-50">
        
        {/* Left: Indicator */}
        <div className="text-slate-500 font-medium text-sm flex gap-2 items-center">
          <span className="text-slate-300 font-bold">Slide {current + 1}</span> 
          <span>/</span> 
          <span>{slides.length}</span>
          <span className="ml-4 text-slate-600 hidden sm:inline-block">— {slides[current].title}</span>
        </div>

        {/* Center: Progress Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 w-64 hidden md:flex h-1.5 rounded-full overflow-hidden bg-slate-800">
          {slides.map((_, idx) => (
             <div 
               key={idx} 
               className={`flex-1 transition-colors duration-300 ${idx <= current ? 'bg-teal-500' : 'bg-transparent'}`} 
             />
          ))}
        </div>

        {/* Right: Controls & Speaker Notes Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${showNotes ? 'bg-teal-500 text-slate-900 shadow-[0_0_15px_rgba(20,184,166,0.3)]' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            <MessageSquareText className="w-4 h-4" />
            <span className="hidden sm:inline">Speaker Notes</span>
          </button>

          <div className="w-px h-6 bg-slate-800 mx-1"></div>

          <button onClick={prevSlide} disabled={current === 0} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} disabled={current === slides.length - 1} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Speaker Notes Overlay Panel */}
      <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 transition-all duration-300 transform origin-bottom ${showNotes ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <MessageSquareText className="w-4 h-4" /> Teleprompter
          </h4>
          <button onClick={() => setShowNotes(false)} className="text-slate-500 hover:text-white text-sm font-medium">Close [X]</button>
        </div>
        <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed font-serif whitespace-pre-wrap">
          {slides[current].speakerNotes}
        </div>
      </div>
    </div>
  );
}
