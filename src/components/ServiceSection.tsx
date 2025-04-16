const services = [
    {
      title: 'Custom Web & Mobile Apps',
      description: 'Aplikasi tailor-made untuk kebutuhan spesifik bisnis Anda.',
      icon: '🧠',
    },
    {
      title: 'E-Commerce & POS System',
      description: 'Sistem jual-beli online hingga kasir toko terintegrasi.',
      icon: '🛒',
    },
    {
      title: 'ERP & Business Automation',
      description: 'Sistem ERP untuk efisiensi dan kontrol operasional.',
      icon: '⚙️',
    },
    {
      title: 'NFT & Blockchain Solutions',
      description: 'Bangun sistem berbasis Web3 yang aman & scalable.',
      icon: '🧬',
    },
    {
      title: 'Tech Consultation & Prototyping',
      description: 'Diskusi ide, uji coba cepat, dan proof of concept.',
      icon: '🚀',
    },
  ]
  
  export default function ServicesSection() {
    return (
      <section className="py-20 px-4 md:px-16 text-center bg-navy" id="services">
        <h2 className="text-3xl font-heading text-cyan mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-[#11152e] p-6 rounded-2xl shadow-md hover:shadow-glow transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-softgray text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  