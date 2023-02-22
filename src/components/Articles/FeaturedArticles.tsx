import { Grid } from '@mui/material'
import FeaturedArticle from './FeaturedArticle'

type Props = {}
const FeaturedArticles = (props: Props) => {
  return (
    <>
      <section className="intro-articles">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <FeaturedArticle />
            <FeaturedArticle />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FeaturedArticle />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeaturedArticle />
            <FeaturedArticle />
          </Grid>
        </Grid>
      </section>
    </>
  )
}
export default FeaturedArticles
