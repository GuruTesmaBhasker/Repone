import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import ScrollCanvas from '../components/ScrollCanvas'
import StorySection from '../components/StorySection'
import ScrollIndicator from '../components/ScrollIndicator'
import ProgressBar from '../components/ProgressBar'
import ProgramsSection from '../components/ProgramsSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

// Story sections configuration - Professional fitness club messaging
const STORY_SECTIONS = [
  {
    id: 'hero',
    start: 0,
    end: 0.18,
    position: 'center',
    content: {
      label: 'FITNESS CLUB',
      heading: 'REP ONE',
      subtitle: 'Where Excellence Meets Performance',
      isHero: true
    }
  },
  {
    id: 'form',
    start: 0.18,
    end: 0.38,
    position: 'left',
    content: {
      label: '01 — TECHNIQUE',
      heading: 'Perfect Your Form',
      lines: [
        'Every movement engineered for optimal results.',
        'Professional guidance for every exercise.'
      ]
    }
  },
  {
    id: 'power',
    start: 0.38,
    end: 0.58,
    position: 'right',
    content: {
      label: '02 — STRENGTH',
      heading: 'Build Real Power',
      lines: [
        'Progressive training methodologies.',
        'Achieve new personal records safely.'
      ]
    }
  },
  {
    id: 'results',
    start: 0.58,
    end: 0.78,
    position: 'left',
    content: {
      label: '03 — TRANSFORMATION',
      heading: "See Real Results",
      lines: [
        'Proven programs with measurable outcomes.',
        'Your fitness goals within reach.'
      ]
    }
  },
  {
    id: 'cta',
    start: 0.78,
    end: 1.0,
    position: 'center',
    content: {
      heading: 'Start Your Journey',
      subtitle: 'Join Salem\'s premier fitness destination.',
      isCta: true
    }
  }
]

const FRAME_COUNT = 180

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [images, setImages] = useState([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [navVisible, setNavVisible] = useState(false)
  const lenisRef = useRef(null)
  const scrollContainerRef = useRef(null)

  // Initialize Lenis smooth scroll with mobile optimization
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', 
      smoothWheel: !isMobile, // Disable on mobile for native behavior
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      infinite: false,
    })
    
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Progressive image loading - mobile optimized
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = new Array(FRAME_COUNT).fill(null)
      let loaded = 0
      
      // Priority load first 15 frames for immediate responsiveness
      const priorityFrames = 15
      const isMobile = window.innerWidth < 768
      
      // Load priority frames first
      const priorityPromises = Array.from({ length: priorityFrames }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image()
          const frameNum = String(i + 1).padStart(3, '0')
          // Use Vite's import.meta.env.BASE_URL for correct path
          img.src = `${import.meta.env.BASE_URL}pull down zip hd/ezgif-frame-${frameNum}.jpg`
          
          img.onload = () => {
            loaded++
            loadedImages[i] = img
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100))
            resolve(img)
          }
          
          img.onerror = () => {
            loaded++
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100))
            resolve(null)
          }
        })
      })
      
      // Wait for priority frames
      await Promise.all(priorityPromises)
      setImages([...loadedImages])
      
      // Show experience early with priority frames loaded
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => setNavVisible(true), 200)
      }, 300)
      
      // Continue loading remaining frames in background
      const remainingPromises = Array.from({ length: FRAME_COUNT - priorityFrames }, (_, i) => {
        const index = i + priorityFrames
        return new Promise((resolve) => {
          const img = new Image()
          const frameNum = String(index + 1).padStart(3, '0')
          img.src = `${import.meta.env.BASE_URL}pull down zip hd/ezgif-frame-${frameNum}.jpg`
          
          img.onload = () => {
            loaded++
            loadedImages[index] = img
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100))
            setImages([...loadedImages]) // Update state incrementally
            resolve(img)
          }
          
          img.onerror = () => {
            loaded++
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100))
            resolve(null)
          }
        })
      })
      
      // Load remaining frames with delay for performance
      for (let i = 0; i < remainingPromises.length; i++) {
        if (i > 0 && i % 5 === 0) {
          await new Promise(resolve => setTimeout(resolve, isMobile ? 50 : 20))
        }
        remainingPromises[i]
      }
    }

    loadImages()
  }, [])

  // Mobile-optimized scroll tracking
  useEffect(() => {
    if (isLoading || !scrollContainerRef.current) return

    let ticking = false
    
    const updateScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return
      
      const containerTop = container.offsetTop
      // Use visual viewport for mobile accuracy
      const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight
      const containerHeight = container.offsetHeight - vh
      const scrollY = window.scrollY - containerTop
      const progress = Math.max(0, Math.min(1, scrollY / containerHeight))
      
      setScrollProgress(progress)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    if (window.visualViewport) {
      window.visualViewport.addEventListener('scroll', onScroll, { passive: true })
    }
    updateScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('scroll', onScroll)
      }
    }
  }, [isLoading])

  if (isLoading) {
    return <Loader progress={loadProgress} />
  }

  return (
    <div className="min-h-screen bg-rep-light">
      <ProgressBar progress={scrollProgress} />
      <Navbar visible={navVisible} scrolled={scrollProgress > 0.02} />
      
      {/* Mobile-First Fullscreen Canvas Container */}
      <div 
        ref={scrollContainerRef}
        className="relative"
        style={{ height: window.innerWidth < 768 ? '350vh' : '400vh' }}
      >
        <div className="sticky top-0 left-0 w-full h-screen h-[100dvh] bg-[#050505] overflow-hidden">
          {/* Fullscreen Canvas */}
          <ScrollCanvas 
            images={images} 
            scrollProgress={scrollProgress}
            frameCount={FRAME_COUNT}
          />
          
          {/* Text Overlays with Original Positioning */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {STORY_SECTIONS.map((section) => (
              <StorySection
                key={section.id}
                section={section}
                scrollProgress={scrollProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator visible={scrollProgress < 0.05} />

      {/* Additional Sections */}
      <StatsSection />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home
