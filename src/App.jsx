import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrap">
      <Nav />
      <main id="top">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}

export default App