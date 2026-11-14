import './Sections.css'

const icons = {
  'JavaScript (ES6+)': 'javascript-plain',
  Python: 'python-plain',
  HTML: 'html5-plain',
  CSS: 'css3-plain',
  'React.js': 'react-original',
  Redux: 'redux-original',
  'Next.js': 'nextjs-plain',
  'Tailwind CSS': 'tailwindcss-original',
  'Node.js': 'nodejs-plain',
  'Express.js': 'express-original',
  Flask: 'flask-original',
  MongoDB: 'mongodb-plain',
  Mongoose: 'mongoose-original',
  Git: 'git-plain',
  GitHub: 'github-original',
  'VS Code': 'vscode-plain',
  Postman: 'postman-plain',
  Vercel: 'vercel-original',
}

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
            <p className="chips">
              {g.items.split(', ').map((it) => (
                <span className="chip" key={it}>
                  {icons[it] && <i className={'devicon-' + icons[it] + ' colored'} />}
                  {it}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack