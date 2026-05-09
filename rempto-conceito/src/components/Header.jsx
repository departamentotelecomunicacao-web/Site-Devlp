import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = ['Coleção', 'Editorial', 'Lookbook', 'Sobre']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-ash/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex flex-col leading-none select-none"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-display font-black text-ivory text-lg md:text-xl tracking-[0.08em] uppercase">
              Rempto
            </span>
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-gold uppercase -mt-0.5">
              Conceito
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                className="font-mono text-[10px] tracking-[0.3em] text-silver uppercase hover:text-ivory transition-colors duration-300 relative group"
                whileHover={{ y: -1 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-6">
            <motion.button
              className="relative text-ivory hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Carrinho"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold text-obsidian text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>

            <motion.a
              href="#colecao"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-ivory/20 hover:border-gold/60 hover:bg-gold/5 text-ivory font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Coleção
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-ivory hover:text-gold transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="font-display text-4xl text-ivory hover:text-gold transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 font-mono text-[10px] tracking-[0.3em] text-silver uppercase"
            >
              © 2025 Rempto Conceito
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
