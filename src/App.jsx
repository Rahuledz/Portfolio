import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import CaseStudyPage from './pages/CaseStudyPage'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <HomePage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
      </Routes>
    </div>
  )
}

export default App