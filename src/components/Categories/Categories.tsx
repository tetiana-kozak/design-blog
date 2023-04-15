import './Categories.scss'
import MenuIcon from '@mui/icons-material/Menu'

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
          <li
            key={i}
            className={
              category === selectedCategory
                ? 'filtered-button active'
                : 'filtered-button'
            }
            onClick={() => filterByCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Categories
