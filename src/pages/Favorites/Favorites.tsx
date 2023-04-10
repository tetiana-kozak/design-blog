import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import ArticlesArray, { getArticlesObject } from 'utils/articlesArray'
import './Favorites.scss'
import SectionTitle from 'components/Sections/SectionTitle'
import { Link } from 'react-router-dom'

type Props = {}
const Favorites = (props: Props) => {
  const favoritesState = useAppSelector((state) => state.favoriteArticles)

  const filteredArray = ArticlesArray.filter(
    (article) => favoritesState[article.id]
  )

  return (
    <>
      <SectionTitle sectionTitle="Favorite articles" />
      <Grid container spacing={6}>
        {filteredArray.map((article) => (
          <Grid item sm={12} md={6} lg={4} key={article.id}>
            <Link to={`/blog/${article.id}`}>
              <Card className="favorites__card">
                <CardMedia
                  component="img"
                  image={article.mainImage}
                  alt={article.title}
                  className="favorites__img"
                />
                <CardContent className="favorites__card-content">
                  <div className="favorites__title">{article.title}</div>
                  <div className="favorites__description">
                    {article.description}..
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default Favorites
