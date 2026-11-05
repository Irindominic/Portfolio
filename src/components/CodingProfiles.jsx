// src/components/CodingProfiles.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { codingProfilesData } from "../data/portfolioData";

const iconMap = {
  GitHub: FaGithub,
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  GeeksforGeeks: SiGeeksforgeeks,
  CodeChef: SiCodechef,
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-12 sm:py-16 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Continuous Problem Solving
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Coding Profiles
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Active developer profiles and algorithmic problem-solving practice platforms.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {codingProfilesData.map((profile) => {
            const Icon = iconMap[profile.platform] || FaGithub;

            return (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                      <Icon size={20} />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-400 group-hover:text-indigo-400 transition-colors font-mono">
                      <span>Visit</span>
                      <FaExternalLinkAlt size={9} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400 mb-1.5">
                    @{profile.handle}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Profile Link</span>
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
