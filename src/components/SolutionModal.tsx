import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  iconName: string;
  capabilities: string[];
  enterpriseValue: string;
  technicalHighlights: string[];
}

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onInquire: (solutionTitle: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (solution) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [solution, onClose]);

  if (!solution) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="solution-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#07070C] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7022FC]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#7022FC]/20 text-[#FDBF32] border border-[#7022FC]/40 font-semibold">
            {solution.number}
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Apeiron Security Services
          </span>
        </div>

        <h3 id="solution-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          {solution.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {solution.shortDesc}
        </p>

        {/* Enterprise Strategic Value */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FDBF32] mb-1">
            Business Value
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {solution.enterpriseValue}
          </p>
        </div>

        {/* Capabilities List */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Key Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {solution.capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7022FC] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Technical Scope & Implementation
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside marker:text-[#FDBF32]">
            {solution.technicalHighlights.map((hl, i) => (
              <li key={i}>{hl}</li>
            ))}
          </ul>
        </div>

        {/* Action Footers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onInquire(solution.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] to-[#FDBF32] rounded-lg shadow-lg hover:brightness-110 transition-all duration-200"
          >
            <span>Inquire About {solution.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
