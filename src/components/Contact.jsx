// src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaCopy, FaCheck, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || "Opportunity / Inquiry"
    )}&body=${encodeURIComponent(message || "Hi Irin,\n\nI came across your portfolio...")}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1.5">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Currently open to entry-level Product Engineer, Software Engineer, and internship opportunities. Feel free to reach out directly.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2.5" />
        </div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Button */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 shadow-lg">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-400 font-semibold">
                    Email Address
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white break-all">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
                >
                  <FaEnvelope size={11} />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-medium transition-colors flex items-center gap-1.5"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <>
                      <FaCheck size={11} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 shadow-lg flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase text-indigo-400 font-semibold mb-0.5">
                  Curriculum Vitae
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  Download Updated Resume
                </div>
                <div className="text-[11px] text-zinc-400">
                  PDF format • Academic & Projects
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Irin_Dominic_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-indigo-400 border border-indigo-500/30 text-xs font-semibold hover:border-indigo-400 transition-all shadow-sm shrink-0"
              >
                <FaDownload size={11} />
                <span>Download</span>
              </a>
            </div>

            {/* Location & Institution Info */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-400 shrink-0" size={13} />
                <span>Rajiv Gandhi Institute of Technology (RIT), Kottayam</span>
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-zinc-800/80">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-4">
                This form prepares a direct email message to <span className="text-indigo-300">{personalInfo.email}</span> using your default email client.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-3.5">
                <div>
                  <label htmlFor="subject" className="block text-[11px] font-mono uppercase text-zinc-400 font-medium mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Product Engineer Recruitment / Technical Opportunity"
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono uppercase text-zinc-400 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Irin, I reviewed your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-sm transition-all cursor-pointer"
                >
                  <FaPaperPlane size={11} />
                  <span>Compose in Mail Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
