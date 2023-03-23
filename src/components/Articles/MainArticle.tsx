import { Card, CardMedia, CardContent } from '@mui/material'
import CategoryButton from 'components/Buttons/CategoryButton'
import { Link } from 'react-router-dom'
import './MainArticle.scss'

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
    <>
      <article className="main-article">
        <Link to={`/blog/${id}`}>
          <Card className="card">
            <CardMedia
              component="img"
              width="100%"
              src={mainImage}
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
                <h2 className="title">{title}</h2>
                <p className="description"> {description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </article>
    </>
  )
}
export default MainArticle
