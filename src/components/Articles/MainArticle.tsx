import { Card, CardMedia, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import { Link } from 'react-router-dom'
import './MainArticle.scss'
import FavoriteButton from 'components/FavouriteButton/FavoriteButton'

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
  return (
    <article className="main-article" data-aos="fade-up">
      <Card className="card">
        <Link to={`/blog/articles/${id}`}>
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
              <FavoriteButton id={id} />
            </div>
            <Link to={`/blog/articles/${id}`}>
              <h2 className="title">{title}</h2>
              <p className="description"> {description}</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
export default MainArticle
