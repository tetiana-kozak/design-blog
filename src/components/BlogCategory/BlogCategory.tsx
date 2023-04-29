import { useAppSelector } from 'redux/hooks'

type Props = {}

const BlogCategory = (props: Props) => {
  const categoryState = useAppSelector((state) => state.selectedCategory)
  return <div>BlogCategory component:: category={categoryState}</div>
}
export default BlogCategory
