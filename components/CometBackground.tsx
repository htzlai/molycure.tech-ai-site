'use client'

import { useEffect, useRef } from 'react'

interface Comet {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  hue: number
  trail: { x: number; y: number; opacity: number }[]
  maxTrailLength: number
  life: number
  maxLife: number
}

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

export default function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const cometsRef = useRef<Comet[]>([])
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1

    // 创建彗星
    const createComet = (width: number, height: number): Comet => {
      const startFromLeft = Math.random() > 0.5
      const speed = 1.5 + Math.random() * 2.5
      
      return {
        x: startFromLeft ? -50 : width + 50,
        y: Math.random() * height * 0.6,
        vx: startFromLeft ? speed : -speed,
        vy: 0.3 + Math.random() * 0.8,
        radius: 2 + Math.random() * 3,
        opacity: 0.7 + Math.random() * 0.3,
        hue: 200 + Math.random() * 60, // 蓝色到紫色
        trail: [],
        maxTrailLength: 30 + Math.floor(Math.random() * 40),
        life: 0,
        maxLife: 300 + Math.random() * 200,
      }
    }

    // 创建星星
    const createStar = (width: number, height: number): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.5 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.7,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      twinklePhase: Math.random() * Math.PI * 2,
    })

    // 初始化
    const init = () => {
      dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      // 创建星星背景
      const starCount = Math.floor((width * height) / 8000)
      starsRef.current = Array.from({ length: starCount }, () => createStar(width, height))

      // 初始彗星
      cometsRef.current = Array.from({ length: 5 }, () => createComet(width, height))
    }

    init()
    window.addEventListener('resize', init)

    // 鼠标追踪
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let frameCount = 0

    // 动画循环
    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      frameCount++

      // 绘制背景渐变
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#0a0a1a')
      gradient.addColorStop(0.3, '#0d1033')
      gradient.addColorStop(0.6, '#1a1040')
      gradient.addColorStop(1, '#0f0a20')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // 绘制星星
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase)
        const currentOpacity = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()

        // 星星光晕
        if (star.radius > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity * 0.2})`
          ctx.fill()
        }
      })

      // 更新和绘制彗星
      cometsRef.current.forEach((comet, index) => {
        comet.life++

        // 更新位置
        comet.x += comet.vx
        comet.y += comet.vy

        // 鼠标交互 - 彗星会被鼠标轻微吸引
        const dx = mouseRef.current.x - comet.x
        const dy = mouseRef.current.y - comet.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02
          comet.vx += (dx / dist) * force
          comet.vy += (dy / dist) * force
        }

        // 添加尾迹点
        comet.trail.unshift({
          x: comet.x,
          y: comet.y,
          opacity: comet.opacity,
        })

        // 限制尾迹长度
        if (comet.trail.length > comet.maxTrailLength) {
          comet.trail.pop()
        }

        // 绘制尾迹
        comet.trail.forEach((point, i) => {
          const trailOpacity = (1 - i / comet.trail.length) * point.opacity * 0.6
          const trailRadius = comet.radius * (1 - i / comet.trail.length * 0.8)

          // 尾迹渐变色
          const hueShift = i * 0.5
          const r = Math.floor(100 + 100 * Math.sin((comet.hue + hueShift) * Math.PI / 180))
          const g = Math.floor(150 + 50 * Math.sin((comet.hue + hueShift + 60) * Math.PI / 180))
          const b = 255

          ctx.beginPath()
          ctx.arc(point.x, point.y, trailRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity})`
          ctx.fill()
        })

        // 绘制彗星头部（发光核心）
        const cometGradient = ctx.createRadialGradient(
          comet.x, comet.y, 0,
          comet.x, comet.y, comet.radius * 4
        )
        cometGradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`)
        cometGradient.addColorStop(0.2, `rgba(180, 200, 255, ${comet.opacity * 0.8})`)
        cometGradient.addColorStop(0.5, `rgba(100, 150, 255, ${comet.opacity * 0.4})`)
        cometGradient.addColorStop(1, 'rgba(50, 100, 200, 0)')

        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = cometGradient
        ctx.fill()

        // 核心亮点
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`
        ctx.fill()

        // 检查是否需要重置彗星
        if (comet.x < -100 || comet.x > width + 100 || 
            comet.y > height + 100 || comet.life > comet.maxLife) {
          cometsRef.current[index] = createComet(width, height)
        }
      })

      // 随机添加新彗星
      if (frameCount % 60 === 0 && cometsRef.current.length < 8 && Math.random() > 0.5) {
        cometsRef.current.push(createComet(width, height))
      }

      // 绘制网格连接线（类似晟烨网站的科技感网格）
      const gridParticles = cometsRef.current.filter(c => c.life > 10)
      gridParticles.forEach((comet, i) => {
        gridParticles.slice(i + 1).forEach((other) => {
          const dx = other.x - comet.x
          const dy = other.y - comet.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 300) {
            const opacity = (1 - dist / 300) * 0.15
            ctx.beginPath()
            ctx.moveTo(comet.x, comet.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(100, 180, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', init)
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
      style={{ pointerEvents: 'none' }}
    />
  )
}
