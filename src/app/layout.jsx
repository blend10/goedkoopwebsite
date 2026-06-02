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
        <meta name="facebook-domain-verification" content="f34vmcpk62g7arquabvjiae7pcvlfb" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W4NW2W7M');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1300554935563919');fbq('track','PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1300554935563919&ev=PageView&noscript=1" alt="" />
        </noscript>
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
