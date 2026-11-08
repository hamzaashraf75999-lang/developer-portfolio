export default function About() {
  const coreStack = [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "Python",
    "PostgreSQL",
    "Firebase",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Crafting Scalable Web &amp; Mobile Architectures
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-zinc-300 leading-relaxed text-lg">
              I am a passionate <span className="text-zinc-100 font-semibold">Full-Stack Developer</span> experienced in building high-performance Single-Page Applications (SPAs), clean authentication flows, robust CRUD architectures, and mobile utility tools.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base">
              My engineering philosophy emphasizes clean code architecture, intuitive UX design, secure API integrations, and maintainable systems that scale smoothly. Whether developing an academic portal, a utility web suite, or cross-platform mobile apps, I ensure fast performance and rock-solid reliability.
            </p>

            {/* Core Stack Badges */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-zinc-200 tracking-wider uppercase mb-3">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-[#181822] border border-[#27272a] text-zinc-200 hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "SPAs & Modern Web",
                desc: "Fluid, ultra-responsive single-page experiences.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Auth & CRUD",
                desc: "Secure role-based auth and resilient data flows.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Apps",
                desc: "Cross-platform mobile apps deployed to Play Store.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                title: "Backend & APIs",
                desc: "RESTful services, Laravel backends & databases.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-5 bg-[#111118] border border-[#27272a] rounded-2xl hover:border-indigo-500/40 hover:bg-[#161622] transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-3.5 group-hover:bg-indigo-500/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-zinc-100 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
