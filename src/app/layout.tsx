import type { Metadata } from "next";
import { Inter, Sora } from 'next/font/google'
import "./globals.css";
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ravatech — Build. Scale. Evolve.',
  description: 'Digital products built from real problems, not assumptions.',
  openGraph: {
    title: 'Ravatech — Build. Scale. Evolve.',
    description: 'Digital products built from real problems, not assumptions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravatech — Build. Scale. Evolve.',
    description: 'Digital products built from real problems, not assumptions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
