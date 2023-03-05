import logo from 'assets/logo.svg'
import { NavLink } from 'react-router-dom'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div>
  )
}
export default Logo
