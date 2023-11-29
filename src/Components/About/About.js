import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUser, FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../About/About.css'
import Aboutme from '../../assets/Aboutme.jpg'

const About = () => {
  return (
    <section id='About'>
    <br />
    <br />


      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container About__container">
        <div className="About__me">
          <div className="About__me-image">
            <img src={Aboutme} alt="About Me Image" />
          </div>
        </div>

        <div className="About__content">
          <div className="About__cards">
            <article className='About__card'>
            <FaAward className='About__icon'/>
              <h5>Experience</h5>
              <small>1+ Month Working</small>
            </article>
            
            <article className='About__card'>
            <FiUser className='About__icon'/>
              <h5>Clients</h5>
              <small>0+ Clients</small>
            </article>

            <article className='About__card'>
            <VscFolderLibrary className='About__icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolore consectetur! Aperiam ab quasi magnam a earum? Quam, nostrum! Maxime illum cumque minima fugiat laboriosam tenetur officia nisi? Doloremque, sed?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        
      </div>
    </section>
  )
}

export default About