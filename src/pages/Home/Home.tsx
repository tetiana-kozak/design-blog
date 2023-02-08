import { Typography } from '@mui/material'
import IntroArticles from 'components/Articles/IntroArticles'
import MainArticles from 'components/Articles/MainArticles'

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
      <MainArticles />
    </>
  )
}
export default Home
