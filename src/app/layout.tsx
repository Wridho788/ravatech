import type { Metadata } from "next";
import { Inter, Sora } from 'next/font/google'
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
