const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    label: 'Real-time Notifications',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Substitution Alerts',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: 'Parent & Student Access',
  },
]

export default function ShareTimetable() {
  return (
    <section id="solutions" className="py-16 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="fade-in-left relative overflow-hidden min-h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=700&h=500&fit=crop&q=80"
              alt="Student using timetable on devices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          </div>

          {/* Right Content */}
          <div className="fade-in-right p-10 lg:p-14 flex flex-col justify-center">
            <p className="text-brand-pink font-semibold text-sm mb-3 tracking-wide">Stay Connected, Always</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-snug mb-5">
              Share Timetable &amp;<br />Substitution Updates
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Make the school timetable available to teachers, students and parents. AZHly Substitutions notifies
              them about daily substitution changes that are relevant to them personally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center text-center gap-3">
                <div className="icon-glow w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm transition-transform duration-300 cursor-pointer">
                  {h.icon}
                </div>
                  <span className="text-sm font-medium text-brand-navy leading-tight">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
