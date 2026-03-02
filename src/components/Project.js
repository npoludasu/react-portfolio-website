import React from "react";
import github from "../assets/icons/projects/github.svg";
import link from "../assets/icons/projects/link.svg";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  return (
    <article
      className="rounded-xl mt-10 overflow-hidden 
        shadow-xl shadow-slate-300 dark:shadow-slate-900
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          <span className="font-semibold">Tech Stack:</span>
          <span className="text-sm text-gray-600">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2
             px-4 py-2 rounded-lg
             bg-purple-600 text-white
             text-sm font-medium
             hover:bg-purple-700 transition"
          >
            <img src={link} className="w-4 h-4" alt="" />
            Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2
           text-purple-600 font-medium
           hover:underline transition"
          >
            <img src={github} className="w-5 h-5" alt="" />
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
