import { Grid } from '@mui/material'
import FeaturedArticle from './FeaturedArticle'

type Props = {
  categoryArray: {
    title: string
    description: string
    category: string
    mainImage: string
    id: number
  }[]
}
const FeaturedArticles = ({ categoryArray }: Props) => {
  return (
    <>
      <section className="intro-articles">
        <Grid container spacing={4}>
          <Grid item sm={3}>
            <FeaturedArticle categoryArrayItem={categoryArray[0]} />
            <FeaturedArticle categoryArrayItem={categoryArray[1]} />
          </Grid>
          <Grid item sm={6}>
            <FeaturedArticle categoryArrayItem={categoryArray[2]} />
          </Grid>
          <Grid item sm={3}>
            <FeaturedArticle categoryArrayItem={categoryArray[3]} />
            <FeaturedArticle categoryArrayItem={categoryArray[4]} />
          </Grid>
        </Grid>
      </section>
    </>
  )
}
export default FeaturedArticles
