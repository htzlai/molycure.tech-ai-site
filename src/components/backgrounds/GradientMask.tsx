'use client';

interface GradientMaskProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export default function GradientMask({ position = 'top', className = '' }: GradientMaskProps) {
  const isTop = position === 'top';

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 ${className}`}
      style={{
        [isTop ? 'top' : 'bottom']: 0,
        height: isTop ? '500px' : '530px',
        background: 'linear-gradient(80.22deg, #30B4FF 1.49%, #7C8FFE 99.95%)',
        opacity: 0.12,
        WebkitMask: isTop
          ? 'radial-gradient(ellipse 150% 120% at top, black 0%, black 30%, transparent 70%)'
          : 'radial-gradient(ellipse 100% 90% at center, black 0%, black 20%, transparent 60%)',
        mask: isTop
          ? 'radial-gradient(ellipse 150% 120% at top, black 0%, black 30%, transparent 70%)'
          : 'radial-gradient(ellipse 100% 90% at center, black 0%, black 20%, transparent 60%)',
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  );
}
