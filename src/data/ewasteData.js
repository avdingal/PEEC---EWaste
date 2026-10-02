export const METRICS_DATA = [
  {
    id: 'generated',
    value: '537M kg',
    label: 'E-waste generated in the Philippines (2022)',
    subtext: 'Equivalent to over 50,000 garbage trucks of discarded electronics each year.',
    trend: '+7.4% YoY',
    icon: 'Weight'
  },
  {
    id: 'rank',
    value: '3rd Largest',
    label: 'E-waste producer in Southeast Asia',
    subtext: 'Following Indonesia and Thailand in national electronic waste output volume.',
    trend: 'Critical Ranking',
    icon: 'Globe'
  },
  {
    id: 'per-capita',
    value: '4.7 to 5.5 kg',
    label: 'Current to projected per-capita e-waste',
    subtext: 'Per person e-waste growth projected rapidly between 2022 and 2030.',
    trend: '+17% Increase',
    icon: 'TrendingUp'
  }
];

export const WEEE_CATEGORIES = [
  {
    id: 'cat6',
    name: 'Category 6: Small IT & Telecom',
    highlighted: true,
    size: '50 cm or less',
    examples: ['Smartphones', 'Charging Cables', 'Routers', 'Power Banks', 'Smartwatches'],
    description: 'Small devices under 50cm that accumulate rapidly in homes due to fast upgrade cycles and brief support windows.',
    impactScore: 'High Accumulation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cat2',
    name: 'Category 5: Small Equipment',
    highlighted: false,
    size: '50 cm or less',
    examples: ['Vacuum Cleaners', 'Toasters', 'Electric Toothbrushes', 'Hair Dryers', 'Electric Shavers', 'Earphones', 'E-Readers'],
    description: 'Small equipment with no external dimension over 50cm.',
    impactScore: 'Medium Accumulation',
    image: 'https://images.unsplash.com/photo-1618506408870-64d8bec48248?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cat3',
    name: 'Category 2: Screens & Monitors',
    highlighted: false,
    size: 'Screen over 100cm²',
    examples: ['Laptops', 'Tablets', 'Monitors', 'Televisions'],
    description: 'Screens, monitors and equipment containing screens larger than 100 cm².',
    impactScore: 'High Resource Loss',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cat1',
    name: 'Category 1: Temperature Exchange',
    highlighted: false,
    size: 'No size limit',
    examples: ['Refrigerators', 'Air Conditioners', 'Freezers', 'Dehumidifiers'],
    description: 'Cooling and heating equipment that contains refrigerants requiring specialized handling.',
    impactScore: 'Hazardous Waste',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80'
  }
];

export const ROOT_CAUSES = [
  {
    id: 'lifespan',
    title: 'Short Lifespans & Limited Support',
    description: 'Brief hardware update cycles and rapid software drop-off force early device retirement, disproportionately straining students and budget users.',
    stat: '2.5 Years',
    statLabel: 'Avg. Smartphone Use',
    icon: 'Clock'
    url: 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/',
  },
  {
    id: 'repair',
    title: 'Difficult-to-Repair Engineering',
    description: 'Glued battery housings, proprietary pentalobe screws, and paired components force consumers into buying new devices instead of fixing existing ones.',
    stat: '78%',
    statLabel: 'Deemed Unrepairable',
    icon: 'Wrench'
    url: 'https://openrepair.org/repair-data/open-repair-alliance-repair-data-for-2025-over-400000-items-logged/',
  },
  {
    id: 'demand',
    title: 'Surging Consumer Demand',
    description: 'Rapid tech adoption, remote learning/work needs, and multiple device ownership accelerate the accumulation of obsolete hardware per household.',
    stat: '3.4 Devices',
    statLabel: 'Per Urban Household',
    icon: 'Smartphone'
    url: 'https://psa.gov.ph/statistics/population-and-housing/node/1684059979',
  },
  {
    id: 'collection',
    title: 'Lack of Formal Collection Infrastructure',
    description: 'Minimal accessible drop-off centers, absence of municipal curbside e-waste sorting, and low public awareness lead to electronics sitting forgotten in drawers or tossed in general trash.',
    stat: '< 15%',
    statLabel: 'Formally Recycled',
    icon: 'Trash2'
    url: 'https://bantoxics.org/2024/10/14/iwas-ewaste-infographic/',
  }
];

