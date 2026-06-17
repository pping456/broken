import { useState } from 'react'
import logoImg from '@/assets/azhly-logo.png'

export default function LoginCard() {
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Login:', form)
  }

  return (
    <div className="glass-card w-full max-w-[520px] rounded-[32px] border border-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <div className="text-center mb-8">
        <img src={logoImg} alt="AZHly" className="mx-auto h-12 mb-6" />
        <h1 className="text-4xl font-bold text-white">Welcome Back!</h1>
        <p className="text-sm text-white/50 mt-3">Sign in to continue to your dashboard</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-white/70 mb-2">Username</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 20.5H18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 20.5C5 17.462 7.462 15 10.5 15H12.5C15.538 15 18 17.462 18 20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="admin@institution.edu.pk"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-dark w-full rounded-2xl px-4 py-3 pl-12 text-sm text-white placeholder-white/40"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-2">Password</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="6" y="11" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <input
              type={showPwd ? 'text' : 'password'}
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input-dark w-full rounded-2xl px-4 py-3 pl-12 pr-12 text-sm text-white placeholder-white/40"
              required
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              {showPwd ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-white/70">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="h-4 w-4 rounded border-white/30 bg-white/5 text-brand-purple focus:ring-brand-purple"
            />
            Remember me
          </label>
          <button type="button" className="text-white/80 hover:text-white transition-colors text-sm">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="login-btn-gradient w-full rounded-2xl py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:shadow-[#7c3aed]/40"
        >
          LOGIN
        </button>
      </form>

      <div className="flex items-center gap-3 my-6 text-xs text-white/60">
        <div className="flex-1 h-px bg-white/10" />
        <span>OR</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button
        type="button"
        className="w-full border border-white/20 text-white font-semibold py-3 rounded-2xl text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Sign in with Google
      </button>

      <p className="text-center text-sm text-white/60 mt-6">
        Don't have an account?{' '}
        <button type="button" className="text-[#a855f7] font-semibold hover:text-white/90 underline-offset-4">
          Sign up
        </button>
      </p>
    </div>
  )
}
