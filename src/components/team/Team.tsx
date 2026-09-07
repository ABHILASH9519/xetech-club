import React, { useState } from 'react';
import { Users, Shield, Award, Terminal, Sparkles, Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { TEAM_MEMBERS } from '../../data/team';

interface TeamProps {
  onOpenJoinModal: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenJoinModal }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Faculty' | 'Lead' | 'Core' | 'Mentor'>('All');

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (activeTab === 'All') return true;
    return member.category === activeTab;
  });

  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>Community Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Team & <span className="text-gradient-primary">Mentors</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            XeTech is guided by faculty advisors, student coordinators, domain leads, and industry alumni mentors dedicated to fostering technical excellence.
          </p>

          <p className="text-xs text-purple-300 font-mono">
            Structured for seamless handoffs across academic cohorts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Faculty', 'Lead', 'Core', 'Mentor'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-purple-500/20'
              }`}
            >
              {tab === 'All'
                ? 'All Team'
                : tab === 'Faculty'
                ? 'Faculty Advisors'
                : tab === 'Lead'
                ? 'Student Leadership'
                : tab === 'Core'
                ? 'Domain Leads'
                : 'Technical Mentors'}
            </button>
          ))}
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#130728]/90 to-[#0b0417]/90 border border-purple-500/20 backdrop-blur-xl hover:border-fuchsia-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-fuchsia-950/40 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Avatar Placeholder Badge */}
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500/20 via-purple-600/30 to-fuchsia-500/20 border border-purple-500/30 flex items-center justify-center text-fuchsia-300 font-mono font-bold text-base group-hover:scale-105 transition-transform duration-300 shadow-md">
                    {member.category === 'Faculty' ? (
                      <Award className="w-8 h-8 text-pink-400" />
                    ) : member.category === 'Mentor' ? (
                      <Shield className="w-8 h-8 text-purple-400" />
                    ) : (
                      <Terminal className="w-8 h-8 text-fuchsia-400" />
                    )}
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                      member.category === 'Faculty'
                        ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                        : member.category === 'Lead'
                        ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                        : member.category === 'Mentor'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-white/5 text-gray-300 border border-white/10'
                    }`}
                  >
                    {member.category}
                  </span>
                </div>

                {/* Name / Role Placeholder Header */}
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-pink-200 transition-colors">
                    {member.placeholderLabel}
                  </h3>
                  <p className="text-xs text-fuchsia-400 font-semibold">{member.role}</p>
                  <p className="text-[11px] text-gray-400 font-mono">{member.department}</p>
                </div>

                {/* Bio */}
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div>
                {/* Focus Badges */}
                <div className="pt-3 border-t border-purple-500/15 mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.focus.map((f, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-purple-200 border border-purple-500/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social placeholders */}
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="p-1.5 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] transition cursor-pointer">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="p-1.5 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] transition cursor-pointer">
                    <GithubIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="p-1.5 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] transition cursor-pointer">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Core Team Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-fuchsia-950/30 to-[#0d051e] border border-purple-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape the Future of XeTech</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Want to join the Core Team or Mentor?</h3>
            <p className="text-sm text-gray-300 max-w-xl">
              We recruit active domain leads, lab coordinators, and technical writers every semester. Join our student leadership circle.
            </p>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Apply for Core Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
