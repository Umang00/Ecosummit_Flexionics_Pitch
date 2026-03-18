import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareText, Home } from 'lucide-react';
import type { SlideData } from '../data/slides';

export function PitchDeckViewer({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = useCallback(() => setCurrent(p => Math.min(p + 1, slides.length - 1)), [slides.length]);
  const prevSlide = useCallback(() => setCurrent(p => Math.max(p - 1, 0)), []);
  const resetSlide = () => setCurrent(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        resetSlide();
      } else if (e.key === 'End') {
        setCurrent(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, slides.length]);

  return (
    <div className="flex flex-col h-full bg-[#05080c] relative overflow-hidden">
      
      {/* Main Slide Area - Height responsive */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-0 relative group">
        
        {/* Side Navigation Overlays (Desktop/Visible on Hover) */}
        <button 
          onClick={prevSlide}
          disabled={current === 0}
          className="absolute left-4 z-20 p-4 rounded-full bg-slate-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-teal-500/50 disabled:hidden hidden lg:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button 
          onClick={nextSlide}
          disabled={current === slides.length - 1}
          className="absolute right-4 z-20 p-4 rounded-full bg-slate-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-teal-500/50 disabled:hidden hidden lg:block"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Canvas */}
        <div className="w-full max-w-6xl aspect-video bg-[#0a0f16] rounded-2xl shadow-2xl relative overflow-hidden border border-slate-800/50 flex flex-col max-h-full">
          {slides[current].content}
        </div>
      </div>

      {/* Control Bar - Guaranteed to be visible with min-h and shrink-0 */}
      <div className="min-h-16 h-16 border-t border-slate-800/50 bg-[#0a0f16]/95 backdrop-blur-md shrink-0 flex items-center justify-between px-4 sm:px-8 relative z-50">
        
        {/* Left: Indicator */}
        <div className="text-slate-500 font-medium text-xs sm:text-sm flex gap-2 items-center">
          <button 
            onClick={resetSlide} 
            className="p-1 hover:text-teal-400 transition-colors"
            title="Go to first slide"
          >
            <Home className="w-4 h-4" />
          </button>
          <span className="text-slate-300 font-bold ml-1">Slide {current + 1}</span> 
          <span>/</span> 
          <span>{slides.length}</span>
          <span className="ml-2 text-slate-600 hidden lg:inline-block truncate max-w-[200px]">— {slides[current].title}</span>
        </div>

        {/* Center: Progress Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 w-32 sm:w-64 hidden md:flex h-1 rounded-full overflow-hidden bg-slate-800">
          {slides.map((_, idx) => (
             <div 
               key={idx} 
               className={`flex-1 transition-all duration-300 ${idx <= current ? 'bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]' : 'bg-transparent'}`} 
             />
          ))}
        </div>

        {/* Right: Controls & Speaker Notes Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${showNotes ? 'bg-teal-500 text-slate-900 shadow-[0_0_15px_rgba(20,184,166,0.3)]' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            <MessageSquareText className="w-4 h-4" />
            <span className="hidden sm:inline">Speaker Notes</span>
          </button>

          <div className="w-px h-6 bg-slate-800 mx-1 hidden xs:block"></div>

          <div className="flex items-center gap-1">
            <button 
              onClick={prevSlide} 
              disabled={current === 0} 
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={current === slides.length - 1} 
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-teal-500/10 hover:text-teal-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Speaker Notes Overlay Panel */}
      <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl p-6 transition-all duration-300 transform origin-bottom z-[60] backdrop-blur-xl ${showNotes ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <MessageSquareText className="w-4 h-4" /> Teleprompter
          </h4>
          <button onClick={() => setShowNotes(false)} className="text-slate-500 hover:text-white text-xs font-medium bg-slate-800 px-2 py-1 rounded">Close [ESC]</button>
        </div>
        <div className="prose prose-invert max-w-none text-slate-200 text-base sm:text-lg leading-relaxed font-serif whitespace-pre-wrap max-h-[40vh] overflow-y-auto">
          {slides[current].speakerNotes}
        </div>
      </div>
    </div>
  );
}
