// src/components/Projects.jsx
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "ai-ml") {
      return (
        proj.category.toLowerCase().includes("ai") ||
        proj.category.toLowerCase().includes("machine learning") ||
        proj.category.toLowerCase().includes("vision")
      );
    }
    if (filter === "fullstack") {
      return proj.category.toLowerCase().includes("full-stack");
    }
    return true;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
              Portfolio Core
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              {/* Practical software applications, computer vision systems, and applied NLP research highlighting end-to-end technical problem solving and individual contributions. */}
            </p>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
          </div>

          {/* Filter Pills
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter("ai-ml")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filter === "ai-ml"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              AI & ML (2)
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filter === "fullstack"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Full-Stack (2)
            </button>
          </div> */}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-5 sm:p-6">
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-950 text-zinc-300 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.statusBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <div className="text-[11px] font-medium text-zinc-400 mb-2.5">
                    {project.subtitle}
                  </div>
                )}

                {/* Short Overview */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                  {project.shortOverview}
                </p>

                {/* Key Technical Highlights Callout */}
                {project.phase1Baseline && (
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-indigo-900/40 text-xs mb-4">
                    <div className="font-mono text-[10px] text-indigo-400 font-semibold mb-1 flex items-center justify-between">
                      <span>Phase 1 Baseline (SVM + TF-IDF)</span>
                      <span className="text-zinc-400 text-[9px]">Preliminary</span>
                    </div>
                    {/* <div className="flex flex-wrap gap-2.5 font-mono text-[11px] text-zinc-300">
                      <div>Acc: <span className="font-bold text-white">{project.phase1Baseline.metrics[0].value}</span></div>
                      <div>Macro F1: <span className="font-bold text-white">{project.phase1Baseline.metrics[1].value}</span></div>
                      <div>Fake Recall: <span className="font-bold text-white">{project.phase1Baseline.metrics[3].value}</span></div>
                    </div> */}
                  </div>
                )}

                {project.thresholdConfig && (
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs mb-4 flex flex-wrap items-center justify-between gap-1 font-mono">
                    <span className="text-zinc-400 text-[10px]">Threshold Logic:</span>
                    <div className="flex gap-2.5 text-[11px]">
                      <span className="text-amber-400 font-semibold">Control: {project.thresholdConfig.control}</span>
                      <span className="text-rose-400 font-semibold">Restrict: {project.thresholdConfig.restrict}</span>
                    </div>
                  </div>
                )}

                {project.id === "farmconnect" && (
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 mb-4">
                    <span>Architecture: Flask API • SQLAlchemy ORM • Authentication</span>
                  </div>
                )}

                {project.id === "ai-study-buddy" && (
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 mb-4">
                    <span>Integration: OpenRouter API • Express.js • MongoDB Sessions</span>
                  </div>
                )}

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-950 text-zinc-300 border border-zinc-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-zinc-950 text-zinc-400 border border-zinc-800/80">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-zinc-800/60 mt-2 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 py-1 transition-colors cursor-pointer"
                >
                  <span></span>
                  <span className="text-xs"></span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-950 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <FaGithub size={12} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
