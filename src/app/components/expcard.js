"use client";

import React, { useState } from "react";
import { expData } from "../data/data"; // Import the data

export default function ExpCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationDone, setAnimationDone] = useState(false);

  const handleMouseEnter = (index) => {
    if (expData[index].isConfidential) {
      setHoveredIndex(index);
      setAnimationDone(false);
      // Wait for the animation to complete (adjust the time to match the animation duration)
      setTimeout(() => {
        setAnimationDone(true);
      }, 500); // Adjust this to match the animation duration
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setAnimationDone(false);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {expData.map((experience, index) => (
        <div
          key={index}
          className={`relative border border-zinc-700 rounded-3xl max-w-6xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row gap-6 ${
            experience.isConfidential ? "group" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Overlay for Confidential Cards */}
          {experience.isConfidential && hoveredIndex === index && (
            <div
              className="absolute inset-0 text-white flex flex-col items-center justify-center
              rounded-3xl overflow-hidden"
            >
              {/* Split-in Animation */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-purple-700 animate-split-in-left"></div>
                <div className="w-1/2 bg-purple-700 animate-split-in-right"></div>
              </div>
              {animationDone && (
                <div className="relative z-10 text-4xl animate-slideInUp font-semibold">
                  Credential Needed
                </div>
              )}
            </div>
          )}

          {/* Left Section */}
          <div
            className={`md:w-1/3 space-y-4 ${
              experience.isConfidential && "pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-semibold text-white">
              {experience.title}
            </h2>
            <p className="text-purple-400">{experience.contractType}</p>
            <p className="text-gray-400 text-sm">
              {experience.dateRange}
              <br />
              {experience.location}
            </p>
          </div>

          {/* Right Section */}
          <div
            className={`md:w-2/3 space-y-4 ${
              experience.isConfidential && "pointer-events-none"
            }`}
          >
            <h3 className="text-purple-400 text-lg font-semibold">
              {experience.companyName}
            </h3>
            {experience.description.map((desc, idx) => (
              <p key={idx} className="text-gray-400 leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
