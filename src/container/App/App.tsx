import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import Blog from 'pages/Blog/Blog'
import AboutUs from 'pages/AboutUs/AboutUs'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import './App.scss'

type Props = {}
const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="main">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog/:id" element={<ArticlePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </StyledEngineProvider>
  )
}
export default App
