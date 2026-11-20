/**
 * Single source of truth for site copy, links, contact details, and image slots.
 * Copy originates from docs/genesis.md. Edit here, not inside components.
 */

export const site = {
  name: 'San Diego Adventure Playground',
  shortName: 'SD Adventure Playground',
  domain: 'sdadventureplayground.org',
  url: 'https://sdadventureplayground.org',
  email: 'hello@sdadventureplayground.org',
  tagline: 'Real Tools. Real Adventures. Limitless Imagination.',
  description:
    "A proposed community adventure playground for San Diego County, where kids don't just play on a playground. They build it. Seeking land, partners, and community support.",
  status: 'Concept & partnership stage',
  footerNote: 'A proposed community initiative.',
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const nav = [
  { label: 'The idea', href: '#what' },
  { label: 'Why', href: '#why' },
  { label: 'Precedent', href: '#sacramento' },
  { label: 'Vision', href: '#vision' },
  { label: 'Partner', href: '#partner' },
] as const;

/* ------------------------------------------------------------------
   Image slots
   Put a photo in src/assets/images/ and either set `file` on the slot or
   name it `<id>.(jpg|jpeg|png|webp|avif)`; it replaces the placeholder automatically.
   `brief` is shown on the placeholder and doubles as a generation prompt.
   ------------------------------------------------------------------ */
export const images = {
  hero: {
    file: 'hero.png',
    aspect: '16/9',
    alt: 'A playworker looks on as kids in safety glasses saw and steady reclaimed lumber, with kid-built wooden platforms behind them',
    brief:
      'Wide documentary photo: several kids (8–12) building a tall, rough timber fort from reclaimed lumber with hammers and saws in an open dirt yard. Coastal sage, eucalyptus, and dry San Diego hills behind. Late-afternoon light, muted natural greens and greys, no logos.',
  },
  hands: {
    aspect: '4/5',
    alt: "A child's hands driving a nail into a reclaimed wooden plank",
    brief:
      "Close-up: a child's hands hammering a nail into a weathered reclaimed plank, sawdust and bent nails on the board, work gloves nearby. Shallow depth of field, natural light, muted tones.",
  },
  teamwork: {
    aspect: '3/2',
    alt: 'Kids working together to carry a long board across a play yard',
    brief:
      'Three or four kids carrying a long board together across a dirt yard toward a half-built structure. Candid, mid-motion, documentary style. Overcast or soft light, greens and greys.',
  },
  structures: {
    file: 'kids-playground.jpg',
    aspect: '4/3',
    alt: 'A group of kids standing on top of a fort they built from reclaimed lumber, holding hammers and saws in the air',
    brief:
      'An adventure playground landscape: several ramshackle kid-built towers, platforms, and forts made from pallets, timber, rope, and tarps, among trees and dirt paths. No people or small distant figures. Documentary, natural light.',
  },
  site: {
    file: 'huge-playground.png',
    aspect: '21/9',
    alt: 'A sunlit adventure playground of kid-built towers, rope bridges, and painted platforms among shade trees',
    brief:
      'Ultra-wide landscape: an open, gently sloped lot in San Diego County with native chaparral, oak or sycamore shade trees, and a few early timber structures and a tool shed. Golden-hour light, calm and aspirational, architectural-photo feel.',
  },
  workshop: {
    file: 'playground2.jpg',
    aspect: '4/3',
    alt: 'Kids building a timber platform around a tree in an open dirt yard',
    brief:
      'An adult playworker at a rugged outdoor workbench beside a shipping-container tool shed, showing two kids how to use a hand saw safely. Racks of reclaimed lumber behind. Natural light, documentary.',
  },
  cta: {
    aspect: '21/9',
    alt: 'Silhouette of a kid-built timber tower at dusk',
    brief:
      'Ultra-wide: silhouette of a tall, irregular kid-built timber tower with a small flag against a dusk sky over San Diego hills. Deep greens, greys, and a little warm light at the horizon. Plenty of empty sky for overlaid text.',
  },
} as const;

export type ImageId = keyof typeof images;

export type IconName =
  | 'hammer'
  | 'shovel'
  | 'brush'
  | 'people'
  | 'compass'
  | 'bulb'
  | 'star'
  | 'puzzle'
  | 'heart'
  | 'wrench'
  | 'sun'
  | 'home'
  | 'tree'
  | 'school'
  | 'handshake'
  | 'calendar'
  | 'tent'
  | 'check'
  | 'arrow'
  | 'mail'
  | 'external';

export const hero = {
  eyebrow: site.tagline,
  title: "Kids don't just play on this playground.",
  titleAccent: 'They build it.',
  lede: 'Imagine a place where children can pick up a hammer, build a fort, dig a hole, invent a contraption, paint something enormous, or turn a pile of scrap wood into a spaceship.',
  points: ['No instructions.', 'No predetermined outcomes.', 'No adults telling them what to create.'],
  mission:
    "We're working to bring an authentic Adventure Playground to San Diego County: a community space where kids can build, experiment, collaborate, and discover what they're capable of.",
  seeking: 'Currently seeking community partners, potential locations, and supporters.',
  primaryCta: { label: 'Become a partner', subject: 'Partnering with SD Adventure Playground' },
  secondaryCta: { label: 'Learn about adventure play', href: '#what' },
  specs: [
    { label: 'Status', value: 'Concept & partnership' },
    { label: 'Location', value: 'San Diego County, CA' },
    { label: 'Model', value: 'Adventure play, est. 1940s' },
    { label: 'Precedent', value: 'Sacramento, since 2016' },
  ],
};

export const whatIs = {
  eyebrow: 'What is an Adventure Playground?',
  title: 'A playground built by kids, not just for kids.',
  intro: [
    'Adventure Playgrounds are a different kind of play environment. Originating in Denmark in the 1940s and embraced by communities around the world, they put children in charge of their own adventures.',
    'Instead of manufactured playground equipment and carefully prescribed activities, children are given access to open space, reclaimed materials, tools, and the freedom to create.',
  ],
  activitiesTitle: 'They might',
  activities: [
    { icon: 'hammer', text: 'Build forts, towers, bridges, and imaginative structures using real wood, hammers, nails, and saws.' },
    { icon: 'shovel', text: 'Dig, experiment with water and mud, and explore the natural environment.' },
    { icon: 'brush', text: 'Create art, invent games, and transform everyday materials into something extraordinary.' },
    { icon: 'people', text: 'Work together to solve problems, negotiate ideas, and tackle challenges.' },
    { icon: 'compass', text: 'Take reasonable risks, make mistakes, and learn through experience.' },
  ] satisfies { icon: IconName; text: string }[],
  supervisionTitle: 'Supervised by trained playworkers',
  supervision:
    'Trained playworkers supervise the environment, support safe tool use, and step in when necessary, but the children lead the play.',
  quote: "The magic isn't in what adults build for children. It's in what children discover they can build themselves.",
};

export const why = {
  eyebrow: 'Why San Diego needs this',
  title: 'Kids need more opportunities to be kids.',
  intro: [
    'Children today have incredible access to technology, organized activities, and structured learning. But opportunities for independent, imaginative, hands-on play can be harder to find.',
    "We believe there's something important about giving children a space where they can experiment without being told exactly what to do.",
  ],
  statements: [
    'Where failure is part of the fun.',
    'Where a crooked wooden fort is an accomplishment.',
    'Where children learn to work together because they have something they want to build.',
  ],
  benefitsTitle: 'Outcomes',
  benefits: [
    { icon: 'bulb', title: 'Creativity & Imagination', text: 'Turning ordinary materials into extraordinary ideas.' },
    { icon: 'star', title: 'Confidence & Independence', text: 'Making decisions, taking initiative, and discovering personal capabilities.' },
    { icon: 'puzzle', title: 'Problem-Solving & Resilience', text: 'Experimenting, making mistakes, and finding solutions.' },
    { icon: 'heart', title: 'Collaboration & Community', text: 'Building friendships, sharing resources, and working toward common goals.' },
    { icon: 'wrench', title: 'Practical Skills', text: 'Learning how to use tools, understand materials, and create things with their own hands.' },
  ] satisfies { icon: IconName; title: string; text: string }[],
  closing:
    "We want to bring back some of the freedom, creativity, and adventure that made childhood exploration so memorable, while providing a supervised environment designed for today's communities.",
};

export const sacramento = {
  eyebrow: 'Precedent: Sacramento Adventure Playground',
  title: 'A decade of imagination, creativity, and community.',
  intro: "We don't have to look far to see what's possible.",
  body: [
    'In August 2016, Sacramento Adventure Playground opened at the Maple Neighborhood Center in South Sacramento. Operated by Fairytale Town, the program has spent the past decade providing children with opportunities for free, supervised, child-directed play.',
    'Instead of conventional playground equipment, Sacramento provides children with real tools, reclaimed building materials, art supplies, and the freedom to create their own play spaces. Its approach is simple: children learn and grow through experiences they create themselves.',
  ],
  stats: [
    { value: '2016', label: 'Opened in South Sacramento' },
    { value: '10 yrs', label: 'Of continuous operation' },
    { value: 'Free', label: 'After-school programming & community play days' },
  ],
  proof:
    "Sacramento has shown that this idea isn't just an experiment. It's a model that can serve children and families year after year.",
  goal: "Our goal is to learn from Sacramento's experience and bring a similar opportunity to San Diego County.",
  link: { label: 'Explore Sacramento Adventure Playground', href: 'https://sacadventureplay.wordpress.com/' },
};

export const vision = {
  eyebrow: 'Our vision for San Diego',
  title: 'More than a playground. A place that grows with its community.',
  intro: [
    'We envision a permanent, year-round outdoor adventure playground where children have room to build, explore, and create: a space with building materials, tools, open-ended play areas, and structures that evolve over time through the imagination and efforts of the children themselves.',
    'Supported by trained staff who encourage independence while helping children understand tools, materials, and appropriate risks. Welcoming, accessible, and affordable, ideally offering free community play opportunities.',
  ],
  programsTitle: 'Programs',
  programs: [
    { icon: 'sun', title: 'Open Adventure Play', text: 'Regular supervised sessions where children direct their own activities.' },
    { icon: 'calendar', title: 'Community Play Days', text: 'Opportunities for local families to discover adventure play together.' },
    { icon: 'school', title: 'School & Youth Partnerships', text: 'Programs connecting children with hands-on, creative experiences.' },
    { icon: 'tent', title: 'Camps & Special Programs', text: 'Optional structured opportunities that help support ongoing operations.' },
    { icon: 'handshake', title: 'Community Building', text: 'Volunteer projects, donated materials, and partnerships with local organizations.' },
  ] satisfies { icon: IconName; title: string; text: string }[],
  notThis: 'Our objective is not to build a high-priced attraction.',
  this: "It's to create something meaningful for the community that can sustain itself and serve generations of San Diego children.",
};

export const partner = {
  eyebrow: "Let's build something together",
  title: 'Seeking land, partnerships, and community support.',
  intro: [
    'San Diego Adventure Playground is currently in the concept and partnership development stage.',
    "We're exploring opportunities to establish a permanent home in San Diego County, particularly through partnerships with organizations that share our interest in children's development, education, recreation, and community life.",
  ],
  fitsTitle: 'Where it fits',
  fits: [
    { icon: 'home', title: 'New Residential Communities', text: 'A distinctive recreational amenity that brings families together, encourages outdoor activity, and creates a lasting neighborhood gathering place.' },
    { icon: 'tree', title: 'Parks & Community Spaces', text: 'An innovative complement to traditional playgrounds, offering creative, hands-on experiences that conventional recreational facilities rarely provide.' },
    { icon: 'school', title: 'Educational & Cultural Organizations', text: 'A natural extension of programs focused on childhood development, creativity, engineering, making, and experiential learning.' },
    { icon: 'handshake', title: 'Businesses & Community Sponsors', text: 'An opportunity to support an accessible, community-focused program through funding, materials, equipment, expertise, or volunteer involvement.' },
  ] satisfies { icon: IconName; title: string; text: string }[],
  lookingTitle: "What we're looking for",
  looking: [
    'Landowners and developers interested in providing or leasing outdoor space.',
    'Community organizations, museums, schools, and recreation providers interested in partnerships.',
    'Local businesses willing to contribute building materials, tools, equipment, or financial support.',
    'Educators, playworkers, makers, and volunteers who share our enthusiasm for child-directed play.',
    'Families and community members who want to help bring this idea to life.',
  ],
  modelsTitle: 'Partnership models',
  models: ['Land leases', 'Shared community facilities', 'Sponsorships', 'Collaborative operating arrangements'],
  priority:
    'Our priority is finding the right location and partners to create a safe, sustainable, community-serving playground.',
};

export const finalCta = {
  eyebrow: 'Help bring adventure play to San Diego',
  title: 'The next great childhood adventure could start here.',
  body: [
    "We're at the beginning of this journey, and we're looking for people and organizations who believe children deserve more opportunities to explore, create, and discover.",
    "Whether you have land, resources, expertise, connections, or simply an interest in the idea, we'd love to hear from you.",
  ],
  closer: "Let's give San Diego kids a place to build something amazing.",
  cta: { label: 'Get involved / Become a partner', subject: 'Get involved with SD Adventure Playground' },
};
