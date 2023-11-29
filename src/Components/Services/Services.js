import React from 'react'
import '../Services/Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="Container Services__Container">
        <article className="Services">
          <div className="Services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="Services__list">
            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* ============================End Of UI/UX================================= */}

        <article className="Services">
          <div className="Services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="Services__list">
            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* ===========================End Of Web Dev================================= */}


        <article className="Services">
          <div className="Services__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="Services__list">
            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className ="Services__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>





      </div>
    </section>
  )
}

export default Services