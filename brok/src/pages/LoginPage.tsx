import AnimatedVisual from '@/components/features/AnimatedVisual'
import laptopImg from '@/assets/azhly-laptop.png'
import LoginCard from '@/components/features/LoginCard'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-stretch bg-[#050214] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a041a]/92 via-[#0d0820]/85 to-[#06021a]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a041a]/70" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen">
        <div className="flex-1 p-0 lg:p-4">
          <div className="relative w-full h-full min-h-[55vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,rgba(11,11,26,0.9),rgba(8,10,27,0.97))]" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 blur-sm" />
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 w-full flex flex-col items-center justify-center p-8 lg:p-12 lg:pl-12">
              <AnimatedVisual laptopImg={laptopImg} />

              <div className="mt-10 lg:mt-14 flex flex-wrap justify-center gap-6 w-full max-w-2xl">
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  }
                  title="Smart Scheduling"
                  desc="Plan your classes efficiently"
                />
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C16.4183 22 20 18.4183 20 14V11C20 7.68629 18.2091 4.76308 15.4645 3.27404" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 11.0001C4 14.3138 5.79086 17.2369 8.53547 18.7259" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 3L9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 22L5 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  }
                  title="Real-time Updates"
                  desc="Stay updated with latest changes"
                />
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 13.5C3.5 7.977 7.477 4 13 4C18.523 4 22.5 7.977 22.5 13.5C22.5 18.265 18.313 22.354 12.35 23.52C12.21 23.546 12.105 23.456 12.105 23.31V20.84C12.105 20.528 11.85 20.28 11.538 20.28H10.462C10.15 20.28 9.895 20.528 9.895 20.84V23.31C9.895 23.456 9.79 23.546 9.65 23.52C3.687 22.354 -0.5 18.265 -0.5 13.5C-0.5 7.977 3.477 4 9 4C14.523 4 18.5 7.977 18.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  }
                  title="Smarter Spaces"
                  desc="Find the best spaces instantly"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-10 lg:w-[480px] xl:w-[520px] lg:mr-10">
          <LoginCard />
        </div>
      </div>
    </div>
  )
}

function FeatureCallout({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 text-left min-w-[160px]">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white/90 shadow-lg shadow-[#7c3aed]/10">{icon}</span>
      <div>
        <p className="text-white font-semibold text-sm">{title}</p>
        <p className="text-white/60 text-xs mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
