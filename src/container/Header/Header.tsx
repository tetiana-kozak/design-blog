import { Container } from '@mui/material'
import Input from '@mui/material/Input'
import logo from 'assets/logo.svg'
import searchIcon from 'assets/search.svg'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
  return (
    <header className="main-header">
      <Container>
        <div className="main-header-inner">
          <nav className="menu">
            <ul className="menu-list">
              <li className="item">
                <a href="#">Blog</a>
              </li>
              <li className="item">
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="search">
            <Input
              type="search"
              disableUnderline={true}
              placeholder="I'm looking for..."
              className="search-input"
            />
            <img src={searchIcon} alt="" className="search-icon" />
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header
