import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      title: 'Excellence',
      description: 'We pursue perfection in every rep, every session, every day.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'A supportive tribe pushing each other towards greatness.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Results',
      description: 'Measurable progress with science-backed training methods.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    }
  ]

  return (
    <Layout>
      <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808]">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rep-red/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rep-red/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-6">
              Our Story
            </p>
            <h1 className="text-[clamp(48px,8vw,100px)] font-black text-white tracking-tight leading-[0.95] mb-8 font-display">
              About <span className="text-rep-red">REP ONE</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Founded in Salem, REP ONE is more than a gym — it's a sanctuary for those committed to transforming their bodies and minds through strength, discipline, and unwavering dedication.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="glass-card max-w-4xl mx-auto mb-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-display">
              Empowering Every Rep
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We believe fitness is not just a destination but a way of life. Our state-of-the-art facility equipped with world-class equipment is designed for those who want to push their limits and achieve greatness. Whether you're a professional athlete or just starting your journey, our community supports your goals with passionate trainers and proven methodologies.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-4">
                What We Stand For
              </p>
              <h2 className="text-[clamp(32px,5vw,56px)] font-black text-white tracking-tight font-display">
                Our <span className="text-rep-red">Values</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-card group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rep-red/20 to-rep-red/10 flex items-center justify-center mb-6 text-rep-red group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rep-red transition-colors font-display">
                    {value.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '500+', label: 'Active Members' },
              { number: '15+', label: 'Expert Trainers' },
              { number: '10K+', label: 'Sq Ft Facility' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat) => (
              <div key={stat.label} className="text-center glass-card py-8">
                <div className="text-4xl md:text-5xl font-black text-rep-red mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
