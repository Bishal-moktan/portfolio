import './testinomials.css'
import client1 from "../../assets/avatar1.jpg"
import client2 from "../../assets/avatar2.jpg"
import client3 from "../../assets/avatar3.jpg"
import client4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testinomial = () => {
  const testinomials = [
    {
      name: "Ernest Achiever",
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam ratione dolorem nulla similique quisquam voluptate impedit illo sequi. Eveniet ex adipisci alias voluptatum. Velit suscipit omnis sint nesciunt iure?",
      img: client1
    },
    {
      name: "Ernest Achiever",
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam ratione dolorem nulla similique quisquam voluptate impedit illo sequi. Eveniet ex adipisci alias voluptatum. Velit suscipit omnis sint nesciunt iure?",
      img: client2
    },
    {
      name: "Ernest Achiever",
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam ratione dolorem nulla similique quisquam voluptate impedit illo sequi. Eveniet ex adipisci alias voluptatum. Velit suscipit omnis sint nesciunt iure?",
      img: client3
    },
    {
      name: "Ernest Achiever",
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam ratione dolorem nulla similique quisquam voluptate impedit illo sequi. Eveniet ex adipisci alias voluptatum. Velit suscipit omnis sint nesciunt iure?",
      img: client4
    },
  ]
  return (
    <section id='testinomials'>
      <h5>Reviews from clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testinomials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      {testinomials.map((item, index) => {
        const {name, review, img} = item
      return  <SwiperSlide className='testinomial' key={index}>
          <div className="client__avatar">
            <img src={img} alt={name} />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
      })}
      </Swiper>
    </section>
  )
}
export default Testinomial