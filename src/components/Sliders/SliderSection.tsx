import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import SectionTitle from 'components/Sections/SectionTitle'
import './SliderSection.scss'

type Props = {
  categoryArray: {
    title: string
    description: string
    category: string
    image: string
    id: number
  }[]
  sectionTitle: string
}

const SliderSection = ({ categoryArray, sectionTitle }: Props) => {
  return (
    <section className="gray-slider-section slider">
      <SectionTitle sectionTitle={sectionTitle} />

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={3}
      >
        {categoryArray.map(({ title, category, image, id }) => (
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
