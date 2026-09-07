import React, { useState } from 'react';
import {
  Cloud,
  Terminal,
  Cpu,
  Sparkles,
  Activity,
  Layers,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { DOMAINS } from '../../data/domains';
import type { Domain } from '../../types';
import { DomainDetailModal } from './DomainDetailModal';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Cloud,
  Terminal,
  Cpu,
  Sparkles,
  Activity,
  Layers,
};

interface DomainsProps {
  onOpenJoinModal: () => void;
}

export const Domains: React.FC<DomainsProps> = ({ onOpenJoinModal }) => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  return (
    <section id="domains" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Specialized Focus Wings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology <span className="text-gradient-primary">Domains</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Explore our six specialized technology tracks. Each domain provides hands-on sandbox labs, peer study groups, and real-world student engineering initiatives.
          </p>
        </div>

        {/* 6 Interactive Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOMAINS.map((domain) => {
            const IconComponent = ICON_MAP[domain.icon] || Cloud;
            return (
              <div
                key={domain.id}
                className="group relative rounded-2xl p-7 bg-gradient-to-b from-[#130728]/95 to-[#0b0417]/95 border border-purple-500/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-950/50 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle internal gradient accent on hover */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-fuchsia-600/10 blur-2xl group-hover:bg-pink-500/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon and Action Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center text-fuchsia-400 group-hover:text-pink-300 group-hover:scale-105 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <button
                      onClick={() => setSelectedDomain(domain)}
                      className="flex items-center gap-1 text-[11px] font-mono text-purple-300 hover:text-white px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-fuchsia-500/20 border border-purple-500/20 transition cursor-pointer"
                    >
                      <span>Curriculum</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Domain Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-pink-200 transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-xs font-medium text-purple-300/80 mb-3 font-mono">
                    {domain.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div>
                  <div className="pt-4 border-t border-purple-500/15">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                      Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#180b33] text-gray-200 border border-purple-500/25 group-hover:border-fuchsia-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {domain.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-purple-400 border border-white/[0.05]">
                          +{domain.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-5 pt-3">
                    <button
                      onClick={() => setSelectedDomain(domain)}
                      className="w-full py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-600/20 border border-white/[0.06] hover:border-fuchsia-400/40 text-xs font-semibold text-gray-200 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Labs & Roadmap</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain Detail Modal */}
      <DomainDetailModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onOpenJoinModal={onOpenJoinModal}
      />
    </section>
  );
};
