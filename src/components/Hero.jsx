// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 mb-4 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Final-Year B.Tech CSE • RIT Kottayam (CGPA: 9.64)</span>
            </div>

            {/* Title & Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Hi, I'm <span className="text-indigo-400">{personalInfo.name}</span>
            </h1>

            {/* Headline */}
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-300 mb-4">
              {personalInfo.headline}
            </h2>

            {/* Bio Narrative */}
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
              I'm a final-year Computer Science Engineering student at RIT Kottayam, interested in software development, problem-solving, and AI-driven applications.
              <br className="hidden sm:inline" /><br className="hidden sm:inline" />
              {/* I enjoy exploring technologies, developing practical applications, and understanding how software systems work. Through academic projects, internships, and independent learning, I continuously work on strengthening my technical skills and building meaningful solutions. */}
            </p>

            {/* Highlighted Interests */}
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                Core Engineering Interests
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2">
                {personalInfo.coreInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-900/90 text-indigo-300 border border-zinc-800 hover:border-indigo-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/20 focus:outline-none"
              >
                <span>View Projects</span>
                <FaArrowRight size={11} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Irin_Dominic_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-xs sm:text-sm transition-all hover:border-zinc-600 focus:outline-none"
              >
                <FaDownload size={11} className="text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white font-medium text-xs sm:text-sm transition-colors hover:bg-zinc-900/60"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 border-t border-zinc-900">
              <span className="text-xs text-zinc-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>

          {/* Profile Card / Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full flex justify-center">
              {/* Outer card frame */}
              <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 border border-zinc-800 shadow-2xl backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl border border-indigo-500/30">
                  <img
                    src={profileImg}
                    alt="Irin Dominic"
                    className="w-56 h-64 sm:w-64 sm:h-72 lg:w-68 lg:h-76 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Photo badge caption */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/90 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-zinc-200 text-xs">Irin Dominic</div>
                        <div className="text-zinc-400 text-[10px]">B.Tech CSE • 2023–2027</div>
                      </div>
                      <div className="text-right">
                        <div className="text-indigo-400 font-bold font-mono text-xs">9.64 CGPA</div>
                        <div className="text-zinc-400 text-[9px]">RIT Kottayam</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Academic Badge (neatly aligned, non-overflowing)
              <div className="hidden sm:flex absolute -bottom-3 left-2 sm:-left-2 bg-zinc-900/95 border border-zinc-700/80 rounded-xl p-2.5 shadow-xl items-center gap-2.5 backdrop-blur-md max-w-[95%]">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <FaGraduationCap size={16} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-semibold text-zinc-200 truncate">Rajiv Gandhi Institute of Technology</div>
                  <div className="text-[10px] text-zinc-400 truncate">Govt. Engineering College, Kottayam</div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
