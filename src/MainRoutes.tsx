import MainArticles from 'components/Articles/MainArticles'
import InnerContent from 'components/InnerContent/InnerContent'
import AboutUs from 'pages/AboutUs/AboutUs'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import Blog from 'pages/Blog/Blog'
import Favorites from 'pages/Favorites/Favorites'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const MainRoutes = (props: Props) => {
  const articlesArray = useAppSelector((state) => state.fetchedArticles)
  const categoryState = useAppSelector((state) => state.selectedCategory)
  const filteredItems = articlesArray.filter((article) =>
    categoryState === 'all' ? true : article.category === categoryState
  )
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />}>
          <Route
            index
            element={<MainArticles categoryArray={filteredItems} />}
          />
          <Route
            path=":category"
            element={<MainArticles categoryArray={filteredItems} />}
          />
        </Route>
        <Route
          path="blog/articles/:id"
          element={<ArticlePage articlesArray={articlesArray} />}
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  )
}
export default MainRoutes
