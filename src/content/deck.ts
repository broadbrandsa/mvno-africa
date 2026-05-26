export const event = {
  series: "MVNO Nation Africa",
  edition: "Cape Town 2026",
  venue: "Cape Town",
  dates: "8 June 2026",
  status: "upcoming" as const,
  // Pre-event copy: the four agenda focus areas from the official site.
  agenda: [
    "How MVNOs can unlock connectivity for underserved communities",
    "Opportunities to deliver innovative digital services",
    "Real-world case studies from across Africa and emerging markets",
    "How partnerships can power the next phase of growth",
  ],
  host: {
    name: "Yaron Assabi",
    title: "Founder, DSG",
    email: "yaron@cxg.co.za",
  },
  commercial: {
    name: "Edward Wicks",
    title: "CEO, MVNE",
    email: "edwardw@mvne.co.za",
  },
};

export const groupBrands = [
  {
    name: "DSG",
    src: "/images/dsg-logo.png",
    href: "https://www.dsg.co.za/",
    w: 64,
    h: 27,
    lead: true,
  },
  {
    name: "CXG",
    src: "/images/cxg-logo.png",
    href: "https://cxg.co.za/",
    w: 84,
    h: 21,
  },
  {
    name: "MVNE",
    src: "/images/mvne-logo.png",
    href: "https://mvne.co.za/",
    w: 84,
    h: 21,
  },
  {
    name: "Xanite",
    src: "/images/xanite-logo.png",
    href: "https://xanite.ai",
    w: 84,
    h: 24,
  },
  {
    name: "Digital Mobile",
    src: "/images/dm-logo.png",
    href: "https://digitalmobile.co.za/",
    w: 60,
    h: 32,
  },
];

/**
 * Speakers / hosts confirmed for MVNO Nation Africa 2026 in Cape Town.
 *
 * Each speaker links to the website of the DSG group brand they lead,
 * so the speaker grid doubles as a hub for visitors who want to learn
 * more about each individual business. Add new speakers here and they
 * appear in the <Speakers> section automatically.
 *
 * Photo expectation: drop a square (1:1) head-and-shoulders crop at
 * `/public/images/speakers/<slug>.jpg`. If missing, the component
 * renders an initials avatar fallback so nothing breaks.
 */
export const speakers = [
  {
    slug: "yaron-assabi",
    name: "Yaron Assabi",
    role: "Founder",
    brand: "DSG",
    brandUrl: "https://www.dsg.co.za/",
    bio: "Founder of Digital Solutions Group. Hosts the workshop and runs the agenda across all three world-tour stops.",
    accent: "mint" as const,
  },
  {
    slug: "brandon-meszaros",
    name: "Brandon Meszaros",
    role: "CEO",
    brand: "CXG",
    brandUrl: "https://cxg.co.za/",
    bio: "Runs DSG's customer experience group — the contact-centre footprint behind DStv Internet and Boxer Telecom.",
    accent: "azure" as const,
  },
  {
    slug: "edward-wicks",
    name: "Edward Wicks",
    role: "CEO",
    brand: "MVNE",
    brandUrl: "https://mvne.co.za/",
    bio: "Heads up DSG's MVNE platform. Negotiates the wholesale and platform commercials that get an MVNO from idea to subscribers.",
    accent: "mint" as const,
  },
  {
    slug: "vincent-maher",
    name: "Vincent Maher",
    role: "CEO",
    brand: "Broadbrand",
    // TODO: verify this URL — Broadbrand's public domain wasn't in the
    // deck. The default below matches the South African naming pattern
    // of the other group brands. Update if Broadbrand uses something
    // different.
    brandUrl: "https://broadbrand.co.za/",
    bio: "Leads Broadbrand, the digital marketing and AI-first growth arm of the DSG group.",
    accent: "azure" as const,
  },
];

export const worldTour = [
  {
    city: "Miami",
    region: "Americas",
    dates: "April 27–29, 2026",
    status: "delivered" as const,
  },
  {
    city: "Alicante",
    region: "Europe",
    dates: "Coming 2026",
    status: "upcoming" as const,
  },
  {
    city: "Cape Town",
    region: "Africa",
    dates: "8 June 2026",
    status: "current" as const,
  },
];

export const heroStats = [
  { value: "300M+", label: "MVNO subscribers", caption: "Across USA & Latin America" },
  { value: "$42B", label: "Market revenue", caption: "Projected by 2028" },
  { value: "18%", label: "LATAM growth CAGR", caption: "Fastest-growing region globally" },
  { value: "40%+", label: "Average churn", caption: "Without a great CX strategy" },
] as const;

