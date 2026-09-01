import React from 'react'
import './App.css'
import './components/components.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
