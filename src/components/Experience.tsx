const experiences = [
  {
    type: "work" as const,
    title: "Web Development Intern",
    org: "Software Development Company",
    period: "2024 — 2025",
    description:
      "Contributed to full-stack web projects, building CRUD applications with modern frameworks. Developed responsive user interfaces and delivered presentations on SPA architecture and best practices.",
    highlights: [
      "Built full-stack CRUD applications with REST APIs",
      "Developed responsive UIs using React and Tailwind CSS",
      "Presented on SPA architecture to the development team",
      "Collaborated in Agile sprints with Git-based workflows",
    ],
  },
  {
    type: "education" as const,
    title: "Bachelor's in Computer Science / Software Engineering",
    org: "University",
    period: "2021 — 2025",
    description:
      "Focused on software engineering principles, data structures, algorithms, and modern web development technologies. Completed multiple capstone projects and participated in coding challenges.",
    highlights: [
      "Core coursework in DSA, OOP, DBMS & Software Engineering",
      "Capstone project: Multi-Portal Educational Management System",
      "Active in coding competitions & developer communities",
      "Self-directed learning in cloud technologies & DevOps",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience & Education</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-accent to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.type === "work"
                      ? "border-accent bg-accent/30"
                      : "border-purple-400 bg-purple-400/30"
                  } z-10`}
                />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-[50%] md:pr-12"
                      : "md:ml-[50%] md:pl-12"
                  }`}
                >
                  <div className="group p-6 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-card-hover transition-all duration-300">
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          exp.type === "work"
                            ? "bg-accent/10 text-accent"
                            : "bg-purple-400/10 text-purple-400"
                        }`}
                      >
                        {exp.type === "work" ? "💼 Work" : "🎓 Education"}
                      </span>
                      <span className="text-xs text-muted">{exp.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-accent mt-1">{exp.org}</p>
                    <p className="text-muted mt-3 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-success shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          <span className="text-sm text-muted">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

