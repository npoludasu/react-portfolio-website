import React from "react";
import Work from "../components/Work";
import { personalDetails, workDetails, eduDetails } from "../data/details";

function About() {
  return (
    <main className="container mx-auto max-width pt-2 pb-5 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-4 lg:max-w-3xl whitespace-pre-line">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h1 className="text-2xl pt-4 text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(
            ({ Position, Company, Location, Type, Duration }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-4 text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
