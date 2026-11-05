// src/components/Achievements.jsx
import React from "react";
import { FaAward, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { achievementsData } from "../data/portfolioData";

const Achievements = () => {
  const { achievements, certifications } = achievementsData;

  return (
    <section id="achievements" className="py-12 sm:py-16 bg-zinc-900/40 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Recognition & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Verified academic milestones, national examination distinctions, and specialized technical certifications.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Column 1: Academic Achievements */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2 mb-3">
              <FaAward className="text-indigo-400" size={16} />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Academic Achievements
              </h3>
            </div>

            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2.5 mb-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                <div className="text-xs font-medium text-indigo-400 mb-1.5">
                  {item.institution}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}

            {/* Academic Track Record Box */}
            <div className="p-3.5 rounded-lg bg-gradient-to-r from-indigo-950/40 to-zinc-950 border border-indigo-900/30 text-xs text-zinc-300">
              <span className="font-semibold text-white">Academic Track Record: </span>
              Maintained consistent high performance across foundational computer science coursework at Rajiv Gandhi Institute of Technology, Kottayam.
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2 mb-3">
              <FaCertificate className="text-indigo-400" size={16} />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Certifications & Programs
              </h3>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {cert.name}
                      </h4>
                      <div className="text-xs text-indigo-400 font-medium">
                        {cert.organization}
                      </div>
                    </div>
                    <span className="inline-block self-start sm:self-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {cert.grade}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-zinc-800/60 font-mono">
                    <span>Credential issued by accredited body</span>
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        Verify Credential <FaExternalLinkAlt size={8} />
                      </a>
                    ) : (
                      <span className="text-zinc-400 italic">Certificate verified</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
