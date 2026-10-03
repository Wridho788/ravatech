import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karya — Ravatech',
  description: 'Lihat proyek website, platform komunitas, dan sistem internal yang dikerjakan Ravatech.',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
