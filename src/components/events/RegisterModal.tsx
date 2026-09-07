import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Send, Clock, MapPin, Sparkles } from 'lucide-react';
import type { ClubEvent } from '../../types';

interface RegisterModalProps {
  event: ClubEvent | null;
  onClose: () => void;
  onSuccess: (attendeeName: string, eventTitle: string) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ event, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [hasLaptop, setHasLaptop] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && event) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [event, onClose]);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);
      onSuccess(name || 'Fellow Engineer', event.title);

      setTimeout(() => {
        setRegistered(false);
        setName('');
        setEmail('');
        setStudentId('');
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0f0723]/95 border border-fuchsia-500/30 shadow-2xl shadow-purple-950/60 text-left my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close registration"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-fuchsia-500/20 border border-fuchsia-400 flex items-center justify-center text-fuchsia-400 mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Seat Reserved!</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              You are officially registered for <span className="text-fuchsia-300 font-semibold">{event.title}</span>. Workshop instructions and credentials will be sent to your email.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                Event Pass • XeTech Club
              </span>
            </div>

            <h2 id="register-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-2">
              Register for {event.title}
            </h2>

            {/* Event Quick Info Banner */}
            <div className="mb-5 p-3.5 rounded-xl bg-white/[0.04] border border-purple-500/20 space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span className="font-semibold text-white">{event.date}</span>
                <span className="text-gray-500">|</span>
                <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
            </div>

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
                  placeholder="e.g. Jordan Smith"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    Student ID / Roll No *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. 24CS0142"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-purple-500/25 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hasLaptop"
                  checked={hasLaptop}
                  onChange={(e) => setHasLaptop(e.target.checked)}
                  className="rounded bg-purple-950 border-purple-500 text-fuchsia-600 focus:ring-fuchsia-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="hasLaptop" className="text-xs text-gray-300 cursor-pointer">
                  I will bring a laptop with a modern web browser for cloud terminal exercises.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 hover:shadow-fuchsia-500/35 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Allocating Cloud Seat...</span>
                  ) : (
                    <>
                      <span>Confirm Free Seat Registration</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Dedicated sandbox cloud credentials will be issued upon check-in.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
