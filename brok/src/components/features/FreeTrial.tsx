const campusFeatures = [
  { label: 'Smart Room Finder' },
  { label: 'Smart Room Reservation' },
  { label: 'Timetable Management' },
  { label: 'Real-Time Notifications' },
  { label: 'Conflict Detection' },
  { label: 'Faculty & Student Support' },
  { label: 'Centralized Administration' },
]

const adminFeatures = [
  { label: 'Admin Dashboard' },
  { label: 'Room Allocation' },
  { label: 'Schedule Management' },
  { label: 'Conflict Detection' },
  { label: 'Analytics & Reports' },
  { label: 'User Management' },
  { label: 'Centralized Control' },
]

const studentFeatures = [
  { label: 'View Timetables' },
  { label: 'Receive Notifications' },
  { label: 'Check Room Availability' },
  { label: 'Access Campus Updates' },
  { label: 'Student-Friendly Interface' },
]

const steps = [
  { num: 1, icon: '🏛️', label: 'Register Institute', desc: 'Create your institute account.', bg: 'bg-purple-100' },
  { num: 2, icon: '🎯', label: 'Start Demo', desc: 'Activate 30-day demo access instantly.', bg: 'bg-pink-100' },
  { num: 3, icon: '🖥️', label: 'Access Platform', desc: 'Use the admin panel to manage resources, schedules, and users.', bg: 'bg-indigo-100' },
  { num: 4, icon: '📱', label: 'Download App', desc: 'Download the mobile app for students.', bg: 'bg-violet-100' },
  { num: 5, icon: '👥', label: 'Stay Connected', desc: 'Everything in one place, always.', bg: 'bg-fuchsia-100' },
]

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill={color} />
      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default function FreeTrial() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3-card grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* Card 1: AZHLY Smart Campus Solution */}
          <div className="fade-in-left glow-hover bg-white border-2 border-purple-100 rounded-3xl p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21V9l9-6 9 6v12" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21V15h6v6" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 9h.01M15 9h.01" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy text-lg leading-tight">AZHLY</h3>
                  <p className="text-brand-purple text-xs font-semibold">Smart Campus Solution</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {campusFeatures.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckIcon color="#7c3aed" />
                    {f.label}
                  </li>
                ))}
              </ul>

              {/* Campus illustration */}
              <div className="flex justify-center py-3">
                <svg width="120" height="80" viewBox="0 0 140 90" fill="none">
                  <rect x="0" y="0" width="140" height="90" rx="8" fill="#f5f3ff" />
                  <ellipse cx="30" cy="18" rx="14" ry="7" fill="white" opacity="0.8" />
                  <ellipse cx="110" cy="14" rx="12" ry="6" fill="white" opacity="0.7" />
                  <rect x="45" y="30" width="50" height="48" fill="#4c1d95" rx="2" />
                  <rect x="48" y="34" width="44" height="44" fill="#7c3aed" rx="1" />
                  <polygon points="70,14 95,30 45,30" fill="#4c1d95" />
                  <rect x="64" y="6" width="12" height="8" fill="#3b0764" />
                  <polygon points="70,2 76,6 64,6" fill="#e91e8c" />
                  <circle cx="70" cy="22" r="5" fill="white" opacity="0.9" />
                  <line x1="70" y1="20" x2="70" y2="22" stroke="#4c1d95" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="70" y1="22" x2="72" y2="22" stroke="#4c1d95" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="52" y="40" width="8" height="8" rx="1" fill="#c4b5fd" />
                  <rect x="66" y="40" width="8" height="8" rx="1" fill="#c4b5fd" />
                  <rect x="80" y="40" width="8" height="8" rx="1" fill="#c4b5fd" />
                  <rect x="52" y="54" width="8" height="8" rx="1" fill="#c4b5fd" />
                  <rect x="80" y="54" width="8" height="8" rx="1" fill="#c4b5fd" />
                  <rect x="63" y="60" width="14" height="18" rx="7" fill="#a78bfa" />
                  <rect x="0" y="78" width="140" height="12" fill="#4c1d95" opacity="0.3" />
                  <rect x="18" y="62" width="4" height="16" fill="#6b7280" />
                  <circle cx="20" cy="57" r="8" fill="#7c3aed" opacity="0.7" />
                  <rect x="116" y="62" width="4" height="16" fill="#6b7280" />
                  <circle cx="118" cy="57" r="8" fill="#7c3aed" opacity="0.7" />
                </svg>
              </div>
            </div>

            <button className="glow-hover mt-4 w-full bg-brand-navy text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-navyDark transition-colors">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Card 2: AZHLY Online for Administrators */}
          <div className="fade-in-up delay-200 glow-hover bg-white border-2 border-pink-100 rounded-3xl p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#e91e8c" strokeWidth="1.8" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#e91e8c" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy text-lg leading-tight">AZHLY Online</h3>
                  <p className="text-brand-pink text-xs font-semibold">for Administrators</p>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="flex justify-center mb-5">
                <div className="w-36 rounded-xl border border-purple-100 p-2 shadow-sm" style={{ background: '#fdf4ff' }}>
                  <div className="flex gap-1 mb-1.5">
                    <div className="h-2 rounded-sm bg-brand-pink flex-1" style={{ opacity: 0.6 }} />
                    <div className="h-2 rounded-sm bg-brand-purple w-6" style={{ opacity: 0.5 }} />
                  </div>
                  <div className="grid grid-cols-3 gap-1 mb-1.5">
                    {['bg-pink-100','bg-purple-100','bg-indigo-100'].map((c,i) => (
                      <div key={i} className={`${c} rounded h-6 flex items-end p-0.5`}>
                        <div className={`w-full rounded-sm ${['bg-pink-400','bg-purple-400','bg-indigo-400'][i]}`} style={{height: `${[60,40,80][i]}%`}} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {[70,50,85].map((w,i) => (
                      <div key={i} className="h-1.5 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-pink rounded-full" style={{width: `${w}%`, opacity: 0.7}} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {adminFeatures.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckIcon color="#e91e8c" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glow-hover-pink w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-white transition-colors bg-gradient-to-r from-brand-purple to-brand-pink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Launch Platform
            </button>
          </div>

          {/* Card 3: AZHLY Mobile Student App */}
          <div className="fade-in-right delay-300 glow-hover bg-white border-2 border-indigo-100 rounded-3xl p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="3" stroke="#4f46e5" strokeWidth="1.8" />
                    <circle cx="12" cy="18" r="1.2" fill="#4f46e5" />
                    <line x1="9" y1="5" x2="15" y2="5" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy text-lg leading-tight">AZHLY Mobile</h3>
                  <p className="text-indigo-600 text-xs font-semibold">Student App</p>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="flex justify-center mb-5">
                <div className="w-24 bg-brand-navy rounded-2xl p-1.5 shadow-lg">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="bg-brand-navy px-2 py-1 flex justify-between items-center">
                      <span className="text-white text-[7px] font-bold">AZHLY</span>
                      <div className="flex gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-sm bg-brand-purple" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-brand-pink" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-blue-300" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-indigo-300" />
                      </div>
                    </div>
                    <div className="p-1.5 space-y-1">
                      <div className="text-[6px] font-bold text-gray-700">Today's Classes</div>
                      {[
                        ['Database Systems','10:00–11:00 AM','Room 201','bg-purple-100'],
                        ['Data Structures','11:30 AM–1:00 PM','Room 305','bg-pink-100']
                      ].map(([title, time, room, bg], i) => (
                        <div key={i} className={`${bg} rounded-md px-1.5 py-1`}>
                          <div className="text-[5.5px] font-semibold text-gray-800 leading-tight">{title}</div>
                          <div className="text-[5px] text-gray-500">{time}</div>
                          <div className="text-[5px] text-gray-400">{room}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {studentFeatures.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckIcon color="#4f46e5" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button className="w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-white transition-colors glow-hover bg-gradient-to-r from-brand-navy to-brand-purple">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v12m0 0l-4-4m4 4l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <rect x="3" y="17" width="18" height="5" rx="2" stroke="white" strokeWidth="1.8" />
                </svg>
                Download APK
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Available for active institutes only
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-14 fade-in-up">
          <h3 className="text-xl font-bold text-center text-brand-navy mb-8">How It Works</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center text-center w-32">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-md mb-2 ${step.bg}`}>
                    {step.icon}
                  </div>
                  <p className="text-xs font-semibold text-brand-navy leading-tight mb-0.5">{step.num}. {step.label}</p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex items-center mx-1 text-brand-purple opacity-40">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
