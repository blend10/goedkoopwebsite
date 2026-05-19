import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "WebStudio Nederland — Professionele Websites op Maat",
    template: "%s | WebStudio Nederland",
  },
  description:
    "WebStudio Nederland bouwt moderne, snelle websites voor bedrijven. Maatwerk design, oplevering binnen 7 dagen, geen maandelijkse bureaukosten.",
  keywords: [
    "website laten maken",
    "webdesign Nederland",
    "maatwerk website",
    "goedkope website",
    "professionele website",
    "WebStudio Nederland",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "WebStudio Nederland",
    title: "WebStudio Nederland — Professionele Websites op Maat",
    description:
      "Moderne websites voor bedrijven. Maatwerk design, oplevering binnen 7 dagen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebStudio Nederland — Professionele Websites op Maat",
    description:
      "Moderne websites voor bedrijven. Maatwerk design, oplevering binnen 7 dagen.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
