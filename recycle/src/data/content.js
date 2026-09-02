import { FiTrash2, FiSun, FiZap, FiPackage, FiDroplet } from "react-icons/fi";
import { LuRecycle, LuLeaf, LuWheat } from "react-icons/lu";
import { GiGrain, GiCorn, GiCoconuts, GiWoodPile } from "react-icons/gi";

export const images = {
  hero: "https://images.pexels.com/photos/37907655/pexels-photo-37907655.jpeg?auto=compress&cs=tinysrgb&w=1600",
  heroSecondary:
    "https://images.pexels.com/photos/14314165/pexels-photo-14314165.jpeg?auto=compress&cs=tinysrgb&w=900",
  about:
    "https://images.pexels.com/photos/36846177/pexels-photo-36846177.jpeg?auto=compress&cs=tinysrgb&w=1100",
  aboutSecondary:
    "https://images.pexels.com/photos/15897036/pexels-photo-15897036.jpeg?auto=compress&cs=tinysrgb&w=700",
  impact:
    "https://images.pexels.com/photos/28214180/pexels-photo-28214180.jpeg?auto=compress&cs=tinysrgb&w=1100",
  ctaBand:
    "https://images.pexels.com/photos/3246159/pexels-photo-3246159.jpeg?auto=compress&cs=tinysrgb&w=1600",
  contact:
    "https://images.pexels.com/photos/3316340/pexels-photo-3316340.jpeg?auto=compress&cs=tinysrgb&w=1100",
};

export const materials = [
  {
    name: "Rice Husks",
    icon: GiGrain,
    image:
      "https://images.pexels.com/photos/11723484/pexels-photo-11723484.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Sourced from rice mills and processing centres for bulk industrial and biomass-related applications. Supply is arranged according to buyer specifications and seasonal availability.",
    outputs: [
      "Common buyer applications: biomass feedstock, silica/ash processing, industrial raw material.",
    ],
  },
  {
    name: "Maize Cobs",
    icon: GiCorn,
    image:
      "https://images.pexels.com/photos/34623758/pexels-photo-34623758.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Post-harvest corncobs are densified into high-heat fuel pellets and livestock feed blends.",
    outputs: [
      "Common buyer applications: biomass processing, absorbent products, further industrial processing.",
    ],
  },
  {
    name: "Cassava Peels",
    icon: LuWheat,
    image:
      "https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Peels from processing centres are detoxified and dried into livestock feed and organic compost.",
    outputs: [
      "Specifications may include moisture, cleanliness, form, and packaging requirements.",
    ],
  },
  {
    name: "Palm Kernel Shells",
    icon: LuLeaf,
    image:
      "https://images.pexels.com/photos/3246155/pexels-photo-3246155.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Hard shells from palm oil mills are converted into premium activated carbon and clean cookstove fuel.",
    outputs: [
      "Common buyer applications: biomass fuel feedstock, charcoal and activated-carbon manufacturing, industrial heat.",
    ],
  },
  {
    name: "Coconut Shells",
    icon: GiCoconuts,
    image:
      "https://images.pexels.com/photos/7676875/pexels-photo-7676875.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Coconut shells are processed into high-grade charcoal, gardening chips and craft materials.",
    outputs: [
      "Common buyer applications: charcoal, activated-carbon production, and other industrial processing.",
    ],
  },
  {
    name: "Sawdust & Wood Waste",
    icon: GiWoodPile,
    image:
      "https://images.pexels.com/photos/4888860/pexels-photo-4888860.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Sawmill residues are compacted into wood pellets and used as a binder in biomass products.",
    outputs: [
      "Common buyer applications: biomass processing, pellets/briquettes manufacturing, industrial feedstock.",
    ],
  },
];

