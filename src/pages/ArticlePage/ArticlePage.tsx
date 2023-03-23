import CategoryButton from 'components/Buttons/CategoryButton'
import imageDecor from 'assets/line-decor.svg'
import './ArticlePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import img1 from 'assets/The-Shinola-Hotel/shinolahotel_shinola_1.jpg'
import img2 from 'assets/The-Shinola-Hotel/shinolahotel_shinola_2.jpg'
import img3 from 'assets/The-Shinola-Hotel/shinolahotel_shinola_6.jpg'
import img4 from 'assets/The-Shinola-Hotel/shinolahotel_shinola_14.jpg'
import author from 'assets/authors/leo-lei.jpg'
import ArticlesArray, { Article, getArticlesObject } from 'utils/articlesArray'
import { useParams } from 'react-router-dom'

type Props = {
  articlesObject?: {
    [id: number]: Article
  }
}

const ArticlePage = ({
  articlesObject = getArticlesObject(ArticlesArray),
}: Props) => {
  const { id } = useParams()

  const article = articlesObject[parseInt(id!)]

  return (
    <div className="single-article">
      <section className="article-heading">
        <CategoryButton category="travel" />

        <h1 className="heading-title">{article.title}</h1>

        <div className="decorative-line">
          <div className="center">
            <img src={imageDecor} alt="" />
          </div>
        </div>

        <div className="date-and-author">
          03.05.2023 <span> By Leo Lei</span>
        </div>
      </section>
      <section className="article-slider">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={16}
          loop={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="slider-slide">
              <img src={img1} alt="" className="slider-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide">
              <img src={img2} alt="" className="slider-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide">
              <img src={img3} alt="" className="slider-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide">
              <img src={img4} alt="" className="slider-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="article-body">
        <p>
          Shinola Hotel is a boutique hotel located in Detroit, Michigan, built
          by Shinola and Bedrock. The property boasts 129 rooms and includes
          four food and beverage concepts from award-winning chef, Andrew
          Carmellini. The hotel’s hyper-local design is evident everywhere, from
          ceramic wall tiles and millwork made by local merchants to mini bars
          stocked with local goods and Detroit-designed wallpaper.
        </p>
        <img src={img2} alt="" />
        <p>
          Aiming to be a gathering place for both residents of Detroit and
          tourists, the main living room space offers a warm and inviting
          setting for a meeting over lunch, drinks, or a late-night snack. The
          residential-style guest rooms and suites have hardwood floors and
          comfortable mid-century contemporary furnishings. Loft-style windows
          offer abundant natural light while earthy tones create a relaxing
          ambience.
        </p>
        <p>
          The hotel features an award-winning restaurant, San Morello, serving
          authentic wood-fired cuisine, house-made pastas, and pizzas crafted
          using local, seasonal ingredients. The floor is made of stone and has
          a checkerboard pattern in Rojo Alicante and Crema Ella with inset oak
          and bronze accents.
        </p>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <div className="photographer">
          Photos by <span> Nicole Franzen </span>
        </div>
      </section>
      <section className="article-author">
        <img src={author} alt="" className="author-photo" />

        <div className="author-bio">
          <p>
            Leo Lei translates his passion for minimalism into his daily-updated
            blog Leibal. In addition, you can find uniquely designed minimalist
            objects and furniture at the Leibal Store.
          </p>
        </div>
      </section>
    </div>
  )
}
export default ArticlePage
