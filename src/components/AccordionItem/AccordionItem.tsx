import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './AccordionItem.scss'

type Props = {
  title: string
  details: string
}

const AccordionItem = ({ title, details }: Props) => {
  return (
    <Accordion className="accordion-container">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
        <h6>{title}</h6>
      </AccordionSummary>
      <AccordionDetails className="details">
        <p>{details}</p>
      </AccordionDetails>
    </Accordion>
  )
}
export default AccordionItem
