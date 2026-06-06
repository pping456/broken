import PageWrapper from './PageWrapper'

const services = [
  { name: 'AZHly Web Platform', status: 'Operational', uptime: '99.97%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'AZHly API', status: 'Operational', uptime: '99.95%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'Student Mobile App (Backend)', status: 'Operational', uptime: '99.99%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'Authentication Service', status: 'Operational', uptime: '100%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'File Storage & Uploads', status: 'Operational', uptime: '99.92%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'Email Notification Service', status: 'Operational', uptime: '99.88%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
  { name: 'Reporting & Analytics', status: 'Operational', uptime: '99.91%', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-200' },
]

const incidents = [
  {
    date: 'May 20, 2026',
    title: 'Increased API Response Times',
    status: 'Resolved',
    duration: '18 minutes',
    desc: 'A brief spike in database queries caused elevated response times for the timetable API endpoint. The issue was resolved by scaling the connection pool. No data was lost.',
  },
  {
    date: 'Apr 12, 2026',
    title: 'Email Notification Delays',
    status: 'Resolved',
    duration: '2 hours',
    desc: 'Our third-party email delivery provider experienced a queue backup resulting in delayed notifications. All queued emails were delivered. We\'ve added a fallback provider.',
  },
  {
    date: 'Mar 5, 2026',
    title: 'Scheduled Maintenance',
    status: 'Completed',
    duration: '45 minutes',
    desc: 'Planned infrastructure upgrade for improved performance and database optimization. All services restored on schedule.',
  },
]

export default function StatusPage() {
  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-green-100 text-brand-green text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Live Status</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">System Status</h1>
        <p className="text-gray-500 text-lg">Real-time status of all AZHly platform services.</p>
      </div>

      {/* Overall status */}
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex items-center gap-5 mb-10">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-800">All Systems Operational</h2>
          <p className="text-green-600 text-sm">Last checked: {new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Service Status</h2>
      <div className="space-y-3 mb-12">
        {services.map((s) => (
          <div key={s.name} className={`border rounded-2xl p-5 flex items-center justify-between ${s.bgColor}`}>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${s.color} animate-pulse`} />
              <span className="font-medium text-gray-900">{s.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500 hidden sm:block">30d uptime: <strong className="text-gray-800">{s.uptime}</strong></span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.textColor} bg-white border border-current`}>{s.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Uptime graphic */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-12">
        <h3 className="font-bold text-gray-900 mb-4">30-Day Uptime History</h3>
        <div className="flex gap-0.5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-8 rounded-sm ${i === 7 || i === 22 ? 'bg-yellow-300' : 'bg-green-400'}`}
              title={i === 7 ? 'Minor incident' : i === 22 ? 'Maintenance' : 'Operational'}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
        <div className="flex gap-4 mt-3 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded-sm" /> Operational</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-300 rounded-sm" /> Degraded / Maintenance</span>
        </div>
      </div>

      {/* Incident history */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Incident History</h2>
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="font-bold text-gray-900">{inc.title}</h3>
                <p className="text-sm text-gray-500">{inc.date} · Duration: {inc.duration}</p>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto ${
                inc.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-brand-blue'
              }`}>{inc.status}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{inc.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">Subscribe to status updates: <a href="mailto:status@azhly.com" className="text-brand-blue font-semibold hover:underline">status@azhly.com</a></p>
      </div>
    </PageWrapper>
  )
}
