// Particle system for creating nebula-like background effect
// Inspired by NVIDIA Build website

export interface ParticleConfig {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  minSpeed?: number;
  maxSpeed?: number;
  colors?: string[];
  connectionDistance?: number;
  connectionOpacity?: number;
  glowIntensity?: number;
}

const defaultConfig: Required<ParticleConfig> = {
  count: 150,
  minRadius: 2,
  maxRadius: 5,
  minSpeed: 0.2,
  maxSpeed: 0.8,
  colors: ['#30B4FF', '#7C8FFE', '#ffffff', '#60a5fa', '#a5b4fc', '#38bdf8'],
  connectionDistance: 200,
  connectionOpacity: 0.25,
  glowIntensity: 15,
};

export class Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
  glowSize: number;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    config: Required<ParticleConfig>
  ) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseRadius = Math.random() * (config.maxRadius - config.minRadius) + config.minRadius;
    this.radius = this.baseRadius;
    this.speedX = (Math.random() - 0.5) * config.maxSpeed * 2;
    this.speedY = (Math.random() - 0.5) * config.maxSpeed * 2;
    this.baseOpacity = Math.random() * 0.6 + 0.4; // Higher base opacity
    this.opacity = this.baseOpacity;
    this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
    this.pulseSpeed = Math.random() * 0.03 + 0.01;
    this.pulseOffset = Math.random() * Math.PI * 2;
    this.glowSize = config.glowIntensity + Math.random() * 10;
  }

  update(canvasWidth: number, canvasHeight: number, time: number): void {
    // Move particle
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x < -50) this.x = canvasWidth + 50;
    if (this.x > canvasWidth + 50) this.x = -50;
    if (this.y < -50) this.y = canvasHeight + 50;
    if (this.y > canvasHeight + 50) this.y = -50;

    // Pulse effect (twinkling)
    const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset);
    this.opacity = this.baseOpacity + pulse * 0.3;
    this.radius = this.baseRadius + pulse * 1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // Draw glow effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius + this.glowSize
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.3, this.hexToRgba(this.color, this.opacity * 0.5));
    gradient.addColorStop(1, this.hexToRgba(this.color, 0));

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + this.glowSize, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw core particle
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(1, this.radius), 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private config: Required<ParticleConfig>;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private animationId: number | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private time: number = 0;

  constructor(config: ParticleConfig = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  init(canvas: HTMLCanvasElement): void {
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resize(canvas.width, canvas.height);
    this.createParticles();
  }

  resize(width: number, height: number): void {
    this.canvasWidth = width;
    this.canvasHeight = height;

    // Adjust particle count based on screen size for performance
    const area = width * height;
    const baseArea = 1920 * 1080;
    const scaleFactor = Math.min(1.5, Math.max(0.5, area / baseArea));
    const adjustedCount = Math.floor(this.config.count * scaleFactor);
    
    if (this.particles.length !== adjustedCount) {
      this.particles = [];
      for (let i = 0; i < adjustedCount; i++) {
        this.particles.push(new Particle(width, height, this.config));
      }
    }
  }

  private createParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.config.count; i++) {
      this.particles.push(
        new Particle(this.canvasWidth, this.canvasHeight, this.config)
      );
    }
  }

  private drawConnections(): void {
    if (!this.ctx) return;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          const opacity =
            (1 - distance / this.config.connectionDistance) *
            this.config.connectionOpacity;
          
          // Create gradient line for connection
          const gradient = this.ctx.createLinearGradient(
            this.particles[i].x, this.particles[i].y,
            this.particles[j].x, this.particles[j].y
          );
          gradient.addColorStop(0, `rgba(124, 143, 254, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(48, 180, 255, ${opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(124, 143, 254, ${opacity})`);
          
          this.ctx.beginPath();
          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate = (): void => {
    if (!this.ctx) return;

    this.time += 1;

    // Clear canvas completely
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw connections first (behind particles)
    this.drawConnections();

    // Update and draw particles
    for (const particle of this.particles) {
      particle.update(this.canvasWidth, this.canvasHeight, this.time);
      particle.draw(this.ctx);
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  start(): void {
    if (this.animationId === null) {
      this.animate();
    }
  }

  stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  clear(): void {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
  }
}
