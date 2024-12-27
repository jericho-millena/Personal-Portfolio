"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ProjectDetailsClient({ project, otherProjects }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#project-details");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="project-details"
        className={`max-w-5xl mx-auto mt-4 transition-opacity duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 text-lg mb-8">{project.subtitle}</p>
        {project.imgSrc && (
          <img
            src={project.imgSrc}
            alt={project.alt || "Project Image"}
            className="rounded-lg mb-8"
          />
        )}
        <p className="text-lg leading-relaxed mb-16">{project.description}</p>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {otherProjects?.map((proj) => (
            <SwiperSlide key={proj.id}>
              <Link href={`/pages/projects/${proj.id}`} className="block p-4">
                <img
                  src={proj.imgSrc}
                  alt={proj.alt || "Project Image"}
                  className="rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-gray-400">{proj.subtitle}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
