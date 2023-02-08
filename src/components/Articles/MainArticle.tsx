import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material'

type Props = {
  title: string
  description: string
  category: string
  image: string
}

const MainArticle = ({ title, description, category, image }: Props) => {
  return (
    <>
      <article className="intro-article">
        <Card className="card">
          <CardActionArea>
            <CardMedia component="img" width="100/%" src={image} />
            <CardContent>
              {/* <img src={image} alt="" /> */}
              <h3>{title}</h3>
              <p> {description}</p>
              <p> {category}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </article>
    </>
  )
}
export default MainArticle
