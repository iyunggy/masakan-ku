import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Puspitafood | Asli Ulekan Betawi - Gado-Gado & Karedok',
  description: 'Cita rasa legendaris dari dapur Puspitafood. Bumbu kacang kental diulek dadakan, tanpa pengawet, murni rasa tradisional di Larangan, Tangerang.',
  keywords: ['Gado-gado Betawi', 'Karedok Tangerang', 'Puspitafood', 'Masakan Tradisional', 'Kuliner Larangan'],
  openGraph: {
    title: 'Puspitafood | Asli Ulekan Betawi',
    description: 'Nikmati Gado-Gado dan Karedok ulekan dadakan dengan rasa autentik tradisional.',
    url: 'https://masakan-ku.com',
    siteName: 'Puspitafood',
    images: [
      {
        url: '/images/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'Puspitafood - Kedai Rumahan Betawi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
