'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import NebulaCanvas from '@/components/backgrounds/NebulaCanvas';
import GradientMask from '@/components/backgrounds/GradientMask';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {/* Fixed Background Layer - Nebula Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Nebula particle canvas - main attraction */}
        <NebulaCanvas />
        
        {/* Gradient masks for depth */}
        <GradientMask position="top" />
        <GradientMask position="bottom" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col" style={{ zIndex: 1 }}>
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
