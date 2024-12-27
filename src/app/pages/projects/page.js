"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import ProjectCard from "@/app/components/projects";
import { projectData } from "@/app/data/data";
import Footer from "@/app/components/footer"; // Adjust the path as necessary

export default function Page() {
  const [visibleProjects, setVisibleProjects] = useState(
    Array(projectData.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleProjects((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      <Navbar />
      <div className="bg-layered-gradient bg-[#0a0a0a] p-4 lg:p-16">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className={`project-card transition-all duration-700 transform ${
              visibleProjects[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}
