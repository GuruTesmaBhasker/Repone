import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Active Members', suffix: '' },
  { value: '15+', label: 'Expert Trainers', suffix: '' },
  { value: '98', label: 'Success Rate', suffix: '%' },
  { value: '24/7', label: 'Access', suffix: '' }
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="stat-card text-center p-4 sm:p-5 md:p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Stat value - scaled for mobile */}
      <div className="text-[clamp(36px,10vw,80px)] sm:text-[clamp(48px,8vw,80px)] font-black text-rep-red leading-none mb-1 sm:mb-2 font-display">
        {stat.value}{stat.suffix}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/40 font-medium">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#0a0a0a]"
      id="results"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-rep-red/5 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-rep-red mb-3 sm:mb-4">
            Our Impact
          </p>
          <h2 className="text-[clamp(28px,6vw,64px)] sm:text-[clamp(36px,5vw,64px)] font-black text-white tracking-tight font-display">
            Numbers That <span className="text-rep-red">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid - 2x2 on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
