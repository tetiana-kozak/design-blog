import { Grid } from '@mui/material'
import MainArticle from './MainArticle'
import articlesArray from 'utils/articlesArray'

type Props = {}
const MainArticles = (props: Props) => {
  return (
    <>
      <section className="Main-articles">
        <Grid container spacing={6}>
          {articlesArray.map(({ title, description, category }) => (
            <Grid item xs={12} sm={6} md={6}>
              <MainArticle
                title={title}
                description={description}
                category={category}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  )
}
export default MainArticles
