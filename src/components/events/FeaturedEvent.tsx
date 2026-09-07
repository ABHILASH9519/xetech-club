import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { FEATURED_EVENT } from '../../data/events';
import type { ClubEvent } from '../../types';

interface FeaturedEventProps {
  onRegister: (event: ClubEvent) => void;
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({ onRegister }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative rounded-3xl p-1 bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 shadow-2xl shadow-fuchsia-950/60 mb-16 group">
      <div className="relative rounded-[22px] bg-[#0d051f]/95 backdrop-blur-2xl p-6 sm:p-10 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              Flagship Hands-On Masterclass
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono">
              Cohort 2026
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Seats filling fast</span>
          </div>
        </div>

        {/* Event Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {FEATURED_EVENT.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {FEATURED_EVENT.description}
            </p>

            {/* Pipeline Visual Flow */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold mb-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Hands-On Mastery Pipeline:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {FEATURED_EVENT.pipeline?.map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-purple-400/30 text-xs sm:text-sm font-mono font-medium text-purple-200 shadow-sm flex items-center gap-1.5 hover:border-pink-400 hover:text-white transition">
                      <span className="text-[10px] text-pink-400 font-bold">0{i + 1}</span>
                      <span>{node}</span>
                    </div>
                    {i < (FEATURED_EVENT.pipeline?.length || 0) - 1 && (
                      <ChevronRight className="w-4 h-4 text-purple-500/60 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span className="font-semibold text-white">{FEATURED_EVENT.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>{FEATURED_EVENT.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span>{FEATURED_EVENT.venue}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {FEATURED_EVENT.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-purple-300 border border-purple-500/20"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Card Box */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#14082c] border border-purple-500/30 space-y-4 text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                Participation Pass
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white font-mono">100% Free</span>
                <span className="text-xs text-fuchsia-400 font-medium">For University Students</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-300 py-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Dedicated cloud sandbox credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Live deployment to production K8s cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Verifiable digital completion badge</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => onRegister(FEATURED_EVENT)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-pink-500/30 hover:shadow-fuchsia-500/40 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for CloudForge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-purple-500/20 text-xs font-semibold text-gray-300 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showDetails ? 'Hide Syllabus' : 'View Event Syllabus'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Syllabus Breakdown */}
        {showDetails && (
          <div className="mt-8 pt-6 border-t border-purple-500/25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">Part 1 • Systems</div>
              <h4 className="text-sm font-bold text-white mb-1">Linux & Git Hygiene</h4>
              <p className="text-xs text-gray-400">Command line navigation, SSH keys, file permissions, and Git branching strategies.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">Part 2 • Packaging</div>
              <h4 className="text-sm font-bold text-white mb-1">Docker Containers</h4>
              <p className="text-xs text-gray-400">Writing multi-stage Dockerfiles, caching layers, and managing local container networks.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">Part 3 • Delivery</div>
              <h4 className="text-sm font-bold text-white mb-1">CI/CD with Jenkins</h4>
              <p className="text-xs text-gray-400">Building automated testing and container image publishing on code pushes.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">Part 4 • Scale</div>
              <h4 className="text-sm font-bold text-white mb-1">Kubernetes Ingress</h4>
              <p className="text-xs text-gray-400">Deploying pods, services, ingress routing, and observing rolling updates.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
