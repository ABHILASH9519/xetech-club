import React, { useEffect } from 'react';
import { X, CheckCircle2, Terminal, Code2, ArrowRight, Layers } from 'lucide-react';
import type { Domain } from '../../types';

interface DomainDetailModalProps {
  domain: Domain | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export const DomainDetailModal: React.FC<DomainDetailModalProps> = ({
  domain,
  onClose,
  onOpenJoinModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && domain) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [domain, onClose]);

  if (!domain) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl bg-[#0e0620]/95 border border-fuchsia-500/30 shadow-2xl shadow-purple-950/60 text-left my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="domain-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close domain details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fuchsia-400 px-2.5 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30">
            Domain Focus Area
          </span>
        </div>

        <h3 id="domain-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-1">
          {domain.name}
        </h3>
        <p className="text-sm font-medium text-purple-300 mb-4">{domain.subtitle}</p>

        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {domain.description}
        </p>

        {/* Technologies Covered */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-pink-400" />
            Core Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {domain.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.06] text-white border border-purple-500/30 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Curriculum Topics */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-fuchsia-400" />
            Hands-on Syllabus & Labs
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {domain.topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-gray-200"
              >
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Club Capstone Project */}
        <div className="mb-6 p-4 rounded-xl bg-[#14082c] border border-purple-500/30">
          <div className="flex items-center gap-2 text-xs font-mono text-fuchsia-300 font-semibold mb-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Sample Student Capstone Project</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            {domain.sampleProject}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-purple-500/20">
          <p className="text-xs text-gray-400">
            Open to all enrolled students regardless of branch or semester.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenJoinModal();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Join This Domain Squad</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