export const IMPACTS = [
  {
    id: 'ecosystem',
    title: 'Ecosystem Hazards',
    subtitle: 'Soil & Water Contamination',
    description: 'Open burning of cables and informal open dumping leach toxic lead, cadmium, mercury, and flame retardants into ground soil and vital water tables.',
    keyPoints: [
      'Leaching of Lead and Cadmium into agricultural soil',
      'Toxic runoff entering municipal rivers and coastal waters',
      'Air contamination from open burning of PVC cable insulation'
    ],
    toxins: ['Lead (Pb)', 'Mercury (Hg)', 'Cadmium (Cd)', 'Brominated Flame Retardants'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    icon: 'TreePoison'
  },
  {
    id: 'fire',
    title: 'Fire Hazards',
    subtitle: 'Thermal Runaway & Landfill Blazes',
    description: 'Punctured or damaged discarded lithium-ion batteries cause severe thermal runaway fires in garbage trucks, sorting facilities, and municipal landfills.',
    keyPoints: [
      'Spontaneous combustion of compromised Li-ion batteries under pressure',
      'Hazardous chemical smoke plumes released into nearby neighborhoods',
      'Multi-day landfill fires requiring extensive emergency response'
    ],
    toxins: ['Lithium Fluoride Gas', 'Cobalt Dust', 'Hydrofluoric Acid'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
    icon: 'Flame'
  },
  {
    id: 'health',
    title: 'Human Health Risks',
    subtitle: 'Occupational Toxic Exposures',
    description: 'Informal waste workers—including women and children—face chronic respiratory damage, neurological degradation, and heavy metal poisoning from unprotected dismantling.',
    keyPoints: [
      'Inhalation of heavy metal fumes during manual circuit smelting',
      'Neurological damage from chronic lead and mercury ingestion',
      'Skin dermatitis and respiratory diseases among informal recyclers'
    ],
    toxins: ['Dioxins', 'Furan Derivatives', 'Lead Dust'],
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80',
    icon: 'Activity'
  },
  {
    id: 'resource',
    title: 'Resource Loss',
    subtitle: 'Squandered Precious Metals',
    description: 'Irrecoverable loss of critical raw materials including high-purity gold, silver, copper, and palladium buried forever in unmanaged landfills.',
    keyPoints: [
      '1 ton of smartphones contains 100x more gold than 1 ton of gold ore',
      'Billions in precious metals dumped annually without recovery',
      'Increased mining pressure for virgin minerals with high carbon footprints'
    ],
    toxins: ['Gold (Au)', 'Copper (Cu)', 'Palladium (Pd)', 'Rare Earth Elements'],
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1000&q=80',
    icon: 'Coins'
  }
];

export const ACTION_STEPS = [
  {
    number: '01',
    title: 'Repair & Extend First',
    description: 'Replace aging batteries, upgrade software, or fix cracked screens before writing off functional tech.',
    actionText: 'Find Repair Guides',
    icon: 'Wrench'
  },
  {
    number: '02',
    title: 'Donate Working Devices',
    description: 'Pass along functional laptops, phones, and chargers to students or community centers in need.',
    actionText: 'Locate Donation Partners',
    icon: 'HeartHandshake'
  },
  {
    number: '03',
    title: 'Utilize Certified Drop-offs',
    description: 'Never toss battery-powered devices into household trash. Take them to designated e-waste collection bins.',
    actionText: 'Find Bins Below',
    icon: 'MapPin'
  }
];

export const DROP_OFF_LOCATIONS = [
  {
    id: 1,
    name: 'SM Cyberzone E-Waste Collection Bin',
    address: '4th Floor, SM Megamall, EDSA corner Doña Julia Vargas Ave, Mandaluyong',
    city: 'Mandaluyong / Metro Manila',
    region: 'NCR',
    type: 'Mall Drop-off',
    acceptedItems: ['Smartphones', 'Tablets', 'Chargers', 'Cables', 'Batteries', 'Small Gadgets'],
    hours: '10:00 AM - 9:00 PM Daily',
    operator: 'SM Cares & DENR-EMB',
    contact: '(02) 8831-1000',
    distance: '1.2 km away'
  },
  {
    id: 2,
    name: 'Globe Telecom E-Waste Zero Hub',
    address: 'Globe Tower, 32nd St corner 7th Ave, Bonifacio Global City, Taguig',
    city: 'Taguig / Metro Manila',
    region: 'NCR',
    type: 'Telecom Center',
    acceptedItems: ['Old Phones', 'Broadband Modems', 'Earphones', 'Power Banks', 'Batteries'],
    hours: '9:00 AM - 6:00 PM (Mon-Fri)',
    operator: 'Globe E-Waste Zero Initiative',
    contact: 'e-waste@globe.com.ph',
    distance: '3.5 km away'
  },
  {
    id: 3,
    name: 'Ayala Malls Green Drop-off Depot',
    address: 'Ground Floor Concierge, Greenbelt 5, Makati City',
    city: 'Makati / Metro Manila',
    region: 'NCR',
    type: 'Retail Hub',
    acceptedItems: ['Laptops', 'Smartphones', 'Computer Accessories', 'Small Appliances'],
    hours: '11:00 AM - 9:00 PM Daily',
    operator: 'Ayala Land Sustainability & EcoWaste Coalition',
    contact: '(02) 7752-7272',
    distance: '4.8 km away'
  },
  {
    id: 4,
    name: 'Quezon City Hall Environmental Management Hub',
    address: 'QC Hall Compound, Elliptical Road, Diliman, Quezon City',
    city: 'Quezon City',
    region: 'NCR',
    type: 'Municipal Collection',
    acceptedItems: ['All Household E-Waste', 'Small IT Equipment', 'Batteries', 'Fluorescent Bulbs'],
    hours: '8:00 AM - 5:00 PM (Mon-Fri)',
    operator: 'QC Climate Change and Environmental Sustainability Department',
    contact: '(02) 8988-4242',
    distance: '7.1 km away'
  },
  {
    id: 5,
    name: 'SM City Cebu Cyberzone E-Bin',
    address: '2nd Level, SM City Cebu, Juan Luna Ave Ext, Cebu City',
    city: 'Cebu City',
    region: 'Visayas',
    type: 'Mall Drop-off',
    acceptedItems: ['Smartphones', 'Cables', 'Power Supplies', 'Small IT Gear'],
    hours: '10:00 AM - 9:00 PM Daily',
    operator: 'SM Cares Cebu',
    contact: '(032) 231-0557',
    distance: 'Central Visayas Hub'
  },
  {
    id: 6,
    name: 'SM Lanang Premier E-Waste Depot',
    address: '3rd Level Cyberzone, SM Lanang Premier, J.P. Laurel Ave, Davao City',
    city: 'Davao City',
    region: 'Mindanao',
    type: 'Mall Drop-off',
    acceptedItems: ['Smartphones', 'Laptops', 'Chargers', 'Electronic Accessories'],
    hours: '10:00 AM - 9:00 PM Daily',
    operator: 'SM Cares Mindanao',
    contact: '(082) 285-0943',
    distance: 'Davao Regional Hub'
  }
];

export const REFERENCES = [
  {
    id: 'ref1',
    citation: '[1] PEEC Initiative E-Waste Report (2022-2026)',
    title: 'Assessment of Electronic Waste Generation, Small IT Equipment Accumulation, and Disposal  Patterns in the Philippines.',
    authors: 'People and the Earth\'s Ecosystem (PEEC) Advocacy Research Group',
    details: 'Comprehensive study quantifying national e-waste metrics (537 million kg in 2022), ASEAN rankings, and WEEE Category 6 telecommunications drop-off deficits.',
    url: 'https://google.com',
  },
  {
    id: 'ref2',
    citation: '[2] UN Global E-waste Monitor (2024)',
    title: 'Global E-waste Monitor 2024: Quantity, Flows, and the Circular Economy Potential.',
    authors: 'United Nations Institute for Training and Research (UNITAR) & International Telecommunication Union (ITU)',
    details: 'International benchmark report detailing per-capita e-waste growth, precious metal recovery rates, and toxic release pathways.',
    url: 'https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx',
  },
  {
    id: 'ref3',
    citation: '[3] DENR Administrative Order No. 2013-22',
    title: 'Revised Procedures and Standards for the Management of Hazardous Wastes (including WEEE).',
    authors: 'Department of Environment and Natural Resources (DENR), Republic of the Philippines',
    details: 'Regulatory guidelines defining waste electrical and electronic equipment categories, hazardous handling rules, and treatment facility standards.',
    url: 'https://eeci.ph/wp-content/uploads/2021/03/DENR_DAO-2013-22-Revised-Standards-for-Hazardous-Wastes.pdf',
  }
];
