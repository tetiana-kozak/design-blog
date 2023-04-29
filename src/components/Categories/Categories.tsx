import { NavLink } from 'react-router-dom'
import './Categories.scss'

type Props = {
  categories: string[]
  filterByCategory: (category: string) => void
  selectedCategory: string
}

const Categories = ({
  categories,
  filterByCategory,
  selectedCategory,
}: Props) => {
  return (
    <nav className="category-navigation scroll-inner">
      <ul className="category-list">
        {categories.map((category, i) => (
          <NavLink to={`/blog/${category}`} key={i}>
            <li
              // key={i}
              className={
                category === selectedCategory
                  ? 'filtered-button active'
                  : 'filtered-button'
              }
              onClick={() => filterByCategory(category)}
            >
              {category}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
export default Categories
