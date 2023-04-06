import MenuItem from './MenuItem'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <MenuItem to="/blog">Blog</MenuItem>
        <MenuItem to="/about-us">About Us</MenuItem>
      </ul>
    </nav>
  )
}
export default Menu
