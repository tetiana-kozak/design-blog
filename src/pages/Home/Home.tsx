import IntroArticles from 'components/Articles/IntroArticles'
import { Typography } from '@mui/material'

type Props = {}
const Home = (props: Props) => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: 400,
          fontSize: '24px',
          marginBottom: '24px',
        }}
      >
        The Latest
      </Typography>
      <IntroArticles />
    </>
  )
}
export default Home
