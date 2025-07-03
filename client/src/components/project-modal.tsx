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
      <div className="modal-content bg-[var(--modern-background)] border border-white border-opacity-10">
        <button className="close-button bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-20" onClick={onClose}>
          ×
        </button>
        
        <div className="p-6 sm:p-12">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {project.type}
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 text-lg">{project.category}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-4">
                      <span className="text-sm font-medium text-gray-400">Type:</span>
                      <span className="text-sm text-white ml-2 font-semibold">{project.type}</span>
                    </div>
                    <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-4">
                      <span className="text-sm font-medium text-gray-400">Location:</span>
                      <span className="text-sm text-white ml-2 font-semibold">{project.location}</span>
                    </div>
                    <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-4">
                      <span className="text-sm font-medium text-gray-400">Year:</span>
                      <span className="text-sm text-white ml-2 font-semibold">{project.year}</span>
                    </div>
                    <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-4">
                      <span className="text-sm font-medium text-gray-400">Area:</span>
                      <span className="text-sm text-white ml-2 font-semibold">{project.area}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-6">
                    <p className="text-base leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
