import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met goedkoopwebsite.com. Gratis telefoongesprek, reactie binnen 24 uur. Vraag een offerte aan voor uw nieuwe website.",
  openGraph: {
    title: "Contact | goedkoopwebsite.com",
    description:
      "Neem contact op voor een gratis vrijblijvend gesprek. Reactie binnen 24 uur.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
