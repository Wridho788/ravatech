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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
  title: 'Ravatech — Digital yang punya arah',
  description: 'Ravatech merancang dan membangun website, platform publik, dan sistem internal yang berangkat dari kebutuhan nyata.',
  openGraph: {
    title: 'Ravatech — Digital yang punya arah',
    description: 'Website, platform, dan sistem yang dirancang untuk pekerjaan nyata.',
    type: 'website',
    images: ['/ravatech.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravatech — Digital yang punya arah',
    description: 'Website, platform, dan sistem yang dirancang untuk pekerjaan nyata.',
    images: ['/ravatech.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
