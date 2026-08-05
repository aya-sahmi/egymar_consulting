import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../common/Logo'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Formations', href: '/formations' },
  { label: 'Contact', href: '/contact' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 shadow-[0_10px_40px_-20px_rgba(31,41,55,0.35)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#1F2937] transition hover:text-[#8A4B23]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="/contact" className="rounded-full bg-[#8A4B23] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6D3918]">
            Demander un devis
          </a>
        </div>
        <button className="rounded-full border border-[#8A4B23]/20 p-2 text-[#8A4B23] md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-[#8A4B23]/10 bg-white/95 px-6 py-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-[#1F2937]" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="rounded-full bg-[#8A4B23] px-4 py-3 text-center text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
