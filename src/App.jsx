import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Hackathons from './pages/Hackathons'
import About from './pages/About'

function App() {
  return (
    <div className="wrap">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <Education />
      <Experience />
      <Projects />
      <Hackathons />
      <About />
      <Footer />
    </div>
  )
}

export default App
