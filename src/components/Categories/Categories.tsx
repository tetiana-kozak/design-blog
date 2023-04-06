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
  console.log('selectedCategory', selectedCategory)

  return (
    <nav className="category-navigation">
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
