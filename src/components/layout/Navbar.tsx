import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

const NAV_ITEMS = [
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

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080312]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-950/40'
          : 'py-5 bg-[#080312]/30 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          {/* Futuristic Hexagon Logo Icon */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-600 to-purple-700 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-pink-500/20">
            <div className="w-full h-full bg-[#0d051c] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <span className="text-sm font-extrabold bg-gradient-to-br from-white via-pink-200 to-fuchsia-400 bg-clip-text text-transparent">
                X
              </span>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-fuchsia-400 rounded-full blur-[2px]" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-pink-100 transition-colors">
                Xe<span className="text-fuchsia-400">Tech</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Club
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono hidden sm:inline-block">
              Cloud • DevOps • AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-fuchsia-500/30 to-purple-600/30 border border-fuchsia-400/40 shadow-sm shadow-fuchsia-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-fuchsia-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenJoinModal}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 transition-all duration-300 group-hover:opacity-90" />
            <span className="relative block px-4 py-2 rounded-[11px] bg-[#0c041c] text-white transition-all duration-300 group-hover:bg-opacity-0 font-medium">
              Join XeTech
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-purple-500/20 text-gray-300 hover:text-white hover:bg-white/[0.1] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0418]/95 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl p-6 transition-all animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-fuchsia-600/30 to-purple-600/20 border border-fuchsia-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-purple-500/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white text-center font-semibold text-sm shadow-lg shadow-pink-500/20"
              >
                Join XeTech Community
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 py-1 font-mono">
                <Terminal className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>$ xetech --status ready</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
