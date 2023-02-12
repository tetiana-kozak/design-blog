import './CategoryButton.scss'

type Props = {
  category: string
}

const CategoryButton = ({ category }: Props) => {
  return <a className="category-button">{category}</a>
}
export default CategoryButton
