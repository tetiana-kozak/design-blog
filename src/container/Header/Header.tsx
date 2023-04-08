import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import Search from 'components/Search/Search'
import './Header.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {}
const Header = (props: Props) => {
  return (
    <header className="main-header">
      <Container>
        <div className="main-header__inner">
          <Menu />
          <Logo />
          <div className="main-header__actions">
            <Search />
            <FavoriteIcon className="favorite-icon" />
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header
