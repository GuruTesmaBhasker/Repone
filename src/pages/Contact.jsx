import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      title: 'Visit Us',
      value: '123 Fitness Blvd, Salem, MA 01970',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: 'Email Us',
      value: 'contact@repone.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      title: 'Call Us',
      value: '+91 98765 43210',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      title: 'Hours',
      value: 'Mon-Sat: 5AM - 11PM',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ]

  return (
    <Layout>
      <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808]">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rep-red/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-rep-red/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-rep-red mb-6">
              Let's Connect
            </p>
            <h1 className="text-[clamp(48px,8vw,100px)] font-black text-white tracking-tight leading-[0.95] mb-8 font-display">
              Get In <span className="text-rep-red">Touch</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Have questions? Want to tour the facility? We're here to help you start your fitness journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 font-display">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start gap-5 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-rep-red/10 border border-rep-red/20 flex items-center justify-center text-rep-red flex-shrink-0 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-wider uppercase text-white/40 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/40 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-rep-red hover:border-rep-red/30 transition-all"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 font-display">
                Send a Message
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-rep-red/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-wider">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="Your phone"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-rep-red/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-rep-red/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-rep-red/50 transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-rep-red text-white font-bold rounded-xl hover:bg-rep-red/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
