import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Footer from 'container/Footer/Footer'
import './App.scss'
import MainRoutes from 'MainRoutes'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchArticles } from 'redux/articlesReducer'
import { fetchTeam } from 'redux/teamReducer'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Props = {}
const App = (props: Props) => {
  useEffect(() => {
    AOS.init()
  }, [])

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
    dispatch(fetchTeam())
  }, [dispatch])

  const favoritesState = useAppSelector((state) => state.favoriteArticles)

  const selectedFavoritesArray = Object.entries(favoritesState).filter(
    ([key, value]) => value === true
  )
  const selectedFavoritesObject = Object.fromEntries(selectedFavoritesArray)

  localStorage.setItem(
    'favoriteArticles',
    JSON.stringify(selectedFavoritesObject)
  )

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="main">
        <Container>
          <MainRoutes />
        </Container>
      </main>
      <Footer />
    </StyledEngineProvider>
  )
}
export default App
