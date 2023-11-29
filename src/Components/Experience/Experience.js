import React from 'react'
import '../Experience/Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container Experience__container">
        <div className="Experience__Frontend">
          <h3>Frontend Development</h3>
          <div className="Experience__Content">
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>  CSS</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>Reactjs</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>ThreeJS</h4>
            <small className="text-light">3 Months</small>
            </div>
            </article>
          </div>
        </div>
        {/* ===================End of Frontend ============================ */}
        <div className="Experience Backend">
          <h3>Backend Development</h3>
          <div className="Experience__Content">
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>NodeJs</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>PHP</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>Java</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>Python</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
            <article className='Experience__Details'>
            <BsPatchCheckFill className="Experience__Details-Icon"/>
            <div>
            <h4>Git</h4>
            <small className="text-light">Learning Phase</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience