import { useEffect, useRef, useMemo, useCallback, useState } from 'react'

export default function ScrollCanvas({ images, scrollProgress, frameCount }) {
  const canvasRef = useRef(null)
  const lastFrameRef = useRef(-1)
  const ctxRef = useRef(null)
  const rafRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Calculate current frame based on scroll progress with easing
  const currentFrame = useMemo(() => {
    const rawFrame = scrollProgress * frameCount
    // Smooth frame interpolation for 60fps
    return Math.min(frameCount - 1, Math.floor(rawFrame))
  }, [scrollProgress, frameCount])

  // Mobile-optimized canvas setup and resize handler
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Use visual viewport for mobile accuracy
    const vv = window.visualViewport
    const screenWidth = vv ? vv.width : window.innerWidth
    const screenHeight = vv ? vv.height : window.innerHeight

    // Mobile performance: cap DPR at 2, use 1.5 for mid-range devices
    const isMobile = screenWidth < 768
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2)

    // Set canvas resolution
    canvas.width = Math.floor(screenWidth * dpr)
    canvas.height = Math.floor(screenHeight * dpr)
    
    // Set display size
    canvas.style.width = `${screenWidth}px`
    canvas.style.height = `${screenHeight}px`

    // Get context with mobile optimizations
    const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false })
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    
    ctxRef.current = ctx
    setDimensions({ width: screenWidth, height: screenHeight })
  }, [])

  useEffect(() => {
    resizeCanvas()
    
    // Listen to resize events including orientation change
    window.addEventListener('resize', resizeCanvas, { passive: true })
    window.addEventListener('orientationchange', resizeCanvas)
    
    // Visual viewport for mobile keyboards
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', resizeCanvas)
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('orientationchange', resizeCanvas)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', resizeCanvas)
      }
    }
  }, [resizeCanvas])

  // Hardware-accelerated frame drawing with RAF optimization  
  const drawFrame = useCallback(() => {
    const ctx = ctxRef.current
    if (!ctx || !images[currentFrame] || currentFrame === lastFrameRef.current) {
      return
    }

    const img = images[currentFrame]
    if (!img?.complete || !img.naturalWidth) return

    lastFrameRef.current = currentFrame
    const { width: canvasWidth, height: canvasHeight } = dimensions

    if (!canvasWidth || !canvasHeight) return

    // Fill with deep charcoal background to match frame edges
    ctx.fillStyle = '#050505'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    // Calculate aspect-ratio cover (works for both 9:16 mobile and 16:9 desktop)
    // Ensures athlete stays centered and properly framed on all devices
    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = canvasWidth / canvasHeight

    let drawWidth, drawHeight, drawX, drawY

    if (imgAspect > canvasAspect) {
      // Image wider than canvas - fit to height, center horizontally (typical for 16:9 on desktop)
      drawHeight = canvasHeight
      drawWidth = canvasHeight * imgAspect
    } else {
      // Image taller than canvas - fit to width, center vertically (typical for 9:16 on mobile)  
      drawWidth = canvasWidth
      drawHeight = canvasWidth / imgAspect
    }

    drawX = (canvasWidth - drawWidth) / 2
    drawY = (canvasHeight - drawHeight) / 2

    // Hardware-accelerated draw
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
  }, [currentFrame, images, dimensions])

  // RAF loop for smooth 60fps updates
  useEffect(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    
    rafRef.current = requestAnimationFrame(drawFrame)
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [drawFrame])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        touchAction: 'pan-y',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    />
  )
}
