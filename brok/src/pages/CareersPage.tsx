import PageWrapper from './PageWrapper'

const jobs = [
  {
    title: 'Senior Full-Stack Developer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Lahore / Remote',
    desc: 'Build and scale AZHly\'s core platform using React, Node.js, and PostgreSQL. Experience with cloud infrastructure is a plus.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    type: 'Full-time',
    location: 'Lahore / Remote',
    desc: 'Design intuitive, accessible interfaces for our web and mobile applications. Proficiency in Figma and a portfolio of SaaS products preferred.',
  },
  {
    title: 'Customer Success Manager',
    dept: 'Operations',
    type: 'Full-time',
    location: 'Gujrat / Lahore',
    desc: 'Help institutions onboard, train their teams, and get maximum value from AZHly. Strong communication skills and education sector experience preferred.',
  },
  {
    title: 'Sales Executive – EdTech',
    dept: 'Sales',
    type: 'Full-time',
    location: 'Pakistan (Field)',
    desc: 'Identify and close deals with universities, colleges, and institutes. Experience in B2B software sales in the education sector is ideal.',
  },
  {
    title: 'DevOps Engineer',
    dept: 'Engineering',
    type: 'Contract',
    location: 'Remote',
    desc: 'Manage our cloud infrastructure (AWS/Supabase), CI/CD pipelines, and ensure 99.9% uptime for all services.',
  },
]

export default function CareersPage() {
  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-green-100 text-brand-green text-xs font-semibold px-4 py-1.5 rounded-full mb-4">We're Hiring</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Join the AZHly Team</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Help us build technology that transforms how 500+ educational institutions operate across Pakistan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {[
          { icon: '🌍', title: 'Remote Friendly', desc: 'Most roles support hybrid or fully remote work arrangements.' },
          { icon: '📈', title: 'Fast Growth', desc: 'Join at an early stage and grow your career as the company scales.' },
          { icon: '🎓', title: 'Learning Culture', desc: 'Access to courses, conferences, and a dedicated learning budget.' },
        ].map((b) => (
          <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">{b.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
            <p className="text-gray-500 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-blue-50 text-brand-blue px-2 py-0.5 rounded-full font-medium">{job.dept}</span>
                  <span className="text-xs bg-green-50 text-brand-green px-2 py-0.5 rounded-full font-medium">{job.type}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{job.location}</span>
                </div>
              </div>
              <button className="bg-brand-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-blueDark transition-colors flex-shrink-0">
                Apply Now
              </button>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{job.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-2">Don't see your role?</h3>
        <p className="text-gray-500 text-sm mb-4">We're always looking for talented people. Send us your CV and we'll keep you in mind for future openings.</p>
        <a href="mailto:careers@azhly.com" className="inline-block bg-brand-blue text-white font-semibold px-6 py-2.5 rounded-full hover:bg-brand-blueDark transition-colors text-sm">
          Send Open Application
        </a>
      </div>
    </PageWrapper>
  )
}
