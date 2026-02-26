import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Essential',
      price: '₹1,999',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey.',
      features: [
        'Full gym floor access',
        'Locker room access',
        'Free Wi-Fi',
        'Basic equipment usage',
        'Flexible timing'
      ],
    },
    {
      name: 'Pro',
      price: '₹3,499',
      period: '/month',
      description: 'Most popular choice for dedicated fitness enthusiasts.',
      features: [
        'Everything in Essential',
        'Unlimited group classes',
        '2 PT sessions/month',
        'Sauna & steam room',
        'Nutrition guidance',
        'Priority support'
      ],
      featured: true,
    },
    {
      name: 'Elite',
      price: '₹5,999',
      period: '/month',
      description: 'Ultimate package for serious athletes.',
      features: [
        'Everything in Pro',
        'Unlimited PT sessions',
        'Custom meal planning',
        'Body composition analysis',
        '24/7 gym access',
        'VIP locker',
        'Guest passes (2/month)'
      ],
    },
  ]

  return (
    <Layout>
      <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808]">
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rep-red/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-6">
              Membership
            </p>
            <h1 className="text-[clamp(48px,8vw,100px)] font-black text-white tracking-tight leading-[0.95] mb-8 font-display">
              Choose Your <span className="text-rep-red">Plan</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Flexible membership options designed to fit your goals and lifestyle. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-to-b from-rep-red/20 to-rep-red/5 border-rep-red/50 scale-105 shadow-2xl shadow-rep-red/10' 
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-rep-red text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <p className={`text-sm font-bold tracking-widest uppercase mb-4 ${
                  plan.featured ? 'text-rep-red' : 'text-white/40'
                }`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl lg:text-6xl font-black text-white font-display">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-lg">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/50 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70">
                      <svg className="w-5 h-5 text-rep-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-rep-red text-white hover:bg-rep-red/90 hover:scale-[1.02]' 
                    : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-white/40 mb-4">
              Have questions about our plans?
            </p>
            <a 
              href="/Repone/contact" 
              className="inline-flex items-center gap-2 text-rep-red font-semibold hover:underline"
            >
              Contact us for details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
