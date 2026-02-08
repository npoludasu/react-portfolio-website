import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../data/details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const introTextRef = useRef();
  const nameTextRef = useRef();
  const taglineTextRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(
        introTextRef.current,
        {
          x: "-100%",
          delay: 0.8,
          opacity: 0,
          duration: 2,
          ease: "Power3.out",
        },
        "<"
      )
        .from(
          nameTextRef.current,
          {
            x: "-100%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.out",
          },
          "<"
        )
        .from(
          taglineTextRef.current,
          {
            x: "-100%",
            delay: 0.1,
            opacity: 0,
            duration: 2,
            ease: "Power3.out",
          },
          "<"
        )
        .from(
          imageRef.current,
          {
            x: "200%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.out",
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="container mx-auto max-width md:flex justify-between items-center">
      <div>
        <h1
          ref={introTextRef}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={nameTextRef}
          className="text-2xl 
          bg-gradient-to-r from-purple-700 via-pink-600 to-pink-700
          bg-clip-text text-transparent
          leading-tight
          md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={taglineTextRef}
          className="mt-4 text- l md:text-xl font-semibold "
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={imageRef}
          className="w-1/2 md:ml-auto"
          src={img}
          alt="Naveen"
        />
      </div>
    </main>
  );
}

export default Home;
