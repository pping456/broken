import PageWrapper from './PageWrapper'

const tutorials = [
  {
    title: 'Getting Started: Setting Up Your Institution Workspace',
    duration: '8:45',
    level: 'Beginner',
    views: '12,400',
    thumb: '🏛️',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Creating and Publishing Your First Timetable',
    duration: '11:20',
    level: 'Beginner',
    views: '9,800',
    thumb: '📅',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Room Management: Adding, Booking & Tracking',
    duration: '9:55',
    level: 'Intermediate',
    views: '7,200',
    thumb: '🏫',
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Conflict Detection: Understanding & Resolving Issues',
    duration: '7:30',
    level: 'Intermediate',
    views: '6,500',
    thumb: '⚠️',
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'Analytics Dashboard: Understanding Your Campus Data',
    duration: '14:10',
    level: 'Intermediate',
    views: '5,100',
    thumb: '📊',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Student App: Distributing Access to Your Institution',
    duration: '6:15',
    level: 'Beginner',
    views: '8,900',
    thumb: '📱',
    color: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Multi-Campus Setup: Managing Multiple Locations',
    duration: '16:40',
    level: 'Advanced',
    views: '3,400',
    thumb: '🌐',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'API Integration: Connecting AZHly to Your Systems',
    duration: '22:00',
    level: 'Advanced',
    views: '2,100',
    thumb: '⚙️',
    color: 'from-gray-500 to-gray-700',
  },
]

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
}

export default function TutorialsPage() {
  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Video Tutorials</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Learn AZHly Visually</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Step-by-step video guides for administrators, faculty, and IT teams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tutorials.map((t) => (
          <div key={t.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            {/* Thumbnail */}
            <div className={`bg-gradient-to-br ${t.color} h-36 flex items-center justify-center relative`}>
              <span className="text-5xl">{t.thumb}</span>
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <polygon points="5 3 19 12 5 21 5 3" fill="#2563eb" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded font-mono">
                {t.duration}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[t.level]}`}>{t.level}</span>
                <span className="text-xs text-gray-400">{t.views} views</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-brand-blue transition-colors">{t.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
        <h3 className="font-bold text-gray-900 mb-2">Can't find the tutorial you need?</h3>
        <p className="text-gray-500 text-sm mb-4">Our team regularly adds new content. Request a specific tutorial topic below.</p>
        <a href="/contact-support" className="inline-block bg-brand-blue text-white font-semibold px-6 py-2.5 rounded-full hover:bg-brand-blueDark transition-colors text-sm">
          Request a Tutorial
        </a>
      </div>
    </PageWrapper>
  )
}
