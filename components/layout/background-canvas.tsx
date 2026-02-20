'use client'

import { useEffect, useRef } from 'react'

interface Bird {
  x: number
  y: number
  speed: number
  size: number
  wingPhase: number
  wingSpeed: number
  wobble: number
  alpha: number
}

interface Star {
  x: number
  y: number
  r: number
  a: number
  p: number
  ps: number
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, time = 0
    let birds: Bird[] = []
    let stars: Star[] = []
    let mouseX = -1000, mouseY = -1000
    let animId: number

    const topoCanvas = document.createElement('canvas')
    const topoCtx = topoCanvas.getContext('2d')!

    const isMobile = window.innerWidth < 800

    // Topo pulse: applied when drawing offscreen topo to main canvas (one globalAlpha per frame)
    const TOPO_PULSE_MIN = 0.08
    const TOPO_PULSE_MAX = 0.22
    const getTopoPulseSpeed = () => (window.innerWidth < 800 ? 0.004 : 0.006)

    // ── noise ──
    function noise(x: number, y: number) {
      const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
      return n - Math.floor(n)
    }

    function smoothNoise(x: number, y: number) {
      const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy
      const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy)
      const a = noise(ix, iy), b = noise(ix + 1, iy)
      const c = noise(ix, iy + 1), d = noise(ix + 1, iy + 1)
      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy
    }

    function fbm(x: number, y: number) {
      let v = 0, a = 0.5, f = 1
      const octaves = isMobile ? 3 : 4
      for (let i = 0; i < octaves; i++) {
        v += a * smoothNoise(x * f, y * f)
        a *= 0.5; f *= 2
      }
      return v
    }

    // ── topo: render once to offscreen canvas ──
    function renderTopo() {
      const scale = 0.002, drift = 0
      const levels = isMobile ? 10 : 16
      const res = isMobile ? 8 : 5

      topoCtx.clearRect(0, 0, w, h)

      for (let level = 0; level < levels; level++) {
        const threshold = level / levels
        topoCtx.lineWidth = 0.5 + (level / levels) * 0.8
        topoCtx.strokeStyle = 'rgba(255,255,255,1)'
        topoCtx.beginPath()
        for (let x = 0; x < w; x += res) {
          for (let y = 0; y < h; y += res) {
            const v = fbm(x * scale + drift, y * scale + drift * 0.7)
            const vr = fbm((x + res) * scale + drift, y * scale + drift * 0.7)
            const vb = fbm(x * scale + drift, (y + res) * scale + drift * 0.7)
            if ((v < threshold) !== (vr < threshold)) {
              const t = (threshold - v) / (vr - v)
              topoCtx.moveTo(x + t * res, y)
              topoCtx.lineTo(x + t * res + 1.5, y + 1.5)
            }
            if ((v < threshold) !== (vb < threshold)) {
              const t = (threshold - v) / (vb - v)
              topoCtx.moveTo(x, y + t * res)
              topoCtx.lineTo(x + 1.5, y + t * res + 1.5)
            }
          }
        }
        topoCtx.stroke()
      }
    }

    // ── birds ──
    function createBird(spread: boolean): Bird {
      return {
        x: spread ? Math.random() * w : -50 - Math.random() * 300,
        y: Math.random() * h * 0.6 + h * 0.05,
        speed: 0.6 + Math.random() * 1.2,
        size: 6 + Math.random() * 10,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.06 + Math.random() * 0.04,
        wobble: Math.random() * 0.4 - 0.2,
        alpha: 0.25 + Math.random() * 0.35,
      }
    }

    function resetBird(b: Bird) {
      b.x = -80 - Math.random() * 400
      b.y = Math.random() * h * 0.6 + h * 0.05
      b.speed = 0.6 + Math.random() * 1.2
      b.alpha = 0.25 + Math.random() * 0.35
    }

    function updateBird(b: Bird) {
      b.x += b.speed
      b.y += Math.sin(time * 0.008 + b.wingPhase * 3) * b.wobble
      b.wingPhase += b.wingSpeed

      // curve around mouse
      const dx = b.x - mouseX
      const dy = b.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = 150
      if (dist < radius && dist > 0) {
        const force = (1 - dist / radius) * 2.5
        b.y += (dy / dist) * force
        b.x += force * 0.3
        b.wingPhase += 0.03
      }

      if (b.x > w + 80) resetBird(b)
    }

    function drawBird(b: Bird) {
      const wing = Math.sin(b.wingPhase) * b.size * 0.65, s = b.size
      ctx.save()
      ctx.translate(b.x, b.y)
      ctx.strokeStyle = `rgba(255,255,255,${b.alpha})`
      ctx.lineWidth = 1.2
      ctx.lineCap = 'round'
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-s * 0.5, wing * 0.6, -s, wing); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(s * 0.5, wing * 0.6, s, wing); ctx.stroke()
      ctx.restore()
    }

    // ── stars ──
    function initStars() {
      stars = []
      const count = isMobile ? 50 : 120
      for (let i = 0; i < count; i++) stars.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.4 + 0.2, a: 0.1 + Math.random() * 0.4,
        p: Math.random() * Math.PI * 2, ps: 0.003 + Math.random() * 0.01,
      })
    }

    function drawStars() {
      stars.forEach(s => {
        s.p += s.ps
        ctx.fillStyle = `rgba(255,255,255,${s.a * (0.4 + 0.6 * Math.sin(s.p))})`
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill()
      })
    }

    function initBirds() {
      birds = []
      const n = isMobile ? 4 : Math.max(8, Math.floor(w / 100))
      for (let i = 0; i < n; i++) birds.push(createBird(true))
    }

    // ── resize ──
    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      topoCanvas.width = w
      topoCanvas.height = h
    }

    // ── frame ──
    function frame() {
      time++
      ctx.clearRect(0, 0, w, h)

      const g = ctx.createRadialGradient(w * 0.35, h * 0.35, 0, w * 0.5, h * 0.5, w * 0.7)
      g.addColorStop(0, '#080808')
      g.addColorStop(1, '#000000')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      drawStars()
      const topoPulse = TOPO_PULSE_MIN + (TOPO_PULSE_MAX - TOPO_PULSE_MIN) * (0.5 + 0.5 * Math.sin(time * getTopoPulseSpeed()))
      ctx.globalAlpha = topoPulse
      ctx.drawImage(topoCanvas, 0, 0)
      ctx.globalAlpha = 1
      birds.forEach(b => { updateBird(b); drawBird(b) })

      animId = requestAnimationFrame(frame)
    }

    // ── event listeners ──
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
    const onMouseLeave = () => { mouseX = -1000; mouseY = -1000 }
    const onResize = () => { resize(); renderTopo(); initBirds(); initStars() }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)

    // ── init ──
    resize()
    renderTopo()
    initBirds()
    initStars()
    frame()

    // ── cleanup ──
    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="world"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  )
}
