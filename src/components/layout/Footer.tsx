import React from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/xetech-club' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/company/xetech-club' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/xetech_club' },
  { label: 'Email', icon: Mail, href: 'mailto:contact@xetech.dev' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-[#070212] border-t border-purple-500/20 pt-16 pb-12 overflow-hidden text-left">
      {/* Background glow lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-600 to-purple-700 p-[1.5px] shadow-md shadow-pink-500/20">
                <div className="w-full h-full bg-[#0d051c] rounded-[10px] flex items-center justify-center">
                  <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-300">
                    X
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Xe<span className="text-fuchsia-400">Tech</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Club
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              A premier student technology community focused on Cloud Engineering, DevOps, Automation, Agentic AI, AIOps, and emerging technologies.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Telemetry: All university clusters operational (99.99%)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-pink-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Connect Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
              Community Transmissions
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Join our active community discussions, track open-source pull requests, and connect with domain mentors.
            </p>

            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`XeTech Club on ${soc.label}`}
                    className="w-9 h-9 rounded-xl bg-white/[0.04] border border-purple-500/20 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/15 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white pt-2 font-mono transition cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 XeTech Club. All rights reserved.</p>

          <p className="flex items-center gap-1">
            <span>Engineered with passion by student builders</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>at XeTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
