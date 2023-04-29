import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
import { useAppDispatch } from 'redux/hooks'
import { selectedCategoryState } from 'redux/selectedCategoryReducer'

type Props = {
  to: string
  children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <li>
      <NavLink
        to={to}
        className="menu-item"
        onClick={() => dispatch(selectedCategoryState('all'))}
      >
        {children}{' '}
      </NavLink>
    </li>
  )
}
export default MenuItem
