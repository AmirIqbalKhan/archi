export default function Footer() {
  return (
    <footer className="relative py-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Marcus</h3>
            <p className="text-gray-400 text-sm mb-4">Architecture Studio</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Creating extraordinary architectural experiences that blend innovation with timeless design principles.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Architectural Design</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Urban Planning</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Interior Design</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Project Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Specializations</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Residential</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Commercial</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Institutional</li>
              <li className="hover:text-[var(--modern-accent)] transition-colors duration-200 cursor-pointer">Sustainable Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10 hover:border-opacity-20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center">
                LinkedIn
              </a>
              <a href="#" className="bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10 hover:border-opacity-20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center">
                Instagram
              </a>
              <a href="#" className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 text-center">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © 2024 Marcus Concrete Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-xs text-gray-500 hover:text-[var(--modern-accent)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[var(--modern-accent)] transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
