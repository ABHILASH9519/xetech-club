import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Check,
} from 'lucide-react';
import { RESOURCES } from '../../data/resources';
import type { ResourceItem } from '../../types';

interface ResourcesProps {
  onCopyNotice: (title: string) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onCopyNotice }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Docs', 'Workshop', 'Cloud Labs', 'Learning', 'GitHub', 'Tools', 'Guides'];

  const filteredResources = RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAccess = (res: ResourceItem) => {
    setCopiedId(res.id);
    onCopyNotice(res.title);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="resources" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Knowledge Repository</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Developer <span className="text-gradient-primary">Resources</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Free, open-access curriculum documents, workshop slide decks, sandbox blueprints, and curated roadmaps authored by XeTech leads.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, tags, topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/25 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-fuchsia-400 transition"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-purple-500/20 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-fuchsia-600 text-white font-semibold shadow-md shadow-fuchsia-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#130728]/90 to-[#0b0417]/90 border border-purple-500/20 backdrop-blur-xl hover:border-fuchsia-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Top Badge and Format */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {res.category}
                  </span>

                  <span className="text-[11px] font-mono text-gray-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {res.format}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {res.description}
                </p>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-purple-500/15">
                  {res.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-purple-300 border border-purple-500/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Download / Access Button */}
                <button
                  onClick={() => handleAccess(res)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-600/20 border border-white/10 hover:border-fuchsia-500/40 text-xs font-semibold text-gray-200 hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedId === res.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Access Link Prepared</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span>Access Material & Repositories</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
