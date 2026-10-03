import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import { ContactBanner } from '@/components/sections/ContactBanner'

const principles = [
  ['01', 'Dengar sebelum merancang', 'Pahami orang, pekerjaan, dan bagian yang paling menghambat sebelum menentukan fitur.'],
  ['02', 'Jelaskan setiap keputusan', 'Lingkup, prioritas, dan kompromi dibicarakan terbuka agar arah produk tetap masuk akal.'],
  ['03', 'Bangun untuk dipakai', 'Tampilan dan sistem dirancang agar mudah dipahami, dijalankan, dan dirawat setelah rilis.'],
]

export default function AboutPage() {
  return <main>
    <section className="hero-paper border-b border-line py-20 md:py-28"><div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="eyebrow">Tentang Ravatech</p><h1 className="page-title mt-5 max-w-3xl">Produk yang baik lahir dari <span className="editorial-serif text-accent">rasa ingin tahu.</span></h1></div><p className="lead max-w-xl">Ravatech adalah studio digital independen yang menghubungkan pemikiran produk, UX, dan engineering. Kami percaya pekerjaan yang rapi dimulai dengan memahami persoalannya.</p></div></section>
    <section className="site-container grid gap-14 py-20 md:grid-cols-[.7fr_1fr] md:py-28"><div className="relative grid aspect-[4/3] max-w-md place-items-center overflow-hidden bg-[#eac5ad]"><span className="absolute -right-9 -top-16 font-heading text-[22rem] font-bold leading-none text-[#bb6c4c]/40">R</span><span className="relative editorial-serif text-8xl text-ink">R.</span></div><div><p className="eyebrow">Orang di balik karya</p><h2 className="section-title mt-4">Kenalan dengan Ridho.</h2><p className="mt-6 text-lg leading-8 text-muted">Ridho adalah engineer yang bekerja dari pengalaman pengguna dan arsitektur sistem hingga implementasi dan deployment. Ia berdiskusi langsung dengan klien untuk memahami alur kerja mereka dan menyusun solusi yang masuk akal.</p><p className="mt-5 leading-8 text-muted">Pendekatannya sengaja dekat: komunikasi jelas, keputusan yang beralasan, dan produk yang tetap berguna setelah diluncurkan.</p><Link href="/work" className={buttonStyles('text', 'mt-6')}>Lihat proyeknya <ArrowUpRight size={18}/></Link></div></section>
    <section className="border-y border-line bg-white py-20 md:py-24"><div className="site-container grid gap-10 md:grid-cols-[.6fr_1fr]"><div><p className="eyebrow">Prinsip kerja</p><h2 className="section-title mt-4">Yang selalu <span className="editorial-serif text-accent">dipegang.</span></h2></div><div className="border-t border-line">{principles.map(([number, title, text]) => <article key={number} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"><span className="eyebrow pt-1">{number}</span><div><h3 className="font-heading text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-muted">{text}</p></div></article>)}</div></div></section>
    <ContactBanner />
  </main>
}
