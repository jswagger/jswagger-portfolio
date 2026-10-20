import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SectionIndicator from '../components/SectionIndicator'
import Hero from '../features/home/Hero'
import ScrollWords from '../features/home/ScrollWords'
import LanguageStrip from '../features/home/LanguageStrip'
import CaseStudies from '../features/home/CaseStudies'
import About from '../features/home/About'
import Services from '../features/home/Services'
import Experience from '../features/home/Experience'
import Contact from '../features/home/Contact'
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
        <LanguageStrip />
        <CaseStudies />
        <ScrollWords lead="I can" words={capabilityWords} />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
