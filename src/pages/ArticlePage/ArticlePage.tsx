import CategoryButton from 'components/Buttons/CategoryButton'
import imageDecor from 'assets/line-decor.svg'
import './ArticlePage.scss'

type Props = {}
const ArticlePage = (props: Props) => {
  return (
    <div className="single-article">
      <section className="article-heading">
        <CategoryButton category="travel" />

        <h1 className="heading-title">
          The Shinola Hotel Is Built in Detroit by Locals Shinola and Bedrock
        </h1>

        <div className="decorative-line">
          <div className="center">
            <img src={imageDecor} alt="" />
          </div>
        </div>

        <div className="date-and-author">
          03.05.2023 <span> By Kelly Beall</span>
        </div>
      </section>
    </div>
  )
}
export default ArticlePage
