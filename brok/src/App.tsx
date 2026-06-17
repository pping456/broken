import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/features/Hero'
import FeaturesStrip from '@/components/features/FeaturesStrip'
import ShareTimetable from '@/components/features/ShareTimetable'
import FreeTrial from '@/components/features/FreeTrial'
import Pricing from '@/components/features/Pricing'
import UseCases from '@/components/features/UseCases'
import Testimonials from '@/components/features/Testimonials'
import FutureProof from '@/components/features/FutureProof'
import CTASection from '@/components/features/CTASection'
import Footer from '@/components/layout/Footer'

// Info pages
import AboutPage from '@/pages/AboutPage'
import BlogPage from '@/pages/BlogPage'
import CareersPage from '@/pages/CareersPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import HelpPage from '@/pages/HelpPage'
import DocsPage from '@/pages/DocsPage'
import LoginPage from '@/pages/LoginPage'
import TutorialsPage from '@/pages/TutorialsPage'
import ContactSupportPage from '@/pages/ContactSupportPage'
import StatusPage from '@/pages/StatusPage'

function LandingPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <ShareTimetable />
      <UseCases />
      <FreeTrial />
      <Pricing />
      <Testimonials />
      <FutureProof />
      <CTASection />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/contact-support" element={<ContactSupportPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
