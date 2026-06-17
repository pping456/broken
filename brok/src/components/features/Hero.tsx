import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import laptopImg from '@/assets/azhly-laptop.png'
import RegisterModal from '@/components/features/RegisterModal'

export default function Hero() {
  const [registerOpen, setRegisterOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen bg-white flex items-center pt-20 pb-12 overflow-hidden"
      >
        {/* Soft background gradient blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(233,30,140,0.05) 50%, transparent 70%)', transform: 'translate(20%, -20%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

        {/* Dot grid decoration — top right */}
        <div className="absolute top-28 right-8 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-6 gap-2.5" style={{ filter: 'blur(2px)' }}>
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-purple opacity-18" />
            ))}
          </div>
        </div>

        {/* Small decorative dots */}
        <div className="absolute top-40 right-[38%] w-3 h-3 rounded-full bg-brand-pink opacity-50 pointer-events-none hidden lg:block" style={{ filter: 'blur(1.5px)' }} />
        <div className="absolute bottom-32 right-[52%] w-2 h-2 rounded-full bg-brand-purple opacity-40 pointer-events-none hidden lg:block" style={{ filter: 'blur(1px)' }} />
        <div className="absolute bottom-24 right-16 w-4 h-4 rounded-full bg-brand-purple opacity-25 pointer-events-none hidden lg:block" style={{ filter: 'blur(1.5px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left: Text content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight mb-5">
                <span className="text-brand-navy block">Smart Timetable.</span>
                <span className="text-brand-pink block">Smarter Campus.</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-9">
                AZHly is a cloud-based campus management solution with smart timetable generation and room
                finder to simplify scheduling and maximize productivity.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3.5">
                <button
                  onClick={() => navigate('/login')}
                  className="bg-brand-navy hover:bg-brand-navyDark text-white font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 shadow-md transition-colors"
                >
                  Login
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setRegisterOpen(true)}
                  className="bg-brand-pink hover:bg-pink-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right: Laptop image */}
            <div className="relative flex justify-center items-center">
              {/* Smaller orbit rings behind laptop */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="absolute w-[420px] h-[420px] rounded-full border border-purple-300/35"
                  style={{
                    filter: 'blur(16px)',
                    opacity: 0.75,
                  }}
                />
                <div
                  className="absolute w-[360px] h-[360px] rounded-full border border-purple-200/70 border-dashed"
                  style={{
                    transform: 'rotate(12deg)',
                    opacity: 0.72,
                  }}
                />
                <div
                  className="absolute w-[300px] h-[300px] rounded-full border border-fuchsia-200/70 border-dashed"
                  style={{
                    transform: 'rotate(-14deg)',
                    opacity: 0.62,
                  }}
                />
                <div
                  className="absolute w-[250px] h-[250px] rounded-full border border-purple-300/40"
                  style={{
                    opacity: 0.55,
                  }}
                />
              </div>

              {/* Dark blurry purple shadow mid-behind laptop */}
              <div
                className="absolute w-[460px] h-[220px] rounded-full bg-purple-950/45 pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(46px)',
                  opacity: 0.95,
                }}
              />

              {/* Tiny decorative dots near the laptop */}
              <div className="absolute w-full h-full pointer-events-none lg:block hidden">
                <div className="absolute -top-4 -right-8 w-2 h-2 rounded-full bg-brand-pink opacity-70" />
                <div className="absolute top-6 -right-6 w-1.5 h-1.5 rounded-full bg-brand-purple opacity-60" />
                <div className="absolute bottom-6 -left-6 w-2.5 h-2.5 rounded-full bg-brand-purple opacity-40" />
              </div>

              {/* Laptop image */}
              <img
                src={laptopImg}
                alt="AZHly Platform"
                className="relative w-full max-w-[580px] object-contain drop-shadow-2xl z-10"
              />

           
            </div>

          </div>
        </div>
      </section>

      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} onSwitchToLogin={() => { setRegisterOpen(false); navigate('/login') }} />
    </>
  )
}
