export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-[var(--modern-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[var(--modern-dark)] mb-2">Marcus</h3>
            <p className="text-[var(--modern-grey)] text-sm mb-4">Architecture Studio</p>
            <p className="text-[var(--modern-grey)] text-xs leading-relaxed">
              Creating extraordinary architectural experiences that blend innovation with timeless design principles.
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--modern-dark)] font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-[var(--modern-grey)]">
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Architectural Design</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Urban Planning</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Interior Design</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Project Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--modern-dark)] font-semibold mb-6">Specializations</h4>
            <ul className="space-y-3 text-sm text-[var(--modern-grey)]">
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Residential</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Commercial</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Institutional</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Sustainable Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--modern-dark)] font-semibold mb-6">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="border border-[var(--modern-border)] hover:bg-[var(--modern-accent-light)] text-[var(--modern-dark)] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center">
                LinkedIn
              </a>
              <a href="#" className="border border-[var(--modern-border)] hover:bg-[var(--modern-accent-light)] text-[var(--modern-dark)] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center">
                Instagram
              </a>
              <a href="#" className="bg-[var(--modern-accent)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--modern-gradient-2)] hover:shadow-md transition-all duration-300 text-center">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--modern-border)] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[var(--modern-grey)]">
              © 2024 Marcus Concrete Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-xs text-[var(--modern-grey)] hover:text-[var(--modern-accent)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-xs text-[var(--modern-grey)] hover:text-[var(--modern-accent)] transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
