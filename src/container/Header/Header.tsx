import { Container, Tooltip, Typography } from '@mui/material'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppSelector } from 'redux/hooks'
import { NavLink } from 'react-router-dom'
import Zoom from '@mui/material/Zoom'

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
            <NavLink to={'/favorites'}>
              <Tooltip
                title={<div className="tooltip">Favorites</div>}
                arrow
                TransitionComponent={Zoom}
              >
                <div className="main-header__favorite-icon">
                  <FavoriteIcon className="icon" />
                  <span className="counter">{favoriteArticlesCount}</span>
                </div>
              </Tooltip>
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header
