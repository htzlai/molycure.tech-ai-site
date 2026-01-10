'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  targetOpacity: number
  hue: number
}

// 获取粒子的颜色（从蓝色到紫色到青色）- 优化为更亮的颜色
const getParticleColor = (hue: number, opacity: number): string => {
  // 确保opacity在合理范围内
  const clampedOpacity = Math.max(0, Math.min(1, opacity))
  
  // 蓝色到紫色到青色的渐变 (190-270)
  if (hue < 220) {
    // 亮蓝色 (190-220)
    const ratio = (hue - 190) / 30
    const r = Math.floor(100 * (1 - ratio) + 59 * ratio)
    const g = Math.floor(200 * (1 - ratio) + 130 * ratio)
    const b = Math.floor(255)
    return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`
  } else if (hue < 250) {
    // 蓝色到紫色 (220-250)
    const ratio = (hue - 220) / 30
    const r = Math.floor(59 * (1 - ratio) + 147 * ratio)
    const g = Math.floor(130 * (1 - ratio) + 51 * ratio)
    const b = Math.floor(246 * (1 - ratio) + 234 * ratio)
    return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`
  } else {
    // 紫色到青色 (250-270)
    const ratio = (hue - 250) / 20
    const r = Math.floor(147 * (1 - ratio))
    const g = Math.floor(51 * (1 - ratio) + 150 * ratio)
    const b = Math.floor(234 * (1 - ratio) + 255 * ratio)
    return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const connectionDistance = 250 // 进一步增加连接距离，形成更密集的网络

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false }) // 禁用alpha以提高性能
    if (!ctx) return

    // 获取设备像素比，确保高DPI屏幕清晰
    let dpr = window.devicePixelRatio || 1

    // 初始化粒子的函数
    const initParticles = () => {
      dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      
      // 大幅增加粒子密度（每4000像素一个粒子，非常密集）
      const particleCount = Math.floor((width * height) / 4000)
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 2, // 更大粒子（2-5px）
        opacity: Math.random() * 0.8 + 0.6, // 更高亮度（0.6-1.4，会被限制到1）
        targetOpacity: Math.random() * 0.8 + 0.6,
        hue: 190 + Math.random() * 80, // 扩展到190-270（更蓝到紫色，更亮）
      }))
    }

    // 设置画布大小（考虑高DPI）
    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      // 重置变换矩阵并缩放上下文
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      
      // 重新初始化粒子以适应新尺寸
      initParticles()
    }
    
    // 初始设置
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 鼠标追踪
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // 动画循环
    const animate = () => {
      // 获取当前dpr（可能在resize时改变）
      const currentDpr = window.devicePixelRatio || 1
      // 清除画布（需要考虑dpr）
      ctx.clearRect(0, 0, canvas.width / currentDpr, canvas.height / currentDpr)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // 更新和绘制粒子
      particles.forEach((particle, i) => {
        // 获取当前画布尺寸（考虑dpr）
        const currentDpr = window.devicePixelRatio || 1
        const canvasWidth = canvas.width / currentDpr
        const canvasHeight = canvas.height / currentDpr

        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 边界反弹
        if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1
        
        // 确保粒子在画布内
        particle.x = Math.max(0, Math.min(canvasWidth, particle.x))
        particle.y = Math.max(0, Math.min(canvasHeight, particle.y))

        // 鼠标交互
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const force = (120 - distance) / 120
          particle.x -= (dx / distance) * force * 0.6
          particle.y -= (dy / distance) * force * 0.6
          particle.targetOpacity = Math.min(1.2, particle.opacity + force * 0.4) // 允许更亮
        } else {
          particle.targetOpacity = Math.random() * 0.6 + 0.4 // 保持更亮的基准
        }

        // 平滑透明度变化
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.08
        // 确保不超过最大值
        particle.opacity = Math.min(particle.opacity, 1.0)

        // 绘制粒子（带发光效果）
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        )
        gradient.addColorStop(0, getParticleColor(particle.hue, particle.opacity))
        gradient.addColorStop(0.5, getParticleColor(particle.hue, particle.opacity * 0.5))
        gradient.addColorStop(1, getParticleColor(particle.hue, 0))
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // 外层光晕（增强发光效果）
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = getParticleColor(particle.hue, particle.opacity * 0.25)
        ctx.fill()

        // 绘制连接线（带渐变）- 优化性能，只检查附近的粒子
        const nearbyParticles = particles.slice(i + 1).filter((otherParticle) => {
          const dx = Math.abs(otherParticle.x - particle.x)
          const dy = Math.abs(otherParticle.y - particle.y)
          return dx < connectionDistance && dy < connectionDistance
        })

        nearbyParticles.forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.7 // 大幅提高连接线亮度
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            )
            lineGradient.addColorStop(0, getParticleColor(particle.hue, opacity))
            lineGradient.addColorStop(1, getParticleColor(otherParticle.hue, opacity))
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1.5 // 进一步增加线宽
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1b3a 30%, #2d1b4d 70%, #1e1b4b 100%)',
        pointerEvents: 'none', // 不阻挡鼠标事件
      }}
    />
  )
}
