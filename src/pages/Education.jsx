import Footer from '../components/Footer'
import CvRows from '../components/CvRows'
import './Pages.css'

const rows = [
  {
    when: '2024 — 2028',
    org: 'University of Delhi',
    role: 'B.Tech in Computer Science Engineering',
    text: 'Faculty of Technology, New Delhi. Specialization: Artificial Intelligence & Machine Learning.',
  },
]

function Education() {
  return (
    <>
      <section className="page">
        <div className="eyebrow"><span>01</span><i /><span>Education</span></div>
        <h1 className="display page-title">
          Where I <em>study</em> and what I’m <em>learning</em>
        </h1>
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

export default Education