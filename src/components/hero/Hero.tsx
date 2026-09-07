import React from 'react';
import { ArrowRight, Sparkles, Users, Layers, Shield } from 'lucide-react';
import { TerminalSimulator } from './TerminalSimulator';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Messaging & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-fuchsia-500/30 backdrop-blur-md shadow-md shadow-fuchsia-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-200">
                Student Technology Community
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs font-mono text-fuchsia-400 font-medium">2026 Cohort</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block">Welcome to</span>
                <span className="text-gradient-primary inline-block">XeTech Club</span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-purple-200/90 font-mono">
                Cloud. DevOps. Automation. AI.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Building a community of students who learn, build, experiment, and solve real-world problems with modern technology.
            </p>

            {/* Key Value Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-gray-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-purple-500/20">
                <Layers className="w-3.5 h-3.5 text-pink-400" />
                Hands-on Cloud Labs
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-purple-500/20">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                Peer Mentorship
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-purple-500/20">
                <Shield className="w-3.5 h-3.5 text-fuchsia-400" />
                Production Deployed
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleScrollToSection('about')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-pink-500/25 hover:shadow-fuchsia-500/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore XeTech</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-purple-400/30 hover:border-fuchsia-400 text-white font-semibold text-sm backdrop-blur-lg shadow-lg shadow-purple-950/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span>Join the Community</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Tech Simulator & Floating Nodes */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <TerminalSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};
