import ThreeModel from "@/components/three-model";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-[var(--modern-background)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Name Section */}
        <div className="flex items-center justify-center p-12">
          <div className="text-center">
            <h1 className="inter-font text-5xl lg:text-7xl font-light text-[var(--modern-dark)] leading-tight mb-6">
              Marcus<br />
              <span className="font-semibold">Concrete</span>
            </h1>
            <div className="bg-[var(--modern-dark)] text-[var(--modern-light)] px-6 py-3 rounded-full inline-block mb-6">
              <p className="inter-font text-sm font-medium">Architect</p>
            </div>
            <div className="bg-[var(--modern-light)] text-[var(--modern-grey)] px-6 py-3 rounded-lg inline-block shadow-sm border border-[var(--modern-border)]">
              <p className="inter-font text-sm">Modern Architectural Design</p>
            </div>
          </div>
        </div>
        
        {/* 3D Model Section */}
        <div className="flex items-center justify-center p-12">
          <div className="w-full">
            <ThreeModel />
            <div className="bg-[var(--modern-light)] text-[var(--modern-grey)] px-6 py-4 rounded-lg mt-6 shadow-sm border border-[var(--modern-border)]">
              <p className="inter-font text-sm text-center">
                Interactive 3D Architectural Model
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
