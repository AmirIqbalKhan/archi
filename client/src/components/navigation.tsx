export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="brutal-border border-b-0 bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 sticky top-0 z-50">
      <div className="brutal-grid grid-cols-1 lg:grid-cols-5 items-center gap-4">
        <div className="lg:col-span-2">
          <h1 className="helvetica text-2xl font-bold uppercase tracking-wider">MARCUS CONCRETE</h1>
        </div>
        <div className="lg:col-span-3">
          <ul className="flex justify-end space-x-8 courier uppercase font-bold text-sm tracking-widest">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:bg-[var(--brutal-white)] hover:text-[var(--brutal-black)] px-3 py-2 transition-all duration-200"
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:bg-[var(--brutal-white)] hover:text-[var(--brutal-black)] px-3 py-2 transition-all duration-200"
              >
                PROJECTS
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:bg-[var(--brutal-white)] hover:text-[var(--brutal-black)] px-3 py-2 transition-all duration-200"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:bg-[var(--brutal-white)] hover:text-[var(--brutal-black)] px-3 py-2 transition-all duration-200"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
