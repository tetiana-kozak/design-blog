import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import './FeaturedArticle.scss'

// import articleImage from 'assets/Melanie-Courbet-Table.jpg'

type Props = {
  categoryArrayItem: {
    title: string
    description: string
    category: string
    image: string
    id: number
  }
}
const FeaturedArticle = ({ categoryArrayItem }: Props) => {
  // console.log('categoryArrayItem', categoryArrayItem)
  return (
    <>
      <article className="intro-article" key={categoryArrayItem.id}>
        <Card className="card">
          <CardActionArea>
            <div className="card-media card-relative">
              <img src={categoryArrayItem.image} alt="" className="card-img" />
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
      </article>
    </>
  )
}
export default FeaturedArticle
