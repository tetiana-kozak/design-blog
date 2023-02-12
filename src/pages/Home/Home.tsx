import IntroArticles from 'components/Articles/IntroArticles'
import MainArticles from 'components/Articles/MainArticles'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
  return (
    <div className='home-page'>
      <IntroArticles />
      <MainArticles />
    </div>
  )
}
export default Home
