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
        <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 lg:pl-12 min-h-[55vh] lg:min-h-screen">
          <AnimatedVisual laptopImg={laptopImg} />

          <div className="mt-10 lg:mt-14 flex flex-wrap justify-center gap-10 w-full max-w-2xl">
            <FeatureCallout icon="🕐" title="Smart Scheduling" desc="Plan your classes efficiently" />
            <FeatureCallout icon="🔔" title="Real-time Updates" desc="Stay updated with latest changes" />
            <FeatureCallout icon="👥" title="Smarter Spaces" desc="Find the best spaces instantly" />
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-10 lg:w-[480px] xl:w-[520px] lg:mr-10">
          <LoginCard />
        </div>
      </div>
    </div>
  )
}

function FeatureCallout({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 text-left min-w-[160px]">
      <span className="text-2xl mt-0.5 opacity-90">{icon}</span>
      <div>
        <p className="text-white font-semibold text-sm">{title}</p>
        <p className="text-white/60 text-xs mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
