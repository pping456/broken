import PageWrapper from './PageWrapper'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Our Story</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About AZHly</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We are building the future of campus management — one institution at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AZHly (AZH Timely) is an innovative campus management solution designed to simplify timetable generation, room allocation, and academic scheduling. Established in 2026.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our platform serves universities, colleges, and institutes across Pakistan, helping administrators, faculty, and students stay organized, informed, and connected — all through a single intelligent platform.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-6">
            {[['500+', 'Institutions'], ['50,000+', 'Active Users'], ['99.9%', 'Uptime SLA'], ['2026', 'Founded']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-extrabold text-brand-blue">{val}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-2xl p-6">
          <p className="text-gray-700 text-lg italic leading-relaxed">
            "To empower every educational institution with smart, affordable, and reliable campus management tools — enabling educators to focus on teaching and students to focus on learning."
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Simplicity', desc: 'We believe powerful software should be easy to use. Every feature is designed to reduce complexity, not add to it.' },
            { icon: '🔒', title: 'Security', desc: 'Institutional data is sensitive. We employ enterprise-grade encryption, regular backups, and strict access controls.' },
            { icon: '🚀', title: 'Innovation', desc: 'We continuously improve our platform with AI-powered suggestions, predictive conflict detection, and smarter scheduling tools.' },
            { icon: '🤝', title: 'Support', desc: 'Our dedicated support team is available to help institutions onboard, train staff, and resolve issues quickly.' },
            { icon: '📚', title: 'Education First', desc: 'Every product decision is made with one question in mind: does this make campus life better for students and faculty?' },
            { icon: '🌱', title: 'Growth', desc: 'From a single campus to multi-campus universities, AZHly scales with your institution as it grows.' },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Zunaira Javed', role: 'Frontend Developer', desc: 'Built the responsive web interface using React, Vite, and Tailwind CSS, ensuring a modern and user-friendly experience.' },
            { name: 'Haleema Akram', role: 'Mobile App Developer', desc: 'Developed the cross-platform mobile application using Flutter with a focus on performance and usability.' },
            { name: 'Areeba Shahid', role: 'Backend Developer', desc: 'Designed and implemented backend services using Spring Boot and MySQL, managing APIs, database operations, and core system functionality.' },
          ].map((m) => (
            <div key={m.name} className="text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-blue">
                {m.name[0]}
              </div>
              <h3 className="font-bold text-gray-900">{m.name}</h3>
              <p className="text-brand-blue text-xs font-semibold mb-2">{m.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </PageWrapper>
  )
}
