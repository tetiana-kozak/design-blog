import FeaturedArticles from 'components/Articles/FeaturedArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderSection from 'components/Sliders/SliderSection'
import './Home.scss'
import { useAppSelector } from 'redux/hooks'

type Props = {}
const Home = (props: Props) => {
  const articlesArray = useAppSelector((state) => state.fetchedArticles)

  const filterArticlesArray = (heading: string) => {
    return articlesArray.filter((article) => article.heading === heading)
  }

  const lastLaunchesArray = filterArticlesArray('last launches')
  const featuredArray = filterArticlesArray('featured')
  const popularArray = filterArticlesArray('popular')
  const regularArray = filterArticlesArray('')

  return (
    <>
      {articlesArray.length === 0 ? (
        <></>
      ) : (
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
      )}
    </>
  )
}
export default Home
