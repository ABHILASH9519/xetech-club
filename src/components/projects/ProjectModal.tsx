import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl bg-[#0e0620]/95 border border-fuchsia-500/30 shadow-2xl shadow-purple-950/60 text-left my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-400 px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30">
            {project.category} Architecture
          </span>
        </div>

        <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-purple-300 mb-6 font-mono">
          {project.tagline}
        </p>

        {/* Problem vs Solution Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-300 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              The Problem
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              The Engineered Solution
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Components */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-fuchsia-400" />
            System Architecture Components
          </h4>
          <div className="space-y-2">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-gray-200 font-mono"
              >
                <span className="text-fuchsia-400 font-bold">0{idx + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metric */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#14082c] border border-purple-500/30 text-xs text-purple-200">
          <span className="font-semibold text-pink-400 font-mono uppercase tracking-wider block mb-1">
            Measured Impact:
          </span>
          <p>{project.metrics}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-500/20">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.05] text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-xs font-semibold text-white transition flex items-center gap-1.5 shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Sandbox</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
