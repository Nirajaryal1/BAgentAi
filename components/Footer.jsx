'use client'
import React from 'react'
import Button from './Button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6">
              BAgent<span className="text-gold">Ai</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md">
              The premier AI automation agency built specifically for Bay Area restaurateurs. 
              We blend high-tech efficiency with high-touch hospitality.
            </p>
            {/* Social handles removed per request */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-gold">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Login</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>1215 Bayswater Avenue,<br/>Burlingame, California</li>
              <li><a href="mailto:hello@bagent.ai" className="hover:text-white">hello@bagent.ai</a></li>
              <li><a href="tel:+16506198773" className="hover:text-white">(650) 619-8773</a></li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-cabernet-dark to-cabernet p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12 shadow-2xl shadow-cabernet/20"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">Ready to recapture revenue?</h4>
            <p className="text-white/80">Book your audit today. Spots for this month are limited.</p>
          </div>
          <Button
            href="#pricing"
            variant="primary"
            className="relative inline-flex items-center gap-3 whitespace-nowrap bg-white text-cabernet hover:bg-gray-100 py-4 px-6 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.45)]"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-4 h-4 text-cabernet relative z-10" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 pointer-events-none" />
          </Button>
        </motion.div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 BAgentAi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
