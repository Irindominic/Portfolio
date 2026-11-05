// src/components/ProjectModal.jsx
import React, { useEffect } from "react";
import { FaTimes, FaGithub, FaCheckCircle, FaExclamationTriangle, FaChartBar } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl p-5 sm:p-7 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <FaTimes size={16} />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-5">
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.statusBadge}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-xs font-medium text-zinc-400 mt-0.5">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Deployment Notice Banner */}
        {project.deploymentNotice && (
          <div className="mb-5 p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span>{project.deploymentNotice}</span>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
            Technology Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-900 text-zinc-200 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement & Objective */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
            <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1.5">
              Problem Statement
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
              Objective
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* WatchTower Threshold Visualizer
        {project.thresholdConfig && (
          <div className="mb-6 p-4 rounded-lg bg-indigo-950/20 border border-indigo-900/40">
            <div className="flex items-center gap-2 mb-2">
              <FaExclamationTriangle className="text-indigo-400" size={14} />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Implemented Threshold-Based Monitoring Logic
              </h3>
            </div>
            <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
              {project.thresholdConfig.description}
            </p>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-amber-500/30">
                <div className="text-xl font-mono font-bold text-amber-400">
                  {project.thresholdConfig.control}
                </div>
                <div className="text-xs font-medium text-zinc-300 mt-0.5">Control Threshold</div>
                <div className="text-[10px] text-zinc-400">Triggers automated alert & monitoring</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-rose-500/30">
                <div className="text-xl font-mono font-bold text-rose-400">
                  {project.thresholdConfig.restrict}
                </div>
                <div className="text-xs font-medium text-zinc-300 mt-0.5">Restrict Threshold</div>
                <div className="text-[10px] text-zinc-400">Enforces capacity limits & access bounds</div>
              </div>
            </div>
          </div>
        )} */}

        {/* Malayalam Fake Review Baseline Results */}
        {project.phase1Baseline && (
          <div className="mb-6 p-4 rounded-lg bg-indigo-950/20 border border-indigo-900/40">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <FaChartBar className="text-indigo-400" size={14} />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {project.phase1Baseline.title}
                </h3>
              </div>
              <span className="text-[9px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded">
                Preliminary
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-2.5">
              {project.phase1Baseline.metrics.map((m) => (
                <div key={m.label} className="p-2 rounded bg-zinc-950/80 border border-zinc-800 text-center">
                  <div className="text-base font-mono font-bold text-indigo-400">{m.value}</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-zinc-400 italic">
              {project.phase1Baseline.note}
            </p>
          </div>
        )}

        {/* System Architecture Flow Diagram */}
        {project.architectureSteps && (
          <div className="mb-6 p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3">
              System Architecture & Data Flow
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {project.architectureSteps.map((step, idx) => (
                <div key={step.name} className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                  <div className="text-[9px] font-mono text-indigo-400 font-bold mb-0.5">
                    STEP 0{idx + 1}
                  </div>
                  <div className="text-xs font-bold text-zinc-100 mb-0.5">
                    {step.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 leading-relaxed">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Major Features & Technical Implementation */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Major Features
            </h3>
            <ul className="space-y-1.5">
              {project.majorFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-300 leading-relaxed">
                  <FaCheckCircle className="text-emerald-400 mt-0.5 shrink-0" size={11} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Technical Implementation
            </h3>
            <ul className="space-y-1.5">
              {project.technicalImplementation.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-300 leading-relaxed">
                  <span className="text-indigo-400 font-mono text-xs shrink-0">•</span>
                  <span>{impl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Individual Contribution */}
        <div className="mb-6 p-4 rounded-lg bg-indigo-950/30 border border-indigo-500/30">
          <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold mb-1.5 flex items-center gap-2">
            <span>Individual Technical Contribution</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] bg-indigo-500/20 text-indigo-300 font-mono">
              Verified
            </span>
          </div>
          <p className="text-xs text-zinc-200 leading-relaxed">
            {project.myContribution}
          </p>
        </div>

        {/* Technical Challenges & Learnings */}
        <div className="mb-6 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
            Engineering Challenges & Learnings
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {project.challengesAndLearnings}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-zinc-400">
            Source repository verified on GitHub.
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <FaGithub size={13} />
              <span>View GitHub Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
