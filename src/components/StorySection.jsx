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

  // Position classes - Mobile-first with psychologically optimized spacing
  // Mobile: All sections stack vertically with consistent left-aligned layout
  // Generous horizontal padding (16-24px) for breathing room
  const positionClasses = {
    left: 'left-4 right-4 sm:left-5 sm:right-5 md:left-[8%] md:right-auto md:max-w-[500px] text-left border-l-4 border-rep-red pl-5 sm:pl-6 md:pl-10',
    right: 'left-4 right-4 sm:left-5 sm:right-5 md:left-auto md:right-[8%] md:max-w-[500px] md:text-right md:border-l-0 md:border-r-4 md:border-rep-gray/20 md:pr-10 md:pl-0 text-left border-l-4 border-rep-red pl-5 sm:pl-6',
    // Center: Use left-0 right-0 with flexbox centering - no translate-x needed
    center: 'left-0 right-0 flex justify-center px-4 sm:px-6 text-center'
  }

  // No additional mobile override needed - built mobile-first above
  const mobilePositionClasses = ''

  if (!content) return null

  return (
    <motion.div
      className={`absolute top-1/2 pointer-events-auto
        ${positionClasses[position]} ${position === 'center' ? '' : mobilePositionClasses}
      `}
      style={{
        opacity,
        // Only apply Y translation and scale - X centering handled by flexbox for center position
        transform: `translateY(calc(-50% + ${translateY}px)) scale(${scale})`
      }}
    >
      {/* Professional coordinate display */}
      <div className="absolute -top-10 left-0 text-[9px] font-sans font-medium opacity-40 tracking-wider hidden md:block text-rep-gray/40">
        {start.toFixed(2)} → {end.toFixed(2)}
      </div>

      {content.isHero ? (
        // Hero Section - Mobile-first with psychological spacing
        // Headline: 2-3 lines max on mobile, centered in upper-middle viewport area
        <div className="hero-content relative py-6 sm:py-8 max-w-[1000px]">
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[11px] sm:text-xs md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-rep-red mb-4 sm:mb-6 md:mb-10 uppercase"
            >
              {content.label}
            </motion.p>
          </div>
          
          {/* Headline: BIG for mobile/tablet, normal for desktop */}
          {/* Kept to 2-3 lines max via responsive clamping */}
          <h1 className="text-[clamp(80px,35vw,400px)] sm:text-[clamp(120px,45vw,500px)] md:text-[clamp(72px,16vw,200px)] font-black leading-[0.75] mb-6 sm:mb-8 md:mb-12 font-display text-rep-red">
            <span className="block">{content.heading}</span>
          </h1>
          
          {/* Subtitle with generous breathing space */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
             <span className="h-[2px] w-12 sm:w-16 bg-rep-red hidden sm:block"></span>
             <p className="font-sans text-sm sm:text-base md:text-lg text-white tracking-wide font-medium max-w-[90%] sm:max-w-none leading-relaxed">
               {content.subtitle}
             </p>
             <span className="h-[2px] w-12 sm:w-16 bg-rep-red hidden sm:block"></span>
          </div>
        </div>
      ) : content.isCta ? (
        // CTA Section - Mobile-first with breathing room and thumb-friendly buttons
        <div className="cta-section relative z-10 bg-white/95 backdrop-blur-md p-6 sm:p-10 md:p-16 rounded-lg border border-rep-red/30 shadow-2xl w-full max-w-[600px] md:max-w-[800px]">
          {/* CTA Headline: Scaled for mobile readability */}
          <h2 className="text-[clamp(32px,7vw,96px)] sm:text-[clamp(40px,8vw,96px)] font-black leading-[0.9] mb-6 sm:mb-8 text-rep-red font-display">
            {content.heading}
          </h2>
          
          {/* Subtitle with generous vertical padding */}
          <div className="max-w-xl mx-auto border-t border-b border-rep-red/30 py-5 sm:py-6 md:py-8 mb-8 sm:mb-10 md:mb-12">
            <p className="font-sans text-base sm:text-lg md:text-xl text-rep-gray leading-relaxed font-medium">
              {content.subtitle}
            </p>
          </div>
          
          {/* CTA buttons - Full width on mobile, centered with min 44px height */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <a href="/contact" className="btn-primary w-full sm:w-auto min-h-[52px] flex items-center justify-center">
              <span>Start Training</span>
            </a>
            <a href="/pricing" className="btn-outline w-full sm:w-auto min-h-[52px] flex items-center justify-center group">
              <span className="group-hover:translate-x-1 transition-transform inline-block">View Plans →</span>
            </a>
          </div>
        </div>
      ) : (
        // Regular Section - Mobile-first editorial style with psychological spacing
        <div className="relative py-4 sm:py-6">
          {/* Section label with visual marker */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-rep-red rounded-full"></div>
            <p className="font-display text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-rep-red uppercase">
              {content.label}
            </p>
          </div>
          
          {/* Section heading: 28-36px mobile, responsive scaling */}
          <h2 className="text-[clamp(28px,6vw,84px)] sm:text-[clamp(36px,7vw,84px)] font-black leading-[0.9] mb-5 sm:mb-6 md:mb-8 text-rep-red font-display">
            {content.heading}<span className="text-rep-red/60">.</span>
          </h2>
          
          {/* Content lines: 15-17px with relaxed line-height (1.6-1.7) */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 relative">
            {/* Premium accent line - desktop only */}
            {position === 'right' && (
              <div className="absolute -right-14 top-0 h-full w-[3px] bg-gradient-to-b from-rep-red to-transparent opacity-50 hidden md:block rounded-full"></div>
            )}
            
            {content.lines?.map((line, index) => (
              <p 
                key={index}
                className="font-sans text-[15px] sm:text-base md:text-[clamp(16px,1.2vw,20px)] text-white leading-[1.65] sm:leading-relaxed font-medium max-w-[40ch] sm:max-w-none"
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

