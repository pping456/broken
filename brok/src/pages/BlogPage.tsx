import PageWrapper from './PageWrapper'

const posts = [
  {
    title: 'How Smart Scheduling Transformed Campus Operations at GCU',
    category: 'Case Study',
    date: 'May 28, 2026',
    readTime: '5 min read',
    excerpt: 'Government College University reduced scheduling conflicts by 94% after adopting AZHly. We explore how their operations team made the switch.',
    color: 'bg-blue-50 text-brand-blue',
  },
  {
    title: 'Top 7 Signs Your University Needs a Timetable Management System',
    category: 'Guide',
    date: 'May 15, 2026',
    readTime: '4 min read',
    excerpt: 'Still using spreadsheets to manage class schedules? Here are the clearest signs it\'s time to upgrade to a dedicated solution.',
    color: 'bg-green-50 text-brand-green',
  },
  {
    title: 'Introducing AI-Powered Conflict Detection in AZHly 2.0',
    category: 'Product Update',
    date: 'May 5, 2026',
    readTime: '3 min read',
    excerpt: 'AZHly 2.0 brings intelligent scheduling suggestions and real-time conflict resolution powered by machine learning.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Room Utilization Analytics: How Institutions Can Save 30% on Space',
    category: 'Insights',
    date: 'Apr 22, 2026',
    readTime: '6 min read',
    excerpt: 'Data from 200 institutions shows that poor room management leads to wasted space. Here\'s how analytics can help.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Student Mobile App: Giving Students Real-Time Campus Visibility',
    category: 'Feature',
    date: 'Apr 10, 2026',
    readTime: '4 min read',
    excerpt: 'The AZHly Student App puts timetables, room availability, and notifications in every student\'s pocket — for free.',
    color: 'bg-teal-50 text-brand-teal',
  },
  {
    title: 'The Future of EdTech in Pakistan: What\'s Coming in 2027',
    category: 'Industry',
    date: 'Apr 1, 2026',
    readTime: '7 min read',
    excerpt: 'Pakistan\'s higher education sector is growing rapidly. We look at the technology trends shaping the future of campus management.',
    color: 'bg-pink-50 text-pink-600',
  },
]

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">AZHly Blog</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Insights, Updates & Guides</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Resources for campus administrators, IT staff, and education leaders.
        </p>
      </div>

      {/* Featured post */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-10 border border-blue-100">
        <span className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Featured</span>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{posts[0].title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{posts[0].date}</span>
          <span>·</span>
          <span>{posts[0].readTime}</span>
          <span>·</span>
          <span className="text-brand-blue font-semibold">{posts[0].category}</span>
        </div>
      </div>

      {/* Post grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {posts.slice(1).map((post) => (
          <div key={post.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${post.color}`}>{post.category}</span>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">{post.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="border-2 border-brand-blue text-brand-blue font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
          Load More Articles
        </button>
      </div>
    </PageWrapper>
  )
}
