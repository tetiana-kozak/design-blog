import BlogCategory from 'components/BlogCategory/BlogCategory'
import InnerContent from 'components/InnerContent/InnerContent'
import AboutUs from 'pages/AboutUs/AboutUs'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import Blog from 'pages/Blog/Blog'
import Favorites from 'pages/Favorites/Favorites'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const MainRoutes = (props: Props) => (
  <Routes>
    <Route path="/" element={<InnerContent />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />}>
        {/* <Route index element={<Blog />} /> */}
        <Route path=":category" element={<BlogCategory />} />
      </Route>
      <Route path="blog/:id" element={<ArticlePage />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  </Routes>
)
export default MainRoutes
