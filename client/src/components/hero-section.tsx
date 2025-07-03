import ThreeModel from "@/components/three-model";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-[var(--brutal-beige)]">
      <div className="brutal-grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Name Section */}
        <div className="brutal-border border-t-0 border-l-0 bg-[var(--brutal-white)] flex items-center justify-center p-12">
          <div className="text-center">
            <h1 className="helvetica text-6xl lg:text-8xl font-black uppercase tracking-wider leading-none mb-6">
              MARCUS<br />
              CONCRETE
            </h1>
            <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-4 inline-block">
              <p className="courier text-lg uppercase tracking-widest font-bold">ARCHITECT</p>
            </div>
            <div className="mt-8 brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 inline-block">
              <p className="courier text-sm uppercase tracking-wider">RAW CONCRETE AESTHETICS</p>
            </div>
          </div>
        </div>
        
        {/* 3D Model Section */}
        <div className="brutal-border border-t-0 border-r-0 bg-[var(--brutal-white)] p-6">
          <ThreeModel />
          <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-4 mt-4">
            <p className="courier text-xs uppercase tracking-widest text-center">
              WIREFRAME ARCHITECTURAL STRUCTURE - ROTATING 3D MODEL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
