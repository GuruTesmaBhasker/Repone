import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function StorySection({ section, scrollProgress }) {
  const { id, start, end, position, content } = section

  // Calculate refined visibility and opacity
  const { isVisible, opacity, translateY, scale } = useMemo(() => {
    const progress = scrollProgress
    const sectionProgress = (progress - start) / (end - start)
    const fadeMargin = 0.12 // Sharper transition

    let visible = progress >= start && progress <= end
    let op = 0
    let ty = 100
    let sc = 0.95

    if (visible) {
      if (sectionProgress < fadeMargin) {
        op = sectionProgress / fadeMargin
        sc = 0.95 + (0.05 * (sectionProgress / fadeMargin))
      } else if (sectionProgress > (1 - fadeMargin)) {
        op = (1 - sectionProgress) / fadeMargin
        sc = 1
      } else {
        op = 1
        sc = 1
      }
      ty = (1 - op) * 60
    }

    return { isVisible: visible, opacity: op, translateY: ty, scale: sc }
  }, [scrollProgress, start, end])

  // Position classes - Clean light theme alignment
  const positionClasses = {
    left: 'left-[5%] md:left-[8%] max-w-[500px] text-left border-l-4 border-rep-red pl-6 md:pl-10',
    right: 'right-[5%] md:right-[8%] max-w-[500px] text-right border-r-4 border-rep-gray/20 pr-6 md:pr-10',
    center: 'left-1/2 -translate-x-1/2 max-w-[1000px] text-center'
  }

  const mobilePositionClasses = 'max-lg:left-5 max-lg:right-5 max-lg:max-w-none max-lg:translate-x-0 max-lg:text-left max-lg:border-l-4 max-lg:border-rep-red max-lg:pl-6 max-lg:pr-0'

  if (!content) return null

  return (
    <motion.div
      className={`absolute top-1/2 -translate-y-1/2 pointer-events-auto
        ${positionClasses[position]} ${position === 'center' ? '' : mobilePositionClasses}
      `}
      style={{
        opacity,
        transform: position === 'center' 
          ? `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`
          : `translateY(calc(-50% + ${translateY}px)) scale(${scale})`
      }}
    >
      {/* Professional coordinate display */}
      <div className="absolute -top-10 left-0 text-[9px] font-sans font-medium opacity-40 tracking-wider hidden md:block text-rep-gray/40">
        {start.toFixed(2)} → {end.toFixed(2)}
      </div>

      {content.isHero ? (
        // Hero Section - Clean Red/Light Design
        <div className="hero-content relative">
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-sm md:text-base font-semibold tracking-[0.3em] text-rep-red mb-6 md:mb-10 uppercase"
            >
              {content.label}
            </motion.p>
          </div>
          
          <h1 className="text-[clamp(72px,16vw,200px)] font-black leading-[0.85] mb-8 md:mb-12 font-display text-rep-red">
            <span className="block">{content.heading}</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6">
             <span className="h-[2px] w-16 bg-rep-red hidden md:block"></span>
             <p className="font-sans text-sm md:text-lg text-rep-gray/80 tracking-wide font-medium">
               {content.subtitle}
             </p>
             <span className="h-[2px] w-16 bg-rep-red hidden md:block"></span>
          </div>
        </div>
      ) : content.isCta ? (
        // CTA Section - Premium Call to Action with Light Background
        <div className="cta-section relative z-10 bg-white/95 backdrop-blur-md p-12 md:p-16 rounded-lg border border-rep-red/30 shadow-2xl">
          <h2 className="text-[clamp(48px,8vw,96px)] font-black leading-[0.9] mb-8 text-rep-red font-display">
            {content.heading}
          </h2>
          
          <div className="max-w-xl mx-auto border-t border-b border-rep-red/30 py-8 mb-12">
            <p className="font-sans text-lg md:text-xl text-rep-gray leading-relaxed font-medium">
              {content.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/contact" className="btn-primary w-full md:w-auto">
              <span>Start Training</span>
            </a>
            <a href="/pricing" className="btn-outline w-full md:w-auto group">
              <span className="group-hover:translate-x-1 transition-transform inline-block">View Plans →</span>
            </a>
          </div>
        </div>
      ) : (
        // Regular Section - Clean Editorial Style
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-rep-red rounded-full"></div>
            <p className="font-display text-xs md:text-sm font-bold tracking-[0.2em] text-rep-red uppercase">
              {content.label}
            </p>
          </div>
          
          <h2 className="text-[clamp(48px,7vw,84px)] font-black leading-[0.9] mb-8 text-rep-red font-display">
            {content.heading}<span className="text-rep-red/60">.</span>
          </h2>
          
          <div className="space-y-6 relative">
            {/* Premium accent line */}
            {position === 'right' && (
              <div className="absolute -right-14 top-0 h-full w-[3px] bg-gradient-to-b from-rep-red to-transparent opacity-50 hidden md:block rounded-full"></div>
            )}
            
            {content.lines?.map((line, index) => (
              <p 
                key={index}
                className="font-sans text-[clamp(16px,1.2vw,20px)] text-rep-gray leading-relaxed font-medium"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

