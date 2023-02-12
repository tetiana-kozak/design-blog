import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import './MainArticle.scss'

type Props = {
  title: string
  description: string
  category: string
  image: string
}

const MainArticle = ({ title, description, category, image }: Props) => {
  return (
    <>
      <article className="main-article">
        <Card className="card">
          <CardMedia
            component="img"
            width="100/%"
            src={image}
            className="card-img"
          />
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
              <CategoryButton category={category} />
              <h3 className="title">{title}</h3>
              <p className="description"> {description}</p>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  )
}
export default MainArticle
