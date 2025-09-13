import React from 'react'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Research from './components/Research'
import Books from './components/Books'
import Lectures from './components/Lectures'
import Consultancy from './components/Consultancy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection />
      <Education />
      <Experience />
      <Lectures />
      <Books />
      <Research />
      <Skills />
      <Achievements />
      <Consultancy/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage
