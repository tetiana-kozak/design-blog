import { NavLink } from 'react-router-dom'
import './CategoryButton.scss'
import { useAppDispatch } from 'redux/hooks'
import { selectedCategoryState } from 'redux/selectedCategoryReducer'

type Props = {
  category: string
}

const CategoryButton = ({ category }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <NavLink
      to={`/blog/${category.replace(' ', '-')}`}
      onClick={() => dispatch(selectedCategoryState(category))}
      className="category-button"
    >
      <span>{category}</span>
    </NavLink>
  )
}
export default CategoryButton
