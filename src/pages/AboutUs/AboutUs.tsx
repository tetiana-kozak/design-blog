import PageTitle from 'components/Sections/PageTitle'
import './AboutUs.scss'
import AboutUsGeneral from 'components/Sections/AboutUsGeneral'
import AboutUsTeam from 'components/Sections/AboutUsTeam'
import AboutUsFAQ from 'components/Sections/AboutUsFAQ'

type Props = {}
const AboutUs = (props: Props) => {
  return (
    <main className="about-us">
      <PageTitle>About Us</PageTitle>
      <div className="container">
        <AboutUsGeneral />
        <AboutUsTeam />
        <AboutUsFAQ />
      </div>
    </main>
  )
}
export default AboutUs
