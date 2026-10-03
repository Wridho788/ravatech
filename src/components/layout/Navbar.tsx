'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'

const links = [
  { href: '/work', label: 'Karya' },
  { href: '/products', label: 'Layanan' },
  { href: '/about', label: 'Tentang' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-xl">
    <nav className="site-container flex h-18 items-center justify-between" aria-label="Main navigation">
      <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-[-.05em] text-ink" aria-label="Ravatech home">
        <span className="grid h-9 w-9 place-items-center bg-ink font-heading text-lg font-bold text-white">R<span className="text-cyan">.</span></span>
        Ravatech
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? 'page' : undefined} className={`text-sm font-semibold transition-colors hover:text-accent ${pathname === link.href || pathname.startsWith(`${link.href}/`) ? 'text-accent' : 'text-muted'}`}>{link.label}</Link>)}
      </div>
      <Link href="/contact" className={buttonStyles('primary', 'hidden md:inline-flex')}>Mulai bicara <ArrowUpRight size={17} /></Link>
      <button type="button" className="grid h-11 w-11 place-items-center border border-line md:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    <div id="mobile-navigation" hidden={!open} className="site-container border-t border-line pb-5 pt-3 md:hidden">
      {[...links, { href: '/contact', label: 'Kontak' }].map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="block px-3 py-3 text-base font-semibold text-ink hover:bg-white hover:text-accent" onClick={() => setOpen(false)}>{link.label}</Link>)}
    </div>
  </header>
}
