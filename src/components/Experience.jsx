import './Sections.css'

const experience = [
  {
    when: 'May – Aug 2026',
    title: 'Frontend Developer Intern, NoCapCode (Remote)',
    points: [
      'Built and maintained Atlas and Nexgn-CS in React, adapting layouts for mobile and desktop.',
      'Owned frontend deliverables end to end, from implementation to final deployment.',
    ],
  },
  {
    when: 'May – Aug 2026',
    title: 'Contributor, GirlScript Summer of Code',
    points: ['Global Rank #29 (Top 1%, S Tier), 300+ PRs merged across 38 repositories.'],
  },
  {
    when: '2024 – 2028',
    title: 'B.Tech CSE (AI & ML), Faculty of Technology, University of Delhi',
    points: [],
  },
]

const hackathons = [
  {
    title: 'GeeksforGeeks Hackathon: 5th Position',
    text: 'Built the frontend for an AI-based fraud detection system with teammates.',
  },
  {
    title: 'Smart India Hackathon 2025: Selected at college level',
    text: 'Contributed to frontend development of a digital career guidance platform.',
  },
  {
    title: 'IIT Madras AI Safety Hackathon',
    text: 'Data handling and processing for an Edge AI-based safety system.',
  },
]

function Experience() {
  return (
    <>
      <section id="about">
        <div className="sh">
          <h2>Experience</h2>
          <span className="tag">2026</span>
        </div>
        {experience.map((e) => (
          <div className="tl" key={e.title}>
            <span className="tag">{e.when}</span>
            <div>
              <h4>{e.title}</h4>
              {e.points.length > 0 && (
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="sh">
          <h2>Hackathons</h2>
        </div>
        {hackathons.map((h) => (
          <div className="tl single" key={h.title}>
            <div>
              <h4>{h.title}</h4>
              <ul>
                <li>{h.text}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Experience