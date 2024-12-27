"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { educationData, certificationData, skillsData } from "../data/data"; // Adjust the path as necessary

export default function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="flex flex-col text-white p-8 lg:p-16">
      {/* Header */}
      <div className="mb-8 lg:px-16">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text 
          animate-gradient-move bg-gradient-to-r 
          from-purple-500 via-blue-400 to-purple-500 
          bg-[length:200%_200%]"
        >
          Education
        </h1>
      </div>

      {/* List Container */}
      <div className="space-y-6 lg:px-16">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`border border-zinc-900 border-2 rounded-3xl shadow-md p-6 transition-all duration-300 ${
              expandedIndex !== index ? "hover:bg-purple-600" : ""
            }`}
          >
            {/* Header Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-purple-400">{item.subtitle}</p>
                <p className="text-gray-400 mt-1">{item.yearRange}</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  } transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9l-7.5 7.5L4.5 9"
                  />
                </svg>
              </div>
            </div>

            {/* Dropdown Content */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                expandedIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 space-y-4">
                {/* Relevant Coursework */}
                {item.coursework && (
                  <div>
                    <h3 className="text-lg mt-12 font-semibold">
                      Relevant Coursework
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2 px-4 lg:px-8">
                      {item.coursework.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Organizations */}
                {item.organizations && (
                  <div>
                    <h3 className="text-lg mt-12 font-semibold">
                      Organizations
                    </h3>
                    <ul className="text-white mt-2 space-y-4 px-4 lg:px-8">
                      {item.organizations.map((org, idx) => (
                        <li key={idx}>
                          <p className="font-medium">{org.name}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {org.date}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-8 lg:px-16">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text 
          animate-gradient-move bg-gradient-to-r 
          from-purple-500 via-blue-400 to-purple-500 
          bg-[length:200%_200%]"
        >
          Certificates
        </h1>
      </div>
      <div className="px-4 rounded-lg shadow-lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000, // Delay in milliseconds
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {certificationData.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div
                className="flex items-center justify-center p-4 cursor-pointer"
                onClick={() => handleImageClick(cert.imgSrc)}
              >
                <img
                  src={cert.imgSrc}
                  alt={cert.alt}
                  className="w-full h-auto object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={closeModal}
          >
            <div
              className={
                "relative bg-white rounded-lg shadow-lg p-4 animate-scale-in max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-2xl "
              }
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto object-contain rounded-md"
              />
              <button
                className="absolute top-2 right-2 text-black hover:text-purple-600 rounded-full p-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="my-8 lg:px-16">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text 
          animate-gradient-move bg-gradient-to-r 
          from-purple-500 via-blue-400 to-purple-500 
          bg-[length:200%_200%]"
        >
          My Skills
        </h1>
      </div>
      <div className="lg:px-16">
        <div className="border border-zinc-900 border-2 p-6 rounded-lg shadow-lg space-y-4">
          {skillsData.map((item, index) => (
            <div key={index}>
              {/* Skill and Percentage */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-semibold">{item.skill}</span>
                <span className="text-gray-400">{item.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-purple-500
                animate-progress-gradient bg-[length:200%]"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
