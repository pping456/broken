import { useState } from 'react'
import logoImg from '@/assets/azhly-logo.png'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

const features = [
  { icon: '📅', label: 'Smart Room Reservation', desc: 'Find, book and manage rooms instantly.' },
  { icon: '🗓️', label: 'Timetable Management', desc: 'Create and manage class schedules easily.' },
  { icon: '🔔', label: 'Real-time Notifications', desc: 'Stay updated with instant alerts.' },
  { icon: '⚠️', label: 'Conflict Detection', desc: 'Avoid double bookings and clashes.' },
  { icon: '👥', label: 'Multi-Department Support', desc: 'Manage multiple departments seamlessly.' },
  { icon: '📊', label: 'Analytics & Reports', desc: 'Get insights and make better decisions.' },
]

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [showPwd, setShowPwd] = useState(false)
  const [showConfirmPwd, setShowConfirmPwd] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [form, setForm] = useState({
    instituteName: '', campusName: '', institutionType: '',
    adminName: '', officialEmail: '', phone: '', designation: '',
    password: '', confirmPassword: '',
  })

  if (!isOpen) return null

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register:', form)
    onSwitchToLogin()
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

      <div className="relative w-full max-w-5xl max-h-[96vh] flex rounded-2xl shadow-2xl overflow-hidden">

        {/* Left dark panel */}
        <div
          className="hidden md:flex flex-col justify-between w-[300px] flex-shrink-0 p-8"
          style={{ background: 'linear-gradient(160deg, #0d1138 0%, #141b4d 55%, #1e1060 100%)' }}
        >
          <div>
            <img src={logoImg} alt="AZHly" className="h-9 w-auto object-contain mb-6" />
            <h2 className="text-2xl font-bold text-white leading-snug mb-2">
              Get Started<br />with <span className="text-brand-pink">AZHly</span>
            </h2>
            <p className="text-blue-300 text-xs leading-relaxed mb-7">
              Create your institution workspace to manage classrooms, timetables, and room reservations efficiently.
            </p>
            <ul className="space-y-3.5">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-sm flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{f.label}</p>
                    <p className="text-blue-300 text-[10px] leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Campus SVG */}
          <div className="mt-6 flex justify-center opacity-80">
            <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
              <ellipse cx="80" cy="87" rx="68" ry="5" fill="#7c3aed" opacity="0.3" />
              <rect x="45" y="33" width="70" height="52" fill="#4c1d95" rx="2" />
              <rect x="48" y="37" width="64" height="48" fill="#7c3aed" rx="1" />
              <polygon points="80,11 115,33 45,33" fill="#4c1d95" />
              <rect x="73" y="3" width="14" height="10" fill="#3b0764" />
              <polygon points="80,1 87,3 73,3" fill="#e91e8c" />
              {[54,70,86,102].map((x) => <rect key={x} x={x} y="45" width="10" height="10" rx="1" fill="#c4b5fd" opacity="0.5" />)}
              {[54,70,86,102].map((x) => <rect key={x+200} x={x} y="61" width="10" height="10" rx="1" fill="#c4b5fd" opacity="0.35" />)}
              <rect x="72" y="67" width="16" height="18" rx="8" fill="#6d28d9" opacity="0.7" />
              <rect x="0" y="82" width="160" height="8" fill="#1e3a8a" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="p-8">
            {/* Top gradient accent */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-purpleLight rounded-full mb-6" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21V9l9-6 9 6v12" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 21V15h6v6" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Create Your Institution Workspace</h3>
                <p className="text-gray-500 text-xs">Fill in the details below to get started.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Institution Info */}
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 21V9l9-6 9 6v12" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  Institution Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">University / Institute Name</label>
                    <input type="text" placeholder="Enter university or institute name" value={form.instituteName}
                      onChange={(e) => setForm({ ...form, instituteName: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Campus Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input type="text" placeholder="Enter campus name" value={form.campusName}
                      onChange={(e) => setForm({ ...form, campusName: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Institution Type</label>
                    <select value={form.institutionType} onChange={(e) => setForm({ ...form, institutionType: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 bg-white" required>
                      <option value="" disabled>Select institution type</option>
                      <option value="university">University</option>
                      <option value="college">College</option>
                      <option value="institute">Institute</option>
                      <option value="school">School</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Admin Info */}
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#7c3aed" strokeWidth="1.8" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  Administrator Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Admin Full Name', key: 'adminName', type: 'text', placeholder: 'Enter full name' },
                    { label: 'Official Email', key: 'officialEmail', type: 'email', placeholder: 'Enter official email' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: 'Enter phone number' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-medium text-gray-600 mb-1">{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" required />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Designation</label>
                    <select value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 bg-white" required>
                      <option value="" disabled>Select designation</option>
                      <option value="rector">Rector</option>
                      <option value="principal">Principal</option>
                      <option value="admin">IT Administrator</option>
                      <option value="registrar">Registrar</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Account Setup */}
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#7c3aed" strokeWidth="1.8" /><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  Account Setup
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Create Password', key: 'password', show: showPwd, toggle: () => setShowPwd(!showPwd), placeholder: 'Enter password' },
                    { label: 'Confirm Password', key: 'confirmPassword', show: showConfirmPwd, toggle: () => setShowConfirmPwd(!showConfirmPwd), placeholder: 'Confirm password' },
                  ].map((f) => (
                    <div key={f.key} className="relative">
                      <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                      <input type={f.show ? 'text' : 'password'} placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 pr-11 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" required />
                      <button type="button" onClick={f.toggle} className="absolute right-3.5 bottom-2.5 text-gray-400 hover:text-gray-600">
                        <EyeIcon open={f.show} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institution Branding */}
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#7c3aed" strokeWidth="1.8" /></svg>
                  Institution Branding <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                </h4>
                <div className="border-2 border-dashed border-purple-200 rounded-xl p-5 flex flex-col items-center gap-1.5 cursor-pointer hover:border-brand-purple/50 hover:bg-purple-50/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                    <polyline points="17 8 12 3 7 8" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="12" y1="3" x2="12" y2="15" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <p className="text-sm text-gray-500 font-medium">Click to upload institution logo</p>
                  <p className="text-xs text-gray-400">PNG, JPG or SVG (Max. 2MB)</p>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <div onClick={() => setAgreeTerms(!agreeTerms)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer transition-colors ${agreeTerms ? 'bg-brand-purple border-brand-purple' : 'border-gray-300 bg-white'}`}>
                  {agreeTerms && <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" /></svg>}
                </div>
                <p className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-brand-purple font-semibold hover:underline">Terms &amp; Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-brand-purple font-semibold hover:underline">Privacy Policy</a>
                </p>
              </div>

              <button type="submit"
                className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-4 rounded-xl text-sm tracking-wide transition-opacity hover:opacity-90 shadow-lg flex items-center justify-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21V9l9-6 9 6v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 21V15h6v6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Create Workspace
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <button type="button" onClick={onSwitchToLogin} className="text-brand-purple font-semibold hover:underline">Login</button>
              </p>
            </form>
          </div>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 z-10 bg-white/80 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
