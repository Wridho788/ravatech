import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Ravatech',
  description: 'Learn about Ravatech\'s engineering-driven approach to building digital products that solve real problems.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
