const futurePillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'AI-Powered Scheduling',
    desc: 'Smart algorithms that learn and optimize scheduling automatically.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11a9 9 0 101 4.63" />
      </svg>
    ),
    title: 'Scalable & Flexible',
    desc: 'Designed to scale from small schools to large universities.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security with 99.9% uptime guarantee.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
    title: 'Regular Updates',
    desc: 'Continuous improvements and new features released monthly.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
      </svg>
    ),
    title: 'Mobile Ready',
    desc: 'Access on any device – desktop, tablet or mobile.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Data Insights',
    desc: 'Powerful analytics to make data-driven decisions.',
  },
]

export default function FutureProof() {
  return (
    <section id="resources" className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Future-Proof Your Campus
          </h2>
          <p className="text-purple-200 text-base">
            Built with modern technology to grow with your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {futurePillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`fade-in-up delay-${(i % 3) * 100 + 100} glow-hover-purple flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{pillar.title}</h3>
              <p className="text-purple-200 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
