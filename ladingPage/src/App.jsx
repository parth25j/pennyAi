import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
     <Navbar/>
     <Hero/>
     <Features/>
     <WorkFlow/>
     <Pricing/>
     <Testimonials/>
     <Footer/>
   </>
  )
}

export default App