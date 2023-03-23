import { Grid } from '@mui/material'
import MainArticle from './MainArticle'

type Props = {
  categoryArray: {
    title: string
    description: string
    category: string
    mainImage: string
    id: number
  }[]
}
const MainArticles = ({ categoryArray }: Props) => {
  return (
    <>
      <section className="main-articles">
        <Grid container spacing={6}>
          {categoryArray.map(
            ({ title, description, category, mainImage, id }) => (
              <Grid item xs={12} sm={12} md={12} key={id}>
                <MainArticle
                  title={title}
                  description={description}
                  category={category}
                  mainImage={mainImage}
                  id={id}
                />
              </Grid>
            )
          )}
        </Grid>
      </section>
    </>
  )
}
export default MainArticles
