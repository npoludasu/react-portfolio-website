import React from "react";
import Project from "../components/Project";
import { projectDetails } from "../data/details";
function Projects() {
  return (
    <main className="container mx-auto max-width pt-2 pb-10">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
