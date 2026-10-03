import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return <footer className="bg-ink text-white">
    <div className="site-container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
      <div><p className="eyebrow !text-[#efad91]">Ravatech</p><h2 className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-tight tracking-[-.055em] md:text-5xl">Dibuat untuk bekerja.<br/><span className="editorial-serif text-[#efad91]">Dirancang untuk manusia.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/65">Studio digital independen yang menghubungkan pemikiran produk, desain, dan engineering.</p></div>
      <div className="grid grid-cols-2 gap-8 md:justify-self-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/45">Jelajahi</p><div className="flex flex-col gap-3 text-sm"><Link href="/work" className="hover:text-cyan">Karya</Link><Link href="/products" className="hover:text-cyan">Layanan</Link><Link href="/about" className="hover:text-cyan">Tentang</Link></div></div><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/45">Terhubung</p><div className="flex flex-col gap-3 text-sm"><Link href="/contact" className="hover:text-cyan">Kontak</Link><a href="mailto:contact@ravatech.com" className="inline-flex items-center gap-1 hover:text-cyan">Email <ArrowUpRight size={14}/></a></div></div></div>
    </div>
    <div className="site-container flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/50 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Ravatech.</span><span>Dipikirkan dan dibuat dengan sengaja.</span></div>
  </footer>
}
