import IntroArticles from 'components/Articles/IntroArticles'
import MainArticles from 'components/Articles/MainArticles'
import SliderSection from 'components/Sliders/SliderSection'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
  return (
    <div className="home-page">
      <IntroArticles />
      <MainArticles />
      <SliderSection />
    </div>
  )
}
export default Home
