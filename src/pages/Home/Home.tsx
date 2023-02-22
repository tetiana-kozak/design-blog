import FeaturedArticles from 'components/Articles/FeaturedArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderSection from 'components/Sliders/SliderSection'
import articlesArray from 'utils/articlesArray'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
  const lastLaunchesArray = articlesArray.filter(
    (article) => article.heading === 'last-launches'
  )
  return (
    <div className="home-page">
      <FeaturedArticles />
      <MainArticles />
      <SliderSection categoryArray={lastLaunchesArray} />
    </div>
  )
}
export default Home
