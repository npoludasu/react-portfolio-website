import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../data/details";
import MenuIcon from "../assets/icons/hamburger.svg";
import Twitter from "../assets/icons/twitter.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkedin, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <button
          onClick={toggleClass}
          className="md:hidden p-2"
          aria-label="Toggle navigation menu"
        >
          <img src={MenuIcon} alt="Menu"></img>
        </button>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : ""
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <img src={Twitter} alt="Twitter"></img>
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <img src={GitHub} alt="GitHub"></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
