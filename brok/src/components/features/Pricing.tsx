const plans = [
  {
    name: 'Standard',
    subtitle: 'Small Colleges / Institutes',
    price: '4,999',
    priceLabel: null,
    color: 'border-blue-300',
    accentColor: 'text-brand-purple',
    btnClass: 'bg-brand-purple hover:bg-purple-700 text-white',
    checkColor: '#7c3aed',
    badge: null,
    features: [
      'Single Campus',
      'Room Finder',
      'Timetable Management',
      'Clash Detection',
      'Reports',
      'Priority Support',
    ],
    cta: 'Get Standard',
  },
  {
    name: 'Premium',
    subtitle: 'Medium Universities',
    price: '9,999',
    priceLabel: null,
    color: 'border-brand-pink',
    accentColor: 'text-brand-pink',
    btnClass: 'bg-brand-pink hover:bg-pink-600 text-white',
    checkColor: '#e91e8c',
    badge: '⭐ Most Popular',
    features: [
      'Everything in Standard',
      'AI-based Suggestions',
      'Advanced Analytics',
      'Faculty Management',
      'Role-Based Access Control',
      'Student & Parent Portal',
      'API Access',
    ],
    cta: 'Get Premium',
  },
  {
    name: 'Enterprise',
    subtitle: 'Large Universities — multiple campuses',
    price: null,
    priceLabel: 'Custom Pricing',
    color: 'border-gray-300',
    accentColor: 'text-brand-navy',
    btnClass: 'bg-brand-navy hover:bg-brand-navyDark text-white',
    checkColor: '#141b4d',
    badge: null,
    features: [
      'Multi-Campus Support',
      'Unlimited Users',
      'Priority Support',
      'Custom Integrations',
      'Dedicated Account Manager',
      'SLA & Uptime Guarantee',
    ],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent <span className="text-brand-pink">Pricing</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Start with a free trial. Upgrade to the plan that fits your institution — no hidden fees.
          </p>
        </div>

        {/* 3-card grid — centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8 shadow-sm flex flex-col transition-shadow hover:shadow-lg`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-pink text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`mb-6 ${plan.badge ? 'mt-3' : ''}`}>
                <h3 className={`font-bold text-2xl mb-1 ${plan.accentColor}`}>{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-snug">{plan.subtitle}</p>
                {plan.price ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-gray-500">PKR</span>
                    <span className={`text-4xl font-bold ${plan.accentColor}`}>{plan.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                ) : (
                  <p className={`text-3xl font-bold ${plan.accentColor}`}>{plan.priceLabel}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="12" cy="12" r="10" fill={plan.checkColor} />
                      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full ${plan.btnClass} font-semibold py-3.5 rounded-xl transition-colors text-base`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          All plans include secure cloud storage, regular backups, and full data ownership.
        </p>
      </div>
    </section>
  )
}
