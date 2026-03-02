import React from "react";
import Project from "../components/Project";
import { projectDetails } from "../data/details";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function Projects() {
  return (
    <main className="container mx-auto max-width pt-2 pb-10">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Projects
        </h1>
        {/* Mobile Slider */}
        <div className="md:hidden mt-6">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            speed={600} 
            className="pb-6"
          >
            {projectDetails.map((project, index) => (
              <SwiperSlide key={index}>
                <Project {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-10 mt-6">
          {projectDetails.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
