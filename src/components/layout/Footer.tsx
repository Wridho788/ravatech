import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Ravatech</h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Building digital systems that actually get used. From internal tools to public platforms.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-6 md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-block bg-accent text-primary px-6 py-3 rounded-xl font-medium hover:brightness-110 transition-all"
              >
                Contact Ravatech
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Ravatech. Built with purpose, not templates.</p>
        </div>
      </div>
    </footer>
  )
}
