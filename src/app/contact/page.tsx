'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@novatech.com',
    href: 'mailto:hello@novatech.com',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const faqs = [
  {
    question: 'What is the typical response time?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'Do you offer enterprise solutions?',
    answer: 'Yes! Contact our enterprise sales team for custom solutions and dedicated support.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Absolutely! All our products come with a 14-day free trial, no credit card required.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            Contact
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            Have questions? We&apos;d love to hear from you. Send us a message 
            and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="mb-4 text-5xl">✅</div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <Button 
                      className="mt-6" 
                      variant="secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Input
                        label="Name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <Input
                        label="Subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Textarea
                      label="Message"
                      name="message"
                      placeholder="Tell us more about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card>
              <CardContent>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-dim)]">{info.label}</p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardContent>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                      <h4 className="mb-2 font-medium text-white">{faq.question}</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10">
              <CardContent className="text-center">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      {platform[0]}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
