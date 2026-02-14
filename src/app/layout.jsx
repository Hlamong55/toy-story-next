import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local"

const poppins = Poppins({
    weight:["100","200","400","500","600","800"]
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf"
})

export const metadata = {
  metadataBase: new URL("https://toy-story-iota.vercel.app"), // change domain

  title: {
    default: "Toy Story - Best Kids Toys Online Store",
    template: "%s | Toy Story",
  },

  description:
    "Toy Story is an online toy store for kids. Buy educational toys, costumes, learning cards, and fun toys with discounts and fast delivery.",

  keywords: [
    "Toy Story",
    "kids toys online",
    "toy store Bangladesh",
    "educational toys",
    "kids costume",
    "baby toys",
    "learning toys",
  ],

  authors: [{ name: "Hlamong Sing Marma" }],
  creator: "Toy Story",
  publisher: "Toy Story",

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },

  openGraph: {
    title: "Toy Story - Best Kids Toys Online Store",
    description:
      "Shop fun and educational toys for kids. Get discounts and explore our latest toy collections.",
    url: "https://toy-story-iota.vercel.app",
    siteName: "Toy Story",
    images: [
      {
        url: "https://i.ibb.co.com/B5bwqnP9/Screenshot-2026-02-14-211251.png",
        width: 1200,
        height: 630,
        alt: "Toy Story Home Page Preview",
      },
      {
        url: "https://i.ibb.co.com/TqW74fbh/Screenshot-2026-02-14-211501.png",
        width: 1200,
        height: 630,
        alt: "Toy Story Product Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Toy Story - Best Kids Toys Online Store",
    description:
      "Buy educational and fun toys for kids with up to 15% discount.",
    images: [
      "https://i.ibb.co.com/B5bwqnP9/Screenshot-2026-02-14-211251.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins">
        <nav className="md:px-5 py-2">
          <Navbar/>
        </nav>

        <main className="py-3 md:w-11/12 mx-auto min-h-[calc(100vh-440px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