export const marketDrivers = [
  {
    title: "eSIM acceleration",
    body: "eSIM adoption in the Americas is set to hit 40% of new activations by end-2026, opening doors for digital-only MVNO launches with zero SIM logistics.",
  },
  {
    title: "LATAM greenfield",
    body: "Brazil, Mexico & Colombia are under-penetrated with high-growth digital consumer segments seeking affordable, digital-first mobile experiences.",
  },
  {
    title: "AI & 5G convergence",
    body: "MVNOs leveraging 5G SA wholesale access and AI-driven CX are achieving 30%+ lower churn and 2× higher NPS versus legacy operators.",
  },
] as const;

export const pillars = [
  {
    n: "01",
    title: "CX Differentiator",
    body: "Win on experience, not network. CX is your moat.",
  },
  {
    n: "02",
    title: "AI-First Ops",
    body: "Automate, predict & personalise at scale.",
  },
  {
    n: "03",
    title: "Digital-Native Arch",
    body: "eSIM, cloud-native, API-first from day one.",
  },
  {
    n: "04",
    title: "Data-Driven Growth",
    body: "Hyper-personalisation through real-time analytics.",
  },
  {
    n: "05",
    title: "Ecosystem Partners",
    body: "MVNE, MNO & tech partners accelerate speed-to-market.",
  },
] as const;

export const cxStages = [
  {
    label: "Stage 1",
    name: "Reactive",
    body: "Call-centre driven. High cost per contact. Manual QA. Siloed channels.",
    churn: "45%+",
    csat: "<60%",
    tone: "rose" as const,
  },
  {
    label: "Stage 2",
    name: "Digitally Enabled",
    body: "App + USSD. Basic self-service. Digital onboarding. Email & chat added.",
    churn: "30–40%",
    csat: "65–75%",
    tone: "amber" as const,
  },
  {
    label: "Stage 3",
    name: "Predictive & Omnichannel",
    body: "AI churn prediction. Omnichannel SCV. BOT >50% deflection. Proactive care.",
    churn: "15–25%",
    csat: "79%+",
    tone: "azure" as const,
    badge: "Target",
  },
  {
    label: "Stage 4",
    name: "Hyper-Personalised",
    body: "Real-time personalisation. Composable commerce. Predictive ARPU uplift.",
    churn: "<12%",
    csat: "90%+",
    tone: "mint" as const,
    badge: "Leader",
  },
] as const;

export const caseStudies = [
  {
    name: "DStv Internet",
    headline: "250,000+ subscribers · integrated CX excellence",
    metrics: [
      { value: "16s", label: "First response time" },
      { value: "85.8%", label: "CSAT score (target 80%)" },
      { value: "4.75/5", label: "Average star rating" },
      { value: "99.5%", label: "Tickets resolved 24h" },
      { value: "90%", label: "QA score" },
      { value: "250k", label: "Active subscribers" },
    ],
    bullets: [
      "Technical support & helpdesk · 7am–11pm, 7 days/week",
      "Sales activations & onboarding",
      "Network Operations Centre (NOC)",
      "AI-powered sentiment & auto QA",
    ],
  },
  {
    name: "Boxer Telecom",
    headline: "45% BOT deflection · omnichannel CX with self-service at scale",
    metrics: [
      { value: "95.95%", label: "SLA within 20s" },
      { value: "92.31%", label: "CSAT (target 80%)" },
      { value: "4.77/5", label: "Star rating (target 4.0)" },
      { value: "98%", label: "Tickets resolved 24h" },
      { value: "45%", label: "BOT deflection" },
      { value: "24/7", label: "Self-service availability" },
    ],
    bullets: [
      "WhatsApp, voice, live chat, email, app — single customer view",
      "Integrated middleware API for full self-service",
      "BOT manages nearly half of interactions with no agent",
      "Capacity scales dynamically with subscriber growth",
    ],
  },
] as const;

export const latamMarkets = [
  {
    country: "Brazil",
    flag: "🇧🇷",
    bullets: [
      "215M+ population",
      "2nd largest digital economy in the Americas",
      "MVNOs at <2% market share",
      "WhatsApp penetration: 99%",
    ],
    closing:
      "Massive digital-first consumer base hungry for affordable data bundles and Portuguese-language personalised CX.",
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    bullets: [
      "130M+ population",
      "Telcel dominates at 62% share",
      "Strong B2B MVNO opportunity",
      "eSIM adoption accelerating",
    ],
    closing:
      "Business MVNOs serving SMEs and enterprise segments. Employer-of-record and corporate mobility solutions.",
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    bullets: [
      "52M+ population",
      "Fastest-growing MVNO market",
      "15+ MVNOs launched 2023–2025",
      "Strong regulatory support",
    ],
    closing:
      "Community and affinity MVNOs targeting youth, gaming and loyalty-linked telecom bundles are gaining traction.",
  },
] as const;

