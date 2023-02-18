import IntroArticles from 'components/Articles/IntroArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderMainPage from 'components/Sliders/SliderMainPage'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
  return (
    <div className="home-page">
      <IntroArticles />
      <MainArticles />
      <SliderMainPage />
    </div>
  )
}
export default Home
