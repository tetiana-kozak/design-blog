import { Card, CardContent, CardMedia } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { toggleLike } from 'redux/favoritesReducer'

type Props = {
  id: number
  mainImage: string
  title: string
  description: string
}

const FavoriteArticle = ({ id, mainImage, title, description }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Card className="favorites__card">
      <Link to={`/blog/${id}`}>
        <CardMedia
          component="img"
          image={mainImage}
          alt={title}
          className="favorites__img"
        />
        <CardContent className="favorites__card-content">
          <div className="favorites__title">{title}</div>
          <div className="favorites__description">{description}</div>
        </CardContent>
      </Link>
      <div className="clear-icon" onClick={() => dispatch(toggleLike(id))}>
        <DeleteForeverIcon className="icon" /> <span>remove</span>
      </div>
    </Card>
  )
}
export default FavoriteArticle
