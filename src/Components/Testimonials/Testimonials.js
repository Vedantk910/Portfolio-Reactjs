import React from 'react'
import '../Testimonials/Testimonials.css'
import AVT1 from '../../assets/zoro.jpg'
import AVT2 from '../../assets/yami.jpg'
import AVT3 from '../../assets/eren.jpg'
import AVT4 from '../../assets/gintoki.jpg'

  import { Pagination } from 'swiper';
  import {Swiper, SwiperSlide } from 'swiper/react'
  import 'swiper/css';
  import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ronoroa Zoro</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ipsa veritatis ea laborum distinctio est magnam temporibus tempora. Voluptate amet recusandae laboriosam ullam odit vitae necessitatibus esse nam est!
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Sukehiro Yami</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ipsa veritatis ea laborum distinctio est magnam temporibus tempora. Voluptate amet recusandae laboriosam ullam odit vitae necessitatibus esse nam est!
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Eren Yeager</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ipsa veritatis ea laborum distinctio est magnam temporibus tempora. Voluptate amet recusandae laboriosam ullam odit vitae necessitatibus esse nam est!
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Gintoki Sakata</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ipsa veritatis ea laborum distinctio est magnam temporibus tempora. Voluptate amet recusandae laboriosam ullam odit vitae necessitatibus esse nam est!
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials