import './Categories.scss'

type Props = {
  categories: string[]
  filterByCategory: (category: string) => void
}

const Categories = ({ categories, filterByCategory }: Props) => {
  return (
    <nav className="category-navigation">
      <ul className="category-list">
        {categories.map((category, i) => (
          <li key={i} onClick={() => filterByCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Categories
