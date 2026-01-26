'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const coreServices = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      ...t.home.services.marketInsight,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      ...t.home.services.smartOutreach,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      ...t.home.services.dataSync,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      ...t.home.services.industry,
    },
  ];

  const advantages = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      ...t.home.advantages.ai,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      ...t.home.advantages.global,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      ...t.home.advantages.efficient,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      ...t.home.advantages.data,
    },
  ];

  const stats = [
    { value: t.home.stats.conversion, label: t.home.stats.conversionLabel },
    { value: t.home.stats.cycle, label: t.home.stats.cycleLabel },
    { value: t.home.stats.savings, label: t.home.stats.savingsLabel },
    { value: t.home.stats.languages, label: t.home.stats.languagesLabel },
  ];

  const aboutStats = [
    { value: t.home.about.stats.conversion, label: t.home.about.stats.conversionLabel },
    { value: t.home.about.stats.cycle, label: t.home.about.stats.cycleLabel },
    { value: t.home.about.stats.savings, label: t.home.about.stats.savingsLabel },
    { value: t.home.about.stats.languages, label: t.home.about.stats.languagesLabel },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex"
            >
              <Badge variant="primary" size="md">
                <span className="mr-1">🇸🇬</span>
                {t.home.badge}
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-4"
            >
              <p className="text-sm text-[var(--color-text-muted)]">{t.home.badgeSubtitle}</p>
            </motion.div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">{t.home.title}</span>
              <br />
              <span className="text-gradient">{t.home.titleHighlight}</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-10 max-w-3xl text-lg font-bold text-white lg:text-xl leading-relaxed">
              {t.home.subtitle}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/products">
                <Button size="lg" rightIcon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }>
                  {t.home.ctaPrimary}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {t.home.ctaSecondary}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <Badge variant="secondary" size="md" className="mb-4">
              {t.home.services.title}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              {t.home.services.subtitle}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service, index) => (
              <Card key={index} variant="default" glow={index === 0}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle>{service.title}</CardTitle>
                    <Badge variant="primary" size="sm">{service.badge}</Badge>
                  </div>
                  <p className="text-sm text-[var(--color-text-dim)] mb-2">{service.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[var(--color-text-muted)] mb-4">
                    {service.description}
                  </CardDescription>
                  <Link href="/products" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors inline-flex items-center gap-1">
                    {service.link}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              {t.home.advantages.title}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white">
                    {advantage.icon}
                  </div>
                  <CardTitle>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[var(--color-text-muted)]">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" size="md" className="mb-4">
                {t.home.about.badge}
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                {t.home.about.title}
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)]">
                <p>{t.home.about.paragraph1}</p>
                <p>
                  {t.home.about.paragraph2.includes(':') ? (
                    <>
                      <strong className="text-white">{t.home.about.paragraph2.split(':')[0]}: </strong>
                      {t.home.about.paragraph2.split(':').slice(1).join(':')}
                    </>
                  ) : (
                    t.home.about.paragraph2
                  )}
                </p>
                <p>
                  {t.home.about.paragraph3.includes(':') ? (
                    <>
                      <strong className="text-white">{t.home.about.paragraph3.split(':')[0]}: </strong>
                      {t.home.about.paragraph3.split(':').slice(1).join(':')}
                    </>
                  ) : (
                    t.home.about.paragraph3
                  )}
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    {t.home.about.learnMore}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {aboutStats.map((stat, index) => (
                <Card key={index} variant="default" className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="gradient" glow className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                {t.home.cta.title}
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                {t.home.cta.subtitle}
              </p>
              <div className="mb-8 text-sm text-[var(--color-text-dim)]">
                <p className="mb-2">{t.home.cta.industries}</p>
                <p>{t.home.cta.features}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg">
                    {t.home.cta.primary}
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="ghost" size="lg">
                    {t.home.cta.secondary}
                  </Button>
                </Link>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-[var(--color-text-dim)]">
                  {t.home.cta.location}
                </p>
                <p className="text-xs text-[var(--color-text-dim)] mt-1">
                  {t.home.cta.tagline}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
