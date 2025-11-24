'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <a href="#" className="flex items-center group">
            <span className="text-white text-2xl font-extrabold group-hover:text-gold-light transition-colors">BAgent</span>
            <span className="text-gold text-2xl font-extrabold ml-1 group-hover:text-white transition-colors">AI</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium ml-auto">
          {['Features', 'Pricing', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-gold transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <a 
            href="#" 
            className="bg-white/10 hover:bg-gold hover:text-charcoal-dark backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-white/20 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Client Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-charcoal-dark border-t border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {['Features', 'Pricing', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              className="bg-gold text-charcoal-dark text-center py-3 rounded-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Login
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
