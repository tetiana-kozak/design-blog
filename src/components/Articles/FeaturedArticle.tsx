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
        <Link to={`/blog/${categoryArrayItem.id}`}>
          <Card className="card">
            <CardActionArea>
              <div className="card-media card-relative">
                <img
                  src={categoryArrayItem.mainImage}
                  alt=""
                  className="card-img"
                />
                <div className="button-center">
                  <CategoryButton category={categoryArrayItem.category} />
                </div>
              </div>
              <CardContent className="card-content">
                <h3>{categoryArrayItem.title}</h3>
                <p> {categoryArrayItem.description}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </article>
    </>
  )
}
export default FeaturedArticle
