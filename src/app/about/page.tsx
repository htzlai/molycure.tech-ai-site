'use client';

import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'NovaTech was founded with a vision to democratize AI technology for businesses of all sizes.',
  },
  {
    year: '2020',
    title: 'First Product Launch',
    description: 'Launched our flagship AI Studio platform, serving 1,000+ customers in the first year.',
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: 'Raised $25M in Series A funding to expand our product offerings and global reach.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia, serving customers in over 50 countries.',
  },
  {
    year: '2023',
    title: '10K Customers',
    description: 'Reached 10,000 customers milestone with 99.9% customer satisfaction rate.',
  },
  {
    year: '2024',
    title: 'NovaTech 2.0',
    description: 'Launched next-generation platform with advanced AI capabilities and enterprise features.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: '👩‍💼',
    bio: 'Former Google AI researcher with 15+ years in machine learning.',
  },
  {
    name: 'Michael Park',
    role: 'CTO & Co-founder',
    image: '👨‍💻',
    bio: 'Ex-Amazon principal engineer, expert in distributed systems.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Product',
    image: '👩‍🎨',
    bio: 'Product leader from Stripe with deep fintech expertise.',
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '👨‍🔬',
    bio: 'Built and scaled engineering teams at multiple unicorns.',
  },
];

const values = [
  {
    icon: '🚀',
    title: 'Innovation First',
    description: 'We push boundaries and embrace new ideas to solve complex problems.',
  },
  {
    icon: '🤝',
    title: 'Customer Success',
    description: 'Our customers\' success is our success. We go above and beyond to deliver value.',
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    description: 'We build technology that makes a positive difference in the world.',
  },
  {
    icon: '💡',
    title: 'Continuous Learning',
    description: 'We foster a culture of curiosity and continuous improvement.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            About Us
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Building the Future of Technology
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            We&apos;re a team of passionate engineers, designers, and dreamers 
            on a mission to make cutting-edge technology accessible to everyone.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <Card variant="gradient" glow className="p-8 lg:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-[var(--color-text-muted)]">
                To empower businesses and developers with AI-powered tools that transform 
                the way they build, deploy, and scale applications. We believe that 
                advanced technology should be accessible, intuitive, and impactful.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] md:left-1/2 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <Card hover={false}>
                      <CardContent>
                        <Badge variant="primary" className="mb-2">{item.year}</Badge>
                        <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
            Our Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="text-center">
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
            Leadership Team
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-4xl">
                      {member.image}
                    </div>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{member.name}</h3>
                  <Badge variant="secondary" size="sm" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-[var(--color-text-muted)]">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
