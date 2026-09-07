import React from 'react';
import {
  Code,
  Briefcase,
  Users2,
  Presentation,
  CalendarCheck,
  Lightbulb,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { COMMUNITY_STATS } from '../../data/team';

const PILLARS = [
  {
    icon: Code,
    title: 'Hands-on Learning',
    description: 'We prioritize active terminal sessions and sandbox clouds over passive lectures. Students build, break, and fix real infrastructure.',
    tag: 'Zero Theory Fluff',
    gradient: 'from-pink-500/20 to-fuchsia-500/10',
    borderColor: 'group-hover:border-pink-500/50',
    iconColor: 'text-pink-400',
  },
  {
    icon: Briefcase,
    title: 'Industry-Oriented Skills',
    description: 'Direct alignment with modern engineering demands: multi-cloud architectures, Kubernetes, CI/CD automation, and autonomous AI agents.',
    tag: 'Production Standards',
    gradient: 'from-fuchsia-500/20 to-purple-600/10',
    borderColor: 'group-hover:border-fuchsia-500/50',
    iconColor: 'text-fuchsia-400',
  },
  {
    icon: Users2,
    title: 'Collaborative Projects',
    description: 'Cross-functional student squads ship open-source platforms, campus developer utilities, and research prototypes together.',
    tag: 'Team Synergy',
    gradient: 'from-purple-600/20 to-indigo-600/10',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-400',
  },
  {
    icon: Presentation,
    title: 'Workshops & Masterclasses',
    description: 'Intensive weekend deep-dives like CloudForge that lead students from zero knowledge to containerized cluster deployments.',
    tag: 'Guided Practice',
    gradient: 'from-violet-500/20 to-pink-500/10',
    borderColor: 'group-hover:border-violet-500/50',
    iconColor: 'text-violet-400',
  },
  {
    icon: CalendarCheck,
    title: 'Technical Events & Hackathons',
    description: 'High-stakes hackathons, bug hunts, and architecture design tournaments that challenge students to innovate under pressure.',
    tag: 'Competitive Edge',
    gradient: 'from-pink-600/20 to-rose-600/10',
    borderColor: 'group-hover:border-pink-500/50',
    iconColor: 'text-rose-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Incubation',
    description: 'A platform to turn wild technical ideas into verifiable MVPs, research papers, or student-led tech ventures with alumni guidance.',
    tag: 'Next-Gen Ideas',
    gradient: 'from-fuchsia-600/20 to-violet-600/10',
    borderColor: 'group-hover:border-fuchsia-500/50',
    iconColor: 'text-fuchsia-300',
  },
  {
    icon: TrendingUp,
    title: 'Community Growth & Mentorship',
    description: 'Senior students and working alumni actively review pull requests, conduct resume teardowns, and prepare members for cloud careers.',
    tag: 'Lasting Network',
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'group-hover:border-purple-400/50',
    iconColor: 'text-purple-300',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Foundation & Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What is <span className="text-gradient-primary">XeTech?</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            XeTech is a student-led technology community focused on practical learning, experimentation, collaboration, projects, workshops, and exposure to modern technologies.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            We reject passive lectures in favor of real terminal outputs, live cloud architectures, and production-grade code. From freshmen writing their first Dockerfile to seniors designing multi-agent AI swarms, XeTech provides the platform, resources, and community to excel.
          </p>
        </div>

        {/* Impact Numbers Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMMUNITY_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0e0620]/80 border border-purple-500/20 backdrop-blur-xl text-center relative overflow-hidden group hover:border-fuchsia-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-primary mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars 7-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#130728]/90 to-[#0b0417]/90 border border-purple-500/20 backdrop-blur-xl ${pillar.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-950/40 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center ${pillar.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-medium text-fuchsia-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Student-Driven Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
