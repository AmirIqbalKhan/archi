export default function HeroSection() {
  return (
    <section id="home" className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--modern-background)] via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--modern-accent)] via-purple-500 to-[var(--modern-gradient-2)]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[var(--modern-accent)]/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-[var(--modern-accent)]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-[var(--modern-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] hover:shadow-lg transition-all duration-300 hover:scale-105"
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
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Modern architectural design by Marcus Concrete"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--modern-accent)]/10 to-transparent"></div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 border border-[var(--modern-border)]">
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