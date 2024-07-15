import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Heromain from '../components/Hero/Heromain'
import Gallery from '../components/Hero/Gallery'
import Footer from '../components/Hero/Footer'
import AboutHorse from '../components/Hero/Abouthorse'

const Hero = () => {
  return (
    <div>
      <Navbar transparent />
      <Heromain />
      <Gallery />
      <AboutHorse />
      <Footer />
    </div>
  )
}

export default Hero
