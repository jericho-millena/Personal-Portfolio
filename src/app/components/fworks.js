"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { technologyData } from "../data/data"; // Adjust the path as necessary
import Footer from "./footer";

export default function Fworks() {
  return (
    <div className="flex flex-col text-white p-4 md:p-8 lg:p-16 mt-8 md:mt-4 lg:mt-1 bg-layered-gradient bg-[#0a0a0a]">
      {/* Header */}
      <div className="space-y-4 lg:space-y-6 lg:pl-16 mb-12 text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          These are the frameworks
          <br />
          and libraries I've been using
        </h1>
      </div>

      {/* Swiper Container */}
      <div className="flex items-center justify-center lg:min-h-[60vh]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true} // Enables looping
          autoplay={{
            delay: 2500, // Delay in milliseconds
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="w-full max-w-6xl"
        >
          {technologyData.map((section, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative border border-gray-700 rounded-lg p-4 md:p-6 
                   bg-zinc-900 bg-opacity-30 shadow-lg"
              >
                {/* Backdrop Blur Layer */}
                <div className="absolute inset-0 bg-zinc-900 bg-opacity-30 backdrop-blur-md rounded-lg"></div>

                {/* Content Layer */}
                <div className="relative z-10">
                  {/* Section Title */}
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    {section.title}
                  </h2>
                  {/* Section Items */}
                  <ul className="space-y-2 md:space-y-3">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 md:space-x-3 group"
                      >
                        <span className="text-xl md:text-2xl group-hover:opacity-75 group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>

                        <span className="text-sm md:text-base lg:text-lg">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
