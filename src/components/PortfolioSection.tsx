"use client"

import { motion } from "framer-motion"

const webApps = [
  {
    title: "ERP Admin Dashboard",
    desc: "Sistem backend untuk mengelola inventory, finance, dan laporan.",
    image: "/portfolio/erp-admin.png",
  },
  {
    title: "NFT Marketplace Web",
    desc: "Marketplace untuk jual beli NFT dengan integrasi Metamask.",
    image: "/portfolio/nft-marketplace.png",
  },
  {
    title: "E-Commerce Website",
    desc: "Tampilan toko online modern dengan cart dan pembayaran terintegrasi.",
    image: "/portfolio/ecommerce-web.png",
  },
]

const mobileApps = [
  {
    title: "Crypto Wallet App",
    desc: "UI aplikasi mobile untuk mengelola aset digital.",
    image: "/portfolio/crypto-wallet.png",
  },
  {
    title: "Mobile POS",
    desc: "Sistem kasir ringan untuk Android/iOS.",
    image: "/portfolio/mobile-pos.png",
  },
  {
    title: "Booking System",
    desc: "Aplikasi booking layanan dengan notifikasi dan kalender.",
    image: "/portfolio/booking-app.png",
  },
]

const SectionGroup = ({ title, items }: { title: string, items: typeof webApps }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-heading text-white mb-6">{title}</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-[#11152e] rounded-2xl p-4 shadow hover:shadow-xl transition"
        >
          <img src={item.image} alt={item.title} className="rounded-xl mb-4 w-full object-cover h-40" />
          <h4 className="text-white text-lg font-semibold mb-1">{item.title}</h4>
          <p className="text-softgray text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

export default function PortfolioSection() {
  return (
    <section className="px-4 md:px-16 py-20 bg-[#0c1329]">
      <h2 className="text-3xl font-heading text-cyan text-center mb-4">Our Work</h2>
      <p className="text-softgray text-center max-w-xl mx-auto mb-12">
        Proyek web dan mobile yang kami tangani — dari ERP hingga Web3.
      </p>

      <SectionGroup title="Web Applications" items={webApps} />
      <SectionGroup title="Mobile Applications" items={mobileApps} />
    </section>
  )
}
