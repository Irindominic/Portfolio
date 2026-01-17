// Portfolio.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-10 bg-gray-800 fixed w-full z-10 shadow-md">
        <div className="text-3xl font-bold">Irin Dominic</div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-32 px-6 md:px-20">
        <div className="md:w-1/2">
          <h1 className="text-7xl font-bold mb-4">Hi, I'm Irin Dominic</h1>
          <p className="text-lg text-gray-300 mb-6">
            I'm a BTech Computer Science student, passionate about programming, web development, and creative tech projects.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/Irindominic" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="hover:text-indigo-400" />
            </a>
            <a href="https://www.linkedin.com/in/irindominic/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-indigo-400" />
            </a>
            <a href="https://www.instagram.com/irin.dominic/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="hover:text-indigo-400" />
            </a>
          </div>
        </div>

        {/* Placeholder for profile image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto border-4 border-indigo-500 flex items-center justify-center text-gray-500">
            Profile Image
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg">
          I'm a second-year BTech Computer Science student at KTU, specializing in programming and web development. I enjoy building interactive web applications, learning new technologies, and sharing my projects online.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2">Finger-Gestured Music Player</h3>
            <p className="text-gray-300 mb-4">
              A Carnatic music player that uses hand gestures to play different swaras. No mouse, no keyboard — just flex your fingers and let the ragas flow.
            </p>
            <a href="https://github.com/Irindominic/Finger_gestured_music-player" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2">Farm Connect</h3>
            <p className="text-gray-300 mb-4">
              A platform that directly links farmers and customers.
            </p>
            <a href="https://github.com/Irindominic/Farm_Connect" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2">Tic-Tac-Toe</h3>
            <p className="text-gray-300 mb-4">
              This is just a fun and interactive Tic-Tac-Toe game, where two users can play offline on the same device.
            </p>
            <a href="https://github.com/Irindominic/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          You can reach me via email or connect on social media:
        </p>
        <p className="text-lg mb-4">Email:{" "} {/* Adding a space here */}
      <a 
      href="mailto:irindominic987@gmail.com" 
      className="text-indigo-400 hover:underline"
    >
      irindominic987@gmail.com
    </a></p>
        <div className="flex space-x-6">
          <a href="https://github.com/Irindominic" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/irindominic/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/irin.dominic/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Instagram</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 border-t border-gray-700">
        © {new Date().getFullYear()} Irin Dominic. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
