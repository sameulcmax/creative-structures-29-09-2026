export const images = {
  homeExterior:
    "/hero.png",
  exteriorAlt:
    "https://images.pexels.com/photos/8143698/pexels-photo-8143698.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  working:
    "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800",
  tools:
    "https://images.pexels.com/photos/8447773/pexels-photo-8447773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  framing:
    "https://images.pexels.com/photos/33404353/pexels-photo-33404353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  kitchen:
    "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  kitchenBlue:
    "https://images.pexels.com/photos/34558064/pexels-photo-34558064.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  kitchenBright:
    "https://images.pexels.com/photos/8089188/pexels-photo-8089188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  bath:
    "https://images.pexels.com/photos/8146325/pexels-photo-8146325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  bathMarble:
    "https://images.pexels.com/photos/5502225/pexels-photo-5502225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  living:
    "https://images.pexels.com/photos/36777857/pexels-photo-36777857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  basement:
    "https://images.pexels.com/photos/36777951/pexels-photo-36777951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  deck:
    "https://images.pexels.com/photos/7587879/pexels-photo-7587879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
  deckAlt:
    "https://images.pexels.com/photos/10847167/pexels-photo-10847167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    number: "01",
    title: "Whole-home renovation",
    short: "Reimagine the way your entire home looks, flows, and feels.",
    description:
      "From floor plan changes to coordinated finishes, we bring complex renovations into one clear, carefully managed build.",
    features: ["Interior reconfiguration", "Finish carpentry", "Flooring and paint", "Coordinated trade work"],
    image: images.living,
  },
  {
    number: "02",
    title: "Kitchens",
    short: "Hardworking kitchens with lasting materials and thoughtful detail.",
    description:
      "We create kitchens around the way you cook, gather, and live, balancing practical planning with a refined finish.",
    features: ["Layout planning", "Cabinet installation", "Tile and surfaces", "Lighting and finish work"],
    image: images.kitchen,
  },
  {
    number: "03",
    title: "Bathrooms",
    short: "Calm, functional spaces built to stand up to daily life.",
    description:
      "From compact powder rooms to primary suites, every layer is considered, from waterproofing to the final fixture.",
    features: ["Showers and tubs", "Vanities and storage", "Tile installation", "Fixture coordination"],
    image: images.bath,
  },
  {
    number: "04",
    title: "Additions & extensions",
    short: "More room, designed to feel like it has always belonged.",
    description:
      "We help transform space needs into well-integrated additions that respect the character and structure of your home.",
    features: ["Living space additions", "Primary suites", "Home offices", "Structural coordination"],
    image: images.exteriorAlt,
  },
  {
    number: "05",
    title: "Basements",
    short: "Turn underused square footage into space with a real purpose.",
    description:
      "Create a flexible lower level for relaxing, working, hosting, or all three, with a finish level that matches the rest of your home.",
    features: ["Family rooms", "Guest spaces", "Home gyms", "Storage solutions"],
    image: images.basement,
  },
  {
    number: "06",
    title: "Decks & exteriors",
    short: "Outdoor spaces that add character, function, and curb appeal.",
    description:
      "From a new deck to exterior upgrades, we build durable spaces that make the most of your home beyond its walls.",
    features: ["Composite and wood decks", "Railings and stairs", "Exterior trim", "Entry improvements"],
    image: images.deck,
  },
];

export type ProjectCategory = "Kitchens" | "Bathrooms" | "Living Spaces" | "Exteriors";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Warm modern kitchen",
    category: "Kitchens",
    image: images.kitchen,
    description: "Natural texture, generous work surfaces, and an open layout designed for everyday gathering.",
  },
  {
    id: 2,
    title: "Quiet primary bath",
    category: "Bathrooms",
    image: images.bath,
    description: "Warm wood, clean lines, and practical storage create an easy, restorative space.",
  },
  {
    id: 3,
    title: "Open family living",
    category: "Living Spaces",
    image: images.living,
    description: "A connected living and kitchen plan shaped around light, movement, and family life.",
  },
  {
    id: 4,
    title: "Garden-facing exterior",
    category: "Exteriors",
    image: images.homeExterior,
    description: "A modern exterior with expansive glazing and a seamless connection to the yard.",
  },
  {
    id: 5,
    title: "Deep blue kitchen",
    category: "Kitchens",
    image: images.kitchenBlue,
    description: "A tailored cabinet palette, durable stone, and daylight give this kitchen its distinct point of view.",
  },
  {
    id: 6,
    title: "Marble shower suite",
    category: "Bathrooms",
    image: images.bathMarble,
    description: "A glass-lined shower and restrained material palette make a compact plan feel spacious.",
  },
  {
    id: 7,
    title: "Entertaining level",
    category: "Living Spaces",
    image: images.basement,
    description: "An underused lower level becomes a flexible destination for relaxing and hosting.",
  },
  {
    id: 8,
    title: "Woodland deck",
    category: "Exteriors",
    image: images.deckAlt,
    description: "A generous wood deck extends the living space into its leafy surroundings.",
  },
  {
    id: 9,
    title: "Clean-lined kitchen",
    category: "Kitchens",
    image: images.kitchenBright,
    description: "Integrated appliances and a calm palette keep this highly functional kitchen feeling effortless.",
  },
];

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}