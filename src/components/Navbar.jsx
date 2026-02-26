import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ visible, scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '/Repone/about' },
    { name: 'Trainers', href: '/Repone/trainers' },
    { name: 'Pricing', href: '/Repone/pricing' },
    { name: 'Contact', href: '/Repone/contact' }
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] h-[70px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300
          ${scrolled ? 'bg-rep-black/95 backdrop-blur-md shadow-lg border-b border-rep-red/20' : 'bg-transparent'}
        `}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: visible ? 1 : 0, 
          y: visible ? 0 : -20 
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Logo */}
        <Link 
          to="/Repone/" 
          className="flex items-center gap-2 text-2xl font-bold text-white hover:text-rep-red transition-colors font-display"
        >
          <div className="w-8 h-8 bg-rep-red rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L7 5.57 15.57 14.14 12 17.71 13.43 19.14l1.43-1.43L16.29 19l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 14.86z"/>
            </svg>
          </div>
          REP <span className="text-rep-red font-black">ONE</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-sm font-semibold tracking-wide uppercase text-white/70 hover:text-rep-red transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-rep-red group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-rep-red transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* CTA Button */}
        <Link
          to="/Repone/contact"
          className="hidden lg:block btn-primary"
        >
          Join Now
        </Link>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-rep-black z-[2000] flex flex-col items-center justify-center gap-8
          ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
        initial={false}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden'
        }}
        transition={{ duration: 0.4 }}
      >
        <button
          className="absolute top-6 right-6 p-2 text-white hover:text-rep-red transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-4xl font-bold text-white hover:text-rep-red transition-colors uppercase tracking-wide font-display"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/Repone/contact"
          className="btn-primary mt-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          Join Now
        </Link>
      </motion.div>
    </>
  )
}
