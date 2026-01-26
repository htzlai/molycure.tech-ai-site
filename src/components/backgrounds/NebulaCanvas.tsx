'use client';

import { useEffect, useRef, useCallback } from 'react';
import { ParticleSystem, ParticleConfig } from '@/lib/particles';

interface NebulaCanvasProps {
  className?: string;
  config?: ParticleConfig;
}

export default function NebulaCanvas({ className = '', config }: NebulaCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    if (particleSystemRef.current) {
      particleSystemRef.current.resize(rect.width, rect.height);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize particle system
    particleSystemRef.current = new ParticleSystem(config);
    
    // Set up canvas
    handleResize();
    particleSystemRef.current.init(canvas);

    // Start animation
    particleSystemRef.current.start();

    // Handle window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (particleSystemRef.current) {
        particleSystemRef.current.stop();
      }
    };
  }, [config, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
