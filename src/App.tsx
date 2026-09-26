import React from 'react'
import './App.css'
import './components/components.css'
import Navbar from './components/Navbar'
import SectionIndicator from './components/SectionIndicator'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <SectionIndicator />
      <main id="home">
        <Hero />
        <CaseStudies />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
