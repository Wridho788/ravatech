import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'

export function ContactBanner() {
  return <section className="bg-[#eac5ad] py-20 md:py-28">
    <div className="site-container grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
      <div><p className="eyebrow">Punya ide atau tantangan?</p><h2 className="mt-5 max-w-4xl font-heading text-[clamp(2.8rem,6vw,6.5rem)] font-bold leading-[1.04] tracking-[-.07em]">Mari mulai dari <span className="editorial-serif">percakapan.</span></h2><p className="mt-6 max-w-lg text-base leading-7 text-ink/75">Tidak perlu brief yang sempurna. Ceritakan saja apa yang ingin kamu buat atau benahi.</p></div>
      <Link href="/contact" className={buttonStyles('primary', 'w-fit')}>Hubungi Ravatech <ArrowUpRight size={18}/></Link>
    </div>
  </section>
}
