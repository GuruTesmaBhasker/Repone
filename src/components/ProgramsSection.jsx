import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const programs = [
  {
    id: 1,
    title: 'Strength & Power',
    description: 'Build raw strength with progressive overload training. Perfect for those wanting to lift heavy.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6.5 6.5L17.5 17.5M6.5 17.5L17.5 6.5" strokeLinecap="round"/>
        <circle cx="6.5" cy="6.5" r="2.5"/>
        <circle cx="17.5" cy="17.5" r="2.5"/>
        <circle cx="6.5" cy="17.5" r="2.5"/>
        <circle cx="17.5" cy="6.5" r="2.5"/>
      </svg>
    ),
    features: ['Progressive Overload', 'Compound Movements', 'Strength Periodization']
  },
  {
    id: 2,
    title: 'Hypertrophy',
    description: 'Maximize muscle growth with high-volume training protocols designed for aesthetic gains.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16" strokeLinecap="round"/>
        <path d="M9 3v18M15 3v18M4 12h16" strokeLinecap="round"/>
      </svg>
    ),
    features: ['Volume Training', 'Time Under Tension', 'Mind-Muscle Connection']
  },
  {
    id: 3,
    title: 'HIIT & Conditioning',
    description: 'Torch fat and boost cardio with intense interval training that maximizes calorie burn.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: ['Fat Burning', 'Metabolic Boost', 'Endurance Building']
  },
  {
    id: 4,
    title: 'Personal Training',
    description: 'One-on-one coaching with certified trainers who customize every session to your goals.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round"/>
      </svg>
    ),
    features: ['Custom Programs', 'Form Correction', 'Goal Setting']
  }
]

function ProgramCard({ program, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rep-red/20 to-rep-red/10 flex items-center justify-center mb-6 text-rep-red group-hover:scale-110 transition-transform duration-300">
        {program.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rep-red transition-colors font-display">
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {program.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-1 h-1 rounded-full bg-rep-red" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rep-red">
          <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.div>
  )
}

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#080808]"
      id="programs"
    >
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rep-red/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rep-red/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-4">
            Training Programs
          </p>
          <h2 className="text-[clamp(36px,5vw,64px)] font-black text-white tracking-tight mb-4 font-display">
            Choose Your <span className="text-rep-red">Path</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Whether you're building strength, chasing aesthetics, or improving conditioning — we have a program for you.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
