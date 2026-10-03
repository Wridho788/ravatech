import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { ProjectVisual } from '@/components/ui/ProjectCard'
import { caseStudies } from '@/data/caseStudies'

export function generateStaticParams() { return caseStudies.map(study => ({ slug: study.id })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find(item => item.id === slug)
  return { title: study ? `${study.title} — Ravatech` : 'Proyek — Ravatech', description: study?.subtitle }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find(item => item.id === slug)
  if (!study) notFound()

  return <main>
    <section className="site-container py-10 md:py-16"><Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"><ArrowLeft size={16}/> Semua karya</Link><div className="mt-12 grid gap-10 md:grid-cols-[1fr_.7fr] md:items-end"><div><p className="eyebrow">Studi kasus · {study.status === 'Demo' ? 'Demo' : study.status === 'In Use' ? 'Dipakai' : 'Aktif'}</p><h1 className="page-title mt-5">{study.title}</h1><p className="lead mt-5">{study.subtitle}</p></div><p className="text-base leading-8 text-muted">{study.context}</p></div><div className="mt-12"><ProjectVisual study={study}/><p className="mt-3 text-xs text-muted">{study.image ? 'Visual dari situs proyek yang tayang.' : 'Ilustrasi konsep jenis produk, bukan tangkapan layar sistem.'}</p></div></section>
    <section className="border-y border-line bg-white py-16 md:py-24"><div className="site-container grid gap-12 md:grid-cols-[.4fr_1fr]"><div><p className="eyebrow">Di balik proyek</p><h2 className="section-title mt-4">Dari masalah ke <span className="editorial-serif text-accent">produk.</span></h2></div><div className="grid gap-10"><article className="border-b border-line pb-10"><span className="eyebrow">01 / Tantangan</span><h3 className="mt-3 font-heading text-2xl font-bold">Apa yang perlu berubah</h3><p className="mt-4 leading-8 text-muted">{study.problem}</p></article><article className="border-b border-line pb-10"><span className="eyebrow">02 / Solusi</span><h3 className="mt-3 font-heading text-2xl font-bold">Yang dibangun</h3><p className="mt-4 leading-8 text-muted">{study.solution}</p></article><article><span className="eyebrow">03 / Hasil</span><h3 className="mt-3 font-heading text-2xl font-bold">Kondisi saat ini</h3><p className="mt-4 leading-8 text-muted">{study.impact}</p></article></div></div></section>
    <section className="site-container grid gap-8 py-16 md:grid-cols-2 md:py-24"><div className="border-t border-line pt-6"><p className="eyebrow">Lingkup</p><h2 className="mt-4 font-heading text-2xl font-bold">Peran Ravatech</h2><p className="mt-4 leading-8 text-muted">{study.role}</p></div><div className="border-t border-line pt-6"><p className="eyebrow">Teknologi</p><h2 className="mt-4 font-heading text-2xl font-bold">Perangkat yang dipakai</h2><div className="mt-5 flex flex-wrap gap-2">{study.techStack.map(tech => <span key={tech} className="rounded-sm bg-[#ece9e0] px-4 py-2 text-sm font-medium text-ink">{tech}</span>)}</div>{study.link && <a href={study.link} target="_blank" rel="noopener noreferrer" className={buttonStyles('text', 'mt-6')}>Kunjungi situs <ExternalLink size={16}/></a>}</div></section>
    <section className="site-container border-t border-line py-10"><Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">Lihat proyek lain <ArrowUpRight size={16}/></Link></section>
    <ContactBanner />
  </main>
}
