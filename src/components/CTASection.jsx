import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#0a0a0a]"
      id="pricing"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rep-red/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-rep-red/5 rounded-full blur-[150px] sm:blur-[200px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-rep-red/10 border border-rep-red/20 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-rep-red animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-rep-red">
              Limited Spots Available
            </span>
          </motion.div>

          {/* Main heading - Mobile: 32-40px, scaled up on larger screens */}
          <h2 className="text-[clamp(32px,8vw,90px)] sm:text-[clamp(40px,7vw,90px)] font-black text-white tracking-tight leading-[0.95] mb-4 sm:mb-6 font-display">
            Ready To Get<br/>
            <span className="text-rep-red">Serious?</span>
          </h2>

          {/* Subtitle - Body text 15-17px with relaxed line-height */}
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-0">
            Your transformation starts with a single decision. Join Salem's most dedicated fitness community today.
          </p>

          {/* Pricing Cards - Stack on mobile with generous spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {/* Basic Plan */}
            <motion.div
              className="glass-card text-left p-5 sm:p-6 md:p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Monthly</p>
              <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-black text-white">₹1,999</span>
                <span className="text-white/40 text-sm">/mo</span>
              </div>
              <ul className="space-y-2 mb-5 sm:mb-6">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Full Gym Access
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Basic Equipment
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Locker Room
                </li>
              </ul>
              <a href="#" className="btn-outline w-full justify-center min-h-[48px]">Get Started</a>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="glass-card text-left relative overflow-hidden p-5 sm:p-6 md:p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {/* Popular badge */}
              <div className="absolute top-0 right-0 px-2 sm:px-3 py-1 bg-rep-red text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Popular
              </div>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-rep-red mb-2">Premium</p>
              <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-black text-white">₹3,499</span>
                <span className="text-white/40 text-sm">/mo</span>
              </div>
              <ul className="space-y-2 mb-5 sm:mb-6">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Everything in Monthly
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Personal Trainer Sessions
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Nutrition Planning
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-rep-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  24/7 Access
                </li>
              </ul>
              <a href="#" className="btn-primary w-full justify-center min-h-[48px]">Join Premium</a>
            </motion.div>
          </div>

          {/* Contact - Mobile-friendly stacking with thumb-friendly touch targets */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors min-h-[44px] px-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +91 98765 43210
            </a>
            <span className="hidden sm:block">•</span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors min-h-[44px] px-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
