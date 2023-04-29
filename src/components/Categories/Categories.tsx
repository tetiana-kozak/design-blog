import { NavLink } from 'react-router-dom'
import './Categories.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectedCategoryState } from 'redux/selectedCategoryReducer'

type Props = {
  categories: string[]
}

const Categories = ({ categories }: Props) => {
  const categoryState = useAppSelector((state) => state.selectedCategory)
  const dispatch = useAppDispatch()
  return (
    <nav className="category-navigation scroll-inner">
      <ul className="category-list">
        {categories.map((category, i) => (
          <NavLink to={`/blog/${category}`} key={i}>
            <div
              className={
                category === categoryState
                  ? 'filtered-button active'
                  : 'filtered-button'
              }
              onClick={() => dispatch(selectedCategoryState(category))}
            >
              {category}
            </div>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
export default Categories
