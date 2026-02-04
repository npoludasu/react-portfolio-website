import React from "react";
import { techStackDetails } from "../data/details";
function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    vscode,
    git,
    github,
    npm,
    ts,
    eclipse,
    java,
    jQuery,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-2 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        {/* <p className="text-content py-2 lg:max-w-3xl font-semibold">
          Technologies I Work With
        </p> */}
      </section>
      <section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6
                    justify-items-center items-center
                    gap-10 pt-6"
      >
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />{" "}
        <img src={tailwind} title="Tailwind CSS" alt="" />{" "}
        <img src={ts} title="TypeScript" alt="" />{" "}
        <img src={java} title="Java" alt="" />{" "}
        <img src={jQuery} title="JQuery" alt="" />{" "}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Tools
        </h1>
        {/* <p className="text-content py-2 lg:max-w-3xl font-semibold">
          Tools I Work With
        </p> */}
      </section>
      <section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6
                    justify-items-center items-center
                    gap-10 pt-6"
      >
        <img src={vscode} title="Visual Studio Code" alt="VS Code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={eclipse} title="eclipse" alt="eclispe" />
      </section>
    </main>
  );
}

export default Technologies;
