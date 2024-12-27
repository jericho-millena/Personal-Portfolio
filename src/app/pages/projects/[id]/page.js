import React from "react";
import NavBar from "@/app/components/navbar";
import { projectData } from "@/app/data/data"; // Ensure correct import path
import ProjectDetailsClient from "@/app/components/ProjectDetailsClient";

export async function generateStaticParams() {
  if (!projectData || !Array.isArray(projectData)) {
    console.error("projectData is undefined or not an array.");
    return [];
  }

  return projectData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }) {
  const id = params.id;
  const project = projectData?.find((proj) => proj.id.toString() === id);

  if (!project) {
    return (
      <div className="p-16 bg-layered-gradient bg-[#0a0a0a] text-white">
        <h1 className="text-center text-3xl">Project not found</h1>
      </div>
    );
  }

  const otherProjects =
    projectData?.filter((proj) => proj.id.toString() !== id) || [];

  return (
    <div>
      <NavBar />
      <div className="p-4 lg:p-16 bg-layered-gradient bg-[#0a0a0a] text-white">
        <ProjectDetailsClient project={project} otherProjects={otherProjects} />
      </div>
    </div>
  );
}
