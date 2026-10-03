'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ContactComposer() {
  const [prepared, setPrepared] = useState(false)

  function compose(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name || !email || !message) return
    const subject = encodeURIComponent(`Pertanyaan proyek dari ${name}`)
    const body = encodeURIComponent(`Halo Ravatech,\n\n${message}\n\nNama: ${name}\nEmail: ${email}`)
    setPrepared(true)
    window.location.href = `mailto:contact@ravatech.com?subject=${subject}&body=${body}`
  }

  return <form onSubmit={compose} className="surface-card p-7 md:p-10">
    <h2 className="font-heading text-2xl font-bold tracking-tight">Siapkan email</h2>
    <p className="mt-3 text-sm leading-7 text-muted">Form ini membuka aplikasi email dengan draf pesan. Kamu bisa meninjau lalu mengirimnya dari sana.</p>
    <div className="mt-8 grid gap-5 sm:grid-cols-2"><div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Nama</label><input id="contact-name" name="name" required autoComplete="name" placeholder="Nama kamu" className="w-full rounded-sm border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"/></div><div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Alamat email</label><input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="kamu@perusahaan.com" className="w-full rounded-sm border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"/></div></div>
    <div className="mt-5"><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Apa yang ingin kamu selesaikan?</label><textarea id="contact-message" name="message" required rows={6} placeholder="Ceritakan singkat alur kerja, tantangan, atau idemu..." className="w-full resize-y rounded-sm border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"/></div>
    <Button type="submit" className="mt-6">Buka draf email <ArrowUpRight size={17}/></Button>
    {prepared && <p role="status" className="mt-4 text-sm text-muted">Aplikasi email seharusnya terbuka. Kirim pesannya dari sana. Jika tidak terbuka, tulis langsung ke <a className="font-semibold text-accent underline" href="mailto:contact@ravatech.com">contact@ravatech.com</a>.</p>}
  </form>
}
