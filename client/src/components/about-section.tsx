export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-6">About Marcus</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visionary architect with over two decades of experience creating extraordinary spaces that define the future of design
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--modern-accent)] to-[var(--modern-gradient-2)] rounded-full mr-4"></span>
                Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Architecture is the masterly, correct and magnificent play of masses brought together in light. 
                Modern design embodies honest materials and uncompromising form, creating spaces that inspire and endure through generations.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--modern-accent)] to-[var(--modern-gradient-2)] rounded-full mr-4"></span>
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Architectural Association School</span>
                    <span className="text-gray-400 text-sm">1995-2000 • London</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Masters in Urban Design - MIT</span>
                    <span className="text-gray-400 text-sm">2001-2003 • Cambridge</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--modern-accent)] to-[var(--modern-gradient-2)] rounded-full mr-4"></span>
                Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] bg-opacity-20 border border-[var(--modern-accent)] border-opacity-30 rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Principal Architect - Concrete Studio</span>
                    <span className="text-gray-300 text-sm">2020-Present</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Senior Architect - Design Collective</span>
                    <span className="text-gray-400 text-sm">2015-2020</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Architect - Modernist Associates</span>
                    <span className="text-gray-400 text-sm">2003-2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative max-w-md">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                  alt="Professional architect portrait" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20">
                  <p className="text-white font-semibold text-lg">Marcus Concrete</p>
                  <p className="text-gray-300 text-sm">Principal Architect & Founder</p>
                  <div className="flex space-x-2 mt-3">
                    <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-3 py-1 rounded-full text-xs font-medium">
                      20+ Years
                    </div>
                    <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Award Winner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
