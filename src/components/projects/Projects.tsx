import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Cloud', 'DevOps', 'AI', 'Automation', 'Platform'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Built by Students • Deployed for Scale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Real production engineering built and maintained by XeTech squads. From multi-cluster Kubernetes operators to self-healing agentic CI/CD pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#130728]/95 to-[#0b0417]/95 border border-purple-500/20 backdrop-blur-xl hover:border-fuchsia-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-fuchsia-950/50 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header Tag and Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-pink-400 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-purple-300 font-mono mb-4">
                  {project.tagline}
                </p>

                {/* Problem snippet */}
                <div className="mb-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-gray-300 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">
                    Challenge:
                  </span>
                  <p className="line-clamp-2 leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution snippet */}
                <div className="mb-4 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-gray-300 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-fuchsia-400 block">
                    Solution:
                  </span>
                  <p className="line-clamp-2 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="pt-3 border-t border-purple-500/15 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#190d35] text-gray-200 border border-purple-500/25"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-gray-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-gray-200 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 rounded-xl bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 hover:from-fuchsia-600/40 hover:to-purple-600/40 border border-fuchsia-500/30 text-xs font-medium text-fuchsia-300 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