export const cvpTiers = [
  {
    tier: "Tier 3",
    name: "Identity",
    question: "Does belonging to this network mean something?",
    body: "Community alignment · exclusive partnerships · loyalty ecosystems · shared values & purpose. This tier wins retention.",
    tone: "azure" as const,
  },
  {
    tier: "Tier 2",
    name: "Experiential",
    question: "How does the service feel?",
    body: "Support quality · app usability · billing transparency · onboarding simplicity. This tier earns trust.",
    tone: "mint" as const,
  },
  {
    tier: "Tier 1",
    name: "Functional",
    question: "Data, voice, SMS — and price.",
    body: "It matters, but it doesn't differentiate. Any MVNO competing only here is fully interchangeable.",
    tone: "default" as const,
  },
] as const;

export const winningMoves = [
  {
    n: "01",
    title: "Make CX your moat",
    body: "Invest in Stage 3/4 CX maturity now. AI-powered support, omnichannel integration and real-time churn prediction separate winners from the pack.",
  },
  {
    n: "02",
    title: "Go AI-first from day one",
    body: "Don't retrofit AI onto legacy systems. Build BOT, sentiment analysis and predictive analytics into your foundation to operate efficiently at scale.",
  },
  {
    n: "03",
    title: "Seize the LATAM window",
    body: "Brazil, Mexico & Colombia offer greenfield opportunity. Digital-first consumers + regulatory openness + low MVNO penetration = perfect timing.",
  },
  {
    n: "04",
    title: "Choose the right MVNE partner",
    body: "Your MVNE is your foundation — it determines speed to market, scalability and technical capability. The right partner cuts time-to-market by 60%.",
  },
  {
    n: "05",
    title: "Become investor-ready",
    body: "Investors want CX metrics alongside financial data. CSAT, churn rate, NPS and digital engagement ratios are now table stakes for funding.",
  },
] as const;

export const ltvComparison = [
  {
    label: "Price-led MVNO",
    ltv: "US$78",
    churn: "6.5%",
    arpu: "US$9 · GM 55%",
    tone: "rose" as const,
  },
  {
    label: "Experience-led MVNO",
    ltv: "US$220",
    churn: "3.0%",
    arpu: "US$12 · GM 55%",
    tone: "azure" as const,
  },
  {
    label: "Identity-led MVNO",
    ltv: "US$428",
    churn: "1.8%",
    arpu: "US$14 · GM 55%",
    tone: "mint" as const,
  },
] as const;

export const failures = [
  {
    name: "Amp'd Mobile",
    region: "USA · 2005–2007",
    headline: "US$360M",
    headlineLabel: "Investor capital burned",
    lesson:
      "When the acquisition lever is price, you inherit the customers nobody else wants.",
  },
  {
    name: "ESPN Mobile",
    region: "USA · 2005–2006",
    headline: "8 months",
    headlineLabel: "From launch to shutdown",
    lesson:
      "Even a world-class brand cannot rescue a proposition once it falls back on discounting.",
  },
  {
    name: "Helio",
    region: "USA · 2005–2008",
    headline: "US$500M+",
    headlineLabel: "Invested before sale",
    lesson:
      "Identity alone is not enough if pricing is used to 'rescue' slow growth.",
  },
] as const;

export const winners = [
  {
    name: "Tesco Mobile",
    region: "UK & Ireland",
    headline: "4M+",
    headlineLabel: "Subscribers",
    insight:
      "Clubcard loyalty + retail footprint. Churn materially below MNO averages. Price competitive but never the lead message.",
  },
  {
    name: "giffgaff",
    region: "UK",
    headline: "#1",
    headlineLabel: "UK customer satisfaction",
    insight:
      "Community-owned model where members earn 'payback' for support and referrals. ARPU comparable to MNOs despite being a 'value' brand.",
  },
  {
    name: "Consumer Cellular",
    region: "USA",
    headline: "18×",
    headlineLabel: "JD Power #1 Customer Care",
    insight:
      "Over-50 segment. Real human agents, simple billing, age-appropriate devices. Price is not the headline.",
  },
] as const;

