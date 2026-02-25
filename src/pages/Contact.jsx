import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-black text-white mb-6">Get In Touch</h1>
            <p className="text-white/70 mb-8">
              Have questions? Want to tour the facility? Reach out to us.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                <p className="text-white/60">123 Fitness Blvd, Salem, MA 01970</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <p className="text-white/60">contact@repone.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                <p className="text-white/60">(555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
            <input type="text" placeholder="Name" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#ff3d00]" />
            <input type="email" placeholder="Email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#ff3d00]" />
            <textarea placeholder="Message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#ff3d00]" />
            <button type="submit" className="w-full py-3 bg-[#ff3d00] text-white font-bold rounded-lg hover:bg-[#ff3d00]/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
