export default function MobileApps() {
  return (
    <section id="mobile-apps" className="py-20 relative">
      {/* Decorative divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Mobile Development
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Android Applications on Google Play
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Featured Android App Showcase Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#12121a] to-[#0d0d14] border border-[#27272a] hover:border-indigo-500/50 rounded-3xl p-7 sm:p-10 shadow-2xl transition-all duration-300">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* App Icon / Visual */}
            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 p-[2px] shadow-xl shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-shadow">
                  <div className="w-full h-full bg-[#111118] rounded-[22px] flex flex-col items-center justify-center p-3 text-center">
                    <svg className="w-12 h-12 text-emerald-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] font-bold tracking-widest text-zinc-200">TIMETABLE</span>
                  </div>
                </div>
                {/* Clean badge below app icon */}
                <span className="mt-3 inline-block px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-[11px] font-semibold text-emerald-300">
                  Android App
                </span>
              </div>
            </div>

            {/* App Details & Store Button */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-zinc-100">
                  Timetable &amp; Schedule Manager
                </h3>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  Live on Play Store
                </span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                An intuitive Android mobile application designed to organize daily schedules, classes, routines, and task milestones efficiently. Built with cross-platform architecture focusing on offline capability, low latency, and modern Material UI.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#181824] rounded-xl border border-white/5">
                  <p className="text-xs text-zinc-400">Target Platform</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">Android OS</p>
                </div>
                <div className="p-3 bg-[#181824] rounded-xl border border-white/5">
                  <p className="text-xs text-zinc-400">Architecture</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">React Native / Mobile</p>
                </div>
                <div className="p-3 bg-[#181824] rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                  <p className="text-xs text-zinc-400">Distribution</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">Google Play</p>
                </div>
              </div>

              {/* Action Link to Google Play */}
              <div className="pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hamza.timetable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#181822] hover:bg-[#222232] border border-[#2e2e3e] hover:border-emerald-500/60 rounded-xl text-zinc-100 font-medium transition-all duration-200 shadow-md group"
                >
                  <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-.926V2.74c.16-.367.375-.689.61-.926zm11.305 11.306l2.368 2.368-12.025 6.942 9.657-9.31zm0-2.24L5.257 1.57l12.025 6.942-2.368 2.368zm1.597 1.12l3.435 1.983c.96.554.96 1.458 0 2.012l-3.435 1.983-2.128-2.128 2.128-2.05z" />
                  </svg>
                  <span>Get it on Google Play</span>
                  <svg className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

