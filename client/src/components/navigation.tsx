export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--modern-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[var(--modern-dark)]">Marcus</h1>
            <p className="text-xs text-[var(--modern-grey)] hidden sm:block">Architecture Studio</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-[var(--modern-accent-light)]"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-[var(--modern-accent-light)]"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-[var(--modern-accent-light)]"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[var(--modern-accent)] text-white px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:bg-[var(--modern-gradient-2)] hover:shadow-md"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[var(--modern-dark)] p-2">
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
