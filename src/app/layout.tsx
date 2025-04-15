import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-navy text-white font-body">
        <Navbar />
        <main className="min-h-screen px-4 md:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
