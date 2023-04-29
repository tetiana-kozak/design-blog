import FeaturedArticles from 'components/Articles/FeaturedArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderSection from 'components/Sliders/SliderSection'
import articlesArray from 'utils/articlesArray'
import './Home.scss'
import { Outlet } from 'react-router-dom'

type Props = {}
const Home = (props: Props) => {
  const lastLaunchesArray = articlesArray.filter(
    (article) => article.heading === 'last launches'
  )
  const featuredArray = articlesArray.filter(
    (article) => article.heading === 'featured'
  )
  const popularArray = articlesArray.filter(
    (article) => article.heading === 'popular'
  )
  const regularArray = articlesArray.filter((article) => article.heading === '')

  return (
    <div className="home-page">
      <FeaturedArticles categoryArray={featuredArray} />
      <MainArticles categoryArray={regularArray.slice(0, 4)} />
      <SliderSection
        categoryArray={lastLaunchesArray}
        sectionTitle="Last Launches"
      />
      <MainArticles categoryArray={regularArray.slice(4, 8)} />
      <SliderSection categoryArray={popularArray} sectionTitle="Popular" />
      <MainArticles categoryArray={regularArray.slice(8)} />
    </div>
  )
}
export default Home
