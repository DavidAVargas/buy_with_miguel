// Single source of truth for Miguel's contact + brokerage details.
// TODO: replace placeholder phone, email, and license once received.
export const site = {
  // Set NEXT_PUBLIC_SITE_URL once a custom domain is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://buy-with-miguel.vercel.app",
  name: "Miguel Hernandez",
  title: "REALTOR®",
  brokerage: "Halo Realty",
  team: "Key Move Real Estate Group",
  phone: "(732) 555-0100",
  phoneHref: "tel:+17325550100",
  smsHref: "sms:+17325550100",
  email: "hello@buywithmiguel.com",
  license: "NJ License #0000000",
  // Drop the photo in public/images/ and set e.g. "/images/miguel.jpg".
  headshot: null as string | null,
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
