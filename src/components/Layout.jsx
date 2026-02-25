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
    <div className="min-h-screen bg-rep-light text-rep-gray">
      <Navbar scrolled={scrolled} visible={true} />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
