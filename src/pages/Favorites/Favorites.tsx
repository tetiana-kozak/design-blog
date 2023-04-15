import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import ArticlesArray from 'utils/articlesArray'
import './Favorites.scss'
import SectionTitle from 'components/Sections/SectionTitle'
import NoFavoriteArticles from 'components/Favorites/NoFavoriteArticles'
import FavoriteArticle from 'components/Favorites/FavoriteArticle'

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
        {filteredArray.length === 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NoFavoriteArticles />
          </Grid>
        ) : (
          filteredArray.map((article) => (
            <Grid item sm={12} md={6} lg={4} key={article.id}>
              <FavoriteArticle
                id={article.id}
                mainImage={article.mainImage}
                title={article.title}
                description={article.description}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  )
}
export default Favorites
