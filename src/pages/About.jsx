import Footer from '../components/Footer'
import Stack from '../components/Stack'
import './Pages.css'

const cv = [
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
    text: 'Ranked #29 globally among 47,926 participants (Top 1%, S Tier) and #18 among 46,770 contributors, with 300+ PRs merged across 38 repositories and 17 badges earned.',
  },
  {
    when: '2024 — 2028',
    org: 'University of Delhi',
    role: 'B.Tech CSE (AI & ML)',
    text: 'Faculty of Technology, New Delhi. Specialization: Artificial Intelligence & Machine Learning.',
  },
]

const hacks = [
  {
    when: 'Hackathon',
    org: 'GeeksforGeeks Hackathon',
    role: '5th Position',
    text: 'Built the frontend for an AI-based fraud detection system with teammates.',
  },
  {
    when: '2025',
    org: 'Smart India Hackathon (SIH)',
    role: 'Selected at college level',
    text: 'Contributed to frontend development of a digital career guidance platform.',
  },
  {
    when: 'Hackathon',
    org: 'IIT Madras AI Safety Hackathon',
    role: '',
    text: 'Data handling and processing for an Edge AI-based safety system.',
  },
]

function CvRows({ rows }) {
  return rows.map((r) => (
    <div className="cv-row" key={r.org}>
      <span className="when">{r.when}</span>
      <div>
        <h4>{r.org}</h4>
        {r.role && <div className="role">{r.role}</div>}
      </div>
      <p>{r.text}</p>
    </div>
  ))
}

function About() {
  return (
    <>
      <section className="page">
        <div className="eyebrow"><span>01</span><i /><span>About me</span></div>
        <h1 className="display page-title">
          I <em>build</em> things that work and <em>ship</em>
        </h1>
      </section>

      <section className="page">
        <div className="eyebrow"><span>02</span><i /><span>Curriculum vitae</span></div>
        <div className="rule" />
        <div className="cv-head">
          <h2 className="display cv-title">
            Where I’ve worked and <em>what I’ve helped</em> build.
          </h2>
          <a className="dl up" href="/Aaniya_Resume.pdf" download>Download resume ↓</a>
        </div>
        <div className="cv-list">
          <CvRows rows={cv} />
        </div>
      </section>

      <section className="page">
        <div className="eyebrow"><span>03</span><i /><span>Hackathons</span></div>
        <div className="rule" />
        <div className="cv-list">
          <CvRows rows={hacks} />
        </div>
      </section>

      <Stack />
      <Footer />
    </>
  )
}

export default About