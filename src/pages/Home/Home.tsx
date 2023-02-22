import FeaturedArticles from 'components/Articles/FeaturedArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderSection from 'components/Sliders/SliderSection'
import articlesArray from 'utils/articlesArray'
import './Home.scss'

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

  console.log('featuredArray', featuredArray)

  return (
    <div className="home-page">
      <FeaturedArticles categoryArray={featuredArray} />
      <MainArticles categoryArray={regularArray} />
      <SliderSection
        categoryArray={lastLaunchesArray}
        sectionTitle="Last Launches"
      />
      <SliderSection categoryArray={popularArray} sectionTitle="Popular" />
    </div>
  )
}
export default Home
