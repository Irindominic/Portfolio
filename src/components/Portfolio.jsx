// src/components/Portfolio.jsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Achievements from "./Achievements";
import CodingProfiles from "./CodingProfiles";
import Community from "./Community";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-indigo-600 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CodingProfiles />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
