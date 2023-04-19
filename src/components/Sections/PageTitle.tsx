import DecorativeLine from 'components/Decor/DecorativeLine'
import './PageTitle.scss'

type Props = {
  children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
  return (
    <>
      <h1 className="page-title">{children}</h1>
      <DecorativeLine />
    </>
  )
}
export default PageTitle
