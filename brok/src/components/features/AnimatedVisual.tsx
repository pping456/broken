import laptopImg from '@/assets/azhly-laptop.png'

export default function AnimatedVisual() {
  return (
    <div className="relative w-full max-w-xl px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[320px] h-[320px] rounded-full border border-white/10 opacity-30 animate-orbit-spin" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-[#8b5cf6]/30 border-dashed opacity-30 animate-orbit-spin-reverse" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-[#60a5fa]/25 opacity-25" />
      </div>

      <div className="relative mx-auto w-full max-w-[420px]">
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7c3aed]/20 to-[#4f46e5]/10 blur-3xl opacity-70" />
        <div className="relative z-10 flex items-center justify-center">
          <img
            src={laptopImg}
            alt="AZHly laptop preview"
            className="relative w-full max-w-[420px] rounded-[28px] shadow-2xl shadow-[#4f46e5]/20 animate-float-laptop"
          />
        </div>
      </div>

      <div className="absolute -left-10 top-12 w-20 h-20 rounded-full bubble-icon animate-float-a" />
      <div className="absolute right-8 top-28 w-24 h-24 rounded-full bubble-icon animate-float-b" />
      <div className="absolute left-1/2 bottom-10 w-16 h-16 rounded-full bubble-icon animate-float-c" />
      <div className="absolute right-16 bottom-24 w-12 h-12 rounded-full bubble-icon animate-float-d" />
    </div>
  )
}
