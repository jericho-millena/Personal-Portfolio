import React from "react";
import NavBar from "@/app/components/navbar";
import { projectData } from "@/app/data/data"; // Adjust path as needed
import ProjectDetailsClient from "@/app/components/ProjectDetailsClient"; // Client component

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }) {
  const id = params.id; // Extract the id from params
  const project = projectData.find((proj) => proj.id.toString() === id);

  if (!project) {
    return (
      <div className="p-16 bg-layered-gradient bg-[#0a0a0a] text-white">
        <h1 className="text-center text-3xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <ProjectDetailsClient project={project} />
    </div>
  );
}
