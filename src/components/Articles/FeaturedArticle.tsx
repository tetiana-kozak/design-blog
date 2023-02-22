import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import './FeaturedArticle.scss'

import articleImage from 'assets/Melanie-Courbet-Table.jpg'

type Props = {}
const FeaturedArticle = (props: Props) => {
  return (
    <>
      <article className="intro-article">
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              width="100%"
              image={articleImage}
              // image="./assets/Melanie-Courbet-Table.jpg"
              alt="Melanie Courbet Table"
            />
            <CardContent>
              <h3>Card Header</h3>
              <p> Card description</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </article>
    </>
  )
}
export default FeaturedArticle
