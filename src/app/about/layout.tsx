import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang — Ravatech',
  description: 'Kenali Ravatech dan pendekatannya dalam merancang serta membangun produk digital.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
