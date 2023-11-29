import React from 'react'
import '../Portfolio/Portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="Megaportfolio__container">

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG1} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG2} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG3} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG4} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG5} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        <div className="portfolio__container">
          <div className="project__container">
          <div className="portoflio__container-image">
            <img src={IMG6} alt="" />
          </div>
          <h5>This is a Portfolio item title</h5>
          <a href="" className='btn '>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
            
          </div>
        </div>

        </div>
            
        
    </section>
  )
}

export default Portfolio