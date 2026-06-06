import PageWrapper from './PageWrapper'

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="mb-10">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Legal</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-500">Last updated: June 1, 2026</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
        {[
          {
            title: '1. Introduction',
            content: 'AZHly ("we," "our," or "us") is committed to protecting the privacy of educational institutions and their members. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our campus management platform at azhly.com and its associated mobile applications (collectively, the "Service"). By accessing the Service, you agree to this Privacy Policy.',
          },
          {
            title: '2. Information We Collect',
            content: 'We collect information you provide directly to us when registering your institution, including: institution name, type, and location; administrator name, email address, phone number, and designation; login credentials (passwords are encrypted using industry-standard hashing); institution logos and branding materials (optional). We also automatically collect usage data such as: IP addresses and device information; browser type and operating system; pages visited and features used; login timestamps and session durations.',
          },
          {
            title: '3. How We Use Your Information',
            content: 'We use collected information to: provide, maintain, and improve the Service; create and manage your institution workspace; send transactional communications (account confirmations, password resets, critical service updates); analyze usage patterns to enhance user experience; enforce our Terms of Service and legal obligations; and respond to your support requests.',
          },
          {
            title: '4. Data Sharing and Disclosure',
            content: 'We do not sell, rent, or trade your personal information to third parties. We may share information with: service providers who assist in platform operations (cloud hosting, email delivery, analytics) — all bound by confidentiality agreements; government or regulatory authorities when required by Pakistani law; and successor entities in the event of a merger, acquisition, or asset sale.',
          },
          {
            title: '5. Data Security',
            content: 'We implement enterprise-grade security measures including: AES-256 encryption for data at rest and TLS 1.3 for data in transit; regular automated backups with 30-day retention; role-based access controls limiting internal data access; annual security audits and vulnerability assessments; two-factor authentication support for all administrator accounts.',
          },
          {
            title: '6. Data Retention',
            content: 'We retain your institution\'s data for the duration of your active subscription plus 90 days following termination. During this 90-day period, you may export all your data. After this period, data is permanently deleted unless legal obligations require longer retention.',
          },
          {
            title: '7. Your Rights',
            content: 'As an institution administrator, you have the right to: access all data associated with your workspace; export your data in standard formats (CSV, PDF); correct inaccurate information; request deletion of your account and associated data; object to certain data processing activities. To exercise these rights, contact our Data Protection Officer at privacy@azhly.com.',
          },
          {
            title: '8. Cookies',
            content: 'We use essential cookies to maintain your login session and remember your preferences. We use analytics cookies (with your consent) to understand how features are used. You may disable non-essential cookies through your browser settings, although this may affect some platform functionality.',
          },
          {
            title: '9. Contact Us',
            content: 'For privacy-related inquiries, contact our Data Protection Officer: Email: privacy@azhly.com | Address: AZHly Technologies, Gujrat, Punjab, Pakistan | Phone: +92 300 1234567',
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
