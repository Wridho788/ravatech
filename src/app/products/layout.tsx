import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products & Services — Ravatech',
  description: 'Custom-built digital products: web platforms, admin dashboards, progressive web apps, and SaaS MVPs tailored to your needs.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
