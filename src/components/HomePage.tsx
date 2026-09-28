import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import SectionIndicator from './SectionIndicator'
import Hero from './Hero'
import ScrollWords from './ScrollWords'
import CaseStudies from './CaseStudies'
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Contact from './Contact'
import { capabilityWords } from '../data/portfolioContent'

const DEFAULT_TITLE = 'Jeremy Swagger | Senior Software Engineer'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = DEFAULT_TITLE
  }, [])

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <Navbar />
      <SectionIndicator />
      <main id="home">
        <Hero />
        <ScrollWords lead="I can" words={capabilityWords} />
        <CaseStudies />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
