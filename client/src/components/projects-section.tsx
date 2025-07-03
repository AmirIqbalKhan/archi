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
      <section id="projects" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-[var(--modern-dark)] mb-6">Selected Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] mx-auto"></div>
          </div>
          <div className="text-center text-[var(--modern-grey)]">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-[var(--modern-grey)] mb-4 uppercase tracking-wider">Portfolio</p>
            <h2 className="text-3xl sm:text-5xl font-light text-[var(--modern-dark)] mb-6">Selected Success Stories</h2>
            <p className="text-lg text-[var(--modern-grey)] max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of exceptional architectural projects that transform spaces and create lasting impact for our clients worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 border border-[var(--modern-border)]">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-[var(--modern-accent)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.type}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-[var(--modern-grey)] mb-4">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    
                    <p className="text-[var(--modern-grey)] text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-[var(--modern-border)]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[var(--modern-grey)]">Area: {project.area}</span>
                        <span className="text-[var(--modern-accent)] text-sm font-medium group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl sm:text-3xl font-light text-[var(--modern-dark)] mb-6">Explore all projects</h3>
            <p className="text-[var(--modern-grey)] mb-8">Join over 50+ clients already growing with us through exceptional architectural design</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--modern-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] hover:shadow-lg transition-all duration-300">
                View All Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[var(--modern-border)] text-[var(--modern-dark)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--modern-accent-light)] transition-all duration-300"
              >
                Book a Call
              </button>
            </div>
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
