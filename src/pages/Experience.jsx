import Footer from '../components/Footer'
import CvRows from '../components/CvRows'
import './Pages.css'

const rows = [
  {
    when: 'May — Aug 2026',
    org: 'NoCapCode (Remote)',
    role: 'Frontend Developer Intern',
    text: 'Built and maintained Atlas, a React HR/admin dashboard, and Nexgn-CS, a multi-page company website, adapting layouts for mobile and desktop. Owned frontend deliverables end to end, from implementation to final deployment.',
  },
  {
    when: 'May — Aug 2026',
    org: 'GirlScript Summer of Code',
    role: 'Contributor',
    text: 'Fixed CI failures, built features such as a smart bio system and URL shortener, contributed reusable animation components, and extended test coverage while fixing input sanitization across multiple open-source projects.',
  },
]

function Experience() {
  return (
    <>
      <section className="page">
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
      <Footer />
    </>
  )
}

export default Experience