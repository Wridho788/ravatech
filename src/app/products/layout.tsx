import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan — Ravatech',
  description: 'Sistem internal, platform publik, dan produk digital khusus yang dibuat sesuai kebutuhan.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
