import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoImg from '@/assets/azhly-logo.png'
import RegisterModal from '@/components/features/RegisterModal'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setActiveLink(href)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      } else {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setMobileOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-brand-navy shadow-md py-2'
    : 'bg-brand-navy py-3'
}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }} className="flex items-center flex-shrink-0">
            <img src={logoImg} alt="AZHly Logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href && location.pathname === '/'
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative group ${
                      isActive
                       ? 'text-brand-pink'
                       : 'text-white hover:text-brand-pink'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-pink rounded-full" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => navigate('/login')}
              className="border-2 border-brand-white text-brand-white text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-white hover:text-white transition-colors cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setRegisterOpen(true)}
              className="bg-brand-pink text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:bg-pink-600 transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-brand-navy" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-brand-navy shadow-lg">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-sm font-medium text-white hover:text-brand-pink"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3 flex flex-col gap-2">
                <button
                  onClick={() => { navigate('/login'); setMobileOpen(false) }}
                  className="w-full border-2 border-brand-navy text-brand-navy text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  Login
                </button>
                <button
                  onClick={() => { setRegisterOpen(true); setMobileOpen(false) }}
                  className="w-full bg-brand-pink text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} onSwitchToLogin={() => { setRegisterOpen(false); navigate('/login') }} />
    </>
  )
}