export const services = [
  {
    title: "Supplier Sourcing",
    icon: LuRecycle,
    desc: "We identify farmers, mills, processors, and local suppliers capable of providing the required agricultural material.",
  },
  {
    title: "Aggregation & Volume Consolidation",
    icon: FiZap,
    desc: "Where one source cannot meet the required quantity, we coordinate supply from multiple approved sources and consolidate volumes.",
  },
  {
    title: "Specification & Quality Coordination",
    icon: FiTrash2,
    desc: "We work from the buyer’s requirements and coordinate checks for relevant factors such as material type, moisture, cleanliness, size, condition, and packaging.",
  },
  {
    title: "Packaging & Order Preparation",
    icon: FiSun,
    desc: "We coordinate suitable packaging, handling, storage, and load preparation based on the product and agreed shipment terms.",
  },
  {
    title: "Export Documentation & Logistics Coordination",
    icon: FiPackage,
    desc: "We support the commercial documentation and logistics coordination required to move orders from Nigeria to the buyer’s destination, working with appropriate logistics and trade-service providers.",
  },
  {
    title: "Recurring & Contract Supply",
    icon: FiDroplet,
    desc: "For buyers with ongoing demand, we can structure repeat sourcing schedules and supply programmes around forecasted volume requirements.",
  },
];

export const steps = [
  {
    title: "Buyer Requirement",
    desc: "You tell us the material you need, target specification, quantity, packaging preference, destination, and expected delivery schedule.",
    badge: "01",
  },
  {
    title: "Supplier Sourcing & Aggregation",
    desc: "We identify suitable sources within our network, confirm availability, and consolidate volume from farmers, mills, processors, or aggregators as required.",
    badge: "02",
  },
  {
    title: "Quality & Specification Check",
    desc: "The material is checked against the agreed commercial requirements before final shipment preparation. Third-party inspection can be coordinated when requested or required .",
    badge: "03",
  },
  {
    title: "Packaging, Documentation & Export",
    desc: "We coordinate packaging, loading, export documentation, and logistics arrangements based on the agreed Incoterms and shipment plan.",
    badge: "04",
  },
];

export const impactStats = [
  {
    value: "12,500",
    suffix: "+",
    label: "Tonnes of agro-waste recovered",
    icon: LuRecycle,
  },
  { value: "48", suffix: "", label: "Rural aggregation hubs", icon: FiPackage },
  {
    value: "9,200",
    suffix: "+",
    label: "Tonnes of CO₂ emissions avoided",
    icon: FiZap,
  },
  {
    value: "3,400",
    suffix: "+",
    label: "Farmers & households supported",
    icon: LuLeaf,
  },
];

export const sustainabilityBenefits = [
  {
    title: "Reduces Open Burning",
    desc: "Diverting field residues from open burning cuts smoke pollution and protects rural air quality.",
    icon: FiZap,
  },
  {
    title: "Restores Soil Health",
    desc: "Biochar and compost return carbon and nutrients to degraded soils, improving yields over time.",
    icon: LuLeaf,
  },
  {
    title: "Protects Forests",
    desc: "Biomass briquettes replace firewood and charcoal, easing pressure on remaining woodlands.",
    icon: FiSun,
  },
  {
    title: "Closes the Loop",
    desc: "A true circular economy — farm by-products become inputs for new products, energy and food.",
    icon: LuRecycle,
  },
];

export const industries = [
  { name: "Agriculture & Farming", icon: LuLeaf },
  { name: "Food & Beverage Processing", icon: FiPackage },
  { name: "Energy & Power", icon: FiZap },
  { name: "Livestock & Poultry", icon: GiCorn },
  { name: "Manufacturing", icon: LuRecycle },
  { name: "Hospitality & Eco-Tourism", icon: FiSun },
  { name: "Construction Materials", icon: FiDroplet },
  { name: "Horticulture", icon: LuWheat },
];

export const projects = [
  {
    title: "Benue Rice-Husk Briquette Plant",
    category: "Biomass Energy",
    image:
      "https://images.pexels.com/photos/13997996/pexels-photo-13997996.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "A 4-tonne/day facility turning rice husks from Gboko mills into clean-burning briquettes for rural households.",
  },
  {
    title: "Ogun Cassava-Peel Feed Programme",
    category: "Animal Feed",
    image:
      "https://images.pexels.com/photos/35109272/pexels-photo-35109272.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Partnering with 600 women processors to convert cassava peels into dried livestock feed, raising incomes.",
  },
  {
    title: "Delta Palm-Shell Biochar Initiative",
    category: "Soil Restoration",
    image:
      "https://images.pexels.com/photos/28214180/pexels-photo-28214180.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Pyrolysing palm kernel shells into biochar that sequesters carbon and rebuilds acidic Niger-Delta soils.",
  },
];

