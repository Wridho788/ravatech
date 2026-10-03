import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CarFront, Coffee, RadioTower } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'

export function ProjectVisual({ study, decorative = false }: { study: CaseStudy; decorative?: boolean }) {
  if (study.image) {
    return <div className="relative aspect-[4/3] overflow-hidden bg-ink" aria-hidden={decorative || undefined}>
      <Image src={study.image} alt={decorative ? '' : study.imageAlt ?? study.title} fill sizes="(max-width: 768px) 100vw, 650px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
    </div>
  }

  if (study.visual === 'coffee') {
    return <div aria-hidden="true" className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#301d19] p-8 text-[#f4dfc4]">
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full border-[40px] border-[#a87243]/20" />
      <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#a87243]/20 blur-2xl" />
      <div className="relative flex w-full max-w-sm items-center justify-between gap-6 rounded-2xl border border-[#f4dfc4]/20 bg-[#513229]/70 p-7 shadow-2xl">
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#d8ab7b]">Open around the clock</p><p className="font-heading text-3xl font-bold leading-tight">Wawa<br/>Kopi<span className="text-[#d8ab7b]">.</span></p><p className="mt-5 text-sm text-[#f4dfc4]/70">Ngopi. Ngobrol. 24 Jam.</p></div>
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-[#d8ab7b]/40 bg-[#d8ab7b]/10"><Coffee size={52} strokeWidth={1.2} /></div>
      </div>
      <span className="absolute bottom-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-[#f4dfc4]/60">Ilustrasi konsep</span>
    </div>
  }

  if (study.visual === 'connectivity') {
    return <div aria-hidden="true" className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#092944] p-8 text-white">
      <div className="absolute inset-0 grid-lines opacity-50" />
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
      <div className="relative flex w-full max-w-sm items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-sm">
        <div className="grid h-24 w-20 shrink-0 place-items-center rounded-2xl border-2 border-cyan/60 bg-ink"><RadioTower size={36} className="text-cyan"/></div>
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan">Digital connectivity</p><p className="mt-3 font-heading text-3xl font-bold">RavaSIM</p><div className="mt-4 h-2 w-28 rounded-full bg-white/20"/><div className="mt-2 h-2 w-20 rounded-full bg-cyan/60"/></div>
      </div>
      <span className="absolute bottom-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-white/60">Ilustrasi konsep</span>
    </div>
  }

  if (study.visual === 'marketplace') {
    return <div aria-hidden="true" className="relative flex aspect-[4/3] items-end overflow-hidden bg-[#191528] p-7 text-white">
      <div className="absolute -right-8 -top-20 h-72 w-72 rounded-full border-[55px] border-[#f68b2e]/20" />
      <div className="absolute -bottom-28 right-12 h-64 w-64 rounded-full bg-[#f68b2e]/20 blur-3xl" />
      <div className="absolute left-7 top-7 flex items-center gap-3 text-[#f68b2e]"><CarFront size={32} strokeWidth={1.5}/><span className="text-xs font-black uppercase tracking-[.23em]">Komunitas · Acara · Marketplace</span></div>
      <div className="relative"><span className="text-xs font-bold uppercase tracking-[.25em] text-[#f68b2e]">Platform komunitas otomotif</span><p className="mt-3 font-heading text-[clamp(3rem,6vw,5.5rem)] font-black leading-none tracking-[-.085em]">LAPAK<span className="text-[#f68b2e]">BENZ</span></p><div className="mt-6 h-1 w-28 bg-[#f68b2e]"/></div>
      <span className="absolute bottom-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-white/55">Ilustrasi konsep</span>
    </div>
  }

  return <div aria-hidden="true" className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#e8e3d7] p-8">
    <div className="absolute inset-0 grid-lines opacity-70" />
    <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-accent-bright/25 blur-3xl" />
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_28px_70px_rgba(8,20,48,.16)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3"><span className="h-2 w-2 rounded-full bg-[#ff7474]"/><span className="h-2 w-2 rounded-full bg-[#ffd36b]"/><span className="h-2 w-2 rounded-full bg-[#68d5a2]"/><span className="ml-auto h-2 w-16 rounded-full bg-[#e8e3d7]"/></div>
      <div className="p-5">
        <div className="mb-5 flex items-start justify-between"><div><div className="mb-2 h-2 w-20 rounded-full bg-accent/30"/><div className="h-4 w-36 rounded-full bg-ink/85"/></div><div className="h-8 w-8 rounded-lg bg-accent/10"/></div>
        <div className="grid grid-cols-3 gap-2">{[0,1,2].map(item => <div key={item} className="rounded-lg bg-[#f0ede7] p-3"><div className="mb-3 h-2 w-12 rounded-full bg-ink/20"/><div className="h-4 w-7 rounded-full bg-accent/60"/></div>)}</div><div className="mt-4 flex h-16 items-end gap-2 rounded-lg bg-[#f4f1eb] p-3">{[40,70,55,90,65,80,50].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-accent/55" style={{height: `${height}%`}} />)}</div>
      </div>
    </div>
    <span className="absolute bottom-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-ink/45">Ilustrasi konsep</span>
  </div>
}

export function ProjectCard({ study, index }: { study: CaseStudy; index?: number }) {
  return <Link href={`/work/${study.id}`} className="group block">
    <ProjectVisual study={study} decorative />
    <div className="border-b border-line pb-6 pt-5">
      <div className="mb-3 flex items-center justify-between gap-4"><span className="eyebrow">{index === undefined ? 'Proyek' : String(index + 1).padStart(2, '0')} / {study.status === 'Demo' ? 'Demo produk' : study.status === 'In Use' ? 'Sistem internal' : 'Situs aktif'}</span><ArrowUpRight size={22} className="text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
      <h3 className="font-heading text-2xl font-bold tracking-[-.045em] md:text-3xl">{study.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{study.subtitle}</p>
    </div>
  </Link>
}
