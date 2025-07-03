import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { type Project } from "@shared/schema";
import ProjectModal from "@/components/project-modal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"]
  });

  if (isLoading) {
    return (
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] mx-auto"></div>
          </div>
          <div className="text-center text-gray-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of innovative architectural projects that push the boundaries of design and functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--modern-accent)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
