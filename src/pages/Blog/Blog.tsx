import { useState } from 'react'
import MainArticles from 'components/Articles/MainArticles'
import Categories from 'components/Categories/Categories'
import articlesArray from 'utils/articlesArray'

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

  const [category, setCategory] = useState('all')

  const filterByCategory = (newCategory: string) => {
    setCategory(newCategory)
  }

  const filteredItems = articlesArray.filter((article) =>
    category === 'all' ? true : article.category === category
  )

  return (
    <>
      <Categories
        categories={categories}
        filterByCategory={filterByCategory}
        selectedCategory={category}
      />

      <MainArticles categoryArray={filteredItems} />
    </>
  )
}
export default Blog
