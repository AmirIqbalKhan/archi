export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Floating design elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-[var(--modern-accent)]/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-[var(--modern-accent)]/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-[var(--modern-grey)] mb-4 uppercase tracking-wider">About</p>
          <h2 className="text-3xl sm:text-5xl font-light text-[var(--modern-dark)] mb-6">Meet Marcus Concrete</h2>
          <p className="text-lg text-[var(--modern-grey)] max-w-3xl mx-auto leading-relaxed">
            Visionary architect with over two decades of experience creating extraordinary spaces that define the future of design and modern living
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Marcus Concrete - Principal Architect" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-[var(--modern-border)] hover-lift">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--modern-dark)]">25+</div>
                <div className="text-sm text-[var(--modern-grey)]">Awards Won</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-[var(--modern-accent)] text-white rounded-xl p-6 hover-lift">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--modern-dark)] mb-4">Design Philosophy</h3>
              <p className="text-[var(--modern-grey)] leading-relaxed mb-6">
                Architecture is the masterly, correct and magnificent play of masses brought together in light. 
                Modern design embodies honest materials and uncompromising form, creating spaces that inspire and endure through generations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-[var(--modern-border)] hover-lift">
                <h4 className="font-semibold text-[var(--modern-dark)] mb-2">Education</h4>
                <div className="space-y-2 text-sm text-[var(--modern-grey)]">
                  <div>Architectural Association School</div>
                  <div className="text-xs">1995-2000 • London</div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--modern-border)]">
                  <div>Masters in Urban Design - MIT</div>
                  <div className="text-xs">2001-2003 • Cambridge</div>
                </div>
              </div>
              
              <div className="bg-[var(--modern-accent-light)] rounded-xl p-6 border border-[var(--modern-accent)]/20 hover-lift">
                <h4 className="font-semibold text-[var(--modern-dark)] mb-2">Current Role</h4>
                <div className="space-y-2 text-sm text-[var(--modern-grey)]">
                  <div className="font-medium text-[var(--modern-accent)]">Principal Architect</div>
                  <div>Concrete Studio</div>
                  <div className="text-xs">2020-Present</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--modern-dark)] mb-4">Professional Experience</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-[var(--modern-border)] last:border-b-0">
                  <div>
                    <div className="font-medium text-[var(--modern-dark)]">Senior Architect - Design Collective</div>
                    <div className="text-sm text-[var(--modern-grey)]">2015-2020</div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[var(--modern-border)] last:border-b-0">
                  <div>
                    <div className="font-medium text-[var(--modern-dark)]">Architect - Modernist Associates</div>
                    <div className="text-sm text-[var(--modern-grey)]">2003-2015</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--modern-accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[var(--modern-border)] text-[var(--modern-dark)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--modern-accent-light)] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}