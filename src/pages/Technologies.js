import React from "react";
import { techStackDetails } from "../data/details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    ts,
    jQuery,
    java,
    MySQL,
    restapi,
    axios,
    vscode,
    git,
    github,
    npm,
    eclipse,
    vite,
    webpack,
  } = techStackDetails;

  const frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: react, name: "React" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: ts, name: "TypeScript" },
    { img: jQuery, name: "jQuery" },
    { img: axios, name: "Axios" },
  ];

  const backend = [
    { img: java, name: "Java" },
    { img: MySQL, name: "MySQL" },
    { img: restapi, name: "REST API" },
  ];

  const tools = [
    { img: vscode, name: "VS Code" },
    { img: git, name: "Git" },
    { img: github, name: "GitHub" },
    { img: npm, name: "NPM" },
    { img: vite, name: "Vite" },
    { img: webpack, name: "Webpack" },
    { img: eclipse, name: "Eclipse" },
  ];

  const renderGrid = (items) => (
    <section
      className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
      justify-items-center items-center gap-10 pt-8"
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center
          transition-all duration-300
          hover:scale-110 hover:-translate-y-1"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-16 h-16 object-contain"
          />
          <p className="text-sm mt-2 text-content font-medium">{item.name}</p>
        </div>
      ))}
    </section>
  );
  return (
    <main className="container mx-auto max-width pt-6 pb-20">
      {/* Main Heading */}
      <section className="mb-10">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Technologies
        </h1>
      </section>

      {/* Frontend */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
          Frontend
        </h2>
        {renderGrid(frontend)}
      </section>

      {/* Backend */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
          Backend / API
        </h2>
        {renderGrid(backend)}
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
          Tools
        </h2>
        {renderGrid(tools)}
      </section>
    </main>
  );
}

export default Technologies;
