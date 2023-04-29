import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Footer from 'container/Footer/Footer'
import './App.scss'
import MainRoutes from 'MainRoutes'

type Props = {}
const App = (props: Props) => {
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
