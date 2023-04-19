import { Container } from '@mui/material'
import PageTitle from 'components/Sections/PageTitle'
import './AboutUs.scss'
import TeamArray from 'utils/teamArray'

type Props = {}
const AboutUs = (props: Props) => {
  return (
    <main className="about-us">
      <PageTitle>About Us</PageTitle>
      <div className="container">
        <section className="general-info">
          <p>
            Since 2006, we've been feeding your design obsession with what's
            cool and what's next in architecture, interior design, automotive,
            fashion, technology + art.
          </p>
          <p>
            Fixated on making modern living effortless and accessible, we're
            lovers of the creative process, advocates for sustainable and
            ethical production, cheerleaders of inclusion + straight-up cool
            stuff obsessors. Our passion is discovering and highlighting
            emerging talent + we're energized by and for our community of
            like-minded design lovers - like you!
          </p>
          <p>Get in the know and modernize your life.</p>
          <p>
            We're also committed to using our platform to inspire new ideas,
            challenge the status quo + to inspire action to build inclusive
            communities.
          </p>
        </section>

        <section className="team">
          <h2>
            \\\ <span> The InDesign Team </span>\\\
          </h2>
          {TeamArray.map((teamMember) => (
            <div className="team-member-card">
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

        <section className="FAQ">
          <h2>
            \\\ <span> FAQ </span> \\\
          </h2>
        </section>
      </div>
    </main>
  )
}
export default AboutUs
