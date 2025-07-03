export default function Footer() {
  return (
    <footer className="brutal-border border-t-0 bg-[var(--brutal-black)] text-[var(--brutal-white)] p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="helvetica text-xl font-black uppercase tracking-wider mb-4">MARCUS CONCRETE</h3>
          <p className="courier text-xs uppercase tracking-widest">ARCHITECTURAL STUDIO</p>
        </div>
        
        <div>
          <h4 className="courier text-sm uppercase font-bold tracking-wider mb-4">SERVICES</h4>
          <ul className="space-y-2 helvetica text-xs uppercase tracking-wide">
            <li>ARCHITECTURAL DESIGN</li>
            <li>URBAN PLANNING</li>
            <li>INTERIOR DESIGN</li>
            <li>CONSULTING</li>
          </ul>
        </div>
        
        <div>
          <h4 className="courier text-sm uppercase font-bold tracking-wider mb-4">SECTORS</h4>
          <ul className="space-y-2 helvetica text-xs uppercase tracking-wide">
            <li>RESIDENTIAL</li>
            <li>COMMERCIAL</li>
            <li>INSTITUTIONAL</li>
            <li>INDUSTRIAL</li>
          </ul>
        </div>
        
        <div>
          <h4 className="courier text-sm uppercase font-bold tracking-wider mb-4">CONNECT</h4>
          <div className="space-y-2">
            <div className="brutal-border bg-[var(--brutal-white)] text-[var(--brutal-black)] p-2 inline-block">
              <span className="courier text-xs uppercase font-bold tracking-widest">LINKEDIN</span>
            </div>
            <br />
            <div className="brutal-border bg-[var(--brutal-white)] text-[var(--brutal-black)] p-2 inline-block">
              <span className="courier text-xs uppercase font-bold tracking-widest">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brutal-border border-l-0 border-r-0 border-b-0 mt-12 pt-6">
        <p className="courier text-xs uppercase tracking-widest text-center">
          © 2024 MARCUS CONCRETE STUDIO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
