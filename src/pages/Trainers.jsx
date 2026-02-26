import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Trainers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const trainers = [
    { 
      name: 'Sarah Connor', 
      role: 'Head Coach', 
      expertise: 'Strength & Conditioning',
      experience: '10+ Years',
      certifications: ['NSCA-CSCS', 'CrossFit L3'],
      bio: 'Former competitive powerlifter turned coach. Specializes in building raw strength and athletic performance.'
    },
    { 
      name: 'Marcus Fenix', 
      role: 'Personal Trainer', 
      expertise: 'Hypertrophy & Bodybuilding',
      experience: '7+ Years',
      certifications: ['NASM-CPT', 'Precision Nutrition'],
      bio: 'Natural bodybuilder with expertise in muscle building and competition prep.'
    },
    { 
      name: 'Lara Croft', 
      role: 'Yoga & Mobility Coach', 
      expertise: 'Flexibility & Recovery',
      experience: '8+ Years',
      certifications: ['RYT-500', 'FRC Certified'],
      bio: 'Blends traditional yoga with modern mobility science for optimal recovery and movement.'
    },
    { 
      name: 'James Wilson', 
      role: 'HIIT Specialist', 
      expertise: 'Conditioning & Fat Loss',
      experience: '6+ Years',
      certifications: ['ACE-CPT', 'TRX Certified'],
      bio: 'High-intensity training expert focused on metabolic conditioning and body transformation.'
    },
  ]

  return (
    <Layout>
      <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808]">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rep-red/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rep-red/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-6">
              Expert Guidance
            </p>
            <h1 className="text-[clamp(48px,8vw,100px)] font-black text-white tracking-tight leading-[0.95] mb-8 font-display">
              Meet Our <span className="text-rep-red">Trainers</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              World-class coaches dedicated to unlocking your full potential with personalized guidance and proven methodologies.
            </p>
          </motion.div>

          {/* Trainers Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                className="glass-card group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Avatar placeholder with gradient */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rep-red/30 to-rep-red/10 flex items-center justify-center flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rep-red">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-rep-red transition-colors font-display mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-rep-red font-semibold text-sm uppercase tracking-wider mb-1">
                      {trainer.role}
                    </p>
                    <p className="text-white/40 text-sm">
                      {trainer.experience} Experience
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-white/50 leading-relaxed mb-6">
                  {trainer.bio}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">
                    Specialization
                  </p>
                  <div className="inline-flex px-4 py-2 rounded-full bg-rep-red/10 border border-rep-red/20">
                    <span className="text-sm font-medium text-rep-red">
                      {trainer.expertise}
                    </span>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">
                    Certifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert) => (
                      <span 
                        key={cert}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rep-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-white/40 mb-6">
              Ready to train with the best?
            </p>
            <a 
              href="/Repone/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-rep-red text-white font-bold rounded-xl hover:bg-rep-red/90 transition-all hover:scale-105"
            >
              Book a Session
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
