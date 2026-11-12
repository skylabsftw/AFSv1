import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export interface InsightArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  fullAnalysis: string[];
}

interface InsightModalProps {
  insight: InsightArticle | null;
  onClose: () => void;
  onConsult: (topic: string) => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ insight, onClose, onConsult }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (insight) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [insight, onClose]);

  if (!insight) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="insight-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#07070C] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7022FC]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Read Time (Clean unboxed metadata) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-3">
          <span className="text-[#FDBF32] font-semibold">{insight.category}</span>
          <span aria-hidden="true">·</span>
          <span>{insight.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>{insight.date}</span>
        </div>

        <h3 id="insight-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 text-balance">
          {insight.title}
        </h3>

        <p className="text-base text-slate-300 leading-relaxed mb-6 font-medium">
          {insight.summary}
        </p>

        {/* Key Takeaways */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#7022FC]/10 to-transparent border border-[#7022FC]/30 mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FDBF32] mb-3">
            Strategic Takeaways for Enterprise CISOs
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc list-inside marker:text-[#7022FC]">
            {insight.keyTakeaways.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Full Analysis Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
          {insight.fullAnalysis.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onConsult(insight.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] to-[#FDBF32] rounded-lg shadow-md hover:brightness-110 transition-all duration-200"
          >
            <span>Request In-Depth Intelligence Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Brief
          </button>
        </div>
      </div>
    </div>
  );
};
