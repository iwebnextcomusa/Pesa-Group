import { Property, LandListing, TeamMember, ServiceItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "consulting",
    title: "Strategy Consulting",
    tagline: "Empowering Your Success Through Capital Projections & EB-5 Advisory",
    description: "As a premier international advisory firm, PESA Consulting Group possesses bespoke financial models tailored to customize, cultivate, and structure companies aiming to raise institutional capital.",
    iconName: "Briefcase",
    details: [
      "Custom Corporate Financial Modeling & Fund Allocation",
      "EB-5 Investor Program Sponsoring & Advisory",
      "300+ Active Investors Across 6 Sponsored Funds",
      "100% Approval Record on Adjudicated I-526 Petitions",
      "Capital Markets Alternatives (Senior Debt, Equity, Mezzanine)",
      "Strategic Market Entry & Scale Structuring"
    ]
  },
  {
    id: "realestate",
    title: "Luxury Real Estate",
    tagline: "Your Elite Partner in Luxury Homes & Commercial Assets",
    description: "Whether you are a first-time homebuyer, an experienced institutional investor, or looking to liquidate high-value portfolios, we guide you through every step of the premium real estate market.",
    iconName: "Home",
    details: [
      "Exclusive Access to Off-Market Listings in Texas",
      "High-Profile Residential & Commercial Transactions",
      "Direct Guidance from Certified Elite Broker Camy Likobe",
      "Comprehensive Property Valuation & Marketing",
      "Sellers & Buyers Portfolio Management"
    ]
  },
  {
    id: "land",
    title: "Construction & Land",
    tagline: "Discover Your Land Development Potential",
    description: "We connect visionary individual and institutional investors with prime commercial acreage and high-yield construction zones, delivering end-to-end development oversight.",
    iconName: "Trees",
    details: [
      "Sustainability-Focused Development Practices",
      "Rigorous Zoning, Permitting & Regulatory Approvals",
      "Thorough Environmental & Commercial Due Diligence",
      "Land Acquisition & Site Selection Assessment",
      "Comprehensive Infrastructure & Construction Project Management"
    ]
  },
  {
    id: "visa",
    title: "Visa Services (PESA Education)",
    tagline: "Securing Seamless International Study Abroad Pathways",
    description: "PESA Education simplifies the complex and overwhelming journey of immigrating for academic pursuits, specializing in study visas for the United States.",
    iconName: "GraduationCap",
    details: [
      "Specialized Student Visa (F-1) Sourcing for the USA",
      "Personalized Academic Course & University Selection",
      "Expert Document Compilation & Portfolio Review",
      "Rigorous Mock Visa Interview Preparation Sessions",
      "Post-Arrival Support (Housing, Local Banking, Cultural Alignment)"
    ]
  },
  {
    id: "aviation",
    title: "Private Jet Acquisition",
    tagline: "Elevating Your Travel with Elite Global Aircraft Procurement",
    description: "PESA GROUP acts as your trusted acquisition advisor, tapping into a discrete off-market network to source elite private aviation assets tailored to your executive itinerary.",
    iconName: "Plane",
    details: [
      "Global Sourcing Network of Off-Market & Pre-Listed Aircraft",
      "Custom Passenger Capacity & Long-Range Performance Analysis",
      "Dispatch of Engineers for Rigorous Pre-Purchase Inspections",
      "Detailed On-Site Maintenance & Logbook Auditing",
      "Seamless Legal Closing, Registration, and Flight Delivery"
    ]
  },
  {
    id: "mining",
    title: "Mining & Critical Minerals",
    tagline: "Your Trusted Partner in Ethical Mineral Sourcing",
    description: "We specialize in the supply-chain security of premium mining products and strategic critical minerals essential for clean technology, sustainable energy, and modern infrastructure.",
    iconName: "Compass",
    details: [
      "Sourcing of High-Quality Strategic Critical Minerals",
      "Absolute Commitment to Ethical Sourcing & Labor Standards",
      "Environmental Responsibility & Ecological Reclamation Support",
      "Strong Stakeholder Relationships across DRC and Global Markets",
      "Custom Mineral Supply Agreements for Global Technology Manufacturers"
    ]
  }
];

