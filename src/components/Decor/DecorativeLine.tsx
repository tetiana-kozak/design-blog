import imageDecor from 'assets/line-decor.svg'
import './DecorativeLine.scss'

type Props = {}

const DecorativeLine = (props: Props) => {
  return (
    <div className="decorative-line">
      <div className="center">
        <img src={imageDecor} alt="" />
      </div>
    </div>
  )
}
export default DecorativeLine
