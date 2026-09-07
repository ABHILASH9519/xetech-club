import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Zap,
} from 'lucide-react';
import { ROADMAP_STEPS } from '../../data/roadmap';

export const Roadmap: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ROADMAP_STEPS[activeStepIndex];

  return (
    <section id="roadmap" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Student Growth Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning <span className="text-gradient-primary">Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            How students progress from beginner systems concepts to shipping autonomous AI systems and managing multi-region cloud infrastructure.
          </p>

          {/* Core Mantra Ribbon */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold">
            {['Learn', 'Build', 'Deploy', 'Automate', 'Innovate'].map((verb, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] text-pink-300 border border-purple-500/30 shadow-sm">
                  {verb}
                </span>
                {idx < 4 && <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[720px] relative px-4">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-purple-900/50 z-0" />
            <div
              className="absolute top-1/2 left-8 h-0.5 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 z-0 transition-all duration-500"
              style={{
                width: `${(activeStepIndex / (ROADMAP_STEPS.length - 1)) * 92}%`,
              }}
            />

            {ROADMAP_STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;
              const isPast = index < activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(index)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white scale-110 shadow-lg shadow-pink-500/40 border border-white/40'
                        : isPast
                        ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40'
                        : 'bg-[#0f0722] text-gray-400 border border-purple-500/20 hover:border-purple-400/50'
                    }`}
                  >
                    {step.step}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium transition-colors ${
                      isActive ? 'text-pink-300 font-bold' : 'text-gray-400 group-hover:text-gray-200'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Showcase Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-purple-600/30 via-fuchsia-600/40 to-pink-500/30 border border-purple-500/30 shadow-2xl backdrop-blur-2xl">
          <div className="rounded-[22px] bg-[#0c051a]/95 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stage Info */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-primary">
                    {activeStep.step}
                  </span>
                  <div className="h-8 w-px bg-purple-500/30" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeStep.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-300">{activeStep.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                  {activeStep.description}
                </p>

                {/* Expected Practical Outcome */}
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/25 space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-pink-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Target Capability / Outcome:
                  </span>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {activeStep.outcomes}
                  </p>
                </div>

                {/* Tools Mastery */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2 font-semibold">
                    Core Tooling:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-white border border-purple-500/25"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Milestones Checklist */}
              <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-[#130728]/90 border border-purple-500/25 space-y-4 text-left">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-fuchsia-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Syllabus Deliverables & Checkpoints
                </h4>

                <div className="space-y-3">
                  {activeStep.milestones.map((ms, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200 leading-snug">{ms}</span>
                    </div>
                  ))}
                </div>

                {/* Next Stage Teaser */}
                <div className="pt-2 flex items-center justify-between text-xs text-gray-400 border-t border-white/[0.06]">
                  <span>
                    Phase {activeStepIndex + 1} of {ROADMAP_STEPS.length}
                  </span>
                  {activeStepIndex < ROADMAP_STEPS.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Next: {ROADMAP_STEPS[activeStepIndex + 1].title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-emerald-400 font-medium">Ready for Production Scale!</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
