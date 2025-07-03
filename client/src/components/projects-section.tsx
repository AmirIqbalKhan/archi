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
      <section id="projects" className="min-h-screen bg-[var(--modern-background)]">
        <div className="max-w-7xl mx-auto p-12">
          <div className="text-center mb-12">
            <h2 className="inter-font text-4xl font-light text-[var(--modern-dark)] mb-4">Projects</h2>
            <div className="w-16 h-1 bg-[var(--modern-accent)] mx-auto"></div>
          </div>
          <div className="text-center inter-font text-[var(--modern-grey)]">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="min-h-screen bg-[var(--modern-background)]">
        <div className="max-w-7xl mx-auto p-12">
          <div className="text-center mb-12">
            <h2 className="inter-font text-4xl font-light text-[var(--modern-dark)] mb-4">Projects</h2>
            <div className="w-16 h-1 bg-[var(--modern-accent)] mx-auto mb-6"></div>
            <p className="inter-font text-[var(--modern-grey)] max-w-2xl mx-auto">
              A collection of architectural projects that showcase modern design principles and innovative solutions.
            </p>
          </div>
          
          <div className="modern-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="project-card modern-card p-6 flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="mb-4">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="bg-[var(--modern-accent)] text-[var(--modern-light)] px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    {project.type}
                  </div>
                  <h3 className="inter-font text-lg font-semibold text-[var(--modern-dark)] mb-2">{project.title}</h3>
                  <p className="inter-font text-sm text-[var(--modern-grey)] mb-4">{project.category}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inter-font text-xs text-[var(--modern-grey)]">{project.location}</span>
                  <span className="inter-font text-xs text-[var(--modern-grey)]">{project.year}</span>
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