export const deckChapters = [
  {
    part: "Part One",
    title: "MVNO Success Blueprint",
    summary: "The Americas landscape, the 5 pillars, CX maturity stages, and the case studies proving it already works.",
    highlights: [
      "The Americas MVNO landscape, 2026",
      "Competitive intelligence — Trustpilot + JD Power scorecard",
      "5 cohorts of US MVNO CX challenge",
      "What separates 4★+ MVNOs from 1★",
      "LATAM CX gap analysis & opportunity",
      "The 5 pillars of MVNO success",
      "CX maturity stages: where are you?",
      "AI-first operations & 4 disciplines",
      "Real-world success stories: DStv & Boxer",
      "7 steps to CX excellence in your MVNO",
    ],
  },
  {
    part: "Part Two",
    title: "Why price should not be your strategy",
    summary: "A commercial blueprint for operators who want to build businesses — not churn engines. Three continents, one conversation.",
    highlights: [
      "It has never been easier to launch — and never harder to profit",
      "Price feels like the fastest lever — here is what it actually buys you",
      "Why churn — not wholesale rate — decides profitability",
      "Two restaurants, two business models, two destinies",
      "9 case studies of price-led failures (US$2bn+ burned)",
      "Who buys meaning, not megabytes — 6 identity-led segments",
      "The CVP pyramid — three tiers of customer value",
      "What the winners (Tesco, giffgaff, Lebara, Consumer Cellular) share",
      "Five pitfalls that keep showing up in every market",
      "What to do on Monday morning — 0–3, 3–12, 12+ months",
    ],
  },
  {
    part: "Part Three",
    title: "Xanite — the platform layer",
    summary: "A purpose-built customer data platform that turns the blueprint into a production operating model.",
    highlights: [
      "MVNOs sit on a goldmine of subscriber data — most can't act on it",
      "Composable architecture: CDP · segmentation · journey · AI",
      "One subscriber, one profile — real-time identity stitching",
      "Segments that change as fast as your subscribers do",
      "Native consent management — POPIA · GDPR · CCPA out of the box",
      "Voice-of-customer: capture, classify, prioritise, loop back",
      "Journey orchestration with consent-checked sends",
      "AI built in: churn, NBA, LTV, sentiment, anomaly, generative",
      "Governance: ISO 27001 + SOC 2, data residency, encryption",
      "From data lake to revenue lever — measured business impact",
    ],
  },
  {
    part: "Part Four",
    title: "Digital Mobile — light MVNO platform",
    summary: "Skip the heavy lifting. Brand it, layer in your VAS, launch in 90 days with global eSIM coverage from day one.",
    highlights: [
      "What a light MVNO looks like in practice",
      "Connectivity that moves with you — dual eSIM, 190+ countries",
      "Same phone. Same calls. Just easier.",
      "Five design principles for how people actually live",
      "VAS roadmap: digital security, cyber insurance, travel, devices",
      "Digital Mobile vs traditional providers — feature comparison",
      "Why a CDP matters now — CX is the moat, data is the source",
      "Why Xanite — MVNO-native, day-one ready",
      "Pre-built MVNE, BSS, OSS, CCaaS, BI integrations",
      "Transparent commercial model — per-subscriber pricing",
    ],
  },
] as const;

export const platforms = [
  {
    name: "Xanite",
    tagline: "Real-time CDP for MVNOs",
    body: "Unifies CDR, billing, network, app and support data into a real-time customer profile. Layers on consent management, segmentation, journey orchestration and AI — all in one MVNO-purpose-built platform.",
    metrics: [
      { value: "3.2×", label: "Upsell campaign acceptance" },
      { value: "47%", label: "Reduction in time-to-launch" },
      { value: "18%", label: "Lift in 12-month retention" },
      { value: "100%", label: "Consent coverage on every send" },
    ],
  },
  {
    name: "Digital Mobile",
    tagline: "Light MVNO platform · eSIM-first",
    body: "Skip the heavy lifting — BSS, OSS, MNO wholesale, app, support — all pre-integrated and supplied as a service. Brand it, layer in your VAS, launch in 90 days.",
    metrics: [
      { value: "90 days", label: "Time-to-market vs 18-month norm" },
      { value: "190+", label: "Countries · global eSIM day one" },
      { value: "Dual eSIM", label: "Local + global from one SIM" },
      { value: "App-first", label: "Sign-up, activation, support" },
    ],
  },
] as const;
