import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="wrap">
      <Nav />
      <main id="top">
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App