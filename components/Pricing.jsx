"use client"
import React, { useState, useMemo } from 'react'
import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'

// Pricing data exactly as provided by the user
const tiersData = [
  {
    id: 'tier1',
    title: 'Digital Foundation & Defense',
    color: 'green',
    standardPrice: 597,
    setup: 1000,
    tagline: 'We ensure you exist everywhere and never break.',
    features: [
      'AI Customer Experience (Basic phone, SMS, Email)',
      'Interactive AI Menu (Basic QR, Recommendations, Filters)',
      'Business Analytics (Monthly report, Insights)',
      'Digital Infrastructure (CRM, Database)',
      'Website Rebranding & Updating (Website redesign, mobile optimization, content refresh)',
      'GEO for Business (Local SEO, Google Maps optimization, listings management)'
    ]
  },
  {
    id: 'tier2',
    title: 'Growth Engine & Marketing',
    subtitle: 'Recommended',
    color: 'blue',
    standardPrice: 1497,
    setup: 2000,
    tagline: 'We build your customer database and drive repeat sales.',
    features: [
      'Everything in Digital Foundation & Defense, PLUS:',
      'Advanced AI Customer Experience (Unlimited phone, SMS, Social)',
      'Professional Interactive AI Menu (Chatbot, Upsell, Multi-language)',
      'Social Media Management (Pro: 16 posts, Reels, Content)',
      'Pro Business Analytics (Bi-weekly dashboards, Forecasting)',
      'Operations Tools (Reminders, Staff tools)',
      'Priority Support (Bi-weekly calls, Priority)'
    ]
  },
  {
    id: 'tier3',
    title: 'The Fractional COO / Partner',
    color: 'red',
    standardPrice: 3497,
    setup: 5000,
    tagline: 'We analyze your business and crush the competition.',
    features: [
      'Everything in Growth Engine & Marketing, PLUS:',
      'Enterprise AI Customer Experience (Custom voice, Predictive)',
      'Enterprise Interactive AI Menu (Custom assistant, Inventory sync, Advanced upselling)',
      'Social Media Dominance (24 posts, Video, Influencers, Ads)',
      'Enterprise Business Analytics (Weekly, Custom dashboard, Modeling)',
      'Enterprise Operations (Multi-location, Custom workflow automation)',
      'VIP Support (24/7, Dedicated manager, In-person)'
    ]
  }
]

const colorMap = {
  green: 'text-green-700 bg-green-50 border-green-200',
  blue: 'text-blue-700 bg-blue-50 border-blue-200',
  red: 'text-red-700 bg-red-50 border-red-200'
}

const PricingCard = ({ tier, mode, isFeatured }) => {
  const standard = tier.standardPrice
  const setup = tier.setup
  const isMulti = mode === 'multi'
  const spoke = Math.round(standard * 0.4)

  return (
    <div className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-transform duration-300 h-full ${isFeatured ? 'scale-105 shadow-2xl z-10 border-gold' : 'bg-white/5'} ${isFeatured ? '' : ''}`}>
      {tier.subtitle && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/90 text-sm font-bold px-3 py-1 rounded-full shadow">{tier.subtitle}</div>
      )}

      <div className="mb-6 text-center">
        <h3 className={`text-xl font-bold mb-2 ${tier.color === 'green' ? 'text-green-700' : tier.color === 'blue' ? 'text-blue-700' : 'text-red-700'}`}>{tier.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{tier.tagline}</p>

        <div className="flex items-baseline justify-center gap-3">
          {isMulti ? (
            <>
              <span className="text-3xl md:text-4xl font-extrabold">${spoke}</span>
              <span className="text-sm text-gray-500">/ per add-on location</span>
            </>
          ) : (
            <>
              <span className="text-3xl md:text-4xl font-extrabold">${standard}</span>
              <span className="text-sm text-gray-500">/mo</span>
            </>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-2">+ ${setup} One-Time Setup Fee</p>
        {isMulti && <p className="text-xs text-gray-500 mt-2 italic">*1st Location (Hub) pays standard price.</p>}
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {tier.features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${isFeatured ? 'bg-gold/10' : 'bg-gray-200'}`}>
              <Check className={`w-4 h-4 ${isFeatured ? 'text-gold' : 'text-gray-600'}`} />
            </div>
            <span className="text-sm leading-tight text-gray-700">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {isMulti && (
          <div className="inline-block mb-3 px-3 py-1 text-xs font-bold bg-yellow-100 text-yellow-800 rounded">SAVE 60%</div>
        )}
        <Button href="#contact" className={`w-full ${isFeatured ? 'bg-charcoal-dark text-white' : 'bg-gold text-charcoal-dark'}`}>
          Get Started
        </Button>
      </div>
    </div>
  )
}

const Pricing = () => {
  const [mode, setMode] = useState('single') // 'single' | 'multi'

  const tiers = useMemo(() => tiersData, [])

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h2 className="text-4xl font-bold text-charcoal-dark mb-2">Official Pricing & <span className="text-cabernet">Tier Breakdown</span></h2>
          <p className="text-gray-600">Choose the engine size that fits your restaurant.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="mb-3 text-sm text-gray-600">Toggle Locations to view Hub & Spoke pricing</div>
            <div className="flex items-center gap-4">
              <span className={`text-sm ${mode === 'single' ? 'font-bold text-charcoal-dark' : 'text-gray-500'}`}>Single Location</span>
              <button
                onClick={() => setMode(prev => prev === 'single' ? 'multi' : 'single')}
                aria-pressed={mode === 'multi'}
                className={`relative w-20 h-10 rounded-full transition-colors ${mode === 'multi' ? 'bg-charcoal-dark' : 'bg-gray-200'}`}
                aria-label="Toggle pricing mode"
              >
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow`}
                  style={{ transform: mode === 'multi' ? 'translateX(40px)' : 'translateX(0px)' }}
                />
              </button>
              <span className={`text-sm ${mode === 'multi' ? 'font-bold text-charcoal-dark' : 'text-gray-500'}`}>Multi-Location Group</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">When Multi-Location is ON, prices show per add-on location (Hub pays standard price)</div>
          </div>
        </div>

        <div className="grid gap-8 max-w-7xl mx-auto items-start md:grid-cols-3">
          {tiers.map((t, i) => (
            <PricingCard key={t.id} tier={t} mode={mode} isFeatured={t.id === 'tier2'} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">60% Multi-Location discount applies to additional locations operating under the same brand name and menu structure.</p>
      </div>
    </section>
  )
}

export default Pricing
