import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="relative bg-[#050505] pt-20 pb-8 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="text-3xl font-black tracking-tight text-white inline-block mb-6 font-display">
              REP<span className="text-rep-red">ONE</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Salem's premier fitness destination. Transform your body and mind with elite training, state-of-the-art equipment, and a community that pushes you to be your best.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-rep-red/20 hover:border-rep-red/30 hover:text-rep-red transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* New Simple Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
             <div className="space-y-4">
                <Link to="/about" className="block text-white/60 hover:text-rep-red transition-colors">About Us</Link>
                <Link to="/trainers" className="block text-white/60 hover:text-rep-red transition-colors">Trainers</Link>
             </div>
             <div className="space-y-4">
                <Link to="/pricing" className="block text-white/60 hover:text-rep-red transition-colors">Pricing</Link>
                <Link to="/contact" className="block text-white/60 hover:text-rep-red transition-colors">Contact</Link>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} REP ONE Fitness Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
