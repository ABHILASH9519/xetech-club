import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Users } from 'lucide-react';

interface CommunityCTAProps {
  onOpenJoinModal: () => void;
}

export const CommunityCTA: React.FC<CommunityCTAProps> = ({ onOpenJoinModal }) => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 80;
      const targetPos = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700 shadow-2xl shadow-fuchsia-950/70 overflow-hidden">
          {/* Internal Glow Blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-500/25 blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="relative rounded-[22px] bg-[#0c041c]/95 backdrop-blur-2xl px-6 py-16 sm:px-12 sm:py-20 text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Ready for the Next Step?</span>
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
              Build Something That <span className="text-gradient-primary">Matters.</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl font-mono text-purple-200/90 max-w-2xl mx-auto mb-4 font-bold">
              “Learn together. Build together. Deploy together.”
            </p>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of fellow university students building real-world cloud platforms, automating infrastructure, and mastering modern AI agent workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-pink-500/30 hover:shadow-fuchsia-500/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join XeTech Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-purple-400/30 text-white font-semibold text-sm backdrop-blur-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-fuchsia-400" />
                <span>Explore Projects</span>
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="mt-10 pt-8 border-t border-purple-500/20 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-pink-400" />
                500+ Student Engineers
              </span>
              <span className="hidden sm:inline text-purple-500">•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                100% Free & Open Access
              </span>
              <span className="hidden sm:inline text-purple-500">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                Weekly Hands-On Sessions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
