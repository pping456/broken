import PageWrapper from './PageWrapper'
import { useNavigate } from 'react-router-dom'

const articles = [
  {
    title: 'Getting Started with AZHly',
    desc: 'Set up your institution workspace in under 10 minutes.',
    icon: '🚀',
    href: '/docs',
  },
  {
    title: 'Managing Rooms & Schedules',
    desc: 'Learn how to create rooms, assign classes, and detect conflicts.',
    icon: '🏫',
    href: '/docs',
  },
  {
    title: 'User & Role Management',
    desc: 'Add faculty, staff, and sub-admins with role-based permissions.',
    icon: '👥',
    href: '/docs',
  },
  {
    title: 'Student Mobile App Setup',
    desc: 'Distribute the app to your students and manage access.',
    icon: '📱',
    href: '/docs',
  },
  {
    title: 'Analytics & Reports',
    desc: 'Generate reports on room utilization, attendance, and more.',
    icon: '📊',
    href: '/docs',
  },
  {
    title: 'Billing & Subscriptions',
    desc: 'Manage your plan, upgrade, or download invoices.',
    icon: '💳',
    href: '/docs',
  },
]

export default function HelpPage() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Support</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Help Center</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Find answers, guides, and resources to get the most from AZHly.</p>
      </div>

      <div className="relative mb-12">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search help articles, FAQs..."
          className="w-full border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-base focus:outline-none focus:border-brand-blue transition-colors shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {articles.map((a) => (
          <div key={a.title} onClick={() => navigate(a.href)}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-start gap-4">
            <div className="text-2xl w-10 flex-shrink-0">{a.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{a.title}</h3>
              <p className="text-gray-500 text-sm">{a.desc}</p>
            </div>
            <svg className="ml-auto text-gray-300 flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '💬', title: 'Live Chat', desc: 'Chat with our support team in real-time. Available Mon–Fri, 9am–6pm PKT.', action: 'Start Chat', color: 'bg-blue-500' },
          { icon: '✉️', title: 'Email Support', desc: 'Send us a message and we\'ll respond within 24 hours.', action: 'Email Support', color: 'bg-green-500' },
          { icon: '📞', title: 'Phone Support', desc: 'Call us at +92 300 1234567. Enterprise plan customers get priority.', action: 'Call Now', color: 'bg-purple-500' },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
            <button className={`${c.color} text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity`}>
              {c.action}
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
