interface ProjectItem {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  features: string[];
}

const projects: ProjectItem[] = [
  {
    title: "All-Rounder Web Tools",
    badge: "Live Product",
    description:
      "A versatile web suite offering online file conversions, text formatting, and calculation utilities. Engineered for lightning-fast client-side execution, clean UX, and optimal accessibility.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.allroundertools.com/",
    gradient: "from-indigo-500 to-cyan-500",
    features: [
      "40+ online file conversion & calculation utilities",
      "Instant client-side formatting & transformation",
      "SEO-friendly, responsive single-page architecture",
    ],
  },
  {
    title: "Quran Circles Management System",
    badge: "Live Demo",
    description:
      "A specialized portal tailored for managing Islamic study circles, student records, teacher allocations, and attendance tracking with modern authentication and clean dashboards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://stitch-quran-circles-management-sys.vercel.app/",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "Role-based dashboards for students & circle instructors",
      "Live class schedules, progress & attendance records",
      "Production deployment hosted with high availability",
    ],
  },
  {
    title: "EduPulse University LMS",
    badge: "Open Source",
    description:
      "A robust learning management system prototype designed for modern educational workflows, course scheduling, grading systems, and student academic progress tracking.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade"],
    githubUrl: "https://github.com/hamza-apps-dev/edupulse-university-lms",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Comprehensive LMS architecture & course syllabus management",
      "Secure student/faculty authentication & permission tiers",
      "Modular backend architecture with RESTful endpoints",
    ],
  },
  {
    title: "Study Planner (Auth & CRUD)",
    badge: "Open Source",
    description:
      "A single-page task and study management application featuring secure user authentication, token-based sessions, and full CRUD capabilities for organizing academic milestones.",
    tech: ["React", "Node.js", "Express", "MongoDB / SQL", "JWT Auth"],
    githubUrl: "https://github.com/hamza-apps-dev/study-planner-auth-crud",
    gradient: "from-amber-500 to-orange-500",
    features: [
      "End-to-end user authentication & protected routes",
      "Complete CRUD operations for schedules and priorities",
      "Responsive SPA with real-time UI state updates",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Featured Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Web Platforms &amp; Software Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between bg-[#111118] border border-[#27272a] rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5"
            >
              {/* Accent colored top strip */}
              <div
                className={`h-1.5 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#1d1d2b] text-indigo-300 border border-indigo-500/20">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 space-y-2">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium bg-[#1a1a26] text-zinc-300 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Links */}
                <div className="pt-6 mt-6 border-t border-[#27272a]/70 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#181824] hover:bg-[#202030] text-zinc-200 border border-[#2e2e38] hover:border-indigo-400/50 transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
