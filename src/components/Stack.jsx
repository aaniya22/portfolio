import './Sections.css'

const groups = [
  { label: 'Languages', items: 'JavaScript (ES6+), Python, HTML, CSS' },
  { label: 'Frontend', items: 'React.js, Redux, Next.js, Tailwind CSS, Flexbox, Grid, Responsive Design' },
  { label: 'Backend', items: 'Node.js, Express.js, Flask, REST APIs, JWT Authentication' },
  { label: 'Database', items: 'MongoDB, Mongoose' },
  { label: 'Tools & Deployment', items: 'Git, GitHub, VS Code, Postman, Vercel, Render' },
  { label: 'Concepts', items: 'JSON, DOM Manipulation, Component-Based Architecture, OOP' },
]

function Stack() {
  return (
    <section className="page">
      <div className="eyebrow"><span>02</span><i /><span>Stack</span></div>
      <div className="rule" />
      <div className="skills">
        {groups.map((g) => (
          <div className="sk" key={g.label}>
            <span className="tag">{g.label}</span>
            <p>{g.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack