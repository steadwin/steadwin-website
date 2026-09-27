export const company = {
  name: "STEADWIN GROUP",
  phone: "+91 87926 95400",
  tel: "+918792695400",
  email: "info@steadwin.in",
  address: "Second Floor, 26, Puttenahalli Rd, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
};

export const navigation = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/about/", key: "about" },
  { label: "Services", href: "/services/", key: "services" },
  { label: "Residential", href: "/residential/", key: "residential" },
  { label: "Commercial", href: "/commercial/", key: "commercial" },
  { label: "Projects", href: "/projects/", key: "projects" },
  { label: "Gallery", href: "/gallery/", key: "gallery" },
  { label: "Contact", href: "/contact/", key: "contact" },
];

export const services = [
  {
    slug: "complete-interiors", title: "Complete interior work", short: "Complete interiors",
    category: "SPACES, PLANNED TOGETHER", number: "01",
    intro: "Interior execution for homes and businesses, bringing furniture, finishes and essential installations into one considered space.",
    description: "Bring your interior requirements together, from modular kitchens and wardrobes to carpentry, wall finishes and installation work. We undertake complete projects as well as selected interior works.",
    works: ["Modular kitchens and utility storage", "Wardrobes and fitted storage", "TV units, pooja units and wall panelling", "Carpentry and interior furniture work", "Residential and commercial interior execution", "Renovation and finishing work"],
    considerations: "Share a floor plan or site measurements, your room-wise requirements and any finish references. We can discuss the work, materials and installation sequence for your space.",
    applications: ["Apartments & villas", "Offices", "Shops & showrooms"],
    image: "living.webp", imageAlt: "Design inspiration for a contemporary living and dining room",
  },
  {
    slug: "electrical-plumbing", title: "Electrical & plumbing work", short: "Electrical & plumbing",
    category: "THE ESSENTIAL INSTALLATIONS", number: "02",
    intro: "Electrical and plumbing work planned around the layout and everyday use of your property.",
    description: "Coordinate power points, lighting positions, water lines and fittings with your interior work. The scope can cover new installations or changes to existing interiors, subject to site conditions.",
    works: ["Electrical wiring and power points", "Lighting points and fixture installation", "Switches and related electrical fittings", "Plumbing lines and connection points", "Kitchen and bathroom plumbing fittings", "Installation changes during renovation"],
    considerations: "Share the proposed room layout, appliance locations and existing electrical or plumbing details. Access, site condition and the agreed installation requirements help define the work.",
    applications: ["Homes", "Offices", "Commercial interiors"], image: "", imageAlt: "",
  },
  {
    slug: "painting-pop", title: "Painting & POP work", short: "Painting & POP",
    category: "WALLS, CEILINGS & FINISHES", number: "03",
    intro: "Bring a space together with prepared walls, considered colours and ceiling details.",
    description: "From wall preparation and painting to POP and false-ceiling work, choose finishes that suit the rooms and the way you use them. We discuss surface condition and finish choices before defining the scope.",
    works: ["Interior wall preparation", "Wall and ceiling painting", "Repainting and finish updates", "POP work and decorative details", "False ceilings", "Coordination with lighting positions"],
    considerations: "Share the approximate area, current wall and ceiling condition, preferred colours and ceiling references. Final materials and preparation are discussed for your site.",
    applications: ["Living spaces", "Offices", "Shops & showrooms"], image: "bedroom.webp", imageAlt: "Bedroom concept showing coordinated wall and ceiling finishes",
  },
  {
    slug: "granite-tiles", title: "Granite & tile work", short: "Granite & tiles",
    category: "SURFACES WITH PURPOSE", number: "04",
    intro: "Flooring, wall surfaces and countertops selected and installed for your interior requirements.",
    description: "Granite and tile work can form part of a complete interior project or an individual installation. We discuss the area, material selection, layout and edge details to establish the scope.",
    works: ["Granite installation", "Kitchen and utility countertops", "Floor tile installation", "Wall tiles and splashbacks", "Surface replacement during renovation", "Related edge and finishing work"],
    considerations: "Share site measurements, intended material and tile sizes, and details of any existing surfaces. Site preparation and installation requirements are reviewed before quotation.",
    applications: ["Kitchens & utilities", "Floors & walls", "Commercial surfaces"], image: "kitchen.webp", imageAlt: "Kitchen design inspiration showing light stone counters and coordinated flooring",
  },
  {
    slug: "networking-cctv", title: "Internet, networking & CCTV", short: "Networking & CCTV",
    category: "CONNECTED INTERIORS", number: "05",
    intro: "Network cabling, internet setup and CCTV installation for the way your space operates.",
    description: "Plan data points, Wi-Fi equipment positions and camera locations alongside the interior layout. We undertake related cabling and installation work for residential and commercial requirements.",
    works: ["Internet and Wi-Fi equipment setup", "Network and data cabling", "Data points for workstations", "CCTV camera installation", "Camera cabling and equipment connections", "Coordination with interior installation work"],
    considerations: "Share your floor plan, workstation count, internet provider details and proposed camera locations. Equipment, coverage requirements and internet service arrangements are agreed separately in the project scope.",
    applications: ["Homes", "Workplaces", "Shops & showrooms"], image: "", imageAlt: "",
  },
  {
    slug: "glass-aluminium", title: "Glass & aluminium work", short: "Glass & aluminium",
    category: "LIGHT, LINES & DETAIL", number: "06",
    intro: "Glass and aluminium installations that complement the layout and finish of your interior.",
    description: "We undertake interior glass installation, aluminium framing and glazing work to match the agreed requirements. Dimensions, glass specification, framing and hardware are discussed for each installation.",
    works: ["Interior glass installation", "Aluminium framing", "Glazing work", "Custom-sized interior glass work", "Glass and frame installation details", "Coordination with adjacent finishes"],
    considerations: "Share the opening sizes, site photos and intended use. Glass specifications, framing, hardware and fixing requirements need to be confirmed for the actual site.",
    applications: ["Homes", "Office interiors", "Commercial spaces"], image: "", imageAlt: "",
  },
  {
    slug: "aluminium-glass-railings", title: "Aluminium & glass railings", short: "Aluminium & glass railings",
    category: "DEFINED EDGES, OPEN VIEWS", number: "07",
    intro: "Aluminium railing systems and glass railings for balconies, staircases and open edges.",
    description: "Discuss a railing system that suits your space, its finish and the installation conditions. We review measurements and fixing requirements before finalising the system and scope.",
    works: ["Aluminium railing systems", "Glass railing installation", "Balcony railings", "Staircase railings", "Railing finish and hardware selection", "Site measurement and installation planning"],
    considerations: "Share the total length, location, staircase or balcony photos and finish preference. Glass, height, system suitability and fixing details must be confirmed for the site before installation.",
    applications: ["Balconies", "Staircases", "Residential & commercial"], image: "", imageAlt: "",
  },
  {
    slug: "skylights-office-partitions", title: "Glass skylights & office partitions", short: "Skylights & office partitions",
    category: "NATURAL LIGHT. DEFINED SPACES.", number: "08",
    intro: "Glass skylights and office partitions to bring light into spaces and define the way they are used.",
    description: "Create separate work areas with office glass partitions or discuss a glass skylight for your property. We review the dimensions, supporting structure and installation details for the chosen application.",
    works: ["Glass skylight installation", "Skylight framing and glazing work", "Office glass partitions", "Cabin and meeting-room partitions", "Partition door and hardware requirements", "Installation and finishing coordination"],
    considerations: "Share opening dimensions or an office layout, site photographs and your intended use. Glass, support, weather protection for skylights and partition hardware are agreed after reviewing the site.",
    applications: ["Skylight openings", "Office cabins", "Meeting rooms"], image: "", imageAlt: "",
  },
];

