import logoImg from '@/assets/azhly-logo.png'
import { useNavigate } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Smart Timetable', href: '#features' },
    { label: 'Room Finder', href: '#features' },
    { label: 'Substitutions', href: '#features' },
    { label: 'Reports', href: '#features' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  Support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Video Tutorials', href: '/tutorials' },
    { label: 'Contact Support', href: '/contact-support' },
    { label: 'System Status', href: '/status' },
  ],
}

const socialIcons = [
  {
    label: 'Facebook',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
  },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault()
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logoImg} alt="AZHly Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-4 max-w-xs">
              AZHly – Smart Scheduling, Smarter Spaces. Cloud-based campus management for modern educational institutions.
            </p>
            <div className="flex gap-3 mb-6">
              {socialIcons.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-brand-pink hover:text-white transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { icon: '📞', text: '+92 300 1234567' },
                { icon: '✉️', text: 'hello@azhly.com' },
                { icon: '📍', text: 'Gujrat, Pakistan' },
              ].map((c) => (
                <p key={c.text} className="text-sm text-blue-200 flex items-center gap-2">
                  <span>{c.icon}</span>{c.text}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-white text-sm mb-4">Stay Updated</h4>
              <p className="text-xs text-blue-300 mb-3 leading-relaxed">
                Get the latest news, updates, and tips from AZHly.
              </p>
              <div className="flex gap-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 text-sm bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 outline-none focus:border-brand-purple text-white placeholder-blue-300"
                />
                <button className="bg-brand-pink text-white px-3 py-2 rounded-r-lg hover:bg-pink-600 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-white text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => handleLink(e, link.href)}
                      className="text-sm text-blue-200 hover:text-brand-pinkLight transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">© 2026 AZHly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); window.scrollTo(0,0) }} className="text-xs text-blue-300 hover:text-brand-pinkLight transition-colors">Privacy Policy</a>
            <span className="text-blue-700">|</span>
            <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); window.scrollTo(0,0) }} className="text-xs text-blue-300 hover:text-brand-pinkLight transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
