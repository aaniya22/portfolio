import { useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [tilt, setTilt] = useState(-8);

  const onDown = (e) => {
    const r = badgeRef.current.getBoundingClientRect();
    offset.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onMove = (e) => {
    if (!dragging) return;
    const h = heroRef.current.getBoundingClientRect();
    const b = badgeRef.current;
    const x = Math.min(
      Math.max(e.clientX - h.left - offset.current.x, 0),
      h.width - b.offsetWidth,
    );
    const y = Math.min(
      Math.max(e.clientY - h.top - offset.current.y, 0),
      h.height - b.offsetHeight,
    );
    setPos({ x, y });
    setTilt((x % 20) - 10);
  };

  const badgeStyle = {
    transform: `rotate(${tilt}deg)`,
    ...(pos ? { left: pos.x, top: pos.y, right: "auto" } : {}),
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-top up">
        <span>Portfolio ’26</span>
        <span>
          <i className="dot" />
          Open to internships
        </span>
      </div>

      <h1 className="display hero-title">
        <em>Hi, I’m Aaniya</em>
        <br />a full-stack developer who ships end to end
      </h1>

      <div className="hero-bottom">
        <p>
          From the first component to the live deploy, I build the whole thing.
          Shipped two React products at NoCapCode, merged <b>300+ PRs</b> across{" "}
          <b>38 repos</b>, and ranked <b>#18 of 46,770 contributors</b> at GSSoC
          2026.
        </p>
        <div className="hero-links up">
          <a
            href="https://github.com/aaniya22"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a href="mailto:aaniyaatomar@gmail.com">Get in touch ↗</a>
        </div>
      </div>

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
    </div>
  );
}

export default Hero;
