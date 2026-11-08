"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up opacity-0 stagger-1 inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-muted">Available for new opportunities</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up opacity-0 stagger-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            Hamza Ashraf
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up opacity-0 stagger-3 mt-4 text-lg sm:text-xl md:text-2xl text-accent font-medium">
          Full-Stack Web &amp; Mobile Application Developer
        </p>

        {/* Brief intro */}
        <p className="animate-fade-in-up opacity-0 stagger-4 mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Specialized in building modern, scalable applications with{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React Native</span>, and robust
          web solutions. Passionate about crafting clean code and exceptional user
          experiences.
        </p>

        {/* Action Buttons */}
        <div className="animate-fade-in-up opacity-0 stagger-5 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3.5 border border-border hover:border-accent/50 text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-white/5 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in opacity-0 stagger-6 mt-16">
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-muted/40 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-muted/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

