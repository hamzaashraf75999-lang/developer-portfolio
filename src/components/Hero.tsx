"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-500/5 rounded-full blur-3xl" />
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#27272a] bg-[#111118]/80 backdrop-blur-sm shadow-inner shadow-white/5">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-zinc-300 font-medium">Available for New Projects &amp; Collaborations</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
            Hamza Ashraf
          </span>
        </h1>

        {/* Title */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-indigo-400 font-semibold tracking-wide">
          Full-Stack Web &amp; Mobile Application Developer
        </p>

        {/* Tagline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          &ldquo;Building scalable web platforms, modern management systems, and cross-platform mobile apps with Next.js, React Native, and Laravel.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              View Featured Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="mailto:hamzaashraf75999@gmail.com"
            className="group px-8 py-3.5 border border-[#27272a] hover:border-indigo-500/60 bg-[#111118]/60 hover:bg-[#1a1a24] text-zinc-200 font-medium rounded-xl transition-all duration-300 w-full sm:w-auto shadow-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <svg className="w-4 h-4 text-indigo-400 group-hover:translate-y-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14">
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-[11px] tracking-widest uppercase">Explore More</span>
            <div className="w-5 h-8 border-2 border-zinc-700 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
