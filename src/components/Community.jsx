// src/components/Community.jsx
import React from "react";
import { FaUsers, FaHandsHelping, FaCheckCircle } from "react-icons/fa";
import { communityData } from "../data/portfolioData";

const Community = () => {
  return (
    <section id="community" className="py-12 sm:py-16 bg-zinc-900/40 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Extracurricular & Peer Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Community & Contributions
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Active engagement in campus developer ecosystems, technical event volunteering, and collaborative peer learning.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        <div className="grid md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Main Community Card: TinkerHub RIT */}
          {communityData.map((item, idx) => (
            <div
              key={idx}
              className="md:col-span-8 p-5 sm:p-6 rounded-xl bg-zinc-950/80 border border-zinc-800 shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <FaHandsHelping size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <div className="text-xs text-indigo-400 font-medium">
                      {item.organization}
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {item.role}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                  Key Activities & Contributions
                </div>
                {item.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                    <FaCheckCircle className="text-emerald-400 mt-0.5 shrink-0" size={12} />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Extensibility Slot */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-xl bg-zinc-950/40 border border-dashed border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-3">
                <FaUsers size={16} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-200 mb-1.5">
                Hackathons & Open-Source
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Continuously participating in student hackathons, coding sprints, and open-source explorations across Kerala and university developer circles.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
              Active student developer participation
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Community;
