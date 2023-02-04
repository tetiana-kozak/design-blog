import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
  return (
    <main className="main">
      <Container>
        <Home />
      </Container>
    </main>
  )
}
export default Main
