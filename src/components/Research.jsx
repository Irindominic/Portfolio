// src/components/Research.jsx
import React from "react";
import { FaBrain, FaNetworkWired, FaGithub, FaInfoCircle } from "react-icons/fa";
import { researchData } from "../data/portfolioData";

const Research = () => {
  const { finalYearProject, seminar } = researchData;

  return (
    <section id="research" className="py-12 sm:py-16 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Academic & Theoretical Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Research & Technical Work
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            In-depth academic research, Natural Language Processing investigations, and advanced technical seminars covering network security and machine learning architectures.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        <div className="space-y-6 sm:space-y-8">
          
          {/* Item 1: Final-Year Research Project */}
          <div className="p-5 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaBrain size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {finalYearProject.type}
                  </span>
                  <div className="text-[11px] text-zinc-400">Undergraduate Thesis Investigation</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {finalYearProject.status}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
              {finalYearProject.title}
            </h3>
            <div className="text-xs font-medium text-zinc-400 mb-3">
              {finalYearProject.subtitle}
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
              {finalYearProject.overview}
            </p>

            {/* Problem & Approach Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1.5">
                  Research Challenge
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {finalYearProject.problemStatement}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
                <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1.5">
                  Technical Approach
                </div>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {finalYearProject.approach.slice(0, 4).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-400 font-mono">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Baseline Metrics Bar */}
            <div className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-900/40 mb-5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2.5 flex items-center justify-between">
                <span>Phase 1 Baseline Performance (TF-IDF + SVM)</span>
                <span className="text-amber-400 text-[9px] uppercase font-mono">Preliminary Metrics</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-center">
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <div className="text-base font-mono font-bold text-indigo-400">{finalYearProject.baselineResults.accuracy}</div>
                  <div className="text-[10px] text-zinc-400">Accuracy</div>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <div className="text-base font-mono font-bold text-indigo-400">{finalYearProject.baselineResults.macroF1}</div>
                  <div className="text-[10px] text-zinc-400">Macro F1</div>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <div className="text-base font-mono font-bold text-indigo-400">{finalYearProject.baselineResults.fakeF1}</div>
                  <div className="text-[10px] text-zinc-400">Fake F1</div>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <div className="text-base font-mono font-bold text-indigo-400">{finalYearProject.baselineResults.fakeRecall}</div>
                  <div className="text-[10px] text-zinc-400">Fake Recall</div>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <div className="text-base font-mono font-bold text-indigo-400">{finalYearProject.baselineResults.genuineF1}</div>
                  <div className="text-[10px] text-zinc-400">Genuine F1</div>
                </div>
              </div>
            </div>

            {/* Individual Role */}
            <div className="text-xs text-zinc-300 mb-4 p-3 rounded-lg bg-zinc-950 border border-zinc-800">
              <span className="font-semibold text-white">Individual Contribution: </span>
              {finalYearProject.myRole}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
              <span className="text-zinc-400 font-mono text-[11px]">Status: Active Thesis Research</span>
              <a
                href="https://github.com/Irindominic/Malayalam-Fake-Review-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-850 text-indigo-400 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <FaGithub size={12} />
                <span>Research Repository</span>
              </a>
            </div>
          </div>

          {/* Item 2: Technical Seminar */}
          <div className="p-5 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaNetworkWired size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {seminar.type}
                  </span>
                  <div className="text-[11px] text-zinc-400">Literature Review & Conceptual Analysis</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800">
                Ref: {seminar.reference}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {seminar.title}
            </h3>

            {/* Distinction Alert */}
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 mb-4 flex items-start gap-2">
              <FaInfoCircle className="mt-0.5 shrink-0" size={13} />
              <span>{seminar.distinction}</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
              {seminar.summary}
            </p>

            {/* Core Concepts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
              {seminar.coreConcepts.map((item) => (
                <div key={item.term} className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
                  <div className="text-xs font-bold text-indigo-300 mb-0.5">
                    {item.term}
                  </div>
                  <div className="text-[11px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="text-[11px]">Presented as part of the B.Tech Computer Science technical seminar curriculum.</span>
              <span className="font-mono text-zinc-400 text-[11px]">RIT Kottayam</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;
