import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Footer from 'container/Footer/Footer'
import './App.scss'
import MainRoutes from 'MainRoutes'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchArticles } from 'redux/articlesReducer'

type Props = {}
const App = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

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
