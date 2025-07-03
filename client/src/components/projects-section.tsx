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
      <section id="projects" className="min-h-screen bg-[var(--brutal-beige)]">
        <div className="brutal-border border-t-0 bg-[var(--brutal-white)] p-12">
          <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 mb-12 inline-block">
            <h2 className="helvetica text-4xl font-black uppercase tracking-wider">PROJECTS</h2>
          </div>
          <div className="text-center courier uppercase tracking-wider">LOADING PROJECTS...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="min-h-screen bg-[var(--brutal-beige)]">
        <div className="brutal-border border-t-0 bg-[var(--brutal-white)] p-12">
          <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 mb-12 inline-block">
            <h2 className="helvetica text-4xl font-black uppercase tracking-wider">PROJECTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="project-card brutal-border bg-[var(--brutal-white)] p-8 flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                    <h3 className="courier text-lg uppercase font-bold tracking-wider">{project.title}</h3>
                  </div>
                  <p className="helvetica text-sm uppercase tracking-wide mb-4">{project.category}</p>
                </div>
                <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-2">
                  <p className="courier text-xs uppercase tracking-widest text-center">VIEW PROJECT</p>
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
