'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const categories = ['All', 'AI & ML', 'Cloud', 'Security', 'Analytics'];

const products = [
  {
    id: 1,
    name: 'NovaTech AI Studio',
    description: 'Build, train, and deploy machine learning models with our comprehensive AI development platform.',
    category: 'AI & ML',
    price: '$99/mo',
    features: ['Model Training', 'Auto-scaling', 'API Access', 'Custom Integrations'],
    popular: true,
  },
  {
    id: 2,
    name: 'CloudForge Pro',
    description: 'Enterprise-grade cloud infrastructure with global distribution and 99.99% uptime guarantee.',
    category: 'Cloud',
    price: '$199/mo',
    features: ['Global CDN', 'Auto-backup', 'DDoS Protection', 'Load Balancing'],
    popular: false,
  },
  {
    id: 3,
    name: 'SecureVault',
    description: 'Advanced security suite with threat detection, encryption, and compliance management.',
    category: 'Security',
    price: '$149/mo',
    features: ['End-to-end Encryption', 'Threat Detection', 'Compliance Tools', 'Audit Logs'],
    popular: false,
  },
  {
    id: 4,
    name: 'DataPulse Analytics',
    description: 'Real-time analytics and business intelligence with customizable dashboards and reports.',
    category: 'Analytics',
    price: '$79/mo',
    features: ['Real-time Analytics', 'Custom Dashboards', 'Data Export', 'Team Collaboration'],
    popular: true,
  },
  {
    id: 5,
    name: 'Neural API Gateway',
    description: 'Intelligent API management with AI-powered routing, caching, and rate limiting.',
    category: 'AI & ML',
    price: '$129/mo',
    features: ['Smart Routing', 'Rate Limiting', 'Analytics', 'Developer Portal'],
    popular: false,
  },
  {
    id: 6,
    name: 'HyperScale Compute',
    description: 'GPU-accelerated computing for demanding workloads like AI training and scientific simulations.',
    category: 'Cloud',
    price: '$299/mo',
    features: ['GPU Instances', 'Spot Pricing', 'Kubernetes', 'Auto-scaling'],
    popular: false,
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

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
            Products
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Powerful Solutions for Every Need
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            Discover our comprehensive suite of products designed to accelerate 
            your digital transformation and drive business growth.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full px-5 py-2 text-sm font-medium transition-all
                ${activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-bg-card-hover)]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                variant="default"
                glow={product.popular}
                className="relative overflow-hidden"
              >
                {product.popular && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="primary">Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" size="sm" className="mb-3 w-fit">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gradient">{product.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="h-4 w-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={product.popular ? 'primary' : 'secondary'} className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="gradient" className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Need a Custom Solution?
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                Contact our enterprise team for custom pricing and tailored solutions.
              </p>
              <Button size="lg">Contact Enterprise Sales</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
