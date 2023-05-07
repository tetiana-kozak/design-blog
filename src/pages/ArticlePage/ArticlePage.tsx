import CategoryButton from 'components/Buttons/CategoryButton'
import './ArticlePage.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import author from 'assets/authors/leo-lei.jpg'
import { useParams } from 'react-router-dom'
import FavoriteButton from 'components/FavouriteButton/FavoriteButton'
import DecorativeLine from 'components/Decor/DecorativeLine'
import { Article, getArticlesObject } from 'redux/articlesReducer'

type Props = {
  articlesObject?: {
    [id: number]: Article
  }
  articlesArray: Article[]
}

const ArticlePage = ({
  articlesArray,
  articlesObject = getArticlesObject(articlesArray),
}: Props) => {
  const { id } = useParams()

  const article = articlesObject[parseInt(id!)]

  return (
    <div className="single-article">
      <section className="article-heading">
        <CategoryButton category={article.category} />

        <h1 className="heading-title">{article.title}</h1>

        <DecorativeLine />

        <div className="heading-subtitle">
          <div className="date-and-author">
            {article.date} <span> By {article.author}</span>
          </div>
          <FavoriteButton id={article.id} />
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
          centeredSlides={true}
          loop={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
        >
          {article.images?.map((sliderImage, i) => (
            <SwiperSlide key={i}>
              <div className="slider-slide">
                <img src={sliderImage} alt="" className="slider-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="article-body">
        <p>{article.content![0]}</p>
        <img src={article.images![0]} alt="" />
        {article.content?.slice(1).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {article.images?.slice(1).map((articleImage, i) => (
          <img src={articleImage} alt="" key={i} />
        ))}
        <div className="photographer">
          Photos by <span> {article.photographer} </span>
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
