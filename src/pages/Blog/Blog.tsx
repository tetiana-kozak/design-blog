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

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  const filteredItems = articlesArray.filter((article) => {
    if (category === 'all') {
      return true
    }
    return article.category === category
  })

  return (
    <>
      <Categories
        categories={categories}
        filterByCategory={handleCategoryChange}
      />

      <MainArticles categoryArray={filteredItems} />
    </>
  )
}
export default Blog
