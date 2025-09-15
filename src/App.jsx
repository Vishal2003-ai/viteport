"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Freelancer",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5 py-4 bg-gray-800 shadow-lg sticky top-0 z-50">
        <h1 className="text-xl sm:text-2xl font-bold text-pink-500">
          Vishal Kushwah
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.ul
          className="flex flex-col items-center gap-4 py-6 bg-gray-800 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 text-lg"
                onClick={() => setMenuOpen(false)} // close after click
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center flex-1 text-center py-16 px-4"
      >
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-pink-500">Vishal</span>
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Enthusiastic and detail-oriented Backend Developer specializing in
          Python Django, with a proven track record of building dynamic,
          data-driven applications. I also have strong frontend knowledge in
          React, Next.js, TailwindCSS, and JavaScript.
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          I’m Vishal Kushwah, a passionate Full-Stack Developer with expertise
          in Python Django, MERN Stack, and modern frontend tools like React and
          TailwindCSS. Along with my technical knowledge, I bring strong
          problem-solving, team collaboration, and communication skills that
          I’ve developed while working in cross-functional environments.
        </p>
      </section>

      {/* Freelancer & Google Ads Section */}
      <section id="freelancer" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10">
          Freelancing & Google Ads
        </h3>
        <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
          {/* Freelancer Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ec4899",
              color: "#fff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-3">
              Freelancing Services
            </h4>
            <p>
              I offer professional web development services as a freelancer.
              I’ve built responsive websites, portfolio sites, and e-commerce
              platforms using{" "}
              <span className="text-pink-400">
                React, Next.js, TailwindCSS, and Django
              </span>
              .
            </p>
          </motion.div>

          {/* Google Ads Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ec4899",
              color: "#fff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-3">
              Google Ads Expertise
            </h4>
            <p>
              Experienced in running{" "}
              <span className="text-pink-400">Google Ads campaigns</span> to
              grow businesses online and increase sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Experience</h3>
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Hospital Office Assistant & Accountant
          </h4>
          <p className="text-pink-400 mb-2 text-sm sm:text-base">
            Divyanshi Hospital — Etawah (2023-2025)
          </p>
          <ul className="list-disc text-left ml-6 text-gray-300 text-sm sm:text-base">
            <li>Handled Ayushman Bharat Cashless Scheme documentation</li>
            <li>Managed billing, accounting, and patient records</li>
            <li>Coordinated with insurance companies</li>
            <li>Assisted doctors in OPD/IPD record keeping</li>
          </ul>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10">Projects</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "E-Commerce Platform",
              stack: "Django, Python, MySQL",
            },
            {
              title: "Portfolio Website",
              stack: "Django, TailwindCSS, JavaScript",
            },
            {
              title: "Task Management Tool",
              stack: "JavaScript, Node.js, MongoDB",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-2">
                {proj.title}
              </h4>
              <p className="text-gray-400">
                <span className="block mt-2 text-pink-400">
                  Tech Stack: {proj.stack}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          {[
            "Python (Django)",
            "React, Next.js, Node.js",
            "SQL, MongoDB, MySQL",
            "HTML5, CSS3, TailwindCSS",
            "Problem-Solving",
            "Communication",
          ].map((skill, i) => (
            <motion.span
              key={i}
              className="bg-gray-800 p-3 rounded-lg cursor-pointer shadow-md text-sm sm:text-base"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ec4899",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Education</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
          {[
            "B.Sc (CSJM University, 2025)",
            "Diploma in Electronic Engg (JS University, 2024)",
            "Intermediate (UP Board, 2022)",
            "High School (CBSE, 2020)",
            "ADCA (SRD Education Center, 2022)",
            "O level (NILITE, 2025)",
          ].map((edu, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer text-sm sm:text-base"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#ec4899",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {edu}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Let's work together on your next project.
        </p>
        <a
          href="mailto:vishalkushawahetw@gmail.com"
          className="px-6 py-3 bg-pink-500 rounded-full hover:bg-pink-600 text-sm sm:text-base"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 text-center text-gray-400 text-xs sm:text-sm">
        © 2025 Vishal Kushwah. All rights reserved.
      </footer>
    </div>
  );
}
