import React, { useState } from 'react';
import {
  MapPin,
  MessageSquare,
  Send,
  HelpCircle,
  ChevronDown,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { FAQS } from '../../data/faqs';

interface ContactProps {
  onSendMessage: (name: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSendMessage }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSendMessage(name || 'Fellow Tech Enthusiast');

      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Have a question about upcoming workshops, lab sandbox access, or project collaborations? Drop us a message or review our frequent questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Contact Form & Campus Info */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#130728]/95 to-[#0b0417]/95 border border-purple-500/25 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Transmission</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-6">
                Our student core team monitors transmissions daily and responds within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/25 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Transmission Received!</h4>
                  <p className="text-xs text-gray-300">
                    Thank you for reaching out. A XeTech team member will follow up at your university email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Chen"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 transition"
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#180d35] border border-purple-500/25 text-white text-sm focus:outline-none focus:border-fuchsia-400 transition"
                      >
                        <option value="General Inquiry">General Club Question</option>
                        <option value="Workshop Access">CloudForge & Workshops</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Mentorship">Mentorship & Career Advice</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can XeTech assist your technology journey?"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Campus & Sandbox Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/20 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Physical Lab</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Innovation Technology Center, Lab 402, Main Engineering Block
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/20 flex items-start gap-3">
                <Terminal className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Office Hours</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Tuesdays & Thursdays, 4:30 PM – 6:30 PM IST (In-person & Discord)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Collapsible Accordion */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-gradient-to-b from-[#130728]/80 to-[#0b0417]/80 border border-purple-500/20 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 text-white hover:text-pink-200 transition cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-purple-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-fuchsia-400' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-purple-500/10 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
