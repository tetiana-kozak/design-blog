import Categories from 'components/Categories/Categories'
import articlesArray from 'utils/articlesArray'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const Blog = (props: Props) => {
  const categories = [
    'all',
    'art',
    'home furnishing',
    'interrior design',
    'featured',
    'technology',
    'architecture',
    'travel',
    'commercial',
  ]

  const categoryState = useAppSelector((state) => state.selectedCategory)

  const filteredItems = articlesArray.filter((article) =>
    categoryState === 'all' ? true : article.category === categoryState
  )

  return (
    <>
      <Categories categories={categories} />

      {/* <BlogCategory selectedCategory={category} /> */}
      <Outlet />

      {/* <MainArticles categoryArray={filteredItems} /> */}
    </>
  )
}
export default Blog
