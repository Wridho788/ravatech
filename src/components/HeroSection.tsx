export default function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-cyan leading-tight mb-6">
          Build. Scale. Evolve.
        </h1>
        <p className="text-softgray max-w-xl text-lg md:text-xl mb-8">
          Ravatech adalah mitra teknologi Anda dalam membangun aplikasi web dan mobile modern — dari e-commerce, ERP, hingga solusi blockchain & NFT.
        </p>
        <button className="px-6 py-3 bg-cyan text-navy font-semibold rounded-2xl hover:shadow-glow transition duration-200">
          Let’s Build Together
        </button>
      </section>
    )
  }
  