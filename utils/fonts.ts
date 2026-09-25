import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";

export const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
