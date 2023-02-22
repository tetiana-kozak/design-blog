type Articles = {
  title: string
  description: string
  category: string
  image: string
  id: number
  heading?: string
}

const ArticlesArray: Articles[] = [
  {
    id: 0,
    title: 'Wooden Sculptures Carved From Storm-Battered Trees',
    description:
      'These monolithic sculptures carved and shaped by artist Vince Skelly are made from single logs recovered from a windstorm.',
    category: 'art',
    heading: 'featured',
    image: 'vince-skelly-a-conversation.jpg',
  },
  {
    id: 0,
    title: 'Take Control of the Mood With the Nivél Pendant',
    description:
      "The Nivél Pendant's flat panel LED light pivots on an axis to focus light downward or as a soft wall wash, giving you the control to set the mood.",
    category: 'home furnishing',
    heading: 'featured',
    image: 'Pablo-Designs-Nivel-Pendant.jpg',
  },
  {
    id: 0,
    title:
      'Tekla Evelina Severin Drops Color-Blocking "Colour Vibes" at FORMEX',
    description:
      'Working with the theme of "Colour Vibes," color phenom Tekla Evelina Severin transforms empty space into surreal, color-blocked exhibition.',
    category: 'interrior design',
    heading: 'featured-main',
    image: 'Dimensions-of-Colour-Formex.jpg',
  },
  {
    id: 0,
    title: 'Listen to the KBIS 2023 DMM Talks Lounge Panels Online',
    description:
      'Listen to all of the panel conversations that happened in the DMM Talks Lounge at KBIS 2023 on the KBIS website now.',
    category: 'featured',
    heading: 'featured',
    image: 'KBIS-2023-DMM-Talks-Lounge.jpg',
  },
  {
    id: 0,
    title: "Charles Gaines' Colorful Pixelation of Southern Trees",
    description:
      "Conceptual artist Charles Gaines presents new colorful pixelated abstractions of 'Southern Trees' in New York. Step back to see how they connect.",
    category: 'art',
    heading: 'featured',
    image: 'Charles-Gaines-Southern-Trees.jpg',
  },

  {
    id: 1,
    title:
      'You Can Now Customize Samsung Bespoke Refrigerators With Any Image (*For a Price)',
    description:
      'Samsung has unlocked unlimited possibilities by allowing customers to upload any image, design, or photo to adorn their Bespoke fridges.',
    category: 'technology',
    image: '/images/Generative-Art-Collection.jpg',
  },
  {
    id: 2,
    title:
      "A Lighting Collection Inspired by Frank Lloyd Wright's Iconic Architecture",
    description:
      "The Frank Lloyd Wright series for YAMAGIWA includes representations of a few of the legendary architect's original masterpieces in the form of lighting.",
    category: 'home furnishing',
    image: '/images/Frank-Lloyd-Wright-Lighting-Collection.jpeg',
  },
  {
    id: 3,
    title:
      'Our Place Opens Melrose Retail Spot With Colors That Reflect Their Pans',
    description:
      'Our Place hired Ringo Studio to create a store with visually delightful product displays and a color palette that matches their popular pans.',
    category: 'commercial',
    image: '/images/Our-Place-Melrose.jpg',
  },
  {
    id: 4,
    title: 'F5: Melanie Courbet Shares the Spark Behind Her Gallery + More',
    description:
      "Gallery founder + director Melanie Courbet shares a worthwhile organization in Sierra Leone, the place she just can't stop shopping + more in Friday Five.",
    category: 'art',
    image: '/images/F5-Melanie-Courbet.jpg',
  },
  {
    id: 5,
    title: 'Relevo Rug Sculpts a Welcoming Geometric Landscape Underfoot',
    description:
      "Light and shadow come to play across Milan-based Studiopepe's Relevo, a new hand-tufted, sculptural wool rug design for Muuto.",
    category: 'home furnishing',
    image: '/images/Muuto-relevo.jpg',
  },
  {
    id: 6,
    title: 'Lee Broom Exhibits Within the "British Capsule" at Maison&Objet',
    description:
      'For Maison+Objet\'s "British Capsule," Lee Broom includes a new collection of lighting, as well a selection of complementary furniture and decor.',
    category: 'home furnishing',
    image: '/images/Lee-Broom-MaisonObjet.jpg',
  },
  {
    id: 7,
    title: 'The Design Milk X Modenus Talks Lounge Returns to KBIS 2023',
    description:
      "The Design Milk X Modenus Talks Lounge is back at KBIS with a schedule that's jam-packed full of presentations + conversations covering design business, social media + trends.",
    category: 'featured',
    image: '/images/Marvila-Attic-Lisbon-KEMA.jpg',
  },
  {
    id: 8,
    title:
      'Hotel Riomar Ibiza Celebrates Orange + Neutrals Inspired by Its Surroundings',
    description:
      'Hotel Riomar is a boutique hotel in Ibiza that embraces its mid-century layered interiors by celebrating the nostalgic qualities of its past.',
    category: 'travel',
    heading: 'last-launches',
    image: '/images/hotel-riomar.jpg',
  },
  {
    id: 9,
    title:
      'An Abandoned Lisbon Attic Becomes Airy Apartment With Hidden Kitchen',
    description:
      'KEMA studio transformed the unlivable MARVILA ATTIC into a bright and airy apartment with a hidden kitchen and built-in wall sofa.',
    category: 'architecture',
    heading: 'last-launches',
    image: '/images/The-Home-Lamp.jpg',
  },
  {
    id: 10,
    title: 'Desktop Wallpaper: February 2023',
    description:
      "Design Milk's founder Jaime Derringer collaborates with Eskayel on a new mural wallpaper + fabric collection – download one for your desktop wallpaper!",
    category: 'art',
    heading: 'last-launches',
    image: '/images/February-2023-Desktop-Wallpaper.jpg',
  },
  {
    id: 11,
    title: "Vipp's New Pedal Bin Is Rubbish – Literally!",
    description:
      "The Rubbish special edition of their iconic pedal bin design is made from plastic leftovers and sawdust from Vipp's own production waste.",
    category: 'home furnishing',
    heading: 'last-launches',
    image: '/images/Rubbish-Waste-Bin-Recycled.jpg',
  },
]

export default ArticlesArray
