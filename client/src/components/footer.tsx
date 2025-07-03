export default function Footer() {
  return (
    <footer className="bg-[var(--modern-dark)] text-[var(--modern-light)] p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="inter-font text-xl font-semibold mb-4">Marcus Concrete</h3>
            <p className="inter-font text-sm text-gray-300">Architecture Studio</p>
          </div>
          
          <div>
            <h4 className="inter-font text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 inter-font text-sm text-gray-300">
              <li>Architectural Design</li>
              <li>Urban Planning</li>
              <li>Interior Design</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="inter-font text-sm font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2 inter-font text-sm text-gray-300">
              <li>Residential</li>
              <li>Commercial</li>
              <li>Institutional</li>
              <li>Industrial</li>
            </ul>
          </div>
          
          <div>
            <h4 className="inter-font text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <div className="bg-[var(--modern-accent)] text-[var(--modern-light)] px-3 py-2 rounded-lg">
                <span className="inter-font text-xs font-medium">LinkedIn</span>
              </div>
              <div className="bg-[var(--modern-accent)] text-[var(--modern-light)] px-3 py-2 rounded-lg">
                <span className="inter-font text-xs font-medium">Instagram</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-6">
          <p className="inter-font text-xs text-gray-400 text-center">
            © 2024 Marcus Concrete Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
