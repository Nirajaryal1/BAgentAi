import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">
              BAgent<span className="text-gold">Ai</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md">
              The premier AI automation agency built specifically for Bay Area restaurateurs. 
              We blend high-tech efficiency with high-touch hospitality.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal-dark transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal-dark transition-colors cursor-pointer">LI</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal-dark transition-colors cursor-pointer">TW</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>1234 Burlingame Ave,<br/>Burlingame, CA 94010</li>
              <li><a href="mailto:hello@bagent.ai" className="hover:text-white">hello@bagent.ai</a></li>
              <li>(650) 555-0123</li>
            </ul>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-gradient-to-r from-cabernet-dark to-cabernet p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h4 className="text-2xl font-bold mb-2">Ready to recapture revenue?</h4>
            <p className="text-white/80">Book your audit today. Spots for this month are limited.</p>
          </div>
          <Button variant="primary" className="whitespace-nowrap">
            Book Free Audit
          </Button>
        </div>

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
