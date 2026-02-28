import React, { useState } from "react";
import { useEffect } from "react";
import { socialMediaUrl } from "../data/details";
import MenuIcon from "../assets/icons/hamburger.svg";
import Twitter from "../assets/icons/twitter.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkedin, github, twitter } = socialMediaUrl;
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-70px 0px 0px 0px",
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a
            href="#home"
            className={`hover:text-blue-600 ${
              activeSection === "home" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-600 ${
              activeSection === "about" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            About
          </a>
          <a
            href="#technologies"
            className={`hover:text-blue-600 ${
              activeSection === "technologies"
                ? "text-purple-600 font-semibold"
                : ""
            }`}
          >
            Technologies
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-600 ${
              activeSection === "projects"
                ? "text-purple-600 font-semibold"
                : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-600 ${
              activeSection === "contact" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href={twitter} target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <img src={MenuIcon} alt="Menu" />
        </button>
        <span className="text-lg font-semibold tracking-tight md:hidden  ">
          Naveen
        </span>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                ${
                  activeSection === "home"
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                ${
                  activeSection === "about"
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                ${
                  activeSection === "technologies"
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                ${
                  activeSection === "projects"
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                ${
                  activeSection === "contact"
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex space-x-4 mt-10">
            <a href={twitter} target="_blank" rel="noreferrer">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={Twitter} alt="Twitter" className="w-6 h-6" />
              </div>
            </a>

            <a href={linkedin} target="_blank" rel="noreferrer">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
              </div>
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={GitHub} alt="GitHub" className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
