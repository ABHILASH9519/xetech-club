import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, domain: string) => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('2nd Year');
  const [domain, setDomain] = useState('Cloud Engineering');
  const [github, setGithub] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `XeTech Club application: ${domain}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Year: ${year}`,
      `Domain: ${domain}`,
      `GitHub / Portfolio: ${github.trim() || 'Not provided'}`,
      '',
      interest.trim(),
    ].join('\n');

    // This site has no admissions API. Prepare a user-reviewed email rather
    // than claiming that an application was stored or accepted.
    setIsSubmitting(true);
    window.location.href = `mailto:contact@xetech.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    onSuccess(name.trim(), domain);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0f0721]/95 border border-fuchsia-500/30 shadow-2xl shadow-purple-950/50 text-left my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
      >
        {/* Background glow behind modal */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-fuchsia-500/20 border border-fuchsia-400 flex items-center justify-center text-fuchsia-400 mb-4 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Email Prepared</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              Your email application should open with your details. Send the draft to contact@xetech.dev to submit your application. This website does not store applications or issue invitations.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                Cohort 2026 Admissions
              </span>
            </div>

            <h2 id="join-modal-title" className="text-2xl font-bold text-white mb-1">
              Join XeTech Club
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Connect with fellow student builders. Gain access to cloud sandboxes, weekly hands-on labs, and production hackathons.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    University Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Year of Study
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#180d35] border border-purple-500/25 text-white text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                  >
                    <option value="1st Year">1st Year (Freshman)</option>
                    <option value="2nd Year">2nd Year (Sophomore)</option>
                    <option value="3rd Year">3rd Year (Junior)</option>
                    <option value="4th Year">4th Year (Senior)</option>
                    <option value="Postgraduate">Postgraduate / Masters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Primary Domain Interest *
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#180d35] border border-purple-500/25 text-white text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                >
                  <option value="Cloud Engineering">Cloud Engineering (AWS, Azure, GCP)</option>
                  <option value="DevOps">DevOps (Docker, Kubernetes, CI/CD)</option>
                  <option value="Automation">Automation & IaC (Terraform, Ansible)</option>
                  <option value="Agentic AI">Agentic AI & LLMs (LangChain, Swarms)</option>
                  <option value="AIOps">AIOps & Observability (Prometheus, Grafana)</option>
                  <option value="Platform Engineering">Platform Engineering & Golden Paths</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  GitHub Profile or Portfolio (Optional)
                </label>
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="github.com/username"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  What would you like to build or learn at XeTech?
                </label>
                <textarea
                  rows={2}
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="Tell us about technologies you're excited to explore..."
                  className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 hover:shadow-fuchsia-500/35 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Preparing Email Draft...</span>
                  ) : (
                    <>
                      <span>Prepare Application Email</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Your details are placed in an email draft for you to review. Nothing is submitted until you send it.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
