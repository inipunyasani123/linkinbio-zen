import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Sena","jobTitle":"Guru Mindfulness","url":"https://linkinbio-zen.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-zen.pintuweb.id"),
  title: { default: "Sena — Guru Mindfulness & Teman Minum Teh", template: "%s — Sena" },
  description: "Tautan Sena, guru mindfulness di Bandung: kelas meditasi daring Selasa dan Kamis, retret Lembang 14–15 November 2026, dan latihan napas terpandu tiga menit.",
  applicationName: "Sena",
  keywords: ["kelas meditasi daring", "mindfulness bandung", "latihan napas", "retret lembang", "link in bio meditasi"],
  authors: [{ name: "Sena" }],
  creator: "Sena",
  publisher: "Sena",
  alternates: { canonical: "https://linkinbio-zen.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-zen.pintuweb.id",
    siteName: "Sena",
    title: "Sena — Guru Mindfulness & Teman Minum Teh",
    description: "Tautan Sena, guru mindfulness di Bandung: kelas meditasi daring Selasa dan Kamis, retret Lembang 14–15 November 2026, dan latihan napas terpandu tiga menit.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sena — Guru Mindfulness & Teman Minum Teh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sena — Guru Mindfulness & Teman Minum Teh",
    description: "Tautan Sena, guru mindfulness di Bandung: kelas meditasi daring Selasa dan Kamis, retret Lembang 14–15 November 2026, dan latihan napas terpandu tiga menit.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=zen" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
