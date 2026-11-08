export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Passionate Developer, Problem Solver
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-accent to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="space-y-6">
            <p className="text-muted leading-relaxed text-lg">
              I&apos;m a dedicated Full-Stack Developer who thrives on turning complex problems
              into elegant, user-friendly solutions. With a strong foundation in modern web
              technologies, I specialize in building{" "}
              <span className="text-foreground font-medium">Single-Page Applications (SPAs)</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">cross-platform mobile apps</span>{" "}
              that deliver seamless experiences.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              My approach centers around clean code architecture, scalable design patterns,
              and performance optimization. I believe that great software is not just about
              functionality—it&apos;s about crafting intuitive interfaces and maintainable
              codebases that stand the test of time.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Whether it&apos;s architecting a multi-portal educational system or building
              developer tools from scratch, I bring passion, precision, and a relentless
              drive to every project.
            </p>
          </div>

          {/* Right - Stats/highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Clean Code",
                desc: "Modular, maintainable architecture",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "SPAs",
                desc: "Fast, dynamic single-page apps",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Apps",
                desc: "Cross-platform mobile solutions",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Performance",
                desc: "Optimized for speed & UX",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

