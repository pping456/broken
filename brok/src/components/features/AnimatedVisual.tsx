const bubbleItems = [
  {
    label: 'Timetable',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="15" rx="3" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.08)" />
        <path d="M8 3V7" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3V7" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 16H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'top-8 left-0 w-24 h-24 animate-float-a',
  },
  {
    label: 'Notifications',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="white" opacity="0.95" />
        <path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1 1v1h14v-1l-1-1z" fill="#ffffff" />
      </svg>
    ),
    className: 'top-24 right-16 w-24 h-24 animate-float-b',
  },
  {
    label: 'Room Finding',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" opacity="0.95" />
        <circle cx="12" cy="9" r="2.5" fill="#7c3aed" />
      </svg>
    ),
    className: 'top-10 right-0 w-20 h-20 animate-float-c',
  },
  {
    label: 'Calendar',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.08)" />
        <path d="M8 2V6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 2V6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'top-20 right-6 w-20 h-20 animate-float-d',
  },
  {
    label: 'Cloud Based',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 18H6a4 4 0 010-8c.6 0 1.15.14 1.65.37A6 6 0 1120 16h-1z" fill="white" opacity="0.95" />
      </svg>
    ),
    className: 'bottom-14 left-10 w-20 h-20 animate-float-c',
  },
]

export default function AnimatedVisual({ laptopImg }: { laptopImg: string }) {
  return (
    <div className="relative w-full overflow-visible px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10 opacity-20 animate-orbit-spin" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-[#8b5cf6]/30 border-dashed opacity-25 animate-orbit-spin-reverse" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-[#60a5fa]/20 opacity-20" />

        <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute w-3 h-3 rounded-full bg-white opacity-95 orbit-dot-1" style={{ left: '50%', top: '0%' }} />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-white opacity-85 orbit-dot-2" style={{ left: '100%', top: '50%' }} />
          <span className="absolute w-2 h-2 rounded-full bg-white opacity-80 orbit-dot-3" style={{ left: '0%', top: '50%' }} />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle,_rgba(139,92,246,0.18),_transparent_55%)] blur-3xl opacity-70" />
        <div className="relative z-20 flex items-center justify-center">
          <img
            src={laptopImg}
            alt="AZHly laptop preview"
            className="relative w-full max-w-[520px] rounded-[32px] shadow-[0_36px_70px_rgba(79,70,229,0.24)] animate-float-laptop"
          />
        </div>
      </div>

      {bubbleItems.map((item) => (
        <div key={item.label} className={`absolute ${item.className} z-30`}>
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
