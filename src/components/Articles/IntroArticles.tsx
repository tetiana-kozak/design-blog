import { Grid } from '@mui/material'
import IntroArticle from './IntroArticle'

type Props = {}
const IntroArticles = (props: Props) => {
  return (
    <>
      <section className="intro-articles">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <IntroArticle />
            <IntroArticle />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <IntroArticle />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <IntroArticle />
            <IntroArticle />
          </Grid>
        </Grid>
      </section>
    </>
  )
}
export default IntroArticles
