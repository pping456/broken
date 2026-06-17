import type { ReactNode } from 'react'
import AnimatedVisual from '@/components/features/AnimatedVisual'
import laptopImg from '@/assets/azhly-laptop.png'
import LoginCard from '@/components/features/LoginCard'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050214] text-white">
      <div className="absolute inset-y-0 left-0 right-0 lg:right-1/2">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-60 blur-sm" />
        <div className="absolute inset-0 bg-[#050214]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.20),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_32%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <div className="relative flex-1 px-4 py-10 lg:px-10 lg:py-16">
          <div className="relative mx-auto flex h-full min-h-[76vh] max-w-[980px] items-center justify-center">
            <div className="relative w-full max-w-[620px]">
              <AnimatedVisual laptopImg={laptopImg} />

              <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M8 2V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M16 2V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M7 11H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M7 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  }
                  title="Smart Scheduling"
                  desc="Plan your classes efficiently"
                />
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.75C9.376 4.75 7.25 6.876 7.25 9.5V12L5.5 14.25V15.5H18.5V14.25L16.75 12V9.5C16.75 6.876 14.624 4.75 12 4.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.5 15.5V16.75C8.5 18.5449 10.2051 20.25 12 20.25C13.7949 20.25 15.5 18.5449 15.5 16.75V15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  }
                  title="Real-time Updates"
                  desc="Stay updated with latest changes"
                />
                <FeatureCallout
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#cbd5e1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3C8.68629 3 6 5.68629 6 9C6 13.5 12 21 12 21C12 21 18 13.5 18 9C18 5.68629 15.3137 3 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                    </svg>
                  }
                  title="Smarter Spaces"
                  desc="Find the best spaces instantly"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center px-6 py-10 lg:w-[520px] lg:px-10">
          <LoginCard />
        </div>
      </div>
    </div>
  )
}

function FeatureCallout({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 text-left min-w-[160px]">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/90 shadow-lg shadow-[#7c3aed]/10">
        {icon}
      </span>
      <div>
        <p className="text-white font-semibold text-sm">{title}</p>
        <p className="text-white/60 text-xs mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
