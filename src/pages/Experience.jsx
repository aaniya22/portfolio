import CvRows from '../components/CvRows'
import './Pages.css'

const rows = [
  {
    when: 'May — Aug 2026',
    org: 'NoCapCode (Remote)',
    role: 'Frontend Developer Intern',
    bullets: [
      <>Built and maintained <b>Atlas</b>, a React.js HR/admin dashboard (JavaScript, CSS Modules), shipping responsive layout fixes and consolidating search into the shared Navbar for a cleaner UX. Developed <b>Nexgn-CS</b>, a multi-page React company website, refactoring CSS with clamp() and percentage units to improve responsiveness across 5 pages</>,
      <>Built responsive views across <b>Atlas</b> (HR module: sidebar, People mobile cards, hiring pipeline) and <b>Nexgn-CS</b>, adapting layouts for mobile and desktop. Owned frontend deliverables end to end, from implementation to final deployment</>,
    ],
  },
  {
    when: 'May — Aug 2026',
    org: 'GirlScript Summer of Code',
    role: 'Contributor',
    bullets: [
      <>Ranked <b>#29 globally</b> among 47,926 participants (<b>Top 1%</b>, S Tier) and <b>#18</b> among 46,770 contributors; <b>300+ PRs merged</b> across <b>38 repositories</b>; 17 badges earned</>,
      <>Fixed CI failures, built features such as a smart bio system and URL shortener, contributed reusable animation components, and extended test coverage while fixing input sanitization across multiple open-source projects</>,
    ],
  },
]

function Experience() {
  return (
    <>
      <section className="page" id="experience">
        <div className="eyebrow"><span>01</span><i /><span>Experience</span></div>
        <h1 className="display page-title">
          Where I’ve worked and <em>what I’ve helped</em> build.
        </h1>
        <a className="dl up" href="/Aaniya_Resume.pdf" download style={{ display: 'inline-block', marginTop: 28 }}>
          Download resume ↓
        </a>
      </section>
      <section className="page">
        <div className="rule" />
        <div className="cv-list" style={{ marginTop: 0 }}>
          <CvRows rows={rows} />
        </div>
      </section>
    </>
  )
}

export default Experience