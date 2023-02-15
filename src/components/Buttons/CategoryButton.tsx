import './CategoryButton.scss'

type Props = {
  category: string
}

const CategoryButton = ({ category }: Props) => {
  return (
    <a className="category-button" href="#">
      {category}
    </a>
  )
}
export default CategoryButton
