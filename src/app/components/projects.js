"use client";

import React from "react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-zinc-900 bg-opacity-40 text-white rounded-lg shadow-md p-4 border border-2 border-zinc-800 shadow-lg flex flex-col md:flex-row md:items-center gap-6 max-w-5xl w-full">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href={`/pages/projects/${project.id}`}>
            {project.imgSrc ? (
              <img
                src={project.imgSrc}
                alt={project.alt || "Project Image"}
                className="rounded-md w-full md:w-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className="w-full md:w-80 h-48 bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-400">Image Not Available</span>
              </div>
            )}
          </Link>
        </div>

        {/* Right Section: Content */}
        <div className="flex-grow space-y-4">
          {/* Project Title */}
          <Link href={`/pages/projects/${project.id}`}>
            <h2 className="text-3xl font-bold relative group cursor-pointer">
              <span className="text-white group-hover:text-purple-400 duration-300">
                {project.title}
              </span>
            </h2>
          </Link>

          {/* Subtitle */}
          <p className="text-gray-400 text-md">{project.subtitle}</p>

          {/* Links or Confidential Message */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            {project.isConfidential ? (
              <div className="text-purple-400 font-medium">
                Only accessible for selected users
              </div>
            ) : project.comingSoon ? (
              <div className="text-gray-500 font-medium">Coming Soon</div>
            ) : (
              project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className={`${
                    link.type === "primary" ? "text-purple-400" : "text-white"
                  } duration-300 flex items-center space-x-2`}
                >
                  <span className="relative transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {link.label}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={link.iconPath}
                    />
                  </svg>
                </Link>
              ))
            )}
          </div>

          {/* Learn More Button */}
          <Link
            href={`/pages/projects/${project.id}`}
            className="inline-block mt-4 text-center text-white text-lg rounded-lg relative transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
