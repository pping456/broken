
const bubbleItems = [
  { label: 'Timetable', icon: '📅', className: 'top-8 left-0 w-20 h-20 animate-float-a' },
  { label: 'Notifications', icon: '🔔', className: 'top-28 right-10 w-24 h-24 animate-float-b' },
  { label: 'Room Finding', icon: '📍', className: 'bottom-24 left-10 w-16 h-16 animate-float-c' },
  { label: 'Cloud Based', icon: '☁️', className: 'bottom-16 right-20 w-14 h-14 animate-float-d' },
]

export default function AnimatedVisual({ laptopImg }: { laptopImg: string | any }) {
  return (
    <div className="relative w-full max-w-xl px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/10 opacity-20 animate-orbit-spin" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-[#8b5cf6]/30 border-dashed opacity-25 animate-orbit-spin-reverse" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-[#60a5fa]/20 opacity-20" />
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
          <div className="bubble-icon flex items-center justify-center text-xl text-white/90">
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
