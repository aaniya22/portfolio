import CvRows from '../components/CvRows'
import './Pages.css'

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

const wins = [
  {
    when: '2026',
    org: 'GSSoC 2026 Global Rank #29',
    role: 'Top 1%, S Tier',
    text: 'Ranked #29 among 47,926 participants and #18 among 46,770 contributors.',
  },
  {
    when: '2026',
    org: '300+ PRs merged',
    role: '38 repositories',
    text: '17 badges earned across open-source projects during GirlScript Summer of Code 2026.',
  },
]

function Hackathons() {
  return (
    <>
      <section className="page" id="hackathons">
        <div className="eyebrow"><span>01</span><i /><span>Hackathons &amp; achievements</span></div>
        <h1 className="display page-title">
          Built under pressure, <em>ranked</em> in the open.
        </h1>
      </section>
      <section className="page">
        <div className="eyebrow"><span>02</span><i /><span>Hackathons</span></div>
        <div className="rule" />
        <div className="cv-list" style={{ marginTop: 24 }}>
          <CvRows rows={hacks} />
        </div>
      </section>
      <section className="page">
        <div className="eyebrow"><span>03</span><i /><span>Achievements</span></div>
        <div className="rule" />
        <div className="cv-list" style={{ marginTop: 24 }}>
          <CvRows rows={wins} />
        </div>
      </section>
    </>
  )
}

export default Hackathons