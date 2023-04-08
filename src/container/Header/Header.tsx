import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import Search from 'components/Search/Search'
import './Header.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppSelector } from 'redux/hooks'

type Props = {}
const Header = (props: Props) => {
  const favoritesState = useAppSelector((state) => state.favoriteArticles)

  const favoriteArticlesCount = Object.values(favoritesState).filter(
    (value) => value === true
  ).length

  return (
    <header className="main-header">
      <Container>
        <div className="main-header__inner">
          <Menu />
          <Logo />
          <div className="main-header__actions">
            <Search />
            <div className="main-header__favorite-icon">
              <FavoriteIcon className="icon" />
              <span className="counter">{favoriteArticlesCount}</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header
