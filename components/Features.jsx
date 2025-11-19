import React from 'react'
import { MapPin, Cpu, ChefHat, PhoneCall, Camera, BarChart3 } from 'lucide-react'

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-8 rounded-2xl bg-charcoal-light/30 border border-white/5 hover:border-gold/30 hover:bg-charcoal-light/50 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-lg bg-charcoal-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
)

const Features = () => {
  const features = [
    {
      title: "Bay Area Local",
      desc: "We're based in Burlingame, not an overseas call center. We visit your restaurant, understand your vibe, and build your AI to match your brand's DNA.",
      icon: <MapPin className="w-6 h-6 text-cabernet-light" />
    },
    {
      title: "24/7 AI Phone Agent",
      desc: "Never miss a reservation or catering order again. Our AI handles calls, takes bookings, and answers FAQs instantly, even during the dinner rush.",
      icon: <PhoneCall className="w-6 h-6 text-gold" />
    },
    {
      title: "Restaurant DNA",
      desc: "Founded by hospitality veterans who know that during a rush, tech must simply work. No complex dashboards, just results.",
      icon: <ChefHat className="w-6 h-6 text-white" />
    },
    {
      title: "Smart Social Growth",
      desc: "We automate your social media presence with high-quality content and engagement strategies that turn followers into diners.",
      icon: <Camera className="w-6 h-6 text-gold-light" />
    },
    {
      title: "Automated Marketing",
      desc: "Turn one-time guests into regulars. Our system automatically sends birthday offers, event invites, and re-engagement campaigns via SMS/Email.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Real-Time ROI Data",
      desc: "Track every dollar generated. See exactly how many covers, orders, and calls our AI engine managed for you in a simple weekly report.",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    }
  ]

  return (
    <section id="features" className="py-24 bg-charcoal-dark relative">
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-cabernet/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Bay Area Restaurants <span className="text-gold">Trust Us</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We combine local hospitality expertise with Silicon Valley AI technology to build an engine that runs your marketing on autopilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
