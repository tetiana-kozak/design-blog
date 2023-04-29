import { Card, CardActionArea, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import { Link } from 'react-router-dom'
import './FeaturedArticle.scss'

type Props = {
  categoryArrayItem: {
    title: string
    description: string
    category: string
    mainImage: string
    id: number
  }
}
const FeaturedArticle = ({ categoryArrayItem }: Props) => {
  return (
    <>
      <article className="intro-article" key={categoryArrayItem.id}>
        <Card className="card featured-card">
          <CardActionArea>
            <div className="card-media card-relative">
              <Link to={`/blog/articles/${categoryArrayItem.id}`}>
                <img
                  src={categoryArrayItem.mainImage}
                  alt=""
                  className="card-img"
                />
              </Link>
              <div className="button-center">
                <CategoryButton category={categoryArrayItem.category} />
              </div>
            </div>
            <Link to={`/blog/articles/${categoryArrayItem.id}`}>
              <CardContent className="card-content-featured">
                <h3>{categoryArrayItem.title}</h3>
                <p> {categoryArrayItem.description}</p>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </article>
    </>
  )
}
export default FeaturedArticle
