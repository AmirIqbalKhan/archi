export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[var(--brutal-beige)]">
      <div className="brutal-border border-t-0 bg-[var(--brutal-white)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text Content */}
          <div className="brutal-border border-l-0 border-t-0 border-b-0 lg:border-b p-12">
            <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 mb-8 inline-block">
              <h2 className="helvetica text-4xl font-black uppercase tracking-wider">ABOUT</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                  <h3 className="courier text-lg uppercase font-bold tracking-wider">PHILOSOPHY</h3>
                </div>
                <p className="helvetica text-base leading-relaxed uppercase tracking-wide">
                  ARCHITECTURE IS THE MASTERLY, CORRECT AND MAGNIFICENT PLAY OF MASSES BROUGHT TOGETHER IN LIGHT. 
                  RAW CONCRETE EMBODIES HONEST MATERIALS AND UNCOMPROMISING FORM.
                </p>
              </div>

              <div>
                <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                  <h3 className="courier text-lg uppercase font-bold tracking-wider">EDUCATION</h3>
                </div>
                <ul className="space-y-3">
                  <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                    <span className="courier text-sm uppercase font-bold tracking-wider">1995-2000 | ARCHITECTURAL ASSOCIATION SCHOOL</span>
                  </li>
                  <li className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-3">
                    <span className="courier text-sm uppercase font-bold tracking-wider">2001-2003 | MASTERS IN URBAN DESIGN | MIT</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-4 inline-block">
                  <h3 className="courier text-lg uppercase font-bold tracking-wider">EXPERIENCE</h3>
                </div>
                <ul className="space-y-3">
                  <li className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-3">
                    <span className="courier text-sm uppercase font-bold tracking-wider">2020-PRESENT | PRINCIPAL ARCHITECT | CONCRETE STUDIO</span>
                  </li>
                  <li className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-3">
                    <span className="courier text-sm uppercase font-bold tracking-wider">2015-2020 | SENIOR ARCHITECT | BRUTALIST COLLECTIVE</span>
                  </li>
                  <li className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-3">
                    <span className="courier text-sm uppercase font-bold tracking-wider">2003-2015 | ARCHITECT | MODERNIST ASSOCIATES</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="brutal-border border-r-0 border-t-0 border-b-0 lg:border-b p-12 bg-[var(--brutal-grey)] flex items-center justify-center relative">
            <div className="brutal-border">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                alt="Professional architect portrait" 
                className="w-full h-auto filter grayscale"
              />
            </div>
            <div className="absolute bottom-4 left-4 brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-2">
              <p className="courier text-xs uppercase tracking-widest">MARCUS CONCRETE - ARCHITECT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
