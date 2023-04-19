import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
            \\\ <span> Frequently Asked Questions </span> \\\
          </h2>
          <div className="accordion">
            <Accordion className="accordion-container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="summary"
              >
                <h6>Is blog available on mobile and tablet devices?</h6>
              </AccordionSummary>
              <AccordionDetails className="details">
                <p>
                  Yes. The InDesign website allows you to view all of InDesign
                  offerings on a mobile or tablet device, including daily news
                  and culture coverage from the Web, and each week’s issue, in
                  full.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="summary"
              >
                <h6>
                  How can I share feedback or ask questions about the InDesign
                  blog?
                </h6>
              </AccordionSummary>
              <AccordionDetails className="details">
                <p>
                  If the answer is not in this F.A.Q., please send technical
                  questions about our crosswords to support@indesign.com.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="summary"
              >
                <h6>How do I sign up for e-mail newsletters?</h6>
              </AccordionSummary>
              <AccordionDetails className="details">
                <p>
                  VYou can sign up for any of our offerings, including The
                  Daily, This Week’s Issue, The Sunday Archive, Daily Humor, The
                  Borowitz Report, The New Yorker Recommends, Fiction, Podcasts,
                  John Cassidy, and more.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="summary"
              >
                <h6>How can I find InDesign blog on social media?</h6>
              </AccordionSummary>
              <AccordionDetails className="details">
                <p>
                  Follow InDesign or @indesign on Twitter, Facebook, Instagram,
                  Tumblr, LinkedIn, and Snapchat. InDesign photo and art
                  departments also maintain their own Instagram feeds at
                  @indesignart and @indesignphoto, respectively.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </div>
    </main>
  )
}
export default AboutUs
