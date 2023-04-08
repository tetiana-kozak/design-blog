import './CategoryButton.scss'

type Props = {
  category: string
}

const CategoryButton = ({ category }: Props) => {
  return (
    // <a className="category-button" href="#">
    //   {category}
    // </a>
    <span className="category-button">{category}</span>
  )
}
export default CategoryButton
