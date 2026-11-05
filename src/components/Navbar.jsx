// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map((link) => {
        const id = link.href.substring(1);
        return {
          id,
          element: document.getElementById(id),
        };
      });

      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      const navOffset = 70;
      const elementPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-md shadow-black/20 py-2.5"
          : "bg-zinc-950/70 backdrop-blur-sm border-b border-zinc-800/40 py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm group-hover:border-indigo-400 group-hover:bg-indigo-600/30 transition-all">
            ID
          </div>
          <div>
            <div className="font-semibold text-zinc-100 text-sm tracking-tight flex items-center gap-2">
              <span>{personalInfo.name}</span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                CSE @ RIT
              </span>
            </div>
            <div className="text-[11px] text-zinc-400 hidden xl:block">
              Aspiring Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2 xl:px-2.5 py-1 rounded-md text-xs xl:text-xs font-medium transition-colors ${
                  isActive
                    ? "text-indigo-400 bg-indigo-950/50 border border-indigo-800/50"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Socials */}
        <div className="hidden sm:flex items-center space-x-2 shrink-0">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Irin_Dominic_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all focus:outline-none"
          >
            <FaDownload size={11} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center lg:hidden space-x-2 shrink-0">
          <a
            href={personalInfo.resumeUrl}
            download="Irin_Dominic_Resume.pdf"
            className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-600 text-white"
          >
            <FaDownload size={10} />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/98 px-4 pt-3 pb-5 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? "text-indigo-400 bg-indigo-950/50 border border-indigo-800/50"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-indigo-400 rounded-lg hover:bg-zinc-900"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download="Irin_Dominic_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              <FaDownload size={11} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
