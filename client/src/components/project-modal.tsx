import { useEffect } from "react";
import { type Project } from "@shared/schema";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content bg-white border border-[var(--modern-border)] shadow-2xl">
        <button className="close-button bg-gray-100 hover:bg-gray-200 border border-[var(--modern-border)] text-[var(--modern-dark)]" onClick={onClose}>
          ×
        </button>
        
        <div className="p-6 sm:p-12">
          <div className="mb-8">
            <div className="bg-[var(--modern-accent)] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {project.type}
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-[var(--modern-dark)] mb-2">
              {project.title}
            </h2>
            <p className="text-[var(--modern-grey)] text-lg">{project.category}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--modern-dark)] mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 border border-[var(--modern-border)] rounded-xl p-4">
                      <span className="text-sm font-medium text-[var(--modern-grey)]">Type:</span>
                      <span className="text-sm text-[var(--modern-dark)] ml-2 font-semibold">{project.type}</span>
                    </div>
                    <div className="bg-gray-50 border border-[var(--modern-border)] rounded-xl p-4">
                      <span className="text-sm font-medium text-[var(--modern-grey)]">Location:</span>
                      <span className="text-sm text-[var(--modern-dark)] ml-2 font-semibold">{project.location}</span>
                    </div>
                    <div className="bg-gray-50 border border-[var(--modern-border)] rounded-xl p-4">
                      <span className="text-sm font-medium text-[var(--modern-grey)]">Year:</span>
                      <span className="text-sm text-[var(--modern-dark)] ml-2 font-semibold">{project.year}</span>
                    </div>
                    <div className="bg-[var(--modern-accent-light)] border border-[var(--modern-accent)]/20 rounded-xl p-4">
                      <span className="text-sm font-medium text-[var(--modern-grey)]">Area:</span>
                      <span className="text-sm text-[var(--modern-dark)] ml-2 font-semibold">{project.area}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--modern-dark)] mb-4">Description</h3>
                  <div className="bg-gray-50 border border-[var(--modern-border)] rounded-xl p-6">
                    <p className="text-base leading-relaxed text-[var(--modern-grey)]">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={onClose}
                    className="flex-1 bg-[var(--modern-accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] transition-all duration-300"
                  >
                    Contact for Project
                  </button>
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 border border-[var(--modern-border)] text-[var(--modern-dark)] rounded-lg font-medium hover:bg-[var(--modern-accent-light)] transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
