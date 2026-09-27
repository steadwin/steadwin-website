import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://steadwin-group.girdharee937923.chatgpt.site";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "STEADWIN GROUP",
  url: siteUrl,
  logo: `${siteUrl}/assets/steadwin-logo.jpg`,
  image: `${siteUrl}/assets/steadwin-logo.jpg`,
  telephone: "+918792695400",
  email: "info@steadwin.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Second Floor, 26, Puttenahalli Rd, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Bengaluru" },
  knowsAbout: ["Interior design and execution", "Residential interiors", "Commercial interiors", "Builder execution", "Electrical work", "Plumbing work", "Glass and aluminium work", "Office partitions", "Skylights", "CCTV and networking"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "STEADWIN GROUP | Design & Execution",
  description: "Design and execution for residential, commercial and builder projects in Bengaluru.",
  keywords: ["interior contractor Bengaluru", "residential interiors Bengaluru", "commercial interiors Bengaluru", "office interior JP Nagar", "glass partitions Bengaluru", "aluminium railing Bengaluru", "skylight glass Bengaluru"],
  alternates: { canonical: "/" },
  icons: { icon: "/assets/steadwin-logo.jpg", apple: "/assets/steadwin-logo.jpg" },
  openGraph: {
    title: "STEADWIN GROUP | Design & Execution",
    description: "Interiors, builder execution and specialised site work for Bengaluru spaces.",
    url: "/",
    siteName: "STEADWIN GROUP",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}<Script id="steadwin-local-business" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /><Script src="/app.js" strategy="afterInteractive" /></body></html>;
}
