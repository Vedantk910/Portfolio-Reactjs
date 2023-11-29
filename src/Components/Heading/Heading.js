import React from 'react'
import CTA from './CTA'
import Me from '../../assets/me.png'
import Headingsocials from './Headingsocials'
import './Heading.css'

const Heading = () => {
  return (
    <>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Vedant Konde</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <Headingsocials /> 
            <div className="me">
              <img src={Me} alt="" /> 

              
            </div>
            <a href="#Contact" className="scroll__down">Scroll Down</a>
        </div>
    </>
  )
}

export default Heading    