export const gallery = [
  { image: "living.webp", title: "Living & dining", subtitle: "ROOM TO UNWIND", alt: "Contemporary living and dining room concept with walnut finishes and comfortable seating", width: 1672, height: 941 },
  { image: "kitchen.webp", title: "Modular kitchens", subtitle: "BEAUTY IN THE ROUTINE", alt: "Modular kitchen concept with graphite cabinets and light stone countertops", width: 1448, height: 1086 },
  { image: "bedroom.webp", title: "Bedrooms & wardrobes", subtitle: "YOUR PERSONAL RETREAT", alt: "Bedroom concept with fitted walnut wardrobes and soft daylight", width: 1448, height: 1086 },
];

// User-provided photographs of STEADWIN GROUP's completed interior work.
// Kept separate from the concept visuals in `gallery` above.
export const completedProjects = [
  { image: "projects/bedroom-main.webp", title: "Bedroom interior", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom interior" },
  { image: "projects/bedroom-detail.webp", title: "Bedroom detail", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom detail" },
  { image: "projects/bedroom-suite.webp", title: "Bedroom suite", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom suite" },
  { image: "projects/bedroom-feature.webp", title: "Bedroom & wardrobe", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom and wardrobe interior" },
  { image: "projects/bedroom-storage.webp", title: "Storage & study", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom storage and study area" },
  { image: "projects/bedroom-wall.webp", title: "Feature wall", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom feature wall" },
  { image: "projects/bedroom-view.webp", title: "Bedroom view", category: "RESIDENTIAL INTERIORS", alt: "Completed bedroom interior view" },
  { image: "projects/kids-bedroom.webp", title: "Kids bedroom", category: "RESIDENTIAL INTERIORS", alt: "Completed kids bedroom interior" },
  { image: "projects/dressing-vanity.webp", title: "Dressing & vanity", category: "RESIDENTIAL INTERIORS", alt: "Completed dressing and vanity area" },
  { image: "projects/dressing-storage.webp", title: "Dressing storage", category: "RESIDENTIAL INTERIORS", alt: "Completed dressing storage interior" },
  { image: "projects/kids-dressing.webp", title: "Kids room storage", category: "RESIDENTIAL INTERIORS", alt: "Completed kids room storage" },
  { image: "projects/dining-area.webp", title: "Dining area", category: "RESIDENTIAL INTERIORS", alt: "Completed dining area interior" },
  { image: "projects/living-area.webp", title: "Living area", category: "RESIDENTIAL INTERIORS", alt: "Completed living area interior" },
  { image: "projects/kitchen-detail.webp", title: "Kitchen detail", category: "RESIDENTIAL INTERIORS", alt: "Completed kitchen interior detail" },
  { image: "projects/bathroom-detail.webp", title: "Bathroom detail", category: "RESIDENTIAL INTERIORS", alt: "Completed bathroom interior detail" },
  { image: "projects/bathroom-fitout.webp", title: "Bathroom fit-out", category: "RESIDENTIAL INTERIORS", alt: "Completed bathroom fit-out" },
  { image: "projects/wardrobe-wall.webp", title: "Wardrobe wall", category: "RESIDENTIAL INTERIORS", alt: "Completed wardrobe wall interior" },
];

export const projectTypes = [
  {
    number: "01",
    title: "Complete home interiors",
    label: "RESIDENTIAL",
    text: "Room-by-room interiors for apartments, homes and villas - from kitchens and wardrobes to finishes and final installations.",
    points: ["Kitchens, bedrooms and living spaces", "Carpentry, electrical, plumbing and finishes"],
    service: "Complete interior work",
    project: "Residential",
  },
  {
    number: "02",
    title: "Office & commercial spaces",
    label: "COMMERCIAL",
    text: "Coordinated interiors for offices, shops and showrooms, planned around the way your team and customers use the space.",
    points: ["Partitions, cabins and work areas", "Networking, CCTV, lighting and surface finishes"],
    service: "Complete interior work",
    project: "Commercial",
  },
  {
    number: "03",
    title: "Glass & aluminium details",
    label: "SPECIALIST WORKS",
    text: "Glass, aluminium framing, railings, skylights and office partitions tailored to the measurements and fixing needs of the site.",
    points: ["Railings, glazing and aluminium frames", "Skylights and office glass partitions"],
    service: "Glass & aluminium work",
    project: "Residential",
  },
  {
    number: "04",
    title: "Renovation & finishing work",
    label: "UPGRADE YOUR SPACE",
    text: "Selected works and phased upgrades for spaces that need a clearer finish, safer installations or a more functional layout.",
    points: ["Painting, POP, tiles and granite", "Electrical, plumbing and related changes"],
    service: "Painting & POP work",
    project: "Residential",
  },
];

export const serviceAreas = [
  "JP Nagar", "Jayanagar", "Bannerghatta Road", "Kanakapura Road", "BTM Layout", "HSR Layout", "Electronic City", "Whitefield",
];

export const steps = [
  { title: "Tell us your idea", text: "Share your location, the type of space and the work you have in mind." },
  { title: "Review the requirements", text: "Discuss site measurements, layouts, materials and finish preferences." },
  { title: "Agree on the details", text: "Review the scope, quotation and schedule for your specific project." },
  { title: "Bring it together", text: "Coordinate the work and review the installation and finishing details." },
];

export function contactHref(service?: string, project?: string, purpose?: string) {
  const parameters = new URLSearchParams();
  if (service) parameters.set("service", service);
  if (project) parameters.set("project", project);
  if (purpose) parameters.set("purpose", purpose);
  return "/contact/" + (parameters.size ? "?" + parameters.toString() : "") + "#enquiry";
}

export const pageDetails = [
  { path: "/", key: "home", title: "STEADWIN GROUP | Residential & Commercial Interiors", description: "Complete residential and commercial interior work in Bengaluru: electrical, plumbing, painting, POP, granite, tiles, networking, CCTV, glass, aluminium railings, skylights and office partitions." },
  { path: "/about/", key: "about", title: "About STEADWIN GROUP | Interior Works in Bengaluru", description: "Meet STEADWIN GROUP and explore our approach to complete residential and commercial interior and installation work in Bengaluru." },
  { path: "/services/", key: "services", title: "Interior Services | STEADWIN GROUP", description: "Explore complete interior work, electrical, plumbing, painting, POP, granite, tiles, CCTV, networking, aluminium, glass, railings, skylights and office partitions." },
  { path: "/residential/", key: "residential", title: "Residential Interiors | STEADWIN GROUP", description: "Complete interior works for apartments, villas and homes in Bengaluru: kitchens, wardrobes, carpentry, finishes and related installations." },
  { path: "/commercial/", key: "commercial", title: "Commercial Interiors | STEADWIN GROUP", description: "Interior execution and related works for offices, shops, showrooms and commercial spaces in Bengaluru." },
  { path: "/gallery/", key: "gallery", title: "Interior Design Inspiration | STEADWIN GROUP", description: "Explore living room, kitchen, bedroom and wardrobe design inspiration for your next residential interior project." },
  { path: "/contact/", key: "contact", title: "Contact STEADWIN GROUP | JP Nagar, Bengaluru", description: "Discuss your residential or commercial project. Visit our JP Nagar office, call +91 87926 95400 or email info@steadwin.in." },
];
