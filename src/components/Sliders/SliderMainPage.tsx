import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import './SliderMainPage.scss'

type Props = {}

const SliderMainPage = (props: Props) => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
    </div>
  )
}
export default SliderMainPage
