type Articles = {
  title: string
  description: string
  category: string
  image: string
  id: number
  heading: string
}

const ArticlesArray: Articles[] = [
  {
    id: 1,
    title: 'Wooden Sculptures Carved From Storm-Battered Trees',
    description:
      'These monolithic sculptures carved and shaped by artist Vince Skelly are made from single logs recovered from a windstorm.',
    category: 'art',
    heading: 'featured',
    image: '/images/vince-skelly-a-conversation.jpg',
  },
  {
    id: 2,
    title: 'Take Control of the Mood With the Nivél Pendant',
    description:
      "The Nivél Pendant's flat panel LED light pivots on an axis to focus light downward or as a soft wall wash.",
    category: 'home furnishing',
    heading: 'featured',
    image: '/images/Pablo-Designs-Nivel-Pendant.jpg',
  },
  {
    id: 3,
    title:
      'Tekla Evelina Severin Drops Color-Blocking "Colour Vibes" at FORMEX',
    description:
      'Working with the theme of "Colour Vibes," color phenom Tekla Evelina Severin transforms empty space into surreal, color-blocked exhibition.',
    category: 'interrior design',
    heading: 'featured',
    image: '/images/Dimensions-of-Colour-Formex.jpg',
  },
  {
    id: 4,
    title: 'Listen to the KBIS 2023 DMM Talks Lounge Panels Online',
    description:
      'Listen to all of the panel conversations that happened in the DMM Talks Lounge at KBIS 2023.',
    category: 'featured',
    heading: 'featured',
    image: '/images/KBIS-2023-DMM-Talks-Lounge.jpg',
  },
  {
    id: 5,
    title: "Charles Gaines' Colorful Pixelation of Southern Trees",
    description:
      "Conceptual artist Charles Gaines presents new colorful pixelated abstractions of 'Southern Trees' in New York.",
    category: 'art',
    heading: 'featured',
    image: '/images/Charles-Gaines-Southern-Trees.jpg',
  },

  {
    id: 6,
    title:
      'You Can Now Customize Samsung Bespoke Refrigerators With Any Image (*For a Price)',
    description:
      'Samsung has unlocked unlimited possibilities by allowing customers to upload any image, design, or photo to adorn their Bespoke fridges.',
    category: 'technology',
    heading: '',
    image: '/images/Generative-Art-Collection.jpg',
  },
  {
    id: 7,
    title: 'A Modern Red House in Sweden Near the Arctic Circle',
    description:
      'Due to strict zoning rules, this angular house required a red roof which led to the designers wrapping the rest of the house in the same bold color.',
    category: 'architecture',
    heading: '',
    image: '/images/Arctic-Circle-House-Sweden.jpg',
  },
  {
    id: 8,
    title:
      "A Lighting Collection Inspired by Frank Lloyd Wright's Iconic Architecture",
    description:
      "The Frank Lloyd Wright series for YAMAGIWA includes representations of a few of the legendary architect's original masterpieces in the form of lighting.",
    category: 'home furnishing',
    heading: '',
    image: '/images/Frank-Lloyd-Wright-Lighting-Collection.jpeg',
  },
  {
    id: 9,
    title:
      'The Shinola Hotel Is Built in Detroit by Locals Shinola and Bedrock',
    description:
      "Shinola Hotel is a boutique hotel in Detroit with a hyper-local design that's evident everywhere, from ceramic wall tiles to millwork made by local merchants.",
    category: 'travel',
    heading: '',
    image: '/images/shinolahotel_shinola.jpg',
  },
  {
    id: 10,
    title: 'New Book Release: The Brutalists: Brutalism’s Best Architects',
    description:
      "Author Owen Hopkins highlights more than 250 Brutalist architects in the new release The Brutalists: Brutalism's Best Architects.",
    category: 'architecture',
    heading: '',
    image: '/images/The-BrutalistsBrutalisms-Best-Architects-Owen-Hopkins.jpg',
  },
  {
    id: 11,
    title:
      'Our Place Opens Melrose Retail Spot With Colors That Reflect Their Pans',
    description:
      'Our Place hired Ringo Studio to create a store with visually delightful product displays and a color palette that matches their popular pans.',
    category: 'commercial',
    heading: '',
    image: '/images/Our-Place-Melrose.jpg',
  },
  {
    id: 12,
    title: 'F5: Melanie Courbet Shares the Spark Behind Her Gallery + More',
    description:
      "Gallery founder + director Melanie Courbet shares a worthwhile organization in Sierra Leone, the place she just can't stop shopping + more in Friday Five.",
    category: 'art',
    heading: '',
    image: '/images/F5-Melanie-Courbet.jpg',
  },
  {
    id: 13,
    title:
      'An Apartment on a Residential Yacht That Transforms From One Bedroom to Two',
    description:
      "Michael K. Chen Architecture designed a transforming Pied-å-Mer that serves as a couple's holiday retreat located aboard a residential yacht.",
    category: 'architecture',
    heading: '',
    image: '/images/MKCA_Pied-a-Mer-Apartment.jpg',
  },
  {
    id: 14,
    title: 'Business of Design Week 2022 Drives Innovations Amid Uncertainty',
    description:
      "On the occasion of the summit's 20th anniversary, Business of Design Week 2022 will be a celebration with creative leaders under the theme 'Design for Change.'",
    category: 'featured',
    heading: '',
    image: '/images/Business-of-Design-Week-2022-Nikki-Gonnissen.jpg',
  },
  {
    id: 15,
    title: 'Relevo Rug Sculpts a Welcoming Geometric Landscape Underfoot',
    description:
      "Light and shadow come to play across Milan-based Studiopepe's Relevo, a new hand-tufted, sculptural wool rug design for Muuto.",
    category: 'home furnishing',
    heading: '',
    image: '/images/Muuto-relevo.jpg',
  },
  {
    id: 16,
    title: "3form's 2023 Color Collection Nails Down Hard-to-Find Hues",
    description:
      "The 10 new pastel colors are inspired by the four seasons and will be permanently added to 3form's color system.",
    category: 'commercial',
    heading: '',
    image: '/images/3form-2023-color-collection.jpg',
  },
  {
    id: 17,
    title: 'Two Levitating, Rammed Earth Villas in a Costa Rican Jungle',
    description:
      'In the Costa Rican jungle, a pair of jaw-dropping, minimalist villas with rammed earth walls awaits you on your next vacation.',
    category: 'travel',
    heading: '',
    image: '/images/Achiote-Formafatal-Rammed.jpg',
  },
  {
    id: 18,
    title: 'A Melbourne House With 10 Folds in the Roof To Bring in Light',
    description:
      'A home in Melbourne with an Edwardian front facade is renovated and given a back extension complete with ten folds in its roof to bring in light.',
    category: 'architecture',
    heading: '',
    image: '/images/10-Fold-House-Timmons.jpg',
  },
  {
    id: 19,
    title: 'Lee Broom Exhibits Within the "British Capsule" at Maison&Objet',
    description:
      'For Maison+Objet\'s "British Capsule," Lee Broom includes a new collection of lighting, as well a selection of complementary furniture and decor.',
    category: 'home furnishing',
    heading: '',
    image: '/images/Lee-Broom-MaisonObjet.jpg',
  },
  {
    id: 20,
    title: 'The Design Milk X Modenus Talks Lounge Returns to KBIS 2023',
    description:
      "The Design Milk X Modenus Talks Lounge is back at KBIS with a schedule that's jam-packed full of presentations + conversations covering design business, social media + trends.",
    category: 'featured',
    heading: '',
    image: '/images/Marvila-Attic-Lisbon-KEMA.jpg',
  },
  {
    id: 21,
    title:
      'Hotel Riomar Ibiza Celebrates Orange + Neutrals Inspired by Its Surroundings',
    description:
      'Hotel Riomar is a boutique hotel in Ibiza that embraces its mid-century layered interiors by celebrating the nostalgic qualities of its past.',
    category: 'travel',
    heading: 'last launches',
    image: '/images/hotel-riomar.jpg',
  },
  {
    id: 22,
    title:
      'An Abandoned Lisbon Attic Becomes Airy Apartment With Hidden Kitchen',
    description:
      'KEMA studio transformed the unlivable MARVILA ATTIC into a bright and airy apartment with a hidden kitchen and built-in wall sofa.',
    category: 'architecture',
    heading: 'last launches',
    image: '/images/The-Home-Lamp.jpg',
  },
  {
    id: 23,
    title: 'Desktop Wallpaper: February 2023',
    description:
      "Design Milk's founder Jaime Derringer collaborates with Eskayel on a new mural wallpaper + fabric collection – download one for your desktop wallpaper!",
    category: 'art',
    heading: 'last launches',
    image: '/images/February-2023-Desktop-Wallpaper.jpg',
  },
  {
    id: 24,
    title: "Vipp's New Pedal Bin Is Rubbish – Literally!",
    description:
      "The Rubbish special edition of their iconic pedal bin design is made from plastic leftovers and sawdust from Vipp's own production waste.",
    category: 'home furnishing',
    heading: 'last launches',
    image: '/images/Rubbish-Waste-Bin-Recycled.jpg',
  },

  {
    id: 25,
    title:
      'F5: Paper Artist Zoe Bradley Shares a Go-To Pen, Favorite Liqueur + More',
    description:
      'In this Friday Five, Wales-based paper artist Zoe Bradley shares an inspiring collaboration, go-to pen, a new favorite liqueur, and more.',
    category: 'art',
    heading: 'last launches',
    image: '/images/F5-Zoe-Bradley.jpg',
  },
  {
    id: 26,
    title: 'The Oru Collection Brings the Rounded Furniture Trend To Contract',
    description:
      "The influence of the 1970s + Japanese design create a feeling that's bold + iconic in the Oru collection for contract from Patricia Urquiola for Andreu World.",
    category: 'commercial',
    heading: 'popular',
    image: '/images/Andreu-World-Oru-Collection.jpg',
  },
  {
    id: 27,
    title:
      'Wire Grids Visually Break up the Open Layout of This Flatiron Office',
    description:
      'Office of Tangible Space created a bright, airy, and inviting new interior with custom solutions for the new ScienceIO headquarters.',
    category: 'commercial',
    heading: 'popular',
    image: '/images/Office-of-Tangible-Space.jpg',
  },
  {
    id: 28,
    title: "A 1940s Pink Villa Becomes New Home for Luca Nichetto's Studio",
    description:
      "Luca Nichetto renovated a 40s pink villa to become his Stockholm studio that's curious pink outside with an interior that draws you in.",
    category: 'interrior design',
    heading: 'popular',
    image: '/images/Pink-Villa-Design-Studio.jpg',
  },
  {
    id: 29,
    title: 'Smile Plastics Turns Yogurt Pots Into Terrazzo-Like Surface Panels',
    description:
      'Smile Plastics designs and manufactures hand-crafted, supersized terrazzo-like panels for retail, architecture, interiors, and product design – from waste.',
    category: 'home furnishing',
    heading: 'popular',
    image: '/images/GAN_LONDON-STORE.jpg',
  },
  {
    id: 30,
    title:
      'Why Sustainability Will Be the Single Topic at Design China Beijing 2022',
    description:
      "This year's event, also known as Sustainable Design China Summit, will cover the world of design through a sustainability lens.",
    category: 'architecture',
    heading: 'popular',
    image: '/images/design-china-beijing.jpg',
  },
]

export default ArticlesArray
