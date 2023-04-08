import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/favoritesReducer'

type Props = {
  id: number
}

const FavoriteButton = ({ id }: Props) => {
  const isFavorite = useAppSelector((state) => state.favoriteArticles[id])
  const dispatch = useAppDispatch()
  return (
    <IconButton
      disableRipple={true}
      className="favorite-icon"
      onClick={() => dispatch(toggleLike(id))}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  )
}
export default FavoriteButton
