import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-white mb-6">About Us</h1>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          At REP ONE, we believe fitness is not just a destination but a way of life.
          Founded in Salem, our mission is to empower individuals through strength,
          discipline, and expert guidance. Our state-of-the-art facility is designed
          for those who want to push their limits and achieve greatness.
        </p>
        <p className="text-white/70 max-w-3xl leading-relaxed mt-4">
          Whether you are a professional athlete or just starting your journey,
          our community supports your goals with world-class equipment and passionate trainers.
        </p>
      </div>
    </Layout>
  )
}
