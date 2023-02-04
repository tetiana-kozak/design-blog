import Header from '../Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}
const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Main />
    </StyledEngineProvider>
  )
}
export default App
