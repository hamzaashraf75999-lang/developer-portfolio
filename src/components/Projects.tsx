const projects = [
  {
    title: "Multi-Portal Educational Management System",
    description:
      "A comprehensive educational platform featuring distinct portals for students, teachers, and administrators. Built with role-based access control, real-time data management, and an intuitive dashboard for academic operations.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    features: [
      "Role-based multi-portal architecture",
      "Real-time dashboard & analytics",
      "Responsive design across all devices",
    ],
    gradient: "from-accent to-blue-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "All-Rounder Web Tools",
    description:
      "A versatile suite of web-based tools offering unit conversion, text formatting, code beautification, and calculation utilities. Designed for developers and everyday users alike with a clean, accessible interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "40+ conversion & formatting tools",
      "Lightning-fast client-side processing",
      "SEO-optimized tool pages",
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Single-Page Application (SPA) Architecture Demo",
    description:
      "A showcase project demonstrating modern SPA architecture with client-side routing, state management, lazy loading, and optimized performance patterns. Built as a reference for best practices in React development.",
    tech: ["React", "React Router", "Context API", "CSS Modules"],
    features: [
      "Advanced client-side routing",
      "Global state management patterns",
      "Code splitting & lazy loading",
    ],
    gradient: "from-emerald-500 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-accent to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="p-6 sm:p-8">
                <div className={`grid ${index === 0 ? "lg:grid-cols-5" : "lg:grid-cols-5"} gap-6 items-start`}>
                  {/* Icon + Title + Description */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white/90`}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2 space-y-3">
                    <p className="text-sm font-medium text-foreground mb-3">Key Features</p>
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-success shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

