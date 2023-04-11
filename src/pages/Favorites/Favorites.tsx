import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import ArticlesArray, { getArticlesObject } from 'utils/articlesArray'
import './Favorites.scss'
import SectionTitle from 'components/Sections/SectionTitle'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { toggleLike } from 'redux/favoritesReducer'
import noFavoritesImg from '../../assets/no-favorites.png'

type Props = {}
const Favorites = (props: Props) => {
  const favoritesState = useAppSelector((state) => state.favoriteArticles)

  const filteredArray = ArticlesArray.filter(
    (article) => favoritesState[article.id]
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <SectionTitle sectionTitle="Favorite articles" />
      <Grid container spacing={6}>
        {filteredArray.length === 0 ? (
          <Grid item sm={12} md={12} lg={12}>
            <div className="no-favorites-block">
              <p className="no-description">
                You don't have any favorite articles yet
              </p>
              <img src={noFavoritesImg} alt="" className="no-image" />
            </div>
          </Grid>
        ) : (
          filteredArray.map((article) => (
            <Grid item sm={12} md={6} lg={4} key={article.id}>
              <Card className="favorites__card">
                <Link to={`/blog/${article.id}`}>
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
                </Link>
                <div
                  className="clear-icon"
                  onClick={() => dispatch(toggleLike(article.id))}
                >
                  <DeleteForeverIcon className="icon" /> <span>remove</span>
                </div>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  )
}
export default Favorites
