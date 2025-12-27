import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Ravatech',
  description: 'Get in touch with Ravatech to discuss your project. We build custom digital products from real requirements.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