export const propertiesData: Property[] = [
  {
    id: "p1",
    title: "Grand Estate Fairview",
    price: "$1,950,000",
    address: "1703 Big Bend Boulevard, Fairview, TX 75069",
    beds: 6,
    baths: 7,
    sqft: "6,588",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p2",
    title: "The Sundance Chateau",
    price: "$7,750,000",
    address: "680 Sundance Court, Prosper, TX 75078",
    beds: 5,
    baths: 7,
    sqft: "10,494",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p3",
    title: "Oak Bend Manor",
    price: "$3,000,000",
    address: "5520 Oak Bend Trail, Celina, TX 75078",
    beds: 5,
    baths: 6,
    sqft: "7,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p4",
    title: "The Aristides Modern",
    price: "$1,680,000",
    address: "11166 Aristides Drive, Frisco, TX 75035",
    beds: 4,
    baths: 5,
    sqft: "5,004",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    featured: false
  },
  {
    id: "p5",
    title: "Hidden Creek Villa",
    price: "$2,499,900",
    address: "6525 Hidden Creek Court, Plano, TX 75024",
    beds: 5,
    baths: 6,
    sqft: "5,703",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    featured: false
  },
  {
    id: "p6",
    title: "Creek View Residence",
    price: "$2,840,900",
    address: "2840 Creek View Court, Prosper, TX 75078",
    beds: 7,
    baths: 9,
    sqft: "8,753",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=1200",
    featured: false
  }
];

export const landListingsData: LandListing[] = [
  {
    id: "l1",
    title: "Frisco Commercial Megasite",
    acres: "172.00 Acres",
    price: "$14,853,600",
    location: "TBD Main St 5, Frisco, TX 75035",
    description: "A colossal unimproved parcel of prime development land featuring complete water rights, high accessibility corridors, and exceptional suitability for master-planned commercial or high-end residential community development.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "l2",
    title: "Frisco Premium Infill Parcel",
    acres: "6.379 Acres",
    price: "$7,654,800",
    location: "TBD Main St 3, Frisco, TX 75035",
    description: "Highly coveted infill parcel in the heart of Frisco, TX. Ideal for immediate commercial office, retail park, or custom residential enclave. Fully surveyed and ready for municipal submission.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200"
  }
];

export const teamData: TeamMember[] = [
  {
    name: "Camy Likobe",
    role: "President & Chief Executive Officer (CEO)",
    experience: "Over a decade in global enterprise leadership, financial asset management, and luxury real estate brokerage.",
    bio: "Mr. Likobe is an accomplished corporate leader who has built a successful career across premier global organizations. Having served in high-impact positions at Branch Banking & Trust (BB&T), TD Ameritrade, and Competitive Edge Realty, he founded PESA Consulting Group to build a global legacy of purpose-driven solutions for discerning individual and institutional clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Charles Adekola",
    role: "Vice President",
    experience: "10+ years specializing in consulting, credit structuring, loan syndication, and high-growth business advisory.",
    bio: "Mr. Adekola launched his professional journey in the financial consulting loan industry, making notable impacts as a premier director at Lender Express. Over more than 10 years, he has led key client transactions, strategic investments, and structural development programs, collaborating closely with local managers in Dallas and Central Africa.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Carole Boboy",
    role: "Chief Operations Officer (COO)",
    experience: "8+ years in global business logistics, international trade networks, and client success workflows.",
    bio: "Ms. Boboy manages the day-to-day operational execution of PESA's diversified industries. Bridging executive efforts across the Dallas and Kinshasa administrative branches, she ensures the delivery of top-quality service across our visa services, mining, and luxury jet sales networks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Laetitia Kalala",
    role: "Chief Financial Officer (CFO)",
    experience: "9+ years in international tax compliance, corporate treasury, and private equity capital management.",
    bio: "Ms. Kalala leads PESA's financial structures, managing client capital projections, EB-5 investment structures, and resource allocation. Her extensive treasury experience ensures absolute transparency, strict compliance, and optimal investor yield across international jurisdictions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  }
];
