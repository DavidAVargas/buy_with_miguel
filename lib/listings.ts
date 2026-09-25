// TODO: placeholder deals and stock photos. Replace with Miguel's real
// closings (town, price, photo) before launch.
export type Listing = {
  status: "sold" | "leased";
  kind: "singleFamily" | "multiFamily" | "apartment" | "commercial";
  town: string;
  price: number;
  beds?: number;
  baths?: number;
  image: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}`;

export const listings: Listing[] = [
  {
    status: "sold",
    kind: "singleFamily",
    town: "South Amboy",
    price: 460000,
    beds: 3,
    baths: 2,
    image: unsplash("photo-1605276374104-dee2a0ed3cd6"),
  },
  {
    status: "leased",
    kind: "apartment",
    town: "Perth Amboy",
    price: 1900,
    beds: 2,
    baths: 1,
    image: unsplash("photo-1522708323590-d24dbb6b0267"),
  },
  {
    status: "sold",
    kind: "multiFamily",
    town: "Perth Amboy",
    price: 615000,
    beds: 5,
    baths: 3,
    image: unsplash("photo-1592595896551-12b371d546d5"),
  },
  {
    status: "sold",
    kind: "singleFamily",
    town: "Sayreville",
    price: 525000,
    beds: 4,
    baths: 2.5,
    image: unsplash("photo-1549517045-bc93de075e53"),
  },
  {
    status: "leased",
    kind: "apartment",
    town: "South Amboy",
    price: 2150,
    beds: 1,
    baths: 1,
    image: unsplash("photo-1484154218962-a197022b5858"),
  },
  {
    status: "leased",
    kind: "commercial",
    town: "Perth Amboy",
    price: 3200,
    image: unsplash("photo-1441986300917-64674bd600d8"),
  },
];
