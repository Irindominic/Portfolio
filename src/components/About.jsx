// src/components/About.jsx
import React from "react";
import { FaGraduationCap, FaBookOpen, FaLightbulb } from "react-icons/fa";
import { aboutData } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-zinc-900/50 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Background & Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-4 text-zinc-300 leading-relaxed text-xs sm:text-sm">
            {aboutData.summary.map((para, idx) => (
              <p key={idx} className="text-zinc-300/90">
                {para}
              </p>
            ))}

            {/* Engineering Mindset Card */}
            <div className="mt-5 p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <FaLightbulb size={16} />
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-100 mb-0.5">
                  Engineering Mindset
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  Focusing on first principles, understanding system constraints, and prioritizing clean code architecture and data integrity over superficial implementations.
                </div>
              </div>
            </div>
          </div>

          {/* Education & Coursework Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Formal Education Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/80 border border-zinc-800 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <FaGraduationCap size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                      Undergraduate Degree
                    </div>
                    <div className="text-xs text-zinc-400"></div>
                  </div>
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                  CGPA {aboutData.education.cgpa}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {aboutData.education.degree}
              </h3>
              <div className="text-zinc-300 font-medium text-xs sm:text-sm mb-1.5">
                {aboutData.education.institution}
              </div>
              <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-2">
                <span>Duration: {aboutData.education.duration}</span>
                <span></span>
                <span></span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-2.5">
                {aboutData.education.highlights}
              </p>
            </div>

            {/* Relevant Coursework Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/80 border border-zinc-800 shadow-lg">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaBookOpen size={16} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Relevant Coursework
                  </h4>
                  <div className="text-xs text-zinc-400">
                    
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {aboutData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
