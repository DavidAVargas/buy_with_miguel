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
};

export default en;
export type Dictionary = typeof en;
