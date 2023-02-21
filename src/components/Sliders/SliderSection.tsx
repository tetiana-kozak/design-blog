import SectionTitle from 'components/Sections/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import './SliderSection.scss'

type Props = {}

const SliderSection = (props: Props) => {
  return (
    <section className="gray-slider-section slider">
      <SectionTitle sectionTitle="Last Launches" />

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={3}
        // centeredSlides={true}
        // loop={true}
      >
        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 1</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 2</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 3</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 4</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 5</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a className="slider-slide" href="#">
            <img
              src="/images/Generative-Art-Collection.jpg"
              alt=""
              className="slider-img"
            />
            <div className="slider-details">
              <a href="#">
                <h5>Commercial 6</h5>
              </a>
              <h4>
                Vigor + Luminosity Embody Armadillo’s New Sistine Rug Collection
              </h4>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default SliderSection
