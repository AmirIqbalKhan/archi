export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light text-white leading-tight mb-6">
            Marcus
            <span className="block font-bold bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] bg-clip-text text-transparent">
              Concrete
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white border-opacity-20">
              <p className="text-sm font-medium">Architect & Designer</p>
            </div>
            <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-6 py-3 rounded-full">
              <p className="text-sm font-semibold">Award-Winning Studio</p>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating extraordinary architectural experiences that blend innovation with timeless design principles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white bg-opacity-10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
