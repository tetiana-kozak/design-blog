import './SectionTitle.scss'

type Props = {
  sectionTitle: string
}

const SectionTitle = ({ sectionTitle }: Props) => {
  return (
    <div className="section-title">
      <a href="#">
        <h3>{sectionTitle}</h3>
      </a>
    </div>
  )
}

export default SectionTitle
