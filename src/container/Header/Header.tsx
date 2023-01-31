import { Container } from '@mui/material'
import Input from '@mui/material/Input'
import logo from 'assets/logo-icon.svg'

type Props = {}
const Header = (props: Props) => {
  return (
    <header className="header">
      <Container>
        <nav className="navigation">
          <ul>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="logo">
          <div>ArchPress</div>
          <img src={logo} alt="" />
        </div>
        <Input type="search" />
      </Container>
    </header>
  )
}
export default Header
