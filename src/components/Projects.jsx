import './Projects.css'

const cases = [
  {
    label: '01 — Featured case',
    title: 'CineList: Movie & TV Watchlist',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TMDB API'],
    points: [
      'Full-stack movie and TV tracker with JWT authentication, so each user has a private watchlist stored in MongoDB.',
      'TMDB API integrated through a backend proxy for search, detail pages (cast, runtime, genres) and “where to watch” streaming links.',
      'Star ratings, separate Watchlist / Unwatched / Watched pages and a stats dashboard. Frontend on Vercel, API on Render.',
    ],
    links: [
      { text: 'GitHub ↗', href: 'https://github.com/aaniya22/cinelist' },
      { text: 'Live ↗', href: '#' }, // TODO: put your live CineList URL here
    ],
    visual: 'cinelist',
  },
  {
    label: '02 — NoCapCode internship',
    title: 'Atlas: HR/admin dashboard',
    stack: ['React.js', 'JavaScript', 'CSS Modules'],
    points: [
      'Built and maintained a React HR/admin dashboard, shipping responsive layout fixes.',
      'Consolidated search into the shared Navbar for a cleaner UX.',
      'Responsive HR module views: sidebar, People mobile cards and hiring pipeline.',
    ],
    note: 'Frontend Developer Intern · May–Aug 2026',
    visual: 'atlas',
  },
  {
    label: '03 — Open source',
    title: 'GSSoC 2026: Rank #29 of 47,926',
    stack: ['GitHub', 'CI', 'Testing'],
    points: [
      'Ranked #29 globally (Top 1%, S Tier) and #18 among 46,770 contributors; 300+ PRs merged across 38 repositories; 17 badges.',
      'Fixed CI failures and built features such as a smart bio system and a URL shortener.',
      'Contributed reusable animation components, extended test coverage and fixed input sanitization across projects.',
    ],
    links: [{ text: 'GitHub ↗', href: 'https://github.com/aaniya22' }],
    visual: 'gssoc',
  },
]

const small = [
  {
    label: '04 — NoCapCode',
    title: 'Nexgn-CS',
    text: 'Multi-page React company website. Refactored CSS with clamp() and percentage units to improve responsiveness across 5 pages.',
    stack: ['React', 'CSS'],
  },
  {
    label: '05 — Side project',
    title: 'Weather App',
    text: 'Responsive React app calling the OpenWeather REST API: search any city for temperature, humidity, wind speed and conditions, with error handling for invalid names. Deployed on Vercel.',
    stack: ['React', 'OpenWeather API'],
    links: [{ text: 'GitHub ↗', href: 'https://github.com/aaniya22' }],
  },
]

function Visual({ type }) {
  if (type === 'cinelist') {
    return (
      <div className="shot" aria-hidden="true">
        <div className="mono dim">cinelist / stats</div>
        <div className="grid3"><i /><i /><i /></div>
        <div className="row"><div className="dot" /><div className="grow"><div className="bar w60" /><div className="bar w35" /></div><span>★ 4.5</span></div>
        <div className="row"><div className="dot blue" /><div className="grow"><div className="bar w70" /><div className="bar w40" /></div><span>★ 4.0</span></div>
        <div className="row"><div className="dot green" /><div className="grow"><div className="bar w50" /><div className="bar w30" /></div><span>Watched</span></div>
      </div>
    )
  }
  if (type === 'atlas') {
    return (
      <div className="shot" aria-hidden="true">
        <div className="mono dim">atlas / hr / pipeline</div>
        <div className="atlas">
          <div><div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" /></div>
          <div className="grid3 tall"><i /><i /><i /></div>
        </div>
      </div>
    )
  }
  return (
    <div className="shot" aria-hidden="true">
      <div className="mono dim">git log --merged</div>
      <div className="bignum">300+</div>
      <div className="tag dim">pull requests merged</div>
    </div>
  )
}

function Projects() {
  return (
    <section id="work">
      <div className="sh">
        <h2>Selected work</h2>
        <span className="tag">01 — 05</span>
      </div>

      {cases.map((c) => (
        <article className="case" key={c.title}>
          <div>
            <span className="tag">{c.label}</span>
            <h3>{c.title}</h3>
            {c.stack.map((s) => <span className="pill" key={s}>{s}</span>)}
            <ul>
              {c.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {c.links?.map((l) => (
              <a className="link" key={l.text} href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a>
            ))}
            {c.note && <span className="tag">{c.note}</span>}
          </div>
          <Visual type={c.visual} />
        </article>
      ))}

      <div className="two">
        {small.map((s) => (
          <div className="card" key={s.title}>
            <span className="tag">{s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.stack.map((t) => <span className="pill" key={t}>{t}</span>)}
            {s.links?.map((l) => (
              <div key={l.text}>
                <a className="link" href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects