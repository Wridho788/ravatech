import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { services } from '@/data/services'

const steps = [
  ['01', 'Pahami persoalan', 'Kita membahas alur kerja, pengguna, batasan, dan seperti apa hasil yang berguna.'],
  ['02', 'Tentukan prioritas', 'Temuan diubah menjadi lingkup awal yang realistis, lengkap dengan komprominya.'],
  ['03', 'Rancang dan bangun', 'Pengalaman dan sistem dibuat, ditinjau, lalu disesuaikan dengan pembelajaran baru.'],
  ['04', 'Rilis dan lanjutkan', 'Produk disiapkan untuk dipakai dan ditingkatkan sesuai kebutuhan yang muncul.'],
]

export default function ProductsPage() {
  return <main>
    <section className="hero-paper border-b border-line py-20 md:py-28"><div className="site-container"><p className="eyebrow">Layanan / Ravatech</p><h1 className="page-title mt-5 max-w-4xl">Bentuknya mengikuti <span className="editorial-serif text-accent">kebutuhanmu.</span></h1><p className="lead mt-6 max-w-2xl">Dari sistem operasional sampai website publik, kami membantu mengubah pekerjaan yang rumit menjadi pengalaman digital yang jelas.</p></div></section>
    <section className="site-container py-16 md:py-24"><div className="border-t border-line">{services.map(service => { const Icon = service.icon; return <article key={service.number} className="grid gap-7 border-b border-line py-10 md:grid-cols-[.15fr_.85fr_1fr] md:gap-10"><div className="flex items-start justify-between md:block"><span className="eyebrow">{service.number}</span><Icon size={28} strokeWidth={1.5} className="text-accent md:mt-10"/></div><div><h2 className="font-heading text-3xl font-bold tracking-tight">{service.title}</h2><p className="mt-3 text-lg font-medium text-accent">{service.short}</p><p className="mt-5 leading-8 text-muted">{service.description}</p></div><div className="bg-[#eae5da] p-7"><p className="mb-5 text-xs font-bold uppercase tracking-[.16em] text-muted">Contoh pekerjaan</p><ul className="space-y-4">{service.examples.map(example => <li key={example} className="flex items-start gap-3 text-sm font-medium"><Check size={18} className="mt-0.5 shrink-0 text-accent"/>{example}</li>)}</ul></div></article> })}</div></section>
    <section className="border-y border-line bg-white py-20 md:py-24"><div className="site-container"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Cara bekerja</p><h2 className="section-title mt-4">Dari ide sampai <span className="editorial-serif text-accent">dipakai.</span></h2></div><Link href="/work" className={buttonStyles('text')}>Lihat karya <ArrowUpRight size={18}/></Link></div><div className="grid border-t border-line md:grid-cols-4">{steps.map(([number,title,description]) => <article key={number} className="border-b border-line py-7 md:border-r md:p-6 md:first:pl-0 md:last:border-r-0"><span className="eyebrow">{number}</span><h3 className="mt-8 font-heading text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></article>)}</div></div></section>
    <ContactBanner />
  </main>
}
