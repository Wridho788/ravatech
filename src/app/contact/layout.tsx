import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak — Ravatech',
  description: 'Ceritakan kebutuhan digitalmu dan mulai percakapan dengan Ravatech.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