export const whyChooseUs = [
  {
    title: "Locally Rooted, Nationally Scaled",
    desc: "A Nigerian company built for Nigerian farms — we understand local crops, seasons and supply chains.",
    icon: LuLeaf,
  },
  {
    title: "Verifiable Environmental Impact",
    desc: "Every tonne we recover is tracked, so your sustainability claims are backed by real data.",
    icon: FiZap,
  },
  {
    title: "Fair Partnerships with Farmers",
    desc: "We pay fair prices and create rural jobs, putting income back into the communities that grow our food.",
    icon: LuRecycle,
  },
  {
    title: "Circular by Design",
    desc: "Our processes are engineered for zero waste — even our own by-products feed back into the system.",
    icon: FiPackage,
  },
];

export const testimonials = [
  {
    quote:
      "Recycle Harvest Africa paid me for rice husks I used to burn. Now my community breathes cleaner air and I earn extra income every season.",
    name: "Aisha Mohammed",
    role: "Rice Farmer, Benue State",
    image:
      "https://images.pexels.com/photos/3316340/pexels-photo-3316340.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote:
      "Their biomass briquettes replaced the firewood we bought for our poultry boilers. Cleaner, cheaper and the smoke is gone.",
    name: "Emeka Okafor",
    role: "Poultry Farm Owner, Anambra",
    image:
      "https://images.pexels.com/photos/10031264/pexels-photo-10031264.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote:
      "We supply cassava peels to their Ogun programme. The training and fair pricing transformed our women cooperative.",
    name: "Funmi Adeyemi",
    role: "Cassava Processor Lead, Ogun",
    image:
      "https://images.pexels.com/photos/4180650/pexels-photo-4180650.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export const faqs = [
  {
    q: "What types of agricultural waste do you collect?",
    a: "We collect rice husks, maize cobs, cassava peels, palm kernel shells, coconut shells, sawdust and most dry crop residues. If you are unsure whether your waste fits, contact us and we will assess it.",
  },
  {
    q: "Do you pay farmers for their agro-waste?",
    a: "Yes. We buy qualifying residues at fair prices through our aggregation hubs, creating extra income for farmers and processors while keeping waste out of landfills and off burning fields.",
  },
  {
    q: "What products do you make from the waste?",
    a: "Biomass briquettes and pellets, biochar, organic compost, activated carbon, livestock feed blends and eco-friendly packaging materials — all engineered to replace less sustainable inputs.",
  },
  {
    q: "Can my business switch to biomass energy?",
    a: "Absolutely. Our clean-energy advisory helps factories, farms and hospitality businesses transition from firewood, diesel or LPG to biomass fuels, often cutting both cost and emissions.",
  },
  {
    q: "Which states do you currently operate in?",
    a: "We run aggregation hubs across Benue, Kebbi, Ebonyi, Ogun, Anambra and Delta, with expansion underway into Kaduna, Oyo and Cross River states.",
  },
  {
    q: "How can my organisation partner with you?",
    a: "Reach out through the contact form below. We partner with farms, mills, NGOs, off-takers and government agencies on collection, supply and impact projects.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Materials", href: "#materials" },
  { label: "How It Works", href: "#how" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const company = {
  name: "Recycle Harvest Africa",
  tagline: "Turning Nigerian Farm Waste Into Sustainable Wealth",
  address: "15 Aerodrome Road, GRA, Ikeja, Lagos, Nigeria",
  phone: "+234 803 415 2200",
  email: "hello@recycleharvest.africa",
  hours: "Mon – Fri · 8:00am – 6:00pm WAT",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ],
};
