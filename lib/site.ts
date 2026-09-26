// Single source of truth for Miguel's contact + brokerage details.
// TODO: replace placeholder license number once received.
export const site = {
  // Set NEXT_PUBLIC_SITE_URL once a custom domain is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://buy-with-miguel.vercel.app",
  name: "Miguel Hernandez",
  title: "REALTOR®",
  brokerage: "Halo Realty",
  brokerageLogo: "/images/halo-realty.png" as string | null,
  team: "Key Move Real Estate Group",
  phone: "(848) 242-0054",
  phoneHref: "tel:+18482420054",
  smsHref: "sms:+18482420054",
  email: "buywithmiguel@gmail.com",
  license: "NJ License #0000000",
  headshot: "/images/miguel.jpg" as string | null,
  state: "New Jersey",
  social: {
    instagram: "https://www.instagram.com/buywithmiguel",
    tiktok: "https://www.tiktok.com/@buywithmiguel",
    team: "https://www.instagram.com/keymoverealestate",
  },
  // TODO: confirm the towns Miguel actually covers.
  areas: [
    {
      county: "Middlesex",
      towns: [
        "Perth Amboy",
        "South Amboy",
        "Sayreville",
        "Old Bridge",
        "Woodbridge",
        "Edison",
        "Carteret",
        "New Brunswick",
      ],
    },
    {
      county: "Monmouth",
      towns: ["Keyport", "Hazlet", "Aberdeen", "Matawan"],
    },
  ],
} as const;
