import './AboutUsTeam.scss'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const AboutUsTeam = (props: Props) => {
  const teamArray = useAppSelector((state) => state.fetchedTeam)
  return (
    <section className="team">
      <h2>
        \\\ <span> The InDesign Team </span>\\\
      </h2>
      {teamArray.map((teamMember, i) => (
        <div className="team-member-card" key={i}>
          <div className="card-photo">
            <img src={teamMember.photo} alt="" />
          </div>
          <div className="card-description">
            <div className="name">
              {teamMember.name}, {teamMember.position}
            </div>
            <p>{teamMember.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default AboutUsTeam
