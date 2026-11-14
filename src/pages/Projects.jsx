import Footer from '../components/Footer'
import './Pages.css'

const items = [
  {
    title: 'CineList: Movie & TV Watchlist',
    text: 'Full-stack tracker with JWT authentication, private MongoDB watchlists, a TMDB backend proxy and a stats dashboard.',
    cat: 'Full-stack',
    meta: 'React · Node · MongoDB',
    href: 'https://github.com/aaniya22/cinelist',
  },
  {
    title: 'Atlas: HR/admin dashboard',
    text: 'React dashboard built during the NoCapCode internship: responsive sidebar, People mobile cards, hiring pipeline and search in the shared Navbar.',
    cat: 'Frontend · Internship',
    meta: 'React · CSS Modules',
  },
  {
    title: 'GSSoC 2026: Rank #29 of 47,926',
    text: '300+ PRs merged across 38 repositories, including CI fixes, a smart bio system, a URL shortener and reusable animation components.',
    cat: 'Open source',
    meta: 'Top 1% · S Tier',
    href: 'https://github.com/aaniya22',
  },
  {
    title: 'Nexgn-CS',
    text: 'Multi-page React company website, refactored with clamp() and percentage units for responsiveness across 5 pages.',
    cat: 'Frontend · Internship',
    meta: 'React · CSS',
  },
  {
    title: 'Weather App',
    text: 'Responsive React app using the OpenWeather API for real-time conditions in any city, with error handling for invalid names.',
    cat: 'Frontend',
    meta: 'React · OpenWeather',
    href: 'https://github.com/aaniya22',
  },
]

function Row({ item, i }) {
  const inner = (
    <>
      <span className="idx up">P.0{i + 1}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <span className="cat">{item.cat}</span>
      <span className="meta">{item.meta}</span>
      <span className="arr">{item.href ? '↗' : ''}</span>
    </>
  )
  return item.href ? (
    <a className="row" href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <div className="row">{inner}</div>
  )
}

function Projects() {
  return (
    <>
      <section className="page">
        <div className="eyebrow"><span>01</span><i /><span>Projects</span></div>
        <h1 className="display page-title">
          Selected work across <em>apps, dashboards,</em> and open source
        </h1>
      </section>

      <section className="page">
        <div className="eyebrow"><span>02</span><i /><span>Selected</span></div>
        <div className="rule" />
        {items.map((it, i) => <Row key={it.title} item={it} i={i} />)}
      </section>

      <Footer />
    </>
  )
}

export default Projects