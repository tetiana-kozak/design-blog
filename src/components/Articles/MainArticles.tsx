import { Grid } from '@mui/material'
import MainArticle from './MainArticle'
import articlesArray from 'utils/articlesArray'

type Props = {}
const MainArticles = (props: Props) => {
  return (
    <>
      <section className="main-articles">
        <Grid container spacing={6}>
          {articlesArray.map(({ title, description, category, image, id }) => (
            <Grid item xs={12} sm={12} md={12} key={id}>
              <MainArticle
                title={title}
                description={description}
                category={category}
                image={image}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  )
}
export default MainArticles
