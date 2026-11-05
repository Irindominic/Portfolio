// src/components/Skills.jsx
import React from "react";
import { FaCode, FaServer, FaDatabase, FaBrain, FaTools, FaMicrochip, FaLaptopCode } from "react-icons/fa";
import { skillsData } from "../data/portfolioData";

const iconMap = {
  code: FaCode,
  layout: FaLaptopCode,
  server: FaServer,
  database: FaDatabase,
  brain: FaBrain,
  tool: FaTools,
  cpu: FaMicrochip,
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Practical competencies categorized by engineering domains, emphasizing backend engineering, databases, machine learning, and core computer science fundamentals.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsData.map((category) => {
            const IconComponent = iconMap[category.icon] || FaCode;
            const isCoreCS = category.category === "Core Computer Science";

            return (
              <div
                key={category.category}
                className={`p-4 sm:p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all shadow-md hover:shadow-black/20 group flex flex-col justify-between ${
                  isCoreCS ? "sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-zinc-900/70 via-zinc-900/50 to-zinc-950/70 border-indigo-900/30" : ""
                }`}
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors shrink-0">
                      <IconComponent size={15} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {category.category}
                      </h3>
                      <div className="text-[11px] text-zinc-400">
                        {category.description}
                      </div>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-950 text-zinc-200 border border-zinc-800 hover:border-indigo-500/40 hover:text-white transition-all shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-indigo-400/80">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
