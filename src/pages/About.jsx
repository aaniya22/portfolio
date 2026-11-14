import Stack from '../components/Stack'
import './Pages.css'

function About() {
  return (
    <>
      <section className="page" id="about">
        <div className="eyebrow"><span>01</span><i /><span>About me</span></div>
        <h1 className="display page-title">
          I <em>build</em> things that work and <em>ship</em>
        </h1>
        <p className="about-text">
          Full-stack-oriented developer with strong React and JavaScript skills and hands-on
          experience with Node.js, Express and MongoDB. B.Tech CSE student (AI &amp; ML) at the
          University of Delhi, building responsive, user-friendly web applications.
        </p>
        <a className="dl up" href="/Aaniya_Resume.pdf" download>Download resume ↓</a>
      </section>
      <Stack />
    </>
  )
}

export default About