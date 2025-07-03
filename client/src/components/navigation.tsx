export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-10 backdrop-blur-xl border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Marcus</h1>
            <p className="text-xs text-gray-300 hidden sm:block">Architecture Studio</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-white hover:bg-opacity-10"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-white hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-white hover:bg-opacity-10"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-white hover:bg-opacity-10"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-white hover:bg-opacity-10"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
