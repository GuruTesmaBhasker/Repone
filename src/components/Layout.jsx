import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar scrolled={scrolled} visible={true} />
      {/* Mobile-first top padding accounting for compact nav height */}
      <main className="pt-16 sm:pt-18 md:pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
