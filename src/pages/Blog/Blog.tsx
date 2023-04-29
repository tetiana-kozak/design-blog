import Categories from 'components/Categories/Categories'
import { Outlet } from 'react-router-dom'

type Props = {}

const Blog = (props: Props) => {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  )
}
export default Blog
