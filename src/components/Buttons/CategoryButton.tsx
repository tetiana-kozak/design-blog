import './CategoryButton.scss'

type Props = {
  category: string
}

const CategoryButton = ({ category }: Props) => {
  return <span className="category-button">{category}</span>
}
export default CategoryButton
