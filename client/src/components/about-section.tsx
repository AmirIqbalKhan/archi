export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[var(--modern-light)]">
      <div className="max-w-7xl mx-auto p-12">
        <div className="text-center mb-12">
          <h2 className="inter-font text-4xl font-light text-[var(--modern-dark)] mb-4">About</h2>
          <div className="w-16 h-1 bg-[var(--modern-accent)] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="inter-font text-xl font-semibold text-[var(--modern-dark)] mb-4">Philosophy</h3>
              <p className="inter-font text-base leading-relaxed text-[var(--modern-grey)]">
                Architecture is the masterly, correct and magnificent play of masses brought together in light. 
                Modern design embodies honest materials and uncompromising form, creating spaces that inspire and endure.
              </p>
            </div>

            <div>
              <h3 className="inter-font text-xl font-semibold text-[var(--modern-dark)] mb-4">Education</h3>
              <div className="space-y-3">
                <div className="bg-[var(--modern-background)] border border-[var(--modern-border)] rounded-lg p-4">
                  <div className="flex flex-col">
                    <span className="inter-font text-sm font-medium text-[var(--modern-dark)]">Architectural Association School</span>
                    <span className="inter-font text-xs text-[var(--modern-grey)]">1995-2000</span>
                  </div>
                </div>
                <div className="bg-[var(--modern-background)] border border-[var(--modern-border)] rounded-lg p-4">
                  <div className="flex flex-col">
                    <span className="inter-font text-sm font-medium text-[var(--modern-dark)]">Masters in Urban Design - MIT</span>
                    <span className="inter-font text-xs text-[var(--modern-grey)]">2001-2003</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="inter-font text-xl font-semibold text-[var(--modern-dark)] mb-4">Experience</h3>
              <div className="space-y-3">
                <div className="bg-[var(--modern-accent)] bg-opacity-10 border border-[var(--modern-accent)] border-opacity-20 rounded-lg p-4">
                  <div className="flex flex-col">
                    <span className="inter-font text-sm font-medium text-[var(--modern-dark)]">Principal Architect - Concrete Studio</span>
                    <span className="inter-font text-xs text-[var(--modern-grey)]">2020-Present</span>
                  </div>
                </div>
                <div className="bg-[var(--modern-background)] border border-[var(--modern-border)] rounded-lg p-4">
                  <div className="flex flex-col">
                    <span className="inter-font text-sm font-medium text-[var(--modern-dark)]">Senior Architect - Brutalist Collective</span>
                    <span className="inter-font text-xs text-[var(--modern-grey)]">2015-2020</span>
                  </div>
                </div>
                <div className="bg-[var(--modern-background)] border border-[var(--modern-border)] rounded-lg p-4">
                  <div className="flex flex-col">
                    <span className="inter-font text-sm font-medium text-[var(--modern-dark)]">Architect - Modernist Associates</span>
                    <span className="inter-font text-xs text-[var(--modern-grey)]">2003-2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                alt="Professional architect portrait" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-[var(--modern-light)] bg-opacity-90 backdrop-blur-sm rounded-lg p-3">
                <p className="inter-font text-sm font-medium text-[var(--modern-dark)]">Marcus Concrete</p>
                <p className="inter-font text-xs text-[var(--modern-grey)]">Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
