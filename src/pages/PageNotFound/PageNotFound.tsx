import PageTitle from 'components/Sections/PageTitle'
import notFindIcon from '../../assets/not-found.png'
import './PageNotFound.scss'

type Props = {}
const PageNotFound = (props: Props) => {
  return (
    <>
      <PageTitle>Page Not Found</PageTitle>

      <div className="not-found-block">
        <h3 className="title">Oops...</h3>
        <p className="description">
          The page you are looking for may have been moved, deleted, or possibly
          never existed.
        </p>
        <img src={notFindIcon} alt="not find icon" className="image" />
      </div>
    </>
  )
}
export default PageNotFound
