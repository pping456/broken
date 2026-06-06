import { useState } from 'react'
import logoImg from '@/assets/azhly-logo.png'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToRegister: () => void
}

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  const [view, setView] = useState<'login' | 'forgot'>('login')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSent, setForgotSent] = useState(false)

  if (!isOpen) return null

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', form)
  }

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault()
    setForgotSent(true)
  }

  const EyeIcon = ({ open }: { open: boolean }) => open ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleBackdrop}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-[420px] rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d1138 0%, #141b4d 60%, #1e1060 100%)' }}>
        {/* Top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-purpleLight" />

        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logoImg} alt="AZHly" className="h-10 w-auto object-contain" />
          </div>

          {/* LOGIN */}
          {view === 'login' && (
            <>
              <h2 className="text-2xl font-bold text-white text-center mb-1">Welcome Back</h2>
              <p className="text-blue-300 text-sm text-center mb-7">Sign in to your AZHly dashboard</p>

              {/* Google Button */}
              <button
                type="button"
                className="w-full border border-white/20 text-white font-medium py-3 rounded-xl text-sm flex items-center justify-center gap-2.5 hover:bg-white/10 transition-colors mb-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-white/15" />
                <span className="text-xs text-blue-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-white/15" />
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      placeholder="admin@institution.edu.pk"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-blue-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 transition-colors bg-white/10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">Password</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input
                      type={showPwd ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full border border-white/20 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-blue-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 transition-colors bg-white/10"
                      required
                    />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-blue-400 hover:text-white">
                      <EyeIcon open={showPwd} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div
                      onClick={() => setRemember(!remember)}
                      className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${remember ? 'bg-brand-pink border-brand-pink' : 'border-white/30'}`}
                    >
                      {remember && <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" /></svg>}
                    </div>
                    <span className="text-xs text-blue-300">Remember me</span>
                  </label>
                  <button type="button" onClick={() => setView('forgot')} className="text-xs text-brand-pinkLight font-medium hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-opacity hover:opacity-90 shadow-lg shadow-purple-900/40"
                >
                  LOGIN
                </button>
              </form>

              <p className="text-center text-sm text-blue-300 mt-5">
                New institution?{' '}
                <button onClick={onSwitchToRegister} className="text-brand-pinkLight font-semibold hover:underline">
                  Register Your Institute
                </button>
              </p>
            </>
          )}

          {/* FORGOT PASSWORD */}
          {view === 'forgot' && (
            <>
              <h2 className="text-2xl font-bold text-white text-center mb-1">Reset Password</h2>
              <p className="text-blue-300 text-sm text-center mb-7">Enter your email to receive a reset link</p>

              {forgotSent ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-brand-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#7c3aed" />
                      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Sent!</h3>
                  <p className="text-blue-300 text-sm mb-6">Check your inbox for the password reset link.</p>
                  <button onClick={() => { setView('login'); setForgotSent(false); setForgotEmail('') }}
                    className="text-brand-pinkLight font-medium text-sm hover:underline">
                    ← Back to Login
                  </button>
                </div>
              ) : (
                <>
                  <form onSubmit={handleForgot} className="space-y-4">
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-blue-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 bg-white/10"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3.5 rounded-xl text-sm transition-opacity hover:opacity-90">
                      Send Reset Link
                    </button>
                  </form>
                  <p className="text-center text-sm text-blue-300 mt-4">
                    <button onClick={() => setView('login')} className="text-brand-pinkLight font-medium hover:underline">← Back to Login</button>
                  </p>
                </>
              )}
            </>
          )}
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors p-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
