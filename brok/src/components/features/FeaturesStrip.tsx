const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2" />
      </svg>
    ),
    title: 'Smart Timetable',
    desc: 'Generate conflict-free timetables in minutes, not hours.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6M3 15h6" />
        <circle cx="16" cy="12" r="3" />
        <path d="M18.5 14.5l2 2" />
      </svg>
    ),
    title: 'Smart Room Finder',
    desc: 'Find available rooms instantly and avoid scheduling conflicts.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    title: 'Cloud Based',
    desc: 'Access your data securely from anywhere, anytime.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Better Productivity',
    desc: 'Save time, reduce manual work and focus on what matters.',
  },
]

export default function FeaturesStrip() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-in-up delay-${i * 100 + 100} glow-hover flex flex-col items-center text-center rounded-2xl p-4 cursor-pointer`}
            >
              <div className="icon-glow w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 shadow-sm transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-semibold text-brand-navy text-base mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
