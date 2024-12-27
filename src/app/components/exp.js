"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { experienceData } from "../data/data";

export default function ExperienceComponent() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  return (
    <div className="flex flex-col lg:flex-row text-white p-3 md:p-8 lg:p-16">
      <div className="lg:w-1/2 space-y-6 lg:pl-16 ">
        {/* Experience Title Section */}
        <div className="mb-16 lg:mb-8 text-center md:text-center lg:text-left">
          <p className="text-xl text-white mt-2">Strong</p>
          <h1
            className="font-bold text-transparent text-5xl lg:text-6xl bg-clip-text 
        animate-gradient-move bg-gradient-to-r 
        from-purple-500 via-blue-400 to-purple-500 
        bg-[length:200%_200%]"
          >
            EXPERIENCE
          </h1>
          <p className="text-xl text-white mt-2">
            in modern full-stack technologies
          </p>
        </div>
      </div>
      <div className="md:w-full lg:w-1/2">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 1 slide for mobile
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // Show 2 slides for tablets and larger screens
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          {experienceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-3xl p-6 shadow-lg w-auto h-auto flex flex-col items-start"
                style={{ backgroundColor: item.bgColor }}
              >
                {/* Icon Section */}
                <div className="mt-4 md:mt-8 lg:mt-12 ml-4">
                  <div>{item.icon}</div>
                  <div className="pt-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex justify-left mt-4 pl-2 space-x-2">
          {experienceData.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "w-14 h-2 bg-gray-300 rounded-full"
                  : "w-2 h-2 bg-gray-500 rounded-full"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
