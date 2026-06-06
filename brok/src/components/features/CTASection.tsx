export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl border border-purple-100 shadow-xl overflow-hidden px-8 py-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="fade-in-left text-center lg:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                Ready to Transform Your<br />Campus Management?
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Join thousands of institutions already using AZHly
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-brand-pink text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
              >
                Start Your Free Trial Today
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>

            {/* Illustration */}
            <div className="fade-in-right delay-200 flex-shrink-0">
              <div className="relative">
                {/* Stylized timetable card */}
                <div className="bg-white rounded-2xl shadow-xl p-5 w-64">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-brand-navy">Week View</span>
                    <span className="text-[10px] text-brand-purple bg-purple-50 px-2 py-0.5 rounded-full font-semibold">Live</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1 text-[9px] text-center text-gray-400 mb-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
                      <span key={d} className="font-medium">{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    {[
                      ['bg-blue-200', '', 'bg-purple-200', '', 'bg-pink-200'],
                      ['', 'bg-green-200', '', 'bg-yellow-200', ''],
                      ['bg-purple-200', '', 'bg-blue-200', '', 'bg-green-200'],
                      ['', 'bg-pink-200', '', 'bg-purple-200', ''],
                    ].map((row, ri) =>
                      row.map((cell, ci) => (
                        <div
                          key={`${ri}-${ci}`}
                          className={`h-6 rounded-md ${cell || 'bg-gray-100'}`}
                        />
                      ))
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span className="text-[10px] text-green-600 font-medium">No conflicts detected</span>
                  </div>
                </div>

                {/* Clock icon */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-brand-purple rounded-2xl shadow-lg flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Plant illustration */}
                <div className="absolute -top-8 -left-8 text-4xl select-none opacity-70">🌿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
