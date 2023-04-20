import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './AboutUsFAQ.scss'

type Props = {}

const AboutUsFAQ = (props: Props) => {
  return (
    <section className="FAQ">
      <h2>
        \\\ <span> Frequently Asked Questions </span> \\\
      </h2>
      <div className="accordion">
        <Accordion className="accordion-container">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
            <h6>Is blog available on mobile and tablet devices?</h6>
          </AccordionSummary>
          <AccordionDetails className="details">
            <p>
              Yes. The InDesign website allows you to view all of InDesign
              offerings on a mobile or tablet device, including daily news and
              culture coverage from the Web, and each week’s issue, in full.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion-container">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
            <h6>
              How can I share feedback or ask questions about the InDesign blog?
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
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
            <h6>How do I sign up for e-mail newsletters?</h6>
          </AccordionSummary>
          <AccordionDetails className="details">
            <p>
              VYou can sign up for any of our offerings, including The Daily,
              This Week’s Issue, The Sunday Archive, Daily Humor, The Borowitz
              Report, The New Yorker Recommends, Fiction, Podcasts, John
              Cassidy, and more.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion-container">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
            <h6>How can I find InDesign blog on social media?</h6>
          </AccordionSummary>
          <AccordionDetails className="details">
            <p>
              Follow InDesign or @indesign on Twitter, Facebook, Instagram,
              Tumblr, LinkedIn, and Snapchat. InDesign photo and art departments
              also maintain their own Instagram feeds at @indesignart and
              @indesignphoto, respectively.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  )
}
export default AboutUsFAQ
