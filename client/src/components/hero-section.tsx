export default function HeroSection() {
  return (
    <section id="home" className="pt-20 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[var(--modern-background)] to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light text-[var(--modern-dark)] leading-tight mb-6">
              Marcus
              <span className="block font-bold bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] bg-clip-text text-transparent">
                Concrete
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--modern-grey)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Creating extraordinary architectural experiences that blend innovation with timeless design principles for modern living
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--modern-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] hover:shadow-lg transition-all duration-300"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[var(--modern-border)] text-[var(--modern-dark)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--modern-accent-light)] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <p className="text-sm text-[var(--modern-grey)] mb-8 uppercase tracking-wider">Trusted by 50+ clients worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="text-[var(--modern-grey)] font-semibold">Residential Projects</div>
            <div className="text-[var(--modern-grey)] font-semibold">Commercial Spaces</div>
            <div className="text-[var(--modern-grey)] font-semibold">Urban Planning</div>
            <div className="text-[var(--modern-grey)] font-semibold">Interior Design</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Modern architectural design by Marcus Concrete"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl shadow-lg p-6 border border-[var(--modern-border)]">
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-[var(--modern-dark)]">50+</div>
                <div className="text-sm text-[var(--modern-grey)]">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px bg-[var(--modern-border)]"></div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-[var(--modern-dark)]">15+</div>
                <div className="text-sm text-[var(--modern-grey)]">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px bg-[var(--modern-border)]"></div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-[var(--modern-dark)]">25+</div>
                <div className="text-sm text-[var(--modern-grey)]">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
