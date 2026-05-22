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
    default: "goedkoopwebsite.com — Professionele Websites op Maat",
    template: "%s | goedkoopwebsite.com",
  },
  description:
    "goedkoopwebsite.com bouwt moderne, snelle websites voor bedrijven. Maatwerk design, oplevering binnen 7 dagen, geen maandelijkse bureaukosten.",
  keywords: [
    "website laten maken",
    "webdesign Nederland",
    "maatwerk website",
    "goedkope website",
    "professionele website",
    "goedkoopwebsite.com",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "goedkoopwebsite.com",
    title: "goedkoopwebsite.com — Professionele Websites op Maat",
    description:
      "Moderne websites voor bedrijven. Maatwerk design, oplevering binnen 7 dagen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "goedkoopwebsite.com — Professionele Websites op Maat",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W4NW2W7M');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4NW2W7M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
