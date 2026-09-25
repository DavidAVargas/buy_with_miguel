const en = {
  meta: {
    title: "Miguel Hernandez, REALTOR® | Central New Jersey Real Estate",
    description:
      "Buy, sell, or rent in Central New Jersey with Miguel Hernandez, a bilingual REALTOR® with Halo Realty serving Perth Amboy, South Amboy, and surrounding towns.",
  },
  topbar: {
    language: "Se habla español",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Recent Sales", href: "#sold" },
      { label: "About", href: "#about" },
      { label: "Areas", href: "#areas" },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Ver en español",
  },
  hero: {
    eyebrow: "Buy · Sell · Rent in New Jersey",
    title: "Homes in Central Jersey",
    body: "Whether you're buying your first home, selling for top dollar, or finding your next rental, Miguel guides you through every step, residential or commercial, in English or Spanish.",
    primaryCta: "Let's Talk",
    secondaryCta: "What's My Home Worth?",
    imageAlt: "Classic New Jersey home with a front porch and landscaped yard",
    highlights: [
      "Residential & Commercial",
      "Buyers · Sellers · Renters",
      "Bilingual · English & Español",
    ],
  },
  services: {
    eyebrow: "How I Can Help",
    title: "Real Estate Services",
    intro:
      "One trusted agent for every move, whether you're buying, selling, renting, or investing in Central Jersey.",
    cta: "Get Started",
    items: [
      {
        icon: "buy",
        title: "Buy a Home",
        body: "From first-time buyers to growing families: find the right home, negotiate the best price, and close with confidence.",
      },
      {
        icon: "sell",
        title: "Sell Your Home",
        body: "Strategic pricing, professional marketing, and social media exposure to get your home sold fast and for top dollar.",
      },
      {
        icon: "rent",
        title: "Rentals",
        body: "Looking for an apartment or have a property to lease? Renters and landlords get matched quickly, from showing to signed lease.",
      },
      {
        icon: "commercial",
        title: "Commercial",
        body: "Retail, office, mixed-use, and investment properties for business owners and investors looking for the right space.",
      },
    ],
  },
  sold: {
    eyebrow: "Recent Wins",
    title: "Sold & Leased",
    intro: "A few of the families and businesses I've helped move forward.",
    instagram: "See more on Instagram",
    status: { sold: "Sold", leased: "Leased" },
    kinds: {
      singleFamily: "Single-Family",
      multiFamily: "Multi-Family",
      apartment: "Apartment",
      commercial: "Commercial",
    },
    beds: "bd",
    bath: "ba",
    baths: "ba",
    perMonth: "/mo",
  },
  about: {
    eyebrow: "Meet Miguel",
    title: "Real Estate, Made Personal",
    body: [
      "Hi, I'm Miguel Hernandez, a bilingual REALTOR® with Halo Realty and a proud member of the Key Move Real Estate Group. I help families, first-time buyers, investors, and business owners across Central Jersey buy, sell, and rent with confidence.",
      "Whether it's your first apartment or your forever home, I'm here to answer your questions, fight for your best deal, and keep the process simple, in English or en español.",
    ],
    values: [
      "Fluent in English & Spanish",
      "Residential & commercial",
      "Fast, honest communication",
      "Central Jersey local",
    ],
    brokerage: "Brokerage",
    team: "Team",
    call: "Call or Text Miguel",
    photoAlt: "Miguel Hernandez, REALTOR®",
    photoSoon: "Photo coming soon",
  },
  areas: {
    county: "{name} County",
    eyebrow: "Areas Served",
    title: "Rooted in Central Jersey",
    body: "From the Raritan Bay waterfront to the heart of Middlesex County, I know these neighborhoods, the schools, the commutes, and what homes are really worth.",
    ask: "Don't see your town? Let's talk",
  },
  contact: {
    eyebrow: "Let's Talk",
    title: "Ready to Make Your Move?",
    body: "Tell me a little about what you're looking for and I'll get back to you quickly, usually the same day. Prefer to talk now? Call or text anytime.",
    call: "Call",
    text: "Text",
    email: "Email",
    languages: "English & Español",
    form: {
      name: "Full Name",
      phone: "Phone",
      email: "Email",
      interest: "I'm looking to",
      interests: {
        buy: "Buy",
        sell: "Sell",
        rent: "Rent",
        commercial: "Commercial",
      },
      message: "Message",
      messagePlaceholder:
        "Tell me about your plans, timeline, or the home you have in mind.",
      submit: "Send Message",
      sending: "Sending…",
      success: "Thanks! Your message was sent. Miguel will be in touch soon.",
      error:
        "Something went wrong sending your message. Please call or text instead.",
    },
  },
  callBar: {
    call: "Call",
    text: "Text",
  },
};

export default en;
export type Dictionary = typeof en;
