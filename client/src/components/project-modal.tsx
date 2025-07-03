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
          <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 mb-8 inline-block">
            <h2 className="helvetica text-3xl font-black uppercase tracking-wider">
              {project.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto brutal-border filter grayscale"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                    <h3 className="courier text-lg uppercase font-bold tracking-wider">PROJECT DETAILS</h3>
                  </div>
                  <ul className="space-y-3 helvetica text-sm uppercase tracking-wide">
                    <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                      TYPE: {project.type}
                    </li>
                    <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                      LOCATION: {project.location}
                    </li>
                    <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                      YEAR: {project.year}
                    </li>
                    <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                      AREA: {project.area}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                    <h3 className="courier text-lg uppercase font-bold tracking-wider">DESCRIPTION</h3>
                  </div>
                  <p className="helvetica text-base leading-relaxed uppercase tracking-wide">
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
