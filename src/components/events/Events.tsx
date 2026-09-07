import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Video } from 'lucide-react';
import { OTHER_EVENTS } from '../../data/events';
import type { ClubEvent } from '../../types';
import { FeaturedEvent } from './FeaturedEvent';
import { RegisterModal } from './RegisterModal';

interface EventsProps {
  onSuccessToast: (attendee: string, eventName: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onSuccessToast }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<ClubEvent | null>(null);

  const filteredEvents = OTHER_EVENTS.filter((evt) => {
    if (filter === 'All') return true;
    if (filter === 'Upcoming') return evt.status === 'Upcoming' || evt.status === 'Registration Open';
    if (filter === 'Completed') return evt.status === 'Completed';
    return true;
  });

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Masterclasses & Hackathons</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Upcoming & Past <span className="text-gradient-primary">Events</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Gain practical, production-level engineering experience through our structured workshops, hackathons, and technical bootcamps.
          </p>
        </div>

        {/* Prominent Featured Event: CloudForge */}
        <FeaturedEvent onRegister={(event) => setActiveModalEvent(event)} />

        {/* Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white">More Club Sessions</h3>
            <p className="text-xs text-gray-400">Regular weekend workshops and community competitions</p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-purple-500/20 backdrop-blur-md">
            {(['All', 'Upcoming', 'Completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  filter === tab
                    ? 'bg-fuchsia-600 text-white font-semibold shadow-md shadow-fuchsia-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#130728]/90 to-[#0b0417]/90 border border-purple-500/20 backdrop-blur-xl hover:border-fuchsia-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Event Top Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {evt.type}
                  </span>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                      evt.status === 'Completed'
                        ? 'bg-white/5 text-gray-400 border border-white/10'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                  {evt.title}
                </h4>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {evt.description}
                </p>

                {/* Metadata */}
                <div className="space-y-2 text-xs text-gray-300 mb-6 pb-5 border-b border-purple-500/15">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>{evt.date}</span>
                    <span className="text-gray-500">|</span>
                    <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                </div>
              </div>

              {/* Tags and CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {evt.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {evt.registrationOpen ? (
                  <button
                    onClick={() => setActiveModalEvent(evt)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:from-pink-500 hover:to-purple-600 border border-purple-500/40 hover:border-transparent text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Register for Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      alert('Session completed! Access slide decks and recordings in the Resources section.')
                    }
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Materials & Recording</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <RegisterModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
        onSuccess={(attendee, eventTitle) => {
          onSuccessToast(attendee, eventTitle);
        }}
      />
    </section>
  );
};
