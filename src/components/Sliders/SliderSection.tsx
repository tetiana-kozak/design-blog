import SectionTitle from 'components/Sections/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import articlesArray from 'utils/articlesArray'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import './SliderSection.scss'

type Props = {}

const SliderSection = (props: Props) => {
  const lastLaunchesArray = articlesArray.filter(
    (article) => article.heading === 'last-launches'
  )

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
        {lastLaunchesArray.map(({ title, category, image, id }) => (
          <SwiperSlide key={id}>
            <a className="slider-slide" href="#">
              <img src={image} alt="" className="slider-img" />
              <div className="slider-details">
                <a href="#">
                  <h5>{category}</h5>
                </a>
                <h4>{title}</h4>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default SliderSection
