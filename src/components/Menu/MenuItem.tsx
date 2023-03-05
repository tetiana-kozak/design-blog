import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import './MenuItem.scss'

type Props = {
  to: string
  children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
  return (
    <li>
      <NavLink to={to} className="menu-item">
        {children}{' '}
      </NavLink>
    </li>
  )
}
export default MenuItem
