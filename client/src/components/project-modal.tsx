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
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        <div className="p-12">
          <div className="mb-8">
            <div className="bg-[var(--modern-accent)] text-[var(--modern-light)] px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              {project.type}
            </div>
            <h2 className="inter-font text-3xl font-light text-[var(--modern-dark)] mb-2">
              {project.title}
            </h2>
            <p className="inter-font text-[var(--modern-grey)]">{project.category}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="inter-font text-lg font-semibold text-[var(--modern-dark)] mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="bg-[var(--modern-light)] border border-[var(--modern-border)] rounded-lg p-4">
                      <span className="inter-font text-sm font-medium text-[var(--modern-grey)]">Type:</span>
                      <span className="inter-font text-sm text-[var(--modern-dark)] ml-2">{project.type}</span>
                    </div>
                    <div className="bg-[var(--modern-light)] border border-[var(--modern-border)] rounded-lg p-4">
                      <span className="inter-font text-sm font-medium text-[var(--modern-grey)]">Location:</span>
                      <span className="inter-font text-sm text-[var(--modern-dark)] ml-2">{project.location}</span>
                    </div>
                    <div className="bg-[var(--modern-light)] border border-[var(--modern-border)] rounded-lg p-4">
                      <span className="inter-font text-sm font-medium text-[var(--modern-grey)]">Year:</span>
                      <span className="inter-font text-sm text-[var(--modern-dark)] ml-2">{project.year}</span>
                    </div>
                    <div className="bg-[var(--modern-light)] border border-[var(--modern-border)] rounded-lg p-4">
                      <span className="inter-font text-sm font-medium text-[var(--modern-grey)]">Area:</span>
                      <span className="inter-font text-sm text-[var(--modern-dark)] ml-2">{project.area}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="inter-font text-lg font-semibold text-[var(--modern-dark)] mb-4">Description</h3>
                  <p className="inter-font text-base leading-relaxed text-[var(--modern-grey)]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
