'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const sections = ['home', 'about', 'services', 'portfolio', 'contact']

export default function Navbar() {
  const [active, setActive] = useState<string>('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0
      }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="flex justify-between items-center px-4 py-4 md:px-10">
        <h1 className="font-heading text-xl md:text-2xl text-cyan">Ravatech</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={clsx(
                'transition-colors',
                active === id
                  ? 'text-cyan font-semibold'
                  : 'text-gray-700 hover:text-cyan'
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden px-4 transition-all duration-300 ease-in-out overflow-hidden',
          open ? 'max-h-screen pb-4' : 'max-h-0'
        )}
      >
        <div className="flex flex-col space-y-3">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className={clsx(
                'text-sm py-2 border-b border-gray-200 transition',
                active === id
                  ? 'text-cyan font-semibold'
                  : 'text-gray-700 hover:text-cyan'
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
