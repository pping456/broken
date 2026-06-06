import { useState } from 'react'
import PageWrapper from './PageWrapper'

const sections = [
  {
    title: 'Getting Started',
    icon: '🚀',
    docs: [
      { title: 'Platform Overview', desc: 'A complete introduction to AZHly and its core modules.' },
      { title: 'Workspace Setup Guide', desc: 'Step-by-step instructions to set up your institution workspace.' },
      { title: 'Inviting Administrators', desc: 'How to create sub-admin accounts and assign roles.' },
      { title: 'First Timetable Setup', desc: 'Create your first term\'s timetable from scratch.' },
    ],
  },
  {
    title: 'Timetable Management',
    icon: '📅',
    docs: [
      { title: 'Creating Courses & Subjects', desc: 'Define courses, credit hours, and subject requirements.' },
      { title: 'Assigning Faculty', desc: 'Link faculty members to courses and manage their workloads.' },
      { title: 'Conflict Detection', desc: 'Understand how AZHly detects and resolves scheduling conflicts.' },
      { title: 'Publishing Timetables', desc: 'Publish schedules and notify students and faculty.' },
    ],
  },
  {
    title: 'Room Management',
    icon: '🏫',
    docs: [
      { title: 'Adding Rooms & Labs', desc: 'Register all physical and virtual spaces with capacity details.' },
      { title: 'Room Booking System', desc: 'Enable faculty and admins to reserve rooms for events.' },
      { title: 'Room Utilization Reports', desc: 'Track how efficiently your spaces are being used.' },
    ],
  },
  {
    title: 'Student & Faculty Portals',
    icon: '👥',
    docs: [
      { title: 'Student App Setup', desc: 'Configure and distribute the AZHly student mobile app.' },
      { title: 'Faculty Access Controls', desc: 'Set permissions for what faculty can view and modify.' },
      { title: 'Notification Configuration', desc: 'Set up automated alerts for schedule changes.' },
    ],
  },
  {
    title: 'API Reference',
    icon: '⚙️',
    docs: [
      { title: 'REST API Overview', desc: 'Authentication, rate limits, and base URL information.' },
      { title: 'Timetable Endpoints', desc: 'CRUD operations for timetable management via API.' },
      { title: 'Webhooks', desc: 'Real-time event notifications to your external systems.' },
    ],
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].title)

  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Documentation</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AZHly Documentation</h1>
        <p className="text-gray-500 text-lg">Complete technical and user documentation for the AZHly platform.</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-52 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            {sections.map((s) => (
              <button key={s.title} onClick={() => setActiveSection(s.title)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeSection === s.title ? 'bg-blue-50 text-brand-blue' : 'text-gray-600 hover:bg-gray-50'
                }`}>
                <span>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1">
          {sections.map((s) => (
            <div key={s.title} id={s.title} className={activeSection === s.title ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                {s.title}
              </h2>
              <div className="space-y-4">
                {s.docs.map((doc) => (
                  <div key={doc.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                    <p className="text-gray-500 text-sm">{doc.desc}</p>
                    <span className="inline-flex items-center gap-1 text-brand-blue text-xs font-medium mt-3">
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile section nav */}
          <div className="md:hidden mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <button key={s.title} onClick={() => setActiveSection(s.title)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeSection === s.title ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                {s.icon} {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
