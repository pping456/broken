const bubbleItems = [
  {
    label: 'Timetable',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="3" y="5" width="18" height="16" rx="2" fill="white" opacity="0.95" />
        <path d="M16 3v4M8 3v4" stroke="#6b21a8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11h10M7 15h10" stroke="#4f46e5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    className: 'top-8 left-0 w-20 h-20 animate-float-a',
  },
  {
    label: 'Notifications',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="white" opacity="0.95" />
        <path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1 1v1h14v-1l-1-1z" fill="#ffffff" />
      </svg>
    ),
    className: 'top-28 right-10 w-24 h-24 animate-float-b',
  },
  {
    label: 'Room Finding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" opacity="0.95" />
        <circle cx="12" cy="9" r="2.5" fill="#7c3aed" />
      </svg>
    ),
    className: 'bottom-24 left-10 w-16 h-16 animate-float-c',
  },
  {
    label: 'Cloud Based',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M19 18H6a4 4 0 010-8c.6 0 1.15.14 1.65.37A6 6 0 1120 16h-1z" fill="white" opacity="0.95" />
      </svg>
    ),
    className: 'bottom-16 right-20 w-14 h-14 animate-float-d',
  },
]

export default function AnimatedVisual({ laptopImg }: { laptopImg: string | any }) {
  return (
    <div className="relative w-full max-w-xl px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/10 opacity-20 animate-orbit-spin" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-[#8b5cf6]/30 border-dashed opacity-25 animate-orbit-spin-reverse" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-[#60a5fa]/20 opacity-20" />

        {/* Orbit dots behind the laptop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="absolute w-3 h-3 bg-white rounded-full opacity-95 orbit-dot-1" style={{ left: '50%', top: '6%' }} />
          <span className="absolute w-2.5 h-2.5 bg-white rounded-full opacity-85 orbit-dot-2" style={{ left: '88%', top: '50%' }} />
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-80 orbit-dot-3" style={{ left: '12%', top: '50%' }} />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[470px]">
        <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle,_rgba(139,92,246,0.2),_transparent_60%)] blur-3xl opacity-70" />
        <div className="relative z-10 flex items-center justify-center">
          <img
            src={laptopImg}
            alt="AZHly laptop preview"
            className="relative w-full max-w-[470px] rounded-[28px] shadow-2xl shadow-[#4f46e5]/20 animate-float-laptop"
          />
        </div>
      </div>

      {bubbleItems.map((item) => (
        <div key={item.label} className={`absolute ${item.className}`}>
          <div className="w-full h-full flex items-center justify-center rounded-full bubble-icon text-white/90">
            {item.icon}
          </div>
          <div className="absolute left-1/2 top-full mt-3 w-max -translate-x-1/2 text-xs text-white/70 tracking-wide">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
