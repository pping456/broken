import { useState } from 'react'
import PageWrapper from './PageWrapper'

export default function ContactSupportPage() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', subject: '', priority: 'normal', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Support ticket:', form)
    setSubmitted(true)
  }

  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Contact Us</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Support</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Our team is ready to help. Submit a ticket and we'll respond within 24 hours.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: '💬', title: 'Live Chat', info: 'Mon–Fri, 9am–6pm PKT', sub: 'Instant responses during business hours', color: 'border-blue-200 bg-blue-50' },
          { icon: '✉️', title: 'Email', info: 'support@azhly.com', sub: 'Response within 24 hours', color: 'border-green-200 bg-green-50' },
          { icon: '📞', title: 'Phone', info: '+92 300 1234567', sub: 'Enterprise plan priority access', color: 'border-orange-200 bg-orange-50' },
        ].map((c) => (
          <div key={c.title} className={`rounded-2xl border-2 p-6 text-center ${c.color}`}>
            <div className="text-3xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-sm font-semibold text-gray-700">{c.info}</p>
            <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
          </div>
        ))}
      </div>

      {submitted ? (
        <div className="max-w-xl mx-auto text-center py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#16a34a" />
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ticket Submitted!</h2>
          <p className="text-gray-500 mb-2">Reference: <span className="font-mono font-bold text-brand-blue">TKT-{Math.floor(Math.random()*90000)+10000}</span></p>
          <p className="text-gray-500 text-sm">We've received your request and will respond to <strong>{form.email}</strong> within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-blue font-medium hover:underline text-sm">
            Submit another ticket
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Support Ticket</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Full name' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'admin@institution.edu.pk' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" required />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Institution Name</label>
              <input type="text" placeholder="Enter your institution name" value={form.institution}
                onChange={(e) => setForm({ ...form, institution: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input type="text" placeholder="Brief description of issue" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
                <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10">
                  <option value="low">Low – General inquiry</option>
                  <option value="normal">Normal – Needs attention</option>
                  <option value="high">High – Affecting operations</option>
                  <option value="critical">Critical – Platform down</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea rows={5} placeholder="Describe your issue in detail..." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 resize-none" required />
            </div>
            <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blueDark text-white font-bold py-4 rounded-xl text-sm transition-colors shadow-md">
              Submit Ticket
            </button>
          </form>
        </div>
      )}
    </PageWrapper>
  )
}
