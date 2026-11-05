// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-8 sm:py-10 bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Identity & Education */}
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm font-bold text-zinc-200">
              {personalInfo.name}
            </div>
            <div className="text-zinc-400 text-[11px] mt-0.5">
              B.Tech Computer Science and Engineering • RIT Kottayam (2023–2027)
            </div>
            <div className="text-zinc-400 text-[10px] mt-0.5">
              Candidate for Software Engineer & Product Engineer Roles
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-indigo-400 rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-1.5 text-zinc-400 hover:text-indigo-400 rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={15} />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-3 text-center md:text-right">
            <div>
              <div className="text-[11px]">© {new Date().getFullYear()} Irin Dominic. All rights reserved.</div>
              <div className="text-zinc-400 text-[10px] mt-0.5 font-mono">
                Engineered with React & Tailwind CSS
              </div>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800 cursor-pointer"
            >
              <FaArrowUp size={11} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
