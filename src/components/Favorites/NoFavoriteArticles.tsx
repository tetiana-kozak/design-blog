import noFavoritesImg from '../../assets/no-favorites.png'

type Props = {}

const NoFavoriteArticles = (props: Props) => {
  return (
    <div className="no-favorites-block">
      <p className="no-description">You don't have any favorite articles yet</p>
      <img src={noFavoritesImg} alt="" className="no-image" />
    </div>
  )
}
export default NoFavoriteArticles
