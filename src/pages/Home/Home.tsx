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
  const featuredArray = articlesArray.filter(
    (article) => article.heading === 'featured'
  )

  console.log('featuredArray', featuredArray)

  return (
    <div className="home-page">
      <FeaturedArticles categoryArray={featuredArray} />
      <MainArticles />
      <SliderSection categoryArray={lastLaunchesArray} />
    </div>
  )
}
export default Home
