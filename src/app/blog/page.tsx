'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of Fintech: Trends to Watch in 2026',
      excerpt:
        'Explore the emerging trends shaping the fintech landscape, from AI-powered financial services to decentralized finance (DeFi) innovations.',
      date: 'February 5, 2026',
      category: 'Industry Insights',
    },
    {
      title: 'Building Secure Payment Systems: Best Practices',
      excerpt:
        'Learn the essential security considerations and best practices for developing robust payment processing systems that protect user data and prevent fraud.',
      date: 'January 28, 2026',
      category: 'Technical',
    },
    {
      title: 'Digital Transformation in Banking: A Complete Guide',
      excerpt:
        'How traditional banks can successfully navigate digital transformation, modernize legacy systems, and compete with fintech startups.',
      date: 'January 15, 2026',
      category: 'Strategy',
    },
    {
      title: 'Blockchain in Finance: Beyond Cryptocurrency',
      excerpt:
        'Discover how blockchain technology is revolutionizing finance beyond crypto, from smart contracts to supply chain finance and identity verification.',
      date: 'January 8, 2026',
      category: 'Innovation',
    },
    {
      title: 'Mobile Banking UX: Designing for Trust and Engagement',
      excerpt:
        'Key principles for creating mobile banking experiences that build user trust, drive engagement, and deliver exceptional customer satisfaction.',
      date: 'December 20, 2025',
      category: 'Design',
    },
    {
      title: 'Cloud Migration for Financial Services: A Roadmap',
      excerpt:
        'Step-by-step guide to successfully migrating financial services infrastructure to the cloud while maintaining security and compliance.',
      date: 'December 10, 2025',
      category: 'Technical',
    },
  ];

  return (
    <div className="min-h-screen" style={{ paddingTop: '94px' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Insights, trends, and expert perspectives on finance, payments, and fintech innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-accent">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-4 hover:text-accent transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex gap-2">
              <button className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-md bg-accent text-white font-semibold">1</button>
              <button className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Subscribe to our newsletter to receive the latest insights, trends, and updates in fintech and software development.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
