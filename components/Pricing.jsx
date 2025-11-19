import React from 'react'
import { Check } from 'lucide-react'

const PricingCard = ({ tier, price, setup, features, isPopular }) => (
  <div className={`relative flex flex-col p-8 rounded-2xl border ${isPopular ? 'border-gold bg-white shadow-2xl scale-105 z-10' : 'border-gray-200 bg-gray-50 text-charcoal'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal-dark text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
        Most Popular
      </div>
    )}

    <div className="mb-6">
      <h3 className="text-lg font-bold text-charcoal uppercase tracking-wider mb-2">{tier}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight">${price}</span>
        <span className="text-gray-500 ml-1">/mo</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">+ ${setup} one-time setup</p>
    </div>

    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className={`w-5 h-5 shrink-0 ${isPopular ? 'text-green-600' : 'text-gray-400'}`} />
          <span className="text-sm text-gray-700 leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-lg font-bold transition-all ${
      isPopular 
        ? 'bg-cabernet hover:bg-cabernet-light text-white shadow-lg' 
        : 'bg-charcoal hover:bg-charcoal-light text-white'
    }`}>
      {isPopular ? 'Scale with Growth' : `Start with ${tier.split(' ')[0]}`}
    </button>
  </div>
)

const Pricing = () => {
  const tiers = [
    {
      tier: "Starter Essentials",
      price: "397",
      setup: "750",
      features: [
        "100 AI-Handled Calls/mo",
        "1,000 SMS Messages",
        "Basic Interactive QR Menu",
        "8 Social Posts/mo",
        "Monthly Performance Report",
        "Email Support"
      ],
      isPopular: false
    },
    {
      tier: "Growth Accelerator",
      price: "797",
      setup: "1,497",
      features: [
        "UNLIMITED AI Phone Calls",
        "3,000 SMS Messages",
        "Pro AI Menu (Smart Upsells)",
        "16 Social Posts + Reels",
        "Bi-Weekly Reports",
        "Online Ordering Integration",
        "Priority Support"
      ],
      isPopular: true
    },
    {
      tier: "Premium Domination",
      price: "1,497",
      setup: "2,997",
      features: [
        "Everything in Growth",
        "Custom Branded AI Voice",
        "Enterprise Menu + A/B Testing",
        "24 Posts + Monthly Photo Shoot",
        "Weekly Strategy Calls",
        "Multi-Location Dashboard",
        "24/7 Dedicated Support"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-charcoal-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">
            Choose the engine size that fits your restaurant. Upgrade or downgrade anytime as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((t, i) => <PricingCard key={i} {...t} />)}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12 max-w-2xl mx-auto">
          *Transparency Note: Our fees cover agency management, strategy, and AI training. Direct usage fees (e.g. Twilio telephony costs) are billed directly to you at cost to ensure transparency.
        </p>
      </div>
    </section>
  )
}

export default Pricing
