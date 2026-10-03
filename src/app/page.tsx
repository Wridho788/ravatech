import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { caseStudies } from '@/data/caseStudies'
import { services } from '@/data/services'

const selectedWork = [caseStudies[0], caseStudies[1], caseStudies[2], caseStudies[3]]

export default function Home() {
  return <main>
    <section className="hero-paper overflow-hidden border-b border-line">
      <div className="site-container relative pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="flex items-center justify-between border-t border-ink/70 pt-4 text-[11px] font-bold uppercase tracking-[.18em] text-muted">
          <span>Ravatech / Studio digital independen</span><span className="hidden sm:inline">Strategi · Desain · Engineering</span>
        </div>
        <div className="grid items-end gap-10 pb-12 pt-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-16 lg:pb-20 lg:pt-20">
          <div className="min-w-0">
            <p className="eyebrow mb-7">Dari masalah nyata, untuk manusia nyata</p>
            <h1 className="display-title max-w-[900px]">Digital yang<br/><span className="editorial-serif text-accent">punya arah.</span></h1>
            <p className="lead mt-8 max-w-xl">Ravatech merancang dan membangun produk digital yang terasa jelas saat dipakai—dari website publik sampai sistem kerja di balik layar.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><Link href="/work" className={buttonStyles('primary')}>Lihat karya <ArrowUpRight size={18}/></Link><Link href="/contact" className={buttonStyles('text')}>Ceritakan kebutuhanmu <MoveUpRight size={17}/></Link></div>
          </div>
          <div className="relative min-w-0 lg:translate-y-10">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#d8d8cf]">
              <Image src="/projects/mbw202.jpg" alt="Mobil Mercedes-Benz W202 berkumpul dalam kegiatan komunitas" fill priority sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white"><div><span className="text-[10px] font-bold uppercase tracking-[.18em] text-white/80">Proyek pilihan / 2026</span><p className="mt-1 font-heading text-lg font-bold">Mercedes-Benz W202 Club Indonesia</p></div><ArrowUpRight className="shrink-0" size={22}/></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line pt-5 text-xs font-semibold text-muted"><span>Produk yang berguna. Detail yang terasa.</span><a href="#karya" className="inline-flex items-center gap-2 hover:text-accent">Jelajahi halaman <ArrowDown size={16}/></a></div>
      </div>
    </section>

    <section className="site-container py-20 md:py-28" id="karya">
      <div className="mb-10 grid gap-6 border-b border-line pb-9 md:mb-12 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow">01 / Karya terpilih</p><h2 className="section-title mt-4 max-w-2xl">Bukan sekadar tampilan.<br/><span className="editorial-serif text-accent">Ada pekerjaan di baliknya.</span></h2></div><Link href="/work" className={buttonStyles('text')}>Semua proyek <ArrowUpRight size={18}/></Link></div>
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{selectedWork.map((study, index) => <ProjectCard key={study.id} study={study} index={index}/>)}</div>
      <p className="mt-8 text-xs text-muted">Sebagian visual diambil dari situs yang tayang; ilustrasi konsep selalu diberi label.</p>
    </section>

    <section className="bg-ink py-20 text-white md:py-28">
      <div className="site-container grid gap-10 md:grid-cols-[.35fr_1fr]"><p className="eyebrow !text-[#efad91]">02 / Cara pandang</p><div><h2 className="max-w-4xl font-heading text-[clamp(2.6rem,5.3vw,5.5rem)] font-semibold leading-[1.07] tracking-[-.065em]">Teknologi terbaik tidak minta diperhatikan. <span className="editorial-serif text-[#efad91]">Ia membantu orang bergerak.</span></h2><div className="mt-12 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-2"><p className="text-base leading-8 text-white/70">Karena itu, Ravatech mulai dari pertanyaan sederhana: siapa yang memakai produk ini, dan apa yang perlu jadi lebih mudah?</p><p className="text-base leading-8 text-white/70">Jawabannya membentuk alur, tampilan, dan sistem. Bukan sebaliknya. Setiap keputusan harus punya alasan yang terasa dalam penggunaan sehari-hari.</p></div></div></div>
    </section>

    <section className="site-container py-20 md:py-28"><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">03 / Yang dikerjakan</p><h2 className="section-title mt-4">Dibuat sesuai<br/><span className="editorial-serif text-accent">kebutuhannya.</span></h2><p className="mt-6 max-w-sm leading-8 text-muted">Bentuk produknya bisa berbeda. Prinsipnya tetap sama: jelas, berguna, dan bisa dikembangkan.</p></div><div className="border-t border-line">{services.map(service => <Link href="/products" key={service.number} className="group grid gap-3 border-b border-line py-7 transition-colors hover:text-accent sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6"><span className="pt-1 text-xs font-bold text-accent">{service.number}</span><div><h3 className="font-heading text-2xl font-semibold tracking-[-.04em] md:text-3xl">{service.title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-muted">{service.description}</p></div><ArrowUpRight size={22} className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></Link>)}</div></div></section>

    <section className="border-y border-line bg-white py-20 md:py-24"><div className="site-container grid gap-10 md:grid-cols-[.55fr_1fr] md:items-center"><div className="relative grid aspect-square max-w-[280px] place-items-center overflow-hidden bg-[#eac5ad]"><span className="absolute -right-9 -top-16 font-heading text-[17rem] font-bold leading-none text-[#bb6c4c]/40">R</span><span className="relative editorial-serif text-8xl text-ink">R.</span></div><div><p className="eyebrow">Orang di balik Ravatech</p><h2 className="section-title mt-4">Kerja dekat. Pikiran terbuka. <span className="editorial-serif text-accent">Hasil yang personal.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Ravatech dipimpin oleh Ridho. Dari memahami kebutuhan, merancang pengalaman, sampai membangun produknya, kamu berdiskusi langsung dengan orang yang mengerjakannya.</p><Link href="/about" className={buttonStyles('text', 'mt-7')}>Kenali Ravatech <ArrowUpRight size={18}/></Link></div></div></section>
    <ContactBanner />
  </main>
}
