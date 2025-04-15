'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-4 py-4 md:px-10 shadow-md">
      <h1 className="font-heading text-xl md:text-2xl text-cyan">Ravatech</h1>
      <nav className="space-x-6 text-sm md:text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
