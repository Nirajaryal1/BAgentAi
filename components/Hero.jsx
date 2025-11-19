import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-charcoal-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/90 to-charcoal-dark/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('/restaurant-bg.svg')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-20 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-cabernet/20 border border-cabernet text-gold-light px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Accepting New Bay Area Clients
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Your Restaurant, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">Supercharged by AI</span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          AI answers your calls, recommends the best items, posts your content, and analyzes your business — while you focus on serving great food.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button className="bg-gold hover:bg-gold-hover text-charcoal-dark font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-gold/20">
            Book Free AI Revenue Audit
          </button>
          <button className="border border-gray-500 hover:border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all backdrop-blur-sm">
            ▶ Watch 2-Min Demo
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-500 font-medium uppercase tracking-widest">
          Built for Bay Area Restaurants by a Hospitality Veteran
        </p>
      </div>
    </section>
  )
}

export default Hero
