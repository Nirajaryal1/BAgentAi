"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-charcoal-dark text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-[#1a1a1a] to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-[url('/restaurant-bg.svg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>
      
      {/* Floating Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-cabernet/30 rounded-full blur-[128px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[128px] pointer-events-none z-0"
      />

      <div className="relative z-20 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gold-light px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-gold/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Accepting New Bay Area Clients
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          Your Restaurant, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-light drop-shadow-sm">
            Supercharged by AI
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          AI answers your calls, recommends the best items, posts your content, and analyzes your business — while you focus on serving great food.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center w-full md:w-auto"
        >
          <Button
            href="#pricing"
            variant="primary"
            className="relative inline-flex items-center gap-3 bg-gold text-charcoal-dark font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] overflow-hidden"
          >
            <span className="sr-only">Get Started</span>
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/30 via-gold/10 to-transparent opacity-60 pointer-events-none" />
          </Button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-sm text-gray-500 font-medium uppercase tracking-widest flex items-center gap-4"
        >
          <span className="h-px w-8 bg-gray-700"></span>
          Built for Bay Area Restaurants by a Hospitality Veteran
          <span className="h-px w-8 bg-gray-700"></span>
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
