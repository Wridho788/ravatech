import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Ravatech',
  description: 'Real projects solving real problems. Case studies of web platforms, admin systems, and community applications built by Ravatech.',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
