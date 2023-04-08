import { IconButton, Button, Card, CardMedia, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import { Link } from 'react-router-dom'
import './MainArticle.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/favoritesReducer'

type Props = {
  title: string
  description: string
  category: string
  mainImage: string
  id: number
}

const MainArticle = ({
  title,
  description,
  category,
  mainImage,
  id,
}: Props) => {
  const isFavorite = useAppSelector((state) => state.favoriteArticles[id])
  const dispatch = useAppDispatch()

  return (
    <>
      <article className="main-article">
        <Card className="card">
          <Link to={`/blog/${id}`}>
            <CardMedia
              component="img"
              width="100%"
              src={mainImage}
              className="card-img"
            />
          </Link>
          <CardContent
            className="card-content"
            sx={{
              padding: '0px',
              '&:last-child': {
                padding: '0px',
              },
            }}
          >
            <div className="card-content-inner">
              <div className="card-content-actions">
                <CategoryButton category={category} />
                <IconButton
                  disableRipple={true}
                  className="favorite-icon"
                  onClick={() => dispatch(toggleLike(id))}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
              <Link to={`/blog/${id}`}>
                <h2 className="title">{title}</h2>
                <p className="description"> {description}</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  )
}
export default MainArticle
