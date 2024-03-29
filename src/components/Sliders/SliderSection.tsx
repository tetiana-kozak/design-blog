import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import SectionTitle from 'components/Sections/SectionTitle'
import './SliderSection.scss'
import { Link } from 'react-router-dom'

type Props = {
  categoryArray: {
    title: string
    description: string
    category: string
    mainImage: string
    id: number
  }[]
  sectionTitle: string
}

const SliderSection = ({ categoryArray, sectionTitle }: Props) => {
  return (
    <section className="gray-slider-section slider" data-aos="fade-up">
      <SectionTitle sectionTitle={sectionTitle} />

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
      >
        {categoryArray.map(({ title, category, mainImage, id }) => (
          <SwiperSlide key={id}>
            <Link to={`/blog/articles/${id}`}>
              <div className="slider-slide">
                <img src={mainImage} alt="" className="slider-img" />
                <div className="slider-details">
                  <h5>{category}</h5>
                  <h4>{title}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default SliderSection
