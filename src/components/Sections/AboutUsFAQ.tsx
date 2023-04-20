import AccordionItem from 'components/AccordionItem/AccordionItem'

type Props = {}

const AboutUsFAQ = (props: Props) => {
  return (
    <section className="FAQ">
      <h2>
        \\\ <span> Frequently Asked Questions </span> \\\
      </h2>
      <div className="accordion">
        <AccordionItem
          title="Is blog available on mobile and tablet devices?"
          details="Yes. The InDesign website allows you to view all of InDesign
              offerings on a mobile or tablet device, including daily news and
              culture coverage from the Web, and each week’s issue, in full."
        />
        <AccordionItem
          title="How can I share feedback or ask questions about the InDesign blog?"
          details="If the answer is not in this F.A.Q., please send technical
              questions about our crosswords to support@indesign.com."
        />
        <AccordionItem
          title="How do I sign up for e-mail newsletters?"
          details="You can sign up for any of our offerings, including The Daily,
              This Week’s Issue, The Sunday Archive, Daily Humor, The Borowitz
              Report, Fiction, Podcasts, John Cassidy, and more."
        />
        <AccordionItem
          title="How can I find InDesign blog on social media?"
          details="Follow InDesign or @indesign on Twitter, Facebook, Instagram,
              Tumblr, LinkedIn, and Snapchat. InDesign photo and art departments
              also maintain their own Instagram feeds at @indesignart and
              @indesignphoto, respectively."
        />
      </div>
    </section>
  )
}
export default AboutUsFAQ
