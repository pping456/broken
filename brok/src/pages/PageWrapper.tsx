import { useNavigate } from 'react-router-dom'
import logoImg from '@/assets/azhly-logo.png'

function PageWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-brand-navy sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0) }}>
            <img src={logoImg} alt="AZHly" className="h-9 w-auto object-contain" />
          </a>
          <button onClick={() => { navigate('/'); window.scrollTo(0, 0) }} className="text-sm text-blue-200 hover:text-brand-pinkLight font-medium flex items-center gap-1 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            Back to Home
          </button>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">{children}</main>
      <footer className="bg-brand-navy border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-blue-300">
          © 2026 AZHly. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export { PageWrapper }
export default PageWrapper
