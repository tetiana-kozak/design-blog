import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import Search from 'components/Search/Search'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
  return (
    <header className="main-header">
      <Container>
        <div className="main-header-inner">
          <Menu />
          <Logo />
          <Search />
        </div>
      </Container>
    </header>
  )
}
export default Header
