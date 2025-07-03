export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-[var(--modern-light)] backdrop-blur-md bg-opacity-90 border-b border-[var(--modern-border)] p-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="inter-font text-2xl font-semibold text-[var(--modern-dark)]">Marcus Concrete</h1>
          <p className="text-sm text-[var(--modern-grey)] mt-1">Architecture Studio</p>
        </div>
        <div>
          <ul className="flex space-x-8 inter-font">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[var(--modern-dark)] hover:text-[var(--modern-accent)] px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
