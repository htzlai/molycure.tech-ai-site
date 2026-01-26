'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const categories = ['All', 'AI & ML', 'Engineering', 'Product', 'Company'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Applications',
    excerpt: 'Explore how artificial intelligence is transforming the way businesses operate and make decisions.',
    category: 'AI & ML',
    author: 'Sarah Chen',
    date: 'Jan 10, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable Systems: Lessons from 10M Users',
    excerpt: 'Key insights and architectural decisions that helped us scale to millions of active users.',
    category: 'Engineering',
    author: 'Michael Park',
    date: 'Jan 5, 2024',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Introducing NovaTech 2.0: Next-Gen Platform',
    excerpt: 'Discover the new features and improvements in our latest platform release.',
    category: 'Product',
    author: 'Emily Rodriguez',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'How We Built Our AI-Powered Analytics Engine',
    excerpt: 'A deep dive into the technology behind our real-time analytics platform.',
    category: 'Engineering',
    author: 'David Kim',
    date: 'Dec 20, 2023',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'NovaTech Raises $50M Series B',
    excerpt: 'We&apos;re excited to announce our Series B funding to accelerate growth and innovation.',
    category: 'Company',
    author: 'Sarah Chen',
    date: 'Dec 15, 2023',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Machine Learning Best Practices for 2024',
    excerpt: 'Essential tips and techniques for building production-ready ML systems.',
    category: 'AI & ML',
    author: 'Michael Park',
    date: 'Dec 10, 2023',
    readTime: '15 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            Blog
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Insights & Updates
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            Stay up to date with the latest news, engineering insights, 
            and product updates from the NovaTech team.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full px-4 py-2 text-sm font-medium transition-all
                    ${activeCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="w-full md:w-64">
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">Featured</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Card key={post.id} variant="gradient" glow className="group cursor-pointer">
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-2">
                      <Badge variant="primary">{post.category}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="text-sm text-[var(--color-text-dim)]">{post.readTime}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-6 text-xl font-semibold text-white">
            {activeCategory === 'All' ? 'All Articles' : activeCategory}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <Card className="py-12 text-center">
              <CardContent>
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-lg font-semibold text-white">No articles found</h3>
                <p className="text-[var(--color-text-muted)]">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group cursor-pointer">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-3 w-fit">{post.category}</Badge>
                    <CardTitle className="transition-colors group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-dim)]">{post.date}</span>
                    <span className="text-sm text-[var(--color-text-dim)]">{post.readTime}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="gradient" className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                Get the latest articles and updates delivered to your inbox.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
