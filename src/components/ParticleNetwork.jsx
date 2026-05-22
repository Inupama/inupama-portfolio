import { useEffect, useRef } from 'react'

const TEAL = { r: 13, g: 124, b: 140 }
const CONNECT_DIST = 120
const MOUSE_RADIUS = 140
const ATTRACT_STRENGTH = 0.035

function createParticle(width, height, isHub) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * (isHub ? 0.35 : 0.5),
    vy: (Math.random() - 0.5) * (isHub ? 0.35 : 0.5),
    isHub,
    radius: isHub ? 4.5 + Math.random() * 1.5 : 2 + Math.random() * 1,
  }
}

function initParticles(count, width, height) {
  const hubCount = Math.min(4, Math.max(3, Math.floor(count * 0.06)))
  const particles = []
  for (let i = 0; i < count; i++) {
    particles.push(createParticle(width, height, i < hubCount))
  }
  return particles
}

export default function ParticleNetwork({ className = '', mobile = false }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0
    let particles = []
    let particleCount = 60
    let running = false

    const getParticleCount = () =>
      window.matchMedia('(max-width: 1023px)').matches ? 30 : 60

    const setup = () => {
      const rect = container.getBoundingClientRect()
      if (rect.width < 4 || rect.height < 4) return false

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const nextCount = getParticleCount()
      if (nextCount !== particleCount || particles.length === 0) {
        particleCount = nextCount
        particles = initParticles(particleCount, width, height)
      }
      return true
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const draw = () => {
      if (width < 4 || height < 4) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current

      particles.forEach((p) => {
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * ATTRACT_STRENGTH
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.vx *= 0.995
        p.vy *= 0.995

        const maxSpeed = p.isHub ? 0.55 : 0.75
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed
          p.vy = (p.vy / speed) * maxSpeed
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x <= p.radius || p.x >= width - p.radius) {
          p.vx *= -1
          p.x = Math.max(p.radius, Math.min(width - p.radius, p.x))
        }
        if (p.y <= p.radius || p.y >= height - p.radius) {
          p.vy *= -1
          p.y = Math.max(p.radius, Math.min(height - p.radius, p.y))
        }
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.55
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${TEAL.r}, ${TEAL.g}, ${TEAL.b}, ${alpha})`
            ctx.lineWidth = a.isHub || b.isHub ? 1.2 : 0.8
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        const glow = p.isHub ? 14 : 8
        const alpha = p.isHub ? 1 : 0.85

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${TEAL.r}, ${TEAL.g}, ${TEAL.b}, ${alpha})`
        ctx.shadowColor = `rgba(${TEAL.r}, ${TEAL.g}, ${TEAL.b}, 0.9)`
        ctx.shadowBlur = glow
        ctx.fill()
        ctx.shadowBlur = 0

        if (p.isHub) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius + 2, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, 0.35)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (setup()) {
        if (!running) {
          running = true
          draw()
        }
      } else {
        requestAnimationFrame(start)
      }
    }

    start()

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const observer = new ResizeObserver(() => {
      const nextCount = getParticleCount()
      if (nextCount !== particleCount) {
        particleCount = nextCount
        particles = initParticles(particleCount, width, height)
      }
      setup()
    })
    observer.observe(container)

    const mq = window.matchMedia('(max-width: 1023px)')
    const onMqChange = () => {
      particleCount = getParticleCount()
      if (width > 0 && height > 0) {
        particles = initParticles(particleCount, width, height)
      }
    }
    mq.addEventListener('change', onMqChange)

    return () => {
      running = false
      cancelAnimationFrame(animationId)
      observer.disconnect()
      mq.removeEventListener('change', onMqChange)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-crosshair"
        aria-hidden
      />
      {!mobile && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(27, 58, 92, 0.45) 0%, transparent 65%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 50%, rgba(27, 58, 92, 0.7) 100%)',
            }}
          />
        </>
      )}
      {mobile && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(27, 58, 92, 0.35) 0%, transparent 30%, transparent 70%, rgba(27, 58, 92, 0.2) 100%)',
          }}
        />
      )}
    </div>
  )
}
