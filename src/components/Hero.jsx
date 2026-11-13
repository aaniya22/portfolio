import { useRef, useState } from 'react'
import './Hero.css'

const stats = [
  { value: 'Top 1%', label: 'GSSoC 2026, S Tier' },
  { value: '300+', label: 'PRs merged' },
  { value: '38', label: 'Repositories' },
  { value: '17', label: 'Badges earned' },
]

function Hero() {
  const heroRef = useRef(null)
  const badgeRef = useRef(null)
  const offset = useRef({ x: 0, y: 0 })
  const [pos, setPos] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [tilt, setTilt] = useState(-8)

  const onDown = (e) => {
    const r = badgeRef.current.getBoundingClientRect()
    offset.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onMove = (e) => {
    if (!dragging) return
    const h = heroRef.current.getBoundingClientRect()
    const b = badgeRef.current
    const x = Math.min(Math.max(e.clientX - h.left - offset.current.x, 0), h.width - b.offsetWidth)
    const y = Math.min(Math.max(e.clientY - h.top - offset.current.y, 0), h.height - b.offsetHeight)
    setPos({ x, y })
    setTilt((x % 20) - 10)
  }

  const badgeStyle = {
    transform: `rotate(${tilt}deg)`,
    ...(pos ? { left: pos.x, top: pos.y, right: 'auto' } : {}),
  }

  return (
    <div className="hero" ref={heroRef}>
      <div className="tag">
        Portfolio ’26 &nbsp;·&nbsp; <span className="open">● Open to internships</span>
      </div>

      <h1>
        Full-stack apps that <em>ship.</em>
      </h1>

      <p className="lede">
        Full-stack-oriented developer with strong <b>React</b> and <b>JavaScript</b> skills and
        hands-on experience with <b>Node.js, Express and MongoDB</b>. B.Tech CSE (AI &amp; ML),
        University of Delhi, 2024–2028.
      </p>

      <div
        className="badge"
        ref={badgeRef}
        style={badgeStyle}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={() => setDragging(false)}
        title="Drag me"
      >
        <span>#29</span>
        <small>GSSoC ’26 · Global</small>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span className="tag">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero