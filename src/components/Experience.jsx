// src/components/Experience.jsx
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-zinc-900/40 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Professional & Academic Training
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience & Internships
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Practical industry exposure and team engineering programs focusing on machine learning, collaborative development, and agentic workflows.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-5 space-y-6 sm:space-y-8">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-5 sm:pl-7 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md transition-all">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-1.5">
                      {exp.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-indigo-400 mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-zinc-400 space-y-0.5">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <FaCalendarAlt size={11} className="text-zinc-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <FaMapMarkerAlt size={11} className="text-zinc-400" />
                      <span>{exp.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Specific Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                      <FaCheckCircle size={11} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Gained Tags */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-zinc-400">Core Concepts:</span>
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
