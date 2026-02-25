import Layout from '../components/Layout'

export default function Trainers() {
  const trainers = [
    { name: 'Sarah Connor', role: 'Head Coach', expert: 'Strength & Conditioning' },
    { name: 'Marcus Fenix', role: 'Personal Trainer', expert: 'Hypertrophy' },
    { name: 'Lara Croft', role: 'Yoga Instructor', expert: 'Flexibility & Mobility' },
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-white mb-12 text-center">Meet Our Trainers</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold">{trainer.name}</h3>
                <p className="text-[#ff3d00] font-medium mb-1">{trainer.role}</p>
                <p className="text-sm text-white/60">{trainer.expert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
