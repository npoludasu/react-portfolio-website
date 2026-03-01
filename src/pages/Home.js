import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../data/details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const introTextRef = useRef();
  const nameTextRef = useRef();
  const taglineTextRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(
        introTextRef.current,
        {
          x: "-100%",
          delay: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "Power3.out",
        },
        "<",
      )
        .from(
          nameTextRef.current,
          {
            x: "-100%",
            delay: 0.5,
            opacity: 0,
            duration: 1.2,
            ease: "Power3.out",
          },
          "<",
        )
        .from(
          taglineTextRef.current,
          {
            x: "-100%",
            delay: 0.1,
            opacity: 0,
            duration: 1.2,
            ease: "Power3.out",
          },
          "<",
        )
        // .fromTo(
        //   buttonRef.current,
        //   {
        //     x: "-100%",
        //     opacity: 0,
        //   },
        //   {
        //     x: "0%",
        //     opacity: 1,
        //     duration: 2,
        //     ease: "Power3.out",
        //   },
        //   "<",
        // )

        .from(
          imageRef.current,
          {
            x: "200%",
            delay: 0.5,
            opacity: 0,
            duration: 1,
            ease: "Power3.out",
          },
          "<",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="container mx-auto max-width md:flex justify-between items-center">
      <div>
        {/* <div className="px-6 pt-10"> */}
        {/* Main Heading */}

        <h1
          ref={introTextRef}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋
          <br />
          My Name is
        </h1>
        {/* Gradient Name */}

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

        {/* Tagline */}
        <h2
          ref={taglineTextRef}
          className="mt-4 text- l md:text-xl font-semibold "
        >
          {tagline}
        </h2>

        {/* Contact Button */}
        <a
          ref={buttonRef}
          href="#contact"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3
                     bg-gradient-to-r from-purple-600 to-pink-500
                     text-white font-semibold rounded-xl
                     shadow-md hover:shadow-lg
                     transition-all duration-300
                     hover:scale-105 active:scale-95"
        >
          Contact Me
          <span className="text-lg">→</span>
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <img
          ref={imageRef}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 
               rounded-full object-cover shadow-lg"
          src={img}
          alt="Naveen"
        />
      </div>
    </main>
  );
}

export default Home;
