const useCases = [
  {
    tag: 'Smart Timetable',
    title: 'Build Conflict-Free Timetables in Minutes',
    desc: 'Stop spending days building schedules manually. AZHly auto-generates smart, conflict-free timetables for your entire institution — across departments, rooms, and faculty — in seconds.',
    img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=700&q=80&fit=crop',
    alt: 'Student planning timetable on a laptop',
    imgSide: 'left',
    badge: { icon: '📅', label: 'Auto-generated in 2s' },
    color: 'border-brand-purple/30',
    tagColor: 'text-brand-purple bg-purple-50',
  },
  {
    tag: 'Room Finder',
    title: 'Find & Book Available Rooms Instantly',
    desc: 'Search available classrooms, labs, and halls by capacity, date, time, and facilities. Book a room for make-up classes or exams with one click — zero scheduling conflicts guaranteed.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80&fit=crop',
    alt: 'University classroom and room booking',
    imgSide: 'right',
    badge: { icon: '🏫', label: '40+ rooms available now' },
    color: 'border-brand-pink/30',
    tagColor: 'text-brand-pink bg-pink-50',
  },
  {
    tag: 'Make-Up Class Booking',
    title: 'Confirm Bookings for Make-Up Classes',
    desc: 'Faculty can request make-up classes, admins approve in one tap, and the room is instantly reserved. Students get notified automatically — no back-and-forth emails, no confusion.',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&fit=crop',
    alt: 'Teacher confirming a makeup class booking',
    imgSide: 'left',
    badge: { icon: '✅', label: 'Confirmed in 1 click' },
    color: 'border-blue-300/40',
    tagColor: 'text-blue-600 bg-blue-50',
  },
  {
    tag: 'Student & Parent Portal',
    title: 'Students & Parents Stay in the Loop',
    desc: 'Give students and parents real-time access to timetables, substitution updates, and class changes — on any device, anytime. Stay connected to campus life without the paperwork.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&fit=crop',
    alt: 'Students checking timetable on phone',
    imgSide: 'right',
    badge: { icon: '📲', label: 'Live updates on all devices' },
    color: 'border-green-300/40',
    tagColor: 'text-green-700 bg-green-50',
  },
]

export default function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-brand-pink font-semibold text-sm tracking-widest uppercase mb-3">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
            Everything Your Campus <span className="text-brand-purple">Needs</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            From timetable generation to room booking — AZHly covers every scheduling need.
          </p>
        </div>

        {/* Use case rows */}
        <div className="flex flex-col gap-16">
          {useCases.map((uc, i) => (
            <div
              key={uc.tag}
              className={`fade-in-up delay-${(i % 3) * 100 + 100} grid lg:grid-cols-2 gap-10 items-center`}
            >
              {/* Image — alternates sides */}
              <div
                className={`${uc.imgSide === 'right' ? 'lg:order-2' : ''} relative group`}
              >
                <div
                  className={`glow-hover rounded-3xl overflow-hidden border-2 ${uc.color} shadow-lg cursor-pointer`}
                >
                  <img
                    src={uc.img}
                    alt={uc.alt}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
                    <span className="text-xl">{uc.badge.icon}</span>
                    <span className="text-xs font-semibold text-brand-navy">{uc.badge.label}</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`${uc.imgSide === 'right' ? 'lg:order-1' : ''}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${uc.tagColor}`}>
                  {uc.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-snug mb-4">
                  {uc.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{uc.desc}</p>
                <a
                  href="#pricing"
                  className="glow-hover inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-brand-purple transition-colors"
                >
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
