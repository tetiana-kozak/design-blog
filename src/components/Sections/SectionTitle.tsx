import './SectionTitle.scss'

type Props = {
  sectionTitle: string
}

const SectionTitle = ({ sectionTitle }: Props) => {
  return (
    <div className="section-title">
      <h3>{sectionTitle}</h3>
    </div>
  )
}

export default SectionTitle
