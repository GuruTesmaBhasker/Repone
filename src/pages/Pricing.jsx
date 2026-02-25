import Layout from '../components/Layout'

export default function Pricing() {
  const plans = [
    {
      name: 'Essential',
      price: '$49',
      features: ['Access to gym floor', 'Locker access', 'Free Wi-Fi'],
    },
    {
      name: 'Pro',
      price: '$89',
      features: ['Everything in Essential', 'Group classes', '1 PT session/month', 'Sauna access'],
      featured: true,
    },
    {
      name: 'Elite',
      price: '$149',
      features: ['Everything in Pro', 'Unlimited PT sessions', 'Nutrition planning', 'Priority support'],
    },
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-white mb-12 text-center">Membership Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-2xl border ${plan.featured ? 'border-[#ff3d00] bg-[#ff3d00]/10' : 'border-white/10 bg-white/5'}`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-6">{plan.price}<span className="text-lg font-normal text-white/60">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-[#ff3d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.featured ? 'bg-[#ff3d00] text-white hover:bg-[#ff3d00]/90' : 'bg-white text-black hover:bg-gray-200'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
