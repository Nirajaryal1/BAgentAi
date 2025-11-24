'use client'
import React from 'react'
import { MapPin, Cpu, ChefHat, PhoneCall, Camera, BarChart3, Monitor, Globe, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const FeatureCard = ({ title, desc, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-8 rounded-2xl bg-charcoal-light/30 border border-white/5 hover:border-gold/30 hover:bg-charcoal-light/50 transition-all duration-300 group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-xl bg-charcoal-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-lg group-hover:shadow-gold/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </motion.div>
)

const Features = () => {
  const features = [
    {
      title: "Website Rebranding & Updates",
      desc: "Full website redesign and ongoing updates — menus and photos, so your online presence matches the in-restaurant experience.",
      icon: <Monitor className="w-7 h-7 text-cabernet-light" />
    },
    {
      title: "GEO for Businesses",
      desc: "Local SEO, Google Maps optimization, and AI listing management to drive nearby searches, increase reservations, and boost local discoverability.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Interactive AI Menu",
      desc: "A conversational menu assistant that recommends dishes, handles dietary filters, and intelligently upsells to increase average order value.",
      icon: <Menu className="w-7 h-7 text-blue-400" />
    },
    {
      title: "Bay Area Local",
      desc: "We're based in Burlingame, not an overseas call center. We visit your restaurant, understand your vibe, and build your AI to match your brand's DNA.",
      icon: <MapPin className="w-7 h-7 text-cabernet-light" />
    },
    {
      title: "24/7 AI Phone Agent",
      desc: "Never miss a reservation or catering order again. Our AI handles calls, takes bookings, and answers FAQs instantly, even during the dinner rush.",
      icon: <PhoneCall className="w-7 h-7 text-gold" />
    },
    {
      title: "Restaurant DNA",
      desc: "Founded by hospitality veterans who know that during a rush, tech must simply work. No complex dashboards, just results.",
      icon: <ChefHat className="w-7 h-7 text-white" />
    },
    {
      title: "Smart Social Growth",
      desc: "We automate your social media presence with high-quality content and engagement strategies that turn followers into diners.",
      icon: <Camera className="w-7 h-7 text-gold-light" />
    },
    {
      title: "Automated Marketing",
      desc: "Turn one-time guests into regulars. Our system automatically sends birthday offers, event invites, and re-engagement campaigns via SMS/Email.",
      icon: <Cpu className="w-7 h-7 text-blue-400" />
    },
    {
      title: "Real-Time ROI Data",
      desc: "Track every dollar generated. See exactly how many covers, orders, and calls our AI engine managed for you in a simple weekly report.",
      icon: <BarChart3 className="w-7 h-7 text-green-400" />
    }
  ]

  return (
    <section id="features" className="py-32 bg-charcoal-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-cabernet/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why Bay Area Restaurants <span className="text-gold">Trust Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We combine local hospitality expertise with Silicon Valley AI technology to build an engine that runs your marketing on autopilot.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
