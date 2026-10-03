import { ContactBanner } from '@/components/sections/ContactBanner'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { caseStudies } from '@/data/caseStudies'

export default function WorkPage() {
  return <main>
    <section className="hero-paper border-b border-line py-20 md:py-28"><div className="site-container"><p className="eyebrow">Karya / Ravatech</p><h1 className="page-title mt-5 max-w-4xl">Setiap proyek punya <span className="editorial-serif text-accent">ceritanya sendiri.</span></h1><p className="lead mt-6 max-w-2xl">Dari ruang kelas, komunitas otomotif, sampai kedai kopi. Produk yang berbeda, dibangun untuk kebutuhan yang nyata.</p></div></section>
    <section className="site-container py-16 md:py-24"><div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{caseStudies.map((study, index) => <ProjectCard key={study.id} study={study} index={index}/>)}</div><p className="mt-8 text-xs text-muted">Sebagian visual diambil dari situs yang tayang; ilustrasi konsep selalu diberi label.</p></section>
    <ContactBanner />
  </main>
}
