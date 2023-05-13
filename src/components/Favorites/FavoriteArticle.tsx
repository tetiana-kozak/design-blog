import { Card, CardContent, CardMedia, Tooltip, Zoom } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
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
    <Card className="favorites__card" data-aos="fade-up">
      <Link to={`/blog/articles/${id}`}>
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
      <Tooltip
        title={<div className="tooltip">Remove from favorites</div>}
        arrow
        TransitionComponent={Zoom}
      >
        <div className="clear-icon" onClick={() => dispatch(toggleLike(id))}>
          <DeleteForeverIcon className="icon" /> <span>remove</span>
        </div>
      </Tooltip>
    </Card>
  )
}
export default FavoriteArticle
