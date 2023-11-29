import React from 'react'
import Heading from './Components/Heading/Heading'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Portfolio from './Components/Portfolio/Portfolio'


const App = () => {
  return ( <>
    <Heading/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App