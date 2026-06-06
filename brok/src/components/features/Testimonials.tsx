const testimonials = [
  {
    quote:
      'AZHly completely transformed how we manage our campus schedules. What used to take days now takes minutes — conflicts are a thing of the past.',
    name: 'Dr. Ahmad Raza',
    role: 'Dean of Academic Affairs',
    institution: 'University of Punjab',
    initials: 'UP',
    avatarBg: 'bg-brand-purple',
    logoBg: 'bg-purple-100',
    logoText: 'text-brand-purple',
    stars: 5,
  },
  {
    quote:
      'The Room Finder alone saved us countless hours every semester. Faculty love the real-time substitution alerts and parents stay in the loop effortlessly.',
    name: 'Prof. Sara Khan',
    role: 'Head of Administration',
    institution: 'FAST-NUCES Lahore',
    initials: 'FN',
    avatarBg: 'bg-brand-pink',
    logoBg: 'bg-pink-100',
    logoText: 'text-brand-pink',
    stars: 5,
  },
  {
    quote:
      'Rolling AZHly across all our departments was seamless. The onboarding team was outstanding and the productivity gains were visible within the first week.',
    name: 'Mr. Bilal Hassan',
    role: 'IT Director',
    institution: 'Lahore Grammar School',
    initials: 'LG',
    avatarBg: 'bg-blue-600',
    logoBg: 'bg-blue-100',
    logoText: 'text-blue-600',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#f59e0b' : 'none'}
          stroke={i < count ? '#f59e0b' : '#d1d5db'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-50/50 rounded-full blur-2xl translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-brand-pink font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
            What Institutions <span className="text-brand-purple">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Hundreds of campuses across Pakistan trust AZHly for smarter scheduling every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in-up delay-${i * 150 + 100} glow-hover relative bg-white border border-gray-100 rounded-3xl shadow-md p-8 flex flex-col cursor-pointer`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-7 opacity-10">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="#7c3aed">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <p className="mt-4 mb-6 text-gray-600 text-[15px] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-2xl ${t.avatarBg} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <span className="text-white font-bold text-sm tracking-wide">{t.initials}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-brand-navy text-sm leading-tight">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                  <span
                    className={`inline-block mt-1.5 text-[10px] font-semibold ${t.logoText} ${t.logoBg} px-2 py-0.5 rounded-full`}
                  >
                    {t.institution}
                  </span>
                </div>

                {/* Verified badge */}
                <div className="flex-shrink-0" title="Verified Institution">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#7c3aed"
                      opacity="0.15"
                    />
                    <circle cx="12" cy="12" r="7" fill="#7c3aed" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-14 fade-in-up delay-500 bg-gradient-to-r from-brand-navy via-brand-purple to-brand-navy rounded-3xl px-8 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Institutions' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '50K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-purple-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
