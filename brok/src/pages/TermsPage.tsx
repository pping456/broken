import PageWrapper from './PageWrapper'

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className="mb-10">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Legal</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-gray-500">Last updated: June 1, 2026</p>
      </div>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        {[
          {
            title: '1. Acceptance of Terms',
            content: 'By registering an institution workspace or accessing AZHly\'s platform, you ("Institution") agree to these Terms of Service ("Terms"). These Terms form a legally binding agreement between your institution and AZHly Technologies. If you do not agree, do not use the Service.',
          },
          {
            title: '2. Service Description',
            content: 'AZHly provides a cloud-based campus management platform including timetable generation, room booking, conflict detection, notifications, analytics, and a student mobile application. Features available depend on your subscription plan. AZHly reserves the right to modify or discontinue features with 30 days\' notice.',
          },
          {
            title: '3. Account Registration',
            content: 'You must provide accurate and complete information when registering. You are responsible for maintaining the security of your administrator credentials. You agree to notify us immediately at support@azhly.com if you suspect unauthorized access. Each institution may have one primary administrator account with the ability to create sub-administrator accounts as permitted by your plan.',
          },
          {
            title: '4. Subscription and Payment',
            content: 'Paid plans are billed monthly or annually in Pakistani Rupees (PKR). The 14-day free trial provides full platform access at no cost; no credit card is required. After the trial, continued use requires selecting a paid plan. All fees are non-refundable except where required by law. We reserve the right to change prices with 30 days\' notice sent to your registered email.',
          },
          {
            title: '5. Acceptable Use',
            content: 'You agree not to: use the Service for any unlawful purpose; attempt to gain unauthorized access to the platform or other institution\'s data; transmit malicious code or perform denial-of-service attacks; reverse engineer or attempt to extract the platform\'s source code; resell or sublicense access to the Service without written permission.',
          },
          {
            title: '6. Intellectual Property',
            content: 'AZHly retains all intellectual property rights to the platform, software, and associated documentation. Your institution retains ownership of all data you input into the platform (timetables, room details, faculty records, etc.). You grant AZHly a limited license to process your data solely for the purpose of providing the Service.',
          },
          {
            title: '7. Data Ownership and Export',
            content: 'You own your institutional data. At any time, you may export your complete data in standard formats. Upon termination, you have 90 days to export your data before permanent deletion. AZHly will never sell or commercially exploit your institution\'s data.',
          },
          {
            title: '8. Service Level Agreement (SLA)',
            content: 'AZHly commits to 99.9% monthly uptime for all paid plans. In the event of downtime exceeding this threshold, affected institutions will receive service credits as follows: 99.0–99.9%: 10% credit; 95.0–99.0%: 25% credit; below 95.0%: 50% credit. Credits are applied to the next billing cycle.',
          },
          {
            title: '9. Limitation of Liability',
            content: 'To the fullest extent permitted by law, AZHly\'s total liability for any claims arising from the use of the Service shall not exceed the fees paid by your institution in the 3 months preceding the claim. AZHly is not liable for indirect, incidental, or consequential damages.',
          },
          {
            title: '10. Governing Law',
            content: 'These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved in the courts of Lahore, Punjab, Pakistan.',
          },
          {
            title: '11. Contact',
            content: 'For legal inquiries: legal@azhly.com | AZHly Technologies, Gujrat, Punjab, Pakistan',
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